import { createBrowserRouter } from "react-router-dom";
import ApplyHere from "../Components/ApplyHere";
import PreviewInfo from "../Components/PreviewInfo";
import Success from "../Components/Success";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <ApplyHere></ApplyHere>
    },
    {
        path: '/completed',
        element : <PreviewInfo></PreviewInfo>
    },
    {
        path: '/success',
        element : <Success></Success>
    }
])