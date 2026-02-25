# 🎬 Movie Search App

A React-based movie search application powered by the [OMDb API](https://www.omdbapi.com/).  
Users can search for movies and view detailed information such as plot, genre, cast, ratings, and poster images.

---

## 🚀 Live Demo
[View Demo](https://your-demo-link.com) *(placeholder link)*

---

## 📸 Screenshots

### Home Page
![Home Page Screenshot](./screenshots/home.png) *(replace with actual path)*

### Movie Details Page
![Movie Details Screenshot](./screenshots/details.png) *(replace with actual path)*

---

## ✨ Features
- 🔍 Search movies by title  
- 📖 View detailed movie information (plot, genre, cast, ratings, poster)  
- 📱 Responsive UI for all devices  
- ⚡ Debounced search for better performance  
- 🧩 Clean and modular React components  
- 🚨 API error handling and loading states  

---

## 🛠 Tech Stack
- **React** (Vite / CRA)  
- **JavaScript (ES6+)**  
- **HTML5**  
- **CSS3**  
- **OMDb API**  

---

## 📂 Folder Structure 
src/
├── apis/           # API utilities (e.g., omdb.js)
├── Components/     # Reusable UI components (MovieCard, etc.)
├── Navbar/         # Navigation bar component
├── context/        # Context providers (ThemeContext)
├── hook/           # Custom hooks (useDebounce, UseMovieList)
├── Pages/          # Page-level components (Home, MovieDetails, Error)
├── Routes/         # Routing setup (MainRoutes)
├── App.jsx         # Root component
├── main.jsx        # Entry point
└── index.css       # Global styles

## ⚙️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app

2. ''' bash 
    npm install
3. ''' bash 
    npm run dev
