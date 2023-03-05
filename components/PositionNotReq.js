import { Col, Row } from "react-bootstrap";

function PositionNotReq({ data }) {
    return (

        <Row className="p-2">
            <Col>
                <b>สิ่งที่<u>ไม่</u>จำเป็นต้องทำได้ (เดี๋ยวเรียนรู้กันได้ แต่ถ้ามีจะดีมากครับ)</b>
                {data.length === 0 ? <><br /><i>( ไม่มีข้อมูล )</i></> : <><ul key='posnotreq'>
                    {data.map((each, index) =>
                        <li key={`posnotreq-${index + 1}`}>{each}</li>
                    )}
                </ul></>}

            </Col>

        </Row>
    );
}

export default PositionNotReq;