import { useState } from 'react';
import { Accordion, Alert, Card, Col, Container, InputGroup, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Segment from '../Segment';
import JobCard from './JobCard';
import { ErrorBoundary } from 'react-error-boundary'

function FormBody() {

    const [formData, setFormData] = useState({
        compartmentName: '',
        compartmentDesc: "",
        compartmentRole: []
    })
    function resetFormData() {
        setFormData({
            compartmentName: '',
            compartmentDesc: "",
            compartmentRole: []
        })
    }

    // PreviewModal
    const [showPreview, setShowPreview] = useState(false)
    const clickPreview = () => setShowPreview(true)
    const closePreview = () => setShowPreview(false)

    // DownloadModal
    const [showDL, setShowDL] = useState(false)
    const clickShowDL = () => setShowDL(true)
    const closeShowDL = () => setShowDL(false)

    // handle file upload
    const [file, setFile] = useState()
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            console.log('uploaded file', e.target.files[0])
        }
    };

    async function handleClickUpload() {
        if (typeof (file) === 'undefined') {
            alert('ยังไม่ได้อัปโหลดไฟล์')
        } else {
            var reader = new FileReader();
            reader.onload = function (e) {
                var content = reader.result;
                //Here the content has been read successfuly
                console.log("readed data", content)
                try {
                    var objectfromfile = JSON.parse(content)
                    setFormData(objectfromfile)
                } catch (err) {
                    alert("ไฟล์ไม่ถูกต้อง\nกรุณาเลือกไฟล์ที่ถูกต้องแล้วลองใหม่อีกครั้ง")
                }


            }

            reader.readAsText(file);
        }
    }

    return <>
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={resetFormData}
        >
            <Form>


                <Form.Group className="mt-3 mb-3"><Form.Label>สำหรับอัปโหลดไฟล์ที่เคยทำไว้</Form.Label>
                    <InputGroup className="mb-3">

                        <Form.Control type="file" onChange={handleFileChange} />
                        <Button variant="primary" onClick={handleClickUpload}>
                            <i class="bi bi-upload"></i>
                        </Button>

                    </InputGroup>
                </Form.Group>
                <hr className='m-3' />

                <Form.Group className="mb-3">
                    <Form.Label>ชื่อฝ่าย</Form.Label>
                    <Form.Control required type="text" placeholder="" defaultValue={formData.compartmentName} onChange={(e) => { setFormData({ ...formData, compartmentName: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>รายละเอียดฝ่าย</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="" defaultValue={formData.compartmentDesc} onChange={(e) => { setFormData({ ...formData, compartmentDesc: e.target.value }) }} />
                </Form.Group>

                <hr className='m-3' />

                <JobCard formData={formData} setFormData={setFormData} />

                <PreviewModal show={showPreview} close={closePreview} data={formData} />

                <DownloadModal showDL={showDL} close={closeShowDL} data={formData} />


                <Container className='d-flex justify-content-center'>
                    <Row>
                        <Button as='a' href="#" variant="success" type="submit" className='my-3' onClick={() => { setShowPreview(true); console.log("Data Form:", formData) }}>
                            Preview
                        </Button>

                        <Button as='a' href="#" variant="primary" type="submit" className='mb-3' onClick={() => { clickShowDL(); console.log("Submit Data Form:", formData) }}>
                            Save
                        </Button>
                    </Row>

                </Container>



            </Form>
        </ErrorBoundary>

    </>
}

export default FormBody;

function PreviewModal({ show, close, data }) {
    return <Modal
        show={show}
        onHide={() => close()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                ตัวอย่าง
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Segment data={data} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={close}>Close</Button>
        </Modal.Footer>
    </Modal>
}


function DownloadModal({ showDL, close, data }) {

    var dataLoad = data


    return (
        <Modal
            show={showDL}
            onHide={() => close()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    คำแนะนำ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                    <li>เซฟไฟล์นี้ไว้ในเครื่องของคุณ (เผื่อแก้ไขภายหลัง)</li>
                    <li>ส่งไฟล์นี้มาให้ <i>Plug (NaphatS)</i> ทางไลน์</li>
                    <li>จะรีบดำเนินการอัปไฟล์ให้ ภายในวันที่ส่งไฟล์ให้</li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Close</Button>
                <Button variant='success' href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(data)
                )}`}
                    download={`${data.compartmentName}.json`}><i class="bi bi-download"></i>&nbsp;&nbsp;Download</Button>
            </Modal.Footer>
        </Modal>
    )
}

function ErrorFallback({ error, resetErrorBoundary }) {
    return (<>

        <Alert variant="danger" onClose={resetErrorBoundary} dismissible className='mt-3'>
            <Alert.Heading>ไฟล์ไม่ถูกต้อง</Alert.Heading>

            <p>
                กรุณาเลือกไฟล์ที่ถูกต้องแล้วลองใหม่อีกครั้ง
            </p>

            <hr />
            <p className="mb-0">
                {error.message}
            </p>
        </Alert>

    </>
    )
}
