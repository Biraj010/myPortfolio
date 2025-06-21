import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout"
import Home from "../pages/index"
const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouter;