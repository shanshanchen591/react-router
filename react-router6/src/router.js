import { createHashRouter } from "react-router-dom"
import App from "./App";
import Dashboard from "./pages/Dashboard";
import SystemConfig from "./pages/SystemConfig";
import User from "./pages/User";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/system",
                element: <SystemConfig />,
                children: [
                    {
                        path: "/system/user",
                        element: <User />,
                    }
                ]
            }
        ]
    },
]);
export default router;