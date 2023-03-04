import Head from 'next/head'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import axios from 'axios'
import { useEffect, useState } from 'react';
import CustomLoader from '@/components/CustomLoader';
import Segment from '@/components/Segment'
import CPMheaderDrop from '@/components/fb/cpmHeaderDrop';
import useSWR from 'swr'
import fetcher from '@/utils/fetcher/fetcher';

export default function Home() {

  // const [fet, setFet] = useState({ status: "failed", data: {} })

  const { data, err, loading } = useSWR(['/api/cpm/list'], fetcher)


  // useEffect(() => {
  //   axios.get('/api/cpm/list').then((res) => {
  //     setFet({ status: "success", data: res.data })
  //   }).catch((err) => {
  //     setFet({ status: "failed", error: err })

  //   })
  // }, [])


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


        {/* {fet.status === "loading" && <CustomLoader />}
        {fet.status === "failed" && <>Failed</>}
        {fet.status === "success" && <>{fet.data.data.map((each, index) => <><CPMheaderDrop key={each.id} data={each} index={index} /></>)}</>} */}

        {/* <p id="data">
          {getRoles("info")}
        </p> */}

        {err && <>error</>}
        {data && <>{data}</>}
        {loading && <CustomLoader />}

      </main>
    </>
  )
}

function getRoles(idg) {

  const [fet, setFet] = useState({ status: "loading", data: {} })

  useEffect(() => {
    axios.get('/api/cpm/list', { params: { id: 'IT' } }).then((res) => {
      setFet({ status: "success", data: res.data })
    }).catch((err) => {
      setFet({ status: "failed", error: err })

    })
  }, [])

  return <>{JSON.stringify(fet.data.data)}
    {/* <Segment data={fet.data.data} /> */}
  </>
}
