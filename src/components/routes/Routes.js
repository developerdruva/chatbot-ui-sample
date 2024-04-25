import Login from "../authentication/login/Login";
import RegForm from "../authentication/registration/RegForm";
import NavbarHeader from "../main/NavbarHeader";
import WelcomePage from "../main/WelcomePage";
import TodosMainpage from "../todosProject/TodosMainpage";

export const CustomRoutes = [
    {
        path: '/',
        element: <WelcomePage />,
    },
    {
        path: '/todos',
        element: <TodosMainpage />
    },
    {
        path: '/register',
        element: <RegForm />
    }
]