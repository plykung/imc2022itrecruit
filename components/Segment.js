import { Button, Card, Collapse, Container, ListGroup, Row, Col } from "react-bootstrap";
import EachPosition from "./EachPosition";

function Segment({ data }) {

    return (
        <Container className="p-3">
            <h3 className="">ฝ่าย {data.compartmentName}</h3>

            <Card className="mt-3">
                {data.compartmentRole.map((eachPosition, index) => <EachPosition data={eachPosition} index={index} key={`pos-${index + 1}`} />)}

            </Card>



        </Container >
    );
}

export default Segment;