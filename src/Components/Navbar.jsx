import {Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-4 flex gap-5 mx-[6.7rem]">
        <NavLink className="text-[2rem] font-semibold " to={"/"}>BEYOUNG</NavLink>    
        <NavLink className="text-[2rem] font-thin text-[1.4rem]" to={"/about"}>About</NavLink>    
        <NavLink className="text-[2rem] font-thin text-[1.4rem]" to={"/services"}>Services</NavLink>    
    </div>
  )
}

export default Navbar