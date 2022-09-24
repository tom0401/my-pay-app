import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import RootRouter from './router'
import rootStore from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={rootStore}>
        <RootRouter/>
    </Provider>
)
