import { Route,Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Farmers from "./pages/Farmers"
import Contact from "./pages/Contact"
import About from './pages/About'
import Register from "./pages/Register"
import Login from "./pages/Login"



function App(){
  return(
    <>
      <Routes>
        <Route element ={<MainLayout/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/farmers" element = {<Farmers/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App