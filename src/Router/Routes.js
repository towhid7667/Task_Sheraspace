import { createBrowserRouter } from "react-router-dom";
import ApplyHere from "../Components/ApplyHere";
import PreviewInfo from "../Components/PreviewInfo";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <ApplyHere></ApplyHere>
    },
    {
        path: '/completed',
        element : <PreviewInfo></PreviewInfo>
    }
])