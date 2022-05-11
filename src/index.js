import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Register } from './routes/register/Register';
import { Login } from './routes/login/Login';
import { Navbar } from './components/navbar/Navbar';
import { Dashboard } from './routes/dashboard/Dashboard';
import { AuthProvider } from './contexs/AuthProvider';
import { ErrorProvider } from './contexs/ErrorProvider';
import { Sidebar } from './components/sidebar/Sidebar';
import { Create } from './routes/create/Create';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ErrorProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </ErrorProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
