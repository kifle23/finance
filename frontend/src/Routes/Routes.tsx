import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";

export const routes = createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", 
                element: <HomePage />
                
            },
            {
                path: "/SearchPage", 
                element: <SearchPage />
                
            },
            {
                path: "/CompanyPage:ticker", 
                element: <CompanyPage />
                
            },
        ]
    }]);
