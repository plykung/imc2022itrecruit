import firestore from "../../utils/firebase/firestore";
import { collection, doc, getDoc } from 'firebase/firestore'


export default async function handler(req, res) {

    const ITinfoRef = doc(firestore, 'IT', 'info')
    const ITinfoSnapshot = await getDoc(ITinfoRef)

    if (ITinfoSnapshot.exists()) {
        console.log("Document data:", ITinfoSnapshot.data());
    } else {
        console.log("No such document!");
    }

    res.status(200).json(ITinfoSnapshot.data())
}