import { useEffect, useState } from "react";
import { Badge, Card, Collapse, Container } from "react-bootstrap";
import useSWR from 'swr'
import fetcher from '@/utils/fetcher/fetcher'

function CPMheaderDrop({ data, index }) {

    const [open, setOpen] = useState(false)
    console.log("dkasl;dkas;l");

    useEffect(() => {
        // if click open, get data
        const { data, err, isloading } = useSWR(['/api/cpm/job/list'], fetcher)
        console.log("swr", data, err, isloading)
    }, [open])

    return (
        <div>

            <Card>
                <Card.Header
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="secondary"
                    style={{ cursor: 'pointer' }}
                >
                    <div className="d-flex justify-content-between">
                        <div>
                            <b>headr {data.compartmentName}</b>

                            {/* {
                                data.positionPriority ? <>&nbsp;&nbsp;
                                    <Badge pill bg="primary">
                                        Priority
                                    </Badge>

                                </> : <></>
                            } */}


                        </div>
                        <div>
                            {open ? <><i className="bi bi-chevron-up"></i></> : <><i className="bi bi-chevron-down"></i></>}

                        </div>
                    </div>
                </Card.Header>


                <Collapse in={open}>
                    <Container>
                        <Card.Body>
                            id: {data.id} <br />
                            compartmentID: {data.compartmentID} <br />
                            dasdsa
                        </Card.Body>
                    </Container>
                </Collapse>

            </Card>

        </div>
    );
}

export default CPMheaderDrop;