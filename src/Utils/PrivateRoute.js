import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function PrivateRoute({ component, ...props }) {
    const Component = component
    let cookie = Cookies.get();
    console.log('bad cookie', cookie);
    let hasCookie = cookie.hasOwnProperty('digi-doodle-user')
    console.log('has cookie?', hasCookie)
    return (
        <Route
            {...props}
            render={componentProps => (
                hasCookie
                    ? <Component {...componentProps} />
                    : <Redirect
                        to={{
                            pathname: '/',
                            state: { from: componentProps.location }
                        }}
                    />
            )}
        />
    )
}