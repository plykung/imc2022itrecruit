import { useState } from "react";
import { Accordion, Badge, Button, Col, Form, ListGroup, Modal, Row } from "react-bootstrap";
import JobFormModal from "./JobFormModal";

function JobAccItem({ data, index, formData, setFormData }) {

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    function clickDel(index) {
        console.log('click del job', index)
        var listbef = [...formData.compartmentRole]
        listbef.splice(index, 1)
        setFormData({ ...formData, compartmentRole: listbef })
    }

    function clickDulp(index) {
        console.log('click dulp job', index)
        var listbef1 = [...formData.compartmentRole]
        var listbef2 = [...formData.compartmentRole]
        var itemdulp = listbef1.splice(index, 1)
        var newArrDup = [...listbef2, ...itemdulp]
        setFormData({ ...formData, compartmentRole: newArrDup })
    }


    return (<>
        <Row className="my-1 container">
            <Col lg={10} md={9} xs={8}>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"

                >

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{data.positionName}</div>
                    </div>
                    {data.positionPriority && <Badge bg="primary" pill>
                        Priority
                    </Badge>}



                </ListGroup.Item>
            </Col>
            <Col lg={2} md={3} xs={4} className='my-auto d-flex justify-content-between align-items-start'>
                <Button variant='primary' size="sm" onClick={handleShow}>
                    <i class="bi bi-pencil"></i>
                </Button>
                <Button variant='success' size="sm" onClick={() => { clickDulp(index) }}>
                    <i class="bi bi-files"></i>
                </Button>
                <Button variant='danger' size="sm" onClick={() => { clickDel(index) }}>
                    <i class="bi bi-x-lg"></i>
                </Button>
            </Col>

        </Row>

        {showModal && <JobFormModal modalMode='edit' index={index} showEach={data} showModal={showModal} handleClose={handleClose} formData={formData} setFormData={setFormData} />
        }
    </>



    );
}

export default JobAccItem;