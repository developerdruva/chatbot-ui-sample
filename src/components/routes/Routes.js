import React from "react";
import Login from "../authentication/login/Login";
import RegForm from "../authentication/registration/RegForm";
import NavbarHeader from "../main/NavbarHeader";
import WelcomePage from "../main/WelcomePage";
import ExampleOnUseMemo from "../samples/ExampleOnUseMemo";
import TodosMainpage from "../todosProject/TodosMainpage";
import MainComponent from "../samples/useCallbackExample/MainComponent";
const LazyBigParagraphText = React.lazy(() => import('../samples/BigParagraphText'));

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
    },
    {
        path: '/ExampleOnUseMemo',
        element: <ExampleOnUseMemo />
    },
    {
        path: '/bigparagraphtext',
        element: <React.Suspense fallback='loading.....'>
            <LazyBigParagraphText />
        </React.Suspense>
    },
    {
        path: '/usecallbackexample',
        element: <MainComponent/>
    }
]