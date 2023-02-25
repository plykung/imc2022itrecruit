import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import FetchData from '@/components/testfb/fetchData';
import axios from 'axios'
import { useEffect, useState } from 'react';
import CustomLoader from '@/components/CustomLoader';


export default function Home() {

  const [fet, setFet] = useState({ status: "loading", data: {} })

  useEffect(() => {
    axios.get('/api/cpm/list').then((res) => {
      setFet({ status: "success", data: res.data })
    }).catch((err) => {
      setFet({ status: "failed", error: err })
    })
  }, [])


  return (
    <>
      <Head>
        <title>DEV CMU-IMC 2023 Recruit</title>
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
              <h1>DEV CMU-IMC 2023</h1>
              <h5>test</h5>
            </Col>

          </Row>
        </Container>


        {fet.status === "loading" && <CustomLoader />}
        {fet.status === "failed" && <>Failed</>}
        {fet.status === "success" && <>{fet.data.data.map((each, index) => <p key={index + 1}>compartmentID: {each.compartmentID}, compartmentName: {each.compartmentName} </p>)}</>}

      </main>
    </>
  )
}
