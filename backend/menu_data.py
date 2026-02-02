"""
Menu data for Quality Fast Food - Mumbai Street Food
All prices in INR (₹)
"""

MENU_CATEGORIES = [
    {
        "category": "Vada Pav",
        "items": [
            {
                "id": 1,
                "name": "Classic Vada Pav",
                "description": "Mumbai's favorite - crispy potato vada in soft pav with chutneys",
                "price": 25,
                "category": "Vada Pav",
                "image": "vada-pav.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 2,
                "name": "Cheese Vada Pav",
                "description": "Classic vada pav loaded with melted cheese",
                "price": 40,
                "category": "Vada Pav",
                "image": "cheese-vada-pav.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 3,
                "name": "Schezwan Vada Pav",
                "description": "Spicy Schezwan sauce with crispy vada",
                "price": 35,
                "category": "Vada Pav",
                "image": "schezwan-vada-pav.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 4,
                "name": "Masala Vada Pav",
                "description": "Extra masala and garlic chutney for spice lovers",
                "price": 30,
                "category": "Vada Pav",
                "image": "masala-vada-pav.jpg",
                "is_veg": True,
                "is_bestseller": False
            }
        ]
    },
    {
        "category": "Pav Bhaji",
        "items": [
            {
                "id": 5,
                "name": "Classic Pav Bhaji",
                "description": "Buttery pav with spicy mashed vegetable bhaji",
                "price": 60,
                "category": "Pav Bhaji",
                "image": "pav-bhaji.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 6,
                "name": "Cheese Pav Bhaji",
                "description": "Pav bhaji topped with generous cheese",
                "price": 80,
                "category": "Pav Bhaji",
                "image": "cheese-pav-bhaji.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 7,
                "name": "Jain Pav Bhaji",
                "description": "No onion, no garlic pav bhaji for Jain customers",
                "price": 70,
                "category": "Pav Bhaji",
                "image": "jain-pav-bhaji.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 8,
                "name": "Extra Butter Pav Bhaji",
                "description": "Double butter pav bhaji for butter lovers",
                "price": 75,
                "category": "Pav Bhaji",
                "image": "butter-pav-bhaji.jpg",
                "is_veg": True,
                "is_bestseller": False
            }
        ]
    },
    {
        "category": "Sandwiches",
        "items": [
            {
                "id": 9,
                "name": "Veg Grilled Sandwich",
                "description": "Fresh vegetables with cheese, grilled to perfection",
                "price": 50,
                "category": "Sandwiches",
                "image": "veg-sandwich.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 10,
                "name": "Club Sandwich",
                "description": "Triple layer sandwich with veggies and sauces",
                "price": 70,
                "category": "Sandwiches",
                "image": "club-sandwich.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 11,
                "name": "Paneer Tikka Sandwich",
                "description": "Grilled paneer tikka with mint chutney",
                "price": 80,
                "category": "Sandwiches",
                "image": "paneer-sandwich.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 12,
                "name": "Bombay Masala Sandwich",
                "description": "Classic Mumbai style masala sandwich",
                "price": 45,
                "category": "Sandwiches",
                "image": "bombay-sandwich.jpg",
                "is_veg": True,
                "is_bestseller": False
            }
        ]
    },
    {
        "category": "Chinese",
        "items": [
            {
                "id": 13,
                "name": "Veg Manchurian",
                "description": "Crispy vegetable balls in spicy Manchurian sauce",
                "price": 90,
                "category": "Chinese",
                "image": "manchurian.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 14,
                "name": "Hakka Noodles",
                "description": "Stir-fried noodles with vegetables and sauces",
                "price": 70,
                "category": "Chinese",
                "image": "hakka-noodles.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 15,
                "name": "Schezwan Fried Rice",
                "description": "Spicy Schezwan rice with mixed vegetables",
                "price": 80,
                "category": "Chinese",
                "image": "schezwan-rice.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 16,
                "name": "Chilli Paneer",
                "description": "Indo-Chinese style chilli paneer dry",
                "price": 120,
                "category": "Chinese",
                "image": "chilli-paneer.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 17,
                "name": "Spring Rolls",
                "description": "Crispy vegetable spring rolls (6 pieces)",
                "price": 60,
                "category": "Chinese",
                "image": "spring-rolls.jpg",
                "is_veg": True,
                "is_bestseller": False
            }
        ]
    },
    {
        "category": "Beverages",
        "items": [
            {
                "id": 18,
                "name": "Masala Chai",
                "description": "Authentic Mumbai cutting chai with masala",
                "price": 15,
                "category": "Beverages",
                "image": "masala-chai.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 19,
                "name": "Cold Coffee",
                "description": "Refreshing cold coffee with ice cream",
                "price": 50,
                "category": "Beverages",
                "image": "cold-coffee.jpg",
                "is_veg": True,
                "is_bestseller": True
            },
            {
                "id": 20,
                "name": "Fresh Lime Soda",
                "description": "Sweet or salted lime soda - perfect refreshment",
                "price": 30,
                "category": "Beverages",
                "image": "lime-soda.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 21,
                "name": "Mango Lassi",
                "description": "Thick and creamy mango lassi",
                "price": 45,
                "category": "Beverages",
                "image": "mango-lassi.jpg",
                "is_veg": True,
                "is_bestseller": False
            },
            {
                "id": 22,
                "name": "Cold Drink",
                "description": "Chilled soft drinks (Coke, Pepsi, Sprite)",
                "price": 25,
                "category": "Beverages",
                "image": "cold-drink.jpg",
                "is_veg": True,
                "is_bestseller": False
            }
        ]
    }
]

def get_menu():
    """Return complete menu"""
    return {"categories": MENU_CATEGORIES}

def get_item_by_id(item_id: int):
    """Get menu item by ID"""
    for category in MENU_CATEGORIES:
        for item in category["items"]:
            if item["id"] == item_id:
                return item
    return None

def get_items_by_category(category_name: str):
    """Get all items in a category"""
    for category in MENU_CATEGORIES:
        if category["category"].lower() == category_name.lower():
            return category["items"]
    return []
