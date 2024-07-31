import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import NotFound from "./Components/NotFound"
import Basket from "./pages/Basket"

const Routes =()=>{
    let routeList = useRoutes([
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    index: true,
                    element:<ProductList/>
                },
                {
                    path: "/basket",
                    element: <Basket/>
                },
                {
                    path:"*",
                    element:<NotFound/>
                }

            ]
        },
        
        
    ])
    return <>{routeList}</>
}
export default Routes