import React, { createContext, useState, useContext } from "react";
import "./App.css";

// Create Context
const GlobalContext = createContext();

// Provider Component
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");
  const [theme, setTheme] = useState("light");

  // List of users
  const users = ["Guest", "John Doe", "Alice", "Michael", "Emma"];

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <GlobalContext.Provider
      value={{ user, setUser, theme, toggleTheme, users }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Dashboard Component
const Dashboard = () => {
  const { user, setUser, theme, toggleTheme, users } =
    useContext(GlobalContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Welcome, {user}</h1>

      {/* User Dropdown */}
      <select
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      >
        {users.map((u, index) => (
          <option key={index} value={u}>
            {u}
          </option>
        ))}
      </select>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main App
function App() {
  return (
    <GlobalProvider>
      <Dashboard />
    </GlobalProvider>
  );
}

export default App;
