import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import AddBook from "./pages/AddBook.Jsx";
import EditBook from "./pages/EditBook";
import DisplayBook from "./pages/DisplayBook";
import RemoveBook from "./pages/RemoveBook";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/add' element={<AddBook />} />
      <Route path='/books/info/:id' element={<DisplayBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/remove/:id' element={<RemoveBook />} />
    </Routes>
  );
};

export default App;