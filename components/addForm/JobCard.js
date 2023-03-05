import { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Form, ListGroup, Modal, Row } from "react-bootstrap";
import JobAccItem from "./JobAccItem";
import JobFormModal from "./JobFormModal";

function JobCard({ formData, setFormData }) {

    // control modal
    const [showModalAdd, setShowModalAdd] = useState(false)
    const handleClose = () => setShowModalAdd(false);
    const handleShow = () => setShowModalAdd(true);


    return (
        <Card>
            <Card.Header className='d-flex justify-content-between'>
                <div className='my-auto'>หน้าที่</div>
                <div>
                    <Button variant='secondary' size='sm' onClick={() => { handleShow() }}>
                        <i class="bi bi-plus-lg"></i>
                    </Button>
                </div>
            </Card.Header>

            {/* Modal for adding data */}
            {showModalAdd && <JobFormModal modalMode='add' showModal={showModalAdd} handleClose={handleClose} formData={formData} setFormData={setFormData} />
            }


            <Card.Body>
                <ListGroup as="ol" numbered>
                    {formData.compartmentRole.length === 0 ? <>กด &quot;+&quot; เพื่อเพิ่มหน้าที่</> : <>
                        {formData.compartmentRole.map((each, index) => {
                            return <JobAccItem key={index} data={each} index={index} formData={formData} setFormData={setFormData} />

                        })}
                    </>}
                </ListGroup>
            </Card.Body>
        </Card>

    );
}

export default JobCard;