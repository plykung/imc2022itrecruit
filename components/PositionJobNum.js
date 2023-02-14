import { Container } from "react-bootstrap";

function PositionJobNum({ data }) {
    return (

        <Container>
            <p>
                <u>จำนวน</u>: {data.yr3 === 0 && typeof (data.yr3) !== "undefined" ? "" : `ปี 3 - ${data.yr3} คน`} <b>{typeof (data.yr2) !== "undefined" && data.yr2 === 0 ? "" : `, ปี 2 - ${data.yr2} คน`}</b> (ปรับเปลี่ยนได้ สมัครมาก่อนได้เลย)
            </p>
        </Container>
    );
}

export default PositionJobNum;