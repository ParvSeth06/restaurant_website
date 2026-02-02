# Quality Fast Food - Mumbai Street Food Ordering System

A complete full-stack food ordering website for a Mumbai-based street food shop. Built with React + TypeScript frontend and FastAPI Python backend.

![Quality Fast Food](https://img.shields.io/badge/Quality-Fast%20Food-orange)
![React](https://img.shields.io/badge/React-18.2-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## Features

- **Mobile-first responsive design**
- **Clean modern UI** with Tailwind CSS
- **Full cart functionality** - Add, remove, update quantities
- **Indian phone number validation**
- **Order tracking** with unique order IDs
- **Real-time price calculation**
- **Free delivery** on orders above ₹200

## Menu Categories

- Vada Pav (4 items)
- Pav Bhaji (4 items)
- Sandwiches (4 items)
- Chinese (5 items)
- Beverages (5 items)

## Tech Stack

### Frontend
- React 18.2
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router DOM
- Lucide React icons

### Backend
- FastAPI (Python)
- SQLAlchemy ORM
- SQLite Database
- Pydantic validation
- CORS enabled

## Project Structure

```
quality-fast-food/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── context/         # Cart context
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── types/           # TypeScript types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # FastAPI + SQLite
│   ├── main.py              # Main FastAPI app
│   ├── models.py            # Database models
│   ├── schemas.py           # Pydantic schemas
│   ├── database.py          # Database config
│   ├── menu_data.py         # Menu items data
│   ├── requirements.txt
│   └── Procfile             # For deployment
│
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/menu` | Get complete menu |
| POST | `/order` | Create new order |
| GET | `/orders/{id}` | Get order by ID |

## Local Development

### Prerequisites
- Node.js 18+
- Python 3.11+
- npm or yarn

### Step 1: Clone and Setup

```bash
git clone <repository-url>
cd quality-fast-food
```

### Step 2: Start Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

Backend will be running at `http://localhost:8000`

API Documentation: `http://localhost:8000/docs`

### Step 3: Start Frontend

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

Frontend will be running at `http://localhost:5173`

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Environment**: Python 3.11
4. Deploy!

### Backend Deployment (Railway)

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add a Python service
4. Deploy automatically!

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Vercel, Netlify, or any static hosting

3. Set environment variable:
```
VITE_API_URL=https://your-backend-url.com
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000  # Local development
# VITE_API_URL=https://your-api.com  # Production
```

### Backend
```
DATABASE_URL=sqlite:///./quality_fast_food.db  # Default
```

## Order Flow

1. **Browse Menu** → View all categories and items
2. **Add to Cart** → Select quantity and add items
3. **View Cart** → Review items, update quantities
4. **Checkout** → Enter delivery details
5. **Order Confirmed** → Get unique order ID

## Validation Rules

- **Name**: Minimum 2 characters, letters only
- **Phone**: Valid 10-digit Indian mobile number (6-9 starting digit)
- **Address**: Minimum 10 characters
- **Quantity**: 1-20 items per product

## Sample Order ID Format

```
QFF-12345678
```

## Screenshots

*Coming soon...*

## License

MIT License - feel free to use for your own projects!

## Support

For issues or questions, please contact:
- Phone: +91 98765 43210
- Location: Mumbai, India

---

Made with ❤️ for Mumbai street food lovers!
