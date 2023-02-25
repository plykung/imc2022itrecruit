import { Spinner } from "react-bootstrap";

export default function CustomLoader() {
    return (<>
        <Spinner animation="border" variant="primary" role="status" className="m-4 noprint">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </>)
}