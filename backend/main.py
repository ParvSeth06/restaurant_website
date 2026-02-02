"""
Quality Fast Food - FastAPI Backend
Mumbai Street Food Ordering System
"""

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
import uvicorn

import models
import schemas
from database import engine, get_db
from menu_data import get_menu, get_item_by_id

# Create database tables
models.Base.metadata.create_all(bind=engine)

# FastAPI app initialization
app = FastAPI(
    title="Quality Fast Food API",
    description="Mumbai Street Food Ordering System API",
    version="1.0.0",
    contact={
        "name": "Quality Fast Food",
        "location": "Mumbai, India"
    }
)

# CORS middleware - Allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# Health Check Endpoint
# ============================================
@app.get("/", tags=["Health"])
def root():
    """Root endpoint - API health check"""
    return {
        "message": "Quality Fast Food API is running!",
        "location": "Mumbai, India",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health", tags=["Health"])
def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# ============================================
# Menu Endpoints
# ============================================
@app.get("/menu", response_model=schemas.MenuResponse, tags=["Menu"])
def get_menu_items():
    """
    Get complete menu with all categories
    Returns: All menu categories with items
    """
    try:
        menu = get_menu()
        return menu
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching menu: {str(e)}"
        )

@app.get("/menu/{item_id}", response_model=schemas.MenuItem, tags=["Menu"])
def get_menu_item(item_id: int):
    """
    Get specific menu item by ID
    """
    item = get_item_by_id(item_id)
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Menu item with ID {item_id} not found"
        )
    return item

# ============================================
# Order Endpoints
# ============================================
@app.post("/order", response_model=schemas.OrderSuccessResponse, status_code=status.HTTP_201_CREATED, tags=["Orders"])
def create_order(order_data: schemas.OrderCreate, db: Session = Depends(get_db)):
    """
    Create a new order
    
    - Validates customer details (name, phone, address)
    - Validates phone number format (Indian)
    - Calculates total price
    - Generates unique order ID
    """
    try:
        # Validate that all items exist in menu
        for item in order_data.items:
            menu_item = get_item_by_id(item.item_id)
            if not menu_item:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Invalid item ID: {item.item_id}"
                )
            # Verify price matches menu
            if menu_item["price"] != item.price:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Price mismatch for item {item.name}"
                )
        
        # Calculate total price
        total_price = sum(item.price * item.quantity for item in order_data.items)
        
        # Create order
        db_order = models.Order(
            customer_name=order_data.customer_name,
            phone=order_data.phone,
            address=order_data.address,
            total_price=total_price,
            status="pending"
        )
        
        db.add(db_order)
        db.flush()  # Flush to get the order ID
        
        # Create order items
        for item in order_data.items:
            db_item = models.OrderItem(
                order_id=db_order.id,
                item_id=item.item_id,
                name=item.name,
                category=item.category,
                price=item.price,
                quantity=item.quantity
            )
            db.add(db_item)
        
        db.commit()
        db.refresh(db_order)
        
        return schemas.OrderSuccessResponse(
            success=True,
            order_id=db_order.id,
            message="Order placed successfully! Your delicious food is being prepared.",
            estimated_time="30-45 minutes"
        )
        
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating order: {str(e)}"
        )

@app.get("/orders/{order_id}", response_model=schemas.OrderResponse, tags=["Orders"])
def get_order(order_id: str, db: Session = Depends(get_db)):
    """
    Get order details by order ID
    """
    order = db.query(models.Order).filter(models.Order.id == order_id).first()
    
    if not order:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Order with ID {order_id} not found"
        )
    
    return order

@app.get("/orders", response_model=List[schemas.OrderResponse], tags=["Orders"])
def get_all_orders(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Get all orders (for admin purposes)
    """
    orders = db.query(models.Order).order_by(models.Order.created_at.desc()).offset(skip).limit(limit).all()
    return orders

# ============================================
# Error Handlers
# ============================================
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return {
        "error": True,
        "status_code": exc.status_code,
        "detail": exc.detail
    }

# ============================================
# Run Server (Development)
# ============================================
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
