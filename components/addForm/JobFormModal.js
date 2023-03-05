import { Accordion, Alert, Button, Card, Col, Form, ListGroup, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function JobFormModal({ showModal, handleClose, formData, setFormData, modalMode, showEach, index }) {

    // check modal mode
    var modalAdd = (modalMode === 'add')

    // name CPM
    const [name, setName] = useState(modalAdd ? '' : showEach.positionName)
    const [priority, setPriority] = useState(modalAdd ? false : showEach.positionPriority)

    // checkbox number
    const [vary, setVary] = useState(modalAdd ? false : showEach.positionNumber.positionVary)
    const [y3, sety3] = useState(modalAdd ? 0 : showEach.positionNumber.yr3)
    const [y2, sety2] = useState(modalAdd ? 0 : showEach.positionNumber.yr2)


    // description list
    const [listDesc, setListDesc] = useState(modalAdd ? [] : showEach.positionDesc)
    const addNewDesc = () => setListDesc([...listDesc, ""])
    const changeDesc = (index, text) => {
        var changeDescCopy = [...listDesc]
        changeDescCopy[index] = text
        setListDesc(changeDescCopy)

    }
    const delDesc = (index) => {
        var delDescCopy = [...listDesc]
        delDescCopy.splice(index, 1)
        console.log("splice", delDescCopy);
        setListDesc(delDescCopy)

    }

    // job description list
    const [listJDesc, setListJDesc] = useState(modalAdd ? [] : showEach.positionReqSpecific)
    const addNewJDesc = () => setListJDesc([...listJDesc, ""])
    const changeJDesc = (index, text) => {
        var changeJDescCopy = [...listJDesc]
        changeJDescCopy[index] = text
        setListJDesc(changeJDescCopy)


    }
    const delJDesc = () => {
        var delJDescCopy = [...listJDesc]
        delJDescCopy.pop()
        setListJDesc(delJDescCopy)
    }

    // job description list
    const [listNEDesc, setListNEDesc] = useState(modalAdd ? [] : showEach.positionReqNotSpecific)
    const addNewNEDesc = () => setListNEDesc([...listNEDesc, ""])
    const changeNEDesc = (index, text) => {
        var changeNEDescCopy = [...listNEDesc]
        changeNEDescCopy[index] = text
        setListNEDesc(changeNEDescCopy)


    }
    const delNEDesc = (index) => {
        var delNEDescCopy = [...listNEDesc]
        delNEDescCopy.pop()
        setListNEDesc(delNEDescCopy)
    }


    function saveJobItem() {
        var oneItemJob = {
            "positionName": name,
            "positionPriority": priority,
            "positionDesc": listDesc,
            "positionNumber": {
                "yr3": parseInt(y3),
                "yr2": parseInt(y2),
                "positionVary": vary
            },
            "positionReqSpecific": listJDesc,
            "positionReqNotSpecific": listNEDesc,
            "positionMoreInfo": []
        }

        console.log("savejobitem", oneItemJob)

        var copyCPM = [...formData.compartmentRole, oneItemJob]
        setFormData({
            ...formData,
            compartmentRole: copyCPM
        })
        clearForm()
        handleClose()

    }

    function editJobItem(index) {
        var editItemJob = {
            "positionName": name,
            "positionPriority": priority,
            "positionDesc": listDesc,
            "positionNumber": {
                "yr3": parseInt(y3),
                "yr2": parseInt(y2),
                "positionVary": vary
            },
            "positionReqSpecific": listJDesc,
            "positionReqNotSpecific": listNEDesc,
            "positionMoreInfo": []
        }
        console.log("editjobitem", editItemJob)

        var copyCPM = [...formData.compartmentRole]
        copyCPM[index] = editItemJob
        setFormData({
            ...formData,
            compartmentRole: copyCPM
        })
        clearForm()
        handleClose()
    }

    // remove everyting from modal after close
    useEffect(() => {
        if (!modalAdd) {
            console.log('edit data: now', showEach)
            var newshoweach = { ...showEach }
            propagateForm(newshoweach)
        } else {
            console.log('add data');
        }

        // return clearForm()
    }, [])

    function propagateForm(showEach) {
        setName(showEach.positionName)
        setPriority(showEach.positionPriority)
        setVary(showEach.positionNumber.positionVary)
        sety3(showEach.positionNumber.yr3)
        sety2(showEach.positionNumber.yr2)
        setListDesc(showEach.positionDesc)
        setListNEDesc(showEach.positionReqNotSpecific)
        setListJDesc(showEach.positionReqSpecific)
        console.log('propagated!!!!', {
            "positionName": name,
            "positionPriority": priority,
            "positionDesc": listDesc,
            "positionNumber": {
                "yr3": parseInt(y3),
                "yr2": parseInt(y2),
                "positionVary": vary
            },
            "positionReqSpecific": listJDesc,
            "positionReqNotSpecific": listNEDesc,
            "positionMoreInfo": []
        })
    }

    function clearForm() {
        setName('')
        setPriority(false)
        setVary(false)
        sety3(0)
        sety2(0)
        setListDesc([])
        setListJDesc([])
        setListNEDesc([])
    }

    return (
        <>

            <Modal show={true} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{modalAdd ? 'เพิ่มหน้าที่ใหม่' : 'แก้ไขหน้าที่'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>ชื่อหน้าที่</Form.Label>
                        <Form.Control required type="text" defaultValue={name} onChange={(e) => { setName(e.target.value) }} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="หน้าที่สำคัญ (Priority)" checked={priority} onChange={(e) => { setPriority(e.target.checked) }} />
                    </Form.Group>

                    <Form.Group className="my-3">
                        <Form.Label>รายละเอียดหน้าที่</Form.Label>


                        &nbsp;&nbsp;&nbsp;

                        {listDesc.map((each, index) => <>
                            <Row key={index}>
                                <Col xs={listDesc.length - 1 === index ? 10 : 12}>

                                    <Form.Control as='textarea' className='my-2' type="text" placeholder="" defaultValue={each} onChange={(e) => { changeDesc(index, e.target.value) }} />
                                </Col>
                                {
                                    listDesc.length - 1 === index ?
                                        <Col xs={listDesc.length - 1 === index ? 2 : ''} className='my-auto'>
                                            <Button variant='danger' size='sm' onClick={() => delDesc(index)}>
                                                <i class="bi bi-trash"></i>
                                            </Button>
                                        </Col> : <></>
                                }


                            </Row>
                        </>)}

                        {/* {listDesc.map((each, index) => {

                                return <Row>
                                    <Col xs={10}>
                                        <Form.Control className='my-2' type="text" placeholder="" />
                                    </Col>
                                    <Col xs={2} className='my-auto'>
                                        <Button variant='danger' size='sm' onClick={() => delDesc(index)}>
                                            <i class="bi bi-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>

                            })} */}





                        <Button variant='secondary' size='sm' onClick={addNewDesc}>
                            <i class="bi bi-plus-lg"></i>
                        </Button>

                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>ปี 3</Form.Label>
                            <Form.Control type='number' defaultValue={y3} onChange={(e) => { sety3(e.target.value) }} />
                        </Form.Group>


                        <Form.Group as={Col}>
                            <Form.Label>ปี 2</Form.Label>
                            <Form.Control type='number' defaultValue={y2} onChange={(e) => { sety2(e.target.value) }} />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Check type="checkbox" label="จำนวนเปลี่ยนแปลงได้" defaultChecked={vary} onChange={(e) => { setVary(e.target.checked) }} />
                        </Form.Group>
                    </Row>

                    <hr className='m-3' />

                    <Form.Group className="my-3">
                        <Form.Label>สิ่งที่จำเป็นต้องมี (เฉพาะหน้าที่นี้)</Form.Label>

                        &nbsp;&nbsp;&nbsp;

                        {listJDesc.map((each, index) => <>
                            <Row>
                                <Col xs={listJDesc.length - 1 === index ? 10 : 12}>

                                    <Form.Control as='textarea' className='my-2' type="text" placeholder="" defaultValue={each} onChange={(e) => { changeJDesc(index, e.target.value) }} />
                                </Col>
                                {
                                    listJDesc.length - 1 === index ?
                                        <Col xs={listJDesc.length - 1 === index ? 2 : ''} className='my-auto'>
                                            <Button variant='danger' size='sm' onClick={() => delJDesc(index)}>
                                                <i class="bi bi-trash"></i>
                                            </Button>
                                        </Col> : <></>
                                }


                            </Row>
                        </>)}

                        <Button variant='secondary' size='sm' onClick={addNewJDesc}>
                            <i class="bi bi-plus-lg"></i>
                        </Button>

                    </Form.Group>

                    <hr className='m-3' />



                    <Form.Group className="my-3">
                        <Form.Label>สิ่งที่ไม่จำเป็นต้องทำได้</Form.Label>

                        &nbsp;&nbsp;&nbsp;

                        {listNEDesc.map((each, index) => <>
                            <Row >
                                <Col xs={listNEDesc.length - 1 === index ? 10 : 12}>

                                    <Form.Control as='textarea' className='my-2' type="text" placeholder="" defaultValue={each} onChange={(e) => { changeNEDesc(index, e.target.value) }} />
                                </Col>
                                {
                                    listNEDesc.length - 1 === index ?
                                        <Col xs={listNEDesc.length - 1 === index ? 2 : ''} className='my-auto'>
                                            <Button variant='danger' size='sm' onClick={() => delNEDesc(index)}>
                                                <i class="bi bi-trash"></i>
                                            </Button>
                                        </Col> : <></>
                                }


                            </Row>
                        </>)}

                        <Button variant='secondary' size='sm' onClick={addNewNEDesc}>
                            <i class="bi bi-plus-lg"></i>
                        </Button>

                    </Form.Group>

                    {/* <hr className='m-3' />

                                    <Row className="mb-3">
                                        <Form.Label>หมายเหตุ</Form.Label>
                                        <Form.Group as={Col} >
                                            <Form.Label>ข้อความ</Form.Label>
                                            <Form.Control className='my-2' type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col} >
                                            <Form.Label>ลิ้งก์</Form.Label>
                                            <Form.Control className='my-2' type="text" placeholder="" />
                                        </Form.Group>


                                    </Row>

                                    <Button variant='secondary' size='sm'>
                                        <i class="bi bi-plus-lg"></i>
                                    </Button> */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={modalAdd ? saveJobItem : () => { editJobItem(index) }}>
                        {modalAdd ? 'Add Job' : 'Save Changes'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobFormModal;