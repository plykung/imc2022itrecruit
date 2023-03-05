import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Segment from "../components/Segment";
import Image from 'next/image';

import ITlist from "../compartmentList/IT.json";
import CompDesign from "../compartmentList/Comp-design.json";
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>CMU-IMC 2023 Recruit</title>
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
              <h1>ยินดีต้อนรับสู่งาน CMU-IMC 2023</h1>
              <h5>รายละเอียดเพิ่มเติมของแต่ละฝ่าย</h5>
            </Col>

          </Row>
        </Container>


        <Segment data={ITlist} />
        <Segment data={CompDesign} />


        <hr />

        <Container className='d-flex justify-content-center'>
          <Row>
            <Button variant='success' as={Link} href='/form' className='mb-3'>
              <i class="bi bi-plus-lg"></i>&nbsp;&nbsp;For Staff
            </Button>
          </Row>

        </Container>

      </main>
    </>
  )
}
