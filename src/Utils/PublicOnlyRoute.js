import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function PublicOnlyRoute({ component, ...props }) {
    const Component = component
    let cookie = Cookies.get();
    let hasCookie = cookie.hasOwnProperty('digi-doodle-user')
    
    return (
        <Route
            {...props}
            render={componentProps => (
                hasCookie
                    ? <Redirect to={'/lobby'} />
                    : <Component {...componentProps} />
            )}
        />
    )
}