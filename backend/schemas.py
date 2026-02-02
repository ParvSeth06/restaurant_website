from pydantic import BaseModel, Field, validator
from typing import List, Optional
from datetime import datetime
import re

# Menu Item Schema
class MenuItem(BaseModel):
    id: int
    name: str
    description: str
    price: float
    category: str
    image: Optional[str] = None
    is_veg: bool = True
    is_bestseller: bool = False
    
    class Config:
        from_attributes = True

class MenuCategory(BaseModel):
    category: str
    items: List[MenuItem]

class MenuResponse(BaseModel):
    categories: List[MenuCategory]

# Cart Item Schema
class CartItem(BaseModel):
    item_id: int
    name: str
    category: str
    price: float
    quantity: int = Field(..., ge=1, le=20)
    
    @validator('quantity')
    def quantity_must_be_positive(cls, v):
        if v < 1:
            raise ValueError('Quantity must be at least 1')
        if v > 20:
            raise ValueError('Maximum quantity is 20')
        return v

# Order Schemas
class OrderItemCreate(BaseModel):
    item_id: int
    name: str
    category: str
    price: float
    quantity: int

class OrderCreate(BaseModel):
    customer_name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)
    address: str = Field(..., min_length=10, max_length=500)
    items: List[OrderItemCreate]
    
    @validator('phone')
    def validate_phone(cls, v):
        """Validate Indian phone number format"""
        # Remove spaces, dashes, and +91 prefix
        cleaned = re.sub(r'[\s\-]', '', v)
        if cleaned.startswith('+91'):
            cleaned = cleaned[3:]
        elif cleaned.startswith('91') and len(cleaned) == 12:
            cleaned = cleaned[2:]
        
        # Check if it's a valid 10-digit Indian mobile number
        if not re.match(r'^[6-9]\d{9}$', cleaned):
            raise ValueError('Invalid Indian phone number. Must be 10 digits starting with 6-9')
        
        return cleaned
    
    @validator('customer_name')
    def validate_name(cls, v):
        if len(v.strip()) < 2:
            raise ValueError('Name must be at least 2 characters')
        if not re.match(r'^[a-zA-Z\s\-.]+$', v.strip()):
            raise ValueError('Name can only contain letters, spaces, hyphens and dots')
        return v.strip()
    
    @validator('address')
    def validate_address(cls, v):
        if len(v.strip()) < 10:
            raise ValueError('Address must be at least 10 characters')
        return v.strip()

class OrderItemResponse(BaseModel):
    id: int
    item_id: int
    name: str
    category: str
    price: float
    quantity: int
    
    class Config:
        from_attributes = True

class OrderResponse(BaseModel):
    id: str
    customer_name: str
    phone: str
    address: str
    total_price: float
    created_at: datetime
    status: str
    items: List[OrderItemResponse]
    
    class Config:
        from_attributes = True

class OrderSuccessResponse(BaseModel):
    success: bool
    order_id: str
    message: str
    estimated_time: str = "30-45 minutes"
