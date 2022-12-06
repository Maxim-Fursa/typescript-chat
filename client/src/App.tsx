import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { privateRotues, publicRoutes, RouteNames } from './router'
import { login } from './store/authSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const auth = useAppSelector(store => store.authentication.isAuth) 

	React.useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('auth') || '{}')
		if (storage?.isAuth) {
			dispatch(login(storage?.email))
		}
	}, [])

	return (
		auth ?
			<Routes>
				{privateRotues.map(route => 
					<Route 
						path={route.path} 
						element={<route.element/>} 
						key={route.path}
					/>
				)}
				<Route path="*" element={<Navigate to={RouteNames.CHAT} replace />} />
			</Routes>
		:
			<Routes>
				{publicRoutes.map(route => 
					<Route 
						path={route.path} 
						element={<route.element/>} 
						key={route.path}
					/>
				)}
				<Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
			</Routes>
	)
}

export default App
