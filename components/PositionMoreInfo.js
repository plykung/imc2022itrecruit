import Link from "next/link";
import { Col, Row } from "react-bootstrap";

function PositionNotReq({ data }) {
    return (

        <Row className="p-2">
            <Col>
                <b>หมายเหตุ</b>
                <ul>

                    {data.map((each) =>
                        <><li><Link href={each.link}>{each.text}</Link></li></>
                    )}

                </ul>
            </Col>

        </Row>
    );
}

export default PositionNotReq;