import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Login from '../authentication/login/Login'
import { CustomRoutes } from './Routes'

const RouterPage = () => {
    let elementRoutes = useRoutes(CustomRoutes);
    return (elementRoutes);
}

export default RouterPage