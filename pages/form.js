import FormBody from "@/components/addForm/FormBody";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";


function FormGenJSON() {
    return <>

        <Head>
            <title>Add Data</title>
            <meta name="description" content="CMU-IMC 2023 IT Recruit" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/icon.png" />
        </Head>
        <main>
            <Container className='p-3'>

                <Row>
                    <Col style={{ maxWidth: "100px" }}>
                        <Image src={"/icon.png"} width={100} height={100} alt="IMC Logo" />
                    </Col>
                    <Col className='m-3'>
                        <h1>CMU-IMC 2023</h1>
                        <h5>สำหรับ Staff เพิ่มรายละเอียด
                        </h5>
                    </Col>

                </Row>
            </Container>

            <Container className='d-flex justify-content-center'>
                <Row>
                    <Button as={Link} href="/" variant="secondary">
                        <i class="bi bi-chevron-left"></i> Back
                    </Button>

                </Row>

            </Container>

            <Container>
                <FormBody />
            </Container>

        </main>

    </>
}

export default FormGenJSON;

