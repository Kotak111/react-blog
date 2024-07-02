import { Route, Router, BrowserRouter as Routers, Routes } from "react-router-dom"
import Header from "./Component/layout/Header"
import Footer from "./Component/layout/Footer"
import Home from "./Component/Subjects/Home"
import About from "./Component/Subjects/About"
import Contact from "./Component/Subjects/Contact"
import AllBlogs from "./Component/Blogs/AllBlogs"
import Bakers from "./Component/Blogs/Bakers"
import Company from "./Component/Blogs/Company"
import PizaaShopes from "./Component/Blogs/PizaaShopes"
import TeaStall from "./Component/Blogs/TeaStall"
import Login from "./Component/Subjects/Login"
import Register from "./Component/Subjects/Register"
import NewHeader from "./Component/layout/NewHeader"
import Logout from "./Component/Subjects/Logout"
import SingleCatagoryShow from "./Component/Blogs/SingleCatagoryShow"
function App() {
 
  return (
    <>
      <Routers>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/all" element={<AllBlogs/>}></Route>
          <Route path="/bakers" element={<Bakers/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/shopes" element={<PizaaShopes/>}></Route>
          <Route path="/tea" element={<TeaStall/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/regi" element={<Register/>}></Route>
          <Route path="/new" element={<NewHeader/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/singlecat/:id" element={<SingleCatagoryShow/>}></Route>
        </Routes>
        <Footer/>
      </Routers>
    </>
  )
}

export default App
