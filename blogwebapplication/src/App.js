import React from 'react';
import './App.css';
import CreatePost from './Components/CreatePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register'
import { UserContextProvider } from "./UserContext";
import IndexPage from './Components/IndexPage';
import Layout from './Components/Layout';
import EditPost from './Components/EditPost';
import PostPage from './Components/PostPage';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
