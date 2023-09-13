import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9100',
      light: '#ffab40',
      dark: '#f57c00',
      contrastText: '#7b19ff',
    },
    secondary: {
      main: '#7b19ff',
      light: '#ba8aff',
      dark: '#6620c5',
    },
    text: {
      primary: '#757575',
      secondary: '#9e9e9e',
      hint: '#ffb74d',
      disabled: '#bdbdbd',
    },
    error: {
      main: '#d50000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#a4a4a4',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#0073b3',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#5109b3',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
