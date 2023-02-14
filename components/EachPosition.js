import { Button, Card, Collapse, Container, ListGroup, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PositionJobDesc from "./PositionJobDesc";
import PositionJobNum from "./PositionJobNum";
import PositionRequire from "./PositionRequire";
import PositionNotReq from "./PositionNotReq";
import PositionMoreInfo from "./PositionMoreInfo";

function EachPosition({ data, index }) {
    const [open, setOpen] = useState(false)
    return (

        <>
            <Card.Header
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="secondary"
                style={{ cursor: 'pointer' }}
            >
                <div className="d-flex justify-content-between">
                    <div>
                        <b>{index + 1}. {data.positionName}</b>
                    </div>
                    <div>
                        {open ? <><i className="bi bi-chevron-up"></i></> : <><i className="bi bi-chevron-down"></i></>}

                    </div>
                </div>
            </Card.Header>


            <Collapse in={open}>
                <Container>
                    <Card.Body>
                        <PositionJobDesc data={data.positionDesc} />
                        <PositionJobNum data={data.positionNumber} />
                        <hr />
                        <PositionRequire data={data.positionReqSpecific} />
                        <hr />
                        <PositionNotReq data={data.positionReqNotSpecific} />

                        {data.positionMoreInfo.length === 0 ? <></> : <>
                            <hr />
                            <PositionMoreInfo data={data.positionMoreInfo} />
                        </>}


                    </Card.Body>
                </Container>
            </Collapse>

        </>



    );
}

export default EachPosition;