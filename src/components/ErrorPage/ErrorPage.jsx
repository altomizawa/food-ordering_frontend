import { useRouteError, Link } from "react-router-dom"

export default function ErrorPage() {
    console.error('PAGE NOT FOUND');
    const error = {
        statusText: '404 - PAGE NOT FOUND',
    }

    return(
        <div id="error-page">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText}</i>
            </p>
            <Link to='/'><button>Take me back Home, please!</button></Link>
        </div>
    );
}