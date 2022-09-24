import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App'
const Index = lazy(() => import('../pages/index'))
const Pay = lazy(() => import('../pages/pay'))
const Success = lazy(() => import('../pages/success'))

export default function RootRouter (){
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route index element={<Index/>} />
                        <Route path='/pay' element={<Pay/>} />
                        <Route path='/success' element={<Success/>} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
