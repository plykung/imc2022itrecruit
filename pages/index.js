import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Col, Container, Row } from 'react-bootstrap'
import Segment from "../components/Segment";
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>CMU-IMC 2023 IT Recruit</title>
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
              <h1>ยินดีต้อนรับสู่ฝ่าย IT</h1>
              <h5>งาน CMU-IMC 2023</h5>
            </Col>

          </Row>
        </Container>

        <Segment />

      </main>
    </>
  )
}
