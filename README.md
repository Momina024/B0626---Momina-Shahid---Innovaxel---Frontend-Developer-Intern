# 💰 Personal Expense Tracker (React SPA)

A simple and responsive **Expense Tracking Application** built using React.  
This app allows users to manage their personal expenses efficiently with full CRUD functionality and visual analytics.

---

## 🚀 Features

- ➕ Add new expenses (title, amount, category, date, notes)
- ✏️ Edit existing expenses
- ❌ Delete expenses
- 📋 View all expenses in a clean UI
- 🔍 Filter by:
  - Category
  - Start Date
  - End Date
- 📊 Visual summary using charts (Recharts)
- 💾 Data persistence using LocalStorage
- 📱 Responsive design for all screen sizes

---

## 🛠️ Tech Stack

- React (Functional Components + Hooks)
- Tailwind CSS
- Recharts (Data Visualization)
- JavaScript (ES6+)
- LocalStorage API

---

## 📁 Project Structure


src/
├── components/
│ ├── ExpenseForm.js
│ ├── ExpenseFilter.js
│ ├── ExpenseItem.js
│ ├── ExpenseList.js
│ └── Summary.js
│
├── App.js
├── index.js
├── index.css
└── App.css


---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
2. Navigate to project folder
cd expense-tracker
3. Install dependencies
npm install
4. Install chart library
npm install recharts
5. Run the project
npm start

App will run at:

http://localhost:3000
📊 Summary

The app includes a dynamic summary section that shows:

Total expenses
Category-wise breakdown
Visual bar chart representation
💡 Future Improvements (Optional)
Dark mode support
Export expenses as CSV
Pie chart visualization
User authentication (multi-user support)
📌 Author

Built as part of Innovaxel Take-Home Assessment
React Frontend Internship Project
