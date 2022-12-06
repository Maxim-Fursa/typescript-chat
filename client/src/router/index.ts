import React from 'react'
import Chat from '../pages/Chat/Chat';
import Login from '../pages/Login';

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    CHAT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login}
]

export const privateRotues: IRoute[] = [
    {path: RouteNames.CHAT, element: Chat}
]