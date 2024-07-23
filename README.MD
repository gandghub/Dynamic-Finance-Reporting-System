# Dynamic Finance Reporting System

## Overview
The Dynamic Finance Reporting System is a web application designed to streamline financial report generation and KPI tracking for enhanced decision-making.

## Features
- **Standard Financial Reports**: Generate Balance Sheet, Income Statement, and Cash Flow statements.
- **KPI Tracking**: Monitor key performance indicators to assess financial health.

## Project Structure
- `backend/`: Contains the backend code using Flask.
- `frontend/`: Contains the frontend code using React.

## Installation

### Backend
1. **Navigate to the backend directory**:
   ```sh
   cd backend
   ```
2. **Create a virtual environment and activate it**:
   ```sh
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install the required dependencies**:
   ```sh
   pip install -r requirements.txt
   ```
4. **Set up the database**:
   - Ensure you have SQLite installed or update the `DATABASE_URL` in `.env` file to your preferred database.
   - Create and apply migrations:
     ```sh
     flask db init
     flask db migrate
     flask db upgrade
     ```
5. **Run the backend server**:
   ```sh
   flask run
   ```

### Frontend
1. **Navigate to the frontend directory**:
   ```sh
   cd frontend
   ```
2. **Install the required dependencies**:
   ```sh
   npm install
   ```
3. **Start the frontend development server**:
   ```sh
   npm start
   ```

## Usage
- Access the web application at `http://localhost:3000`.
- Generate financial reports and track KPIs through the user interface.

## Endpoints

### Backend API
- **POST /api/reports**: Create a new financial report.
- **GET /api/reports**: Retrieve all financial reports.
- **GET /api/kpis**: Retrieve KPI data.

### Frontend Components
- **FinancialStatements**: Displays the list of financial reports.
- **KPIs**: Displays key performance indicators.

## Example API Requests

### Create a Report
```sh
curl -X POST http://localhost:5000/api/reports \
  -H "Content-Type: application/json" \
  -d '{"report_type": "Balance Sheet", "content": "Report Content Here"}'
```

### Retrieve Reports
```sh
curl http://localhost:5000/api/reports
```

### Retrieve KPIs
```sh
curl http://localhost:5000/api/kpis
```

## Directory Structure

```
Dynamic-Finance-Reporting-System/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   ├── migrations/
│   ├── venv/
│   ├── .env
│   ├── config.py
│   ├── requirements.txt
│   ├── run.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FinancialStatements.js
│   │   │   ├── KPIs.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
├── README.md
```

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or feedback, please feel free to contact me at hackthehacker33@gmail.com.
```
