import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import UploadData from "./UploadData.jsx";
import Books from "./Books.jsx";
import './styles/Navbar.css';

export default function MainSource(){

  return(
    <>
      {/* <Navbar/>
      <UploadData/> */}
      <Books/>
    </>
  );
}