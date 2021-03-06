import React from 'react'
import './errorBoundary.css'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: false }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="errorPage">
                    <h2 className="errorMessage">Something went wrong. Please try again later.</h2>
                    <img title="sorry something went wrong" className="errorImage" src="https://media0.giphy.com/media/12BQY6Nj4ZDAFG/giphy.gif" alt="Sorry!" />
                </div>
            );
        }
        return this.props.children
    }
}