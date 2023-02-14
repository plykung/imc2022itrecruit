import { Container } from "react-bootstrap";

function PositionJobDesc({ data }) {
    return (

        <Container fluid>

            <u>หน้าที่</u>:
            <ul>
                {data.map((each, index) => <li key={`jobdesc-${index + 1}`}>
                    {each}
                </li>)
                }
            </ul>

        </Container>
    );
}

export default PositionJobDesc;