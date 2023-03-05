import { Container } from "react-bootstrap";

function PositionJobDesc({ data }) {
    return (

        <Container fluid>

            <u>หน้าที่</u>:

            {data.length === 0 ? <>&nbsp;<i>( ไม่มีข้อมูล )</i></> : <>

                <ul>
                    {data.map((each, index) => <li key={`jobdesc-${index + 1}`}>
                        {each}
                    </li>)
                    }
                </ul>
            </>}


        </Container>
    );
}

export default PositionJobDesc;