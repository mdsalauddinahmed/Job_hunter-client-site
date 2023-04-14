import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <h2>This is Error page</h2>
            <h1>{error.message}</h1>
        </div>
    );
};

export default ErrorPage;