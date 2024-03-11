import { useRouteError, Link } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'><button>Take me back Home, please!</button></Link>
        </div>
    );
}