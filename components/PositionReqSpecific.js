import { Col } from "react-bootstrap";

function PositionReqSpecific({ data }) {
    return (

        <Col md={6}>
            <b>สิ่งที่จำเป็นต้องมี (เฉพาะหน้าที่นี้)</b>
            <ul>
                {data.map((each, index) => <li key={`posspe-${index + 1}`}>{each}</li>)}

            </ul>
        </Col>
    );
}

export default PositionReqSpecific;