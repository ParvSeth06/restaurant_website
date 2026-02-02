from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime
import uuid

def generate_order_id():
    """Generate unique order ID like QFF-12345678"""
    return f"QFF-{uuid.uuid4().hex[:8].upper()}"

class Order(Base):
    __tablename__ = "orders"
    
    id = Column(String, primary_key=True, default=generate_order_id)
    customer_name = Column(String(100), nullable=False)
    phone = Column(String(15), nullable=False)
    address = Column(Text, nullable=False)
    total_price = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String(20), default="pending")  # pending, confirmed, preparing, delivered, cancelled
    
    # Relationship
    items = relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")

class OrderItem(Base):
    __tablename__ = "order_items"
    
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(String, ForeignKey("orders.id"), nullable=False)
    item_id = Column(Integer, nullable=False)
    name = Column(String(100), nullable=False)
    category = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)
    
    # Relationship
    order = relationship("Order", back_populates="items")
