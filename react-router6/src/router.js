import { createHashRouter } from "react-router-dom"
import App from "./App";
import Dashboard from "./pages/Dashboard";
import SystemConfig from "./pages/SystemConfig";
import User from "./pages/User";
import Alarm from "./pages/Alarm";
import History from "./pages/History";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                index: true,
                element: <Dashboard />,
            },{
                path: "/system",
                element: <SystemConfig />,
                children: [
                    {
                        path: "/system/user",
                        element: <User />,
                    }
                ]
            },{
                path: "/alarm",
                element: <Alarm />,
            },{
                path: "/history",
                element: <History />,
            }
        ]
    },
]);
export default router;