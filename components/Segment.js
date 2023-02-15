import { Button, Card, Collapse, Container, ListGroup, Row, Col } from "react-bootstrap";
import EachPosition from "./EachPosition";
import data from "../positionData.json";

function Segment() {

    return (
        <Container className="p-3">
            <h3 className="">Roles</h3>

            <Card className="mt-3">
                {data.map((eachPosition, index) => <EachPosition data={eachPosition} index={index} key={`pos-${index + 1}`} />)}

            </Card>



        </Container >
    );
}

export default Segment;