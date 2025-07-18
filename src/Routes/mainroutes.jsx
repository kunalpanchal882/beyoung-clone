import { Routes,Route } from "react-router-dom"
import Home from "../Components/Home"

const mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/">{Home}</Route>
        </Routes>
    </div>
  )
}

export default mainroutes