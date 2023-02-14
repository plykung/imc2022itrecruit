import { Col, Row } from "react-bootstrap";
import PositionReqAll from "./PositionReqAll";
import PositionReqSpecific from "./PositionReqSpecific";

function PositionRequire({ data }) {
    return (
        <Row className="p-2">
            <PositionReqAll />

            <PositionReqSpecific data={data} />

        </Row>
    );
}

export default PositionRequire;