import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import AppRoutes from './components/Routes';

const App = () => {
    return (
        <div>
            <Header />
            <AppRoutes />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
