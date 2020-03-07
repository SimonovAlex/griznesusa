import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {UseRoutes} from './routes';
import 'materialize-css';

function App() {
    const routes = UseRoutes();
    return (
        <BrowserRouter>
            <div className='container'>
                {routes}
            </div>
        </BrowserRouter>
    )
}

export default App;
