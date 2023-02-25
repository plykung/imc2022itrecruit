import firestore from "../../../utils/firebase/firestore";
import { collection, doc, getDocs } from 'firebase/firestore'
import genResFail from "../../../utils/response/genResFail";
import genResSuccess from '../../../utils/response/genResSuccess'


export default async function handler(req, res) {

    try {
        const ColinfoRef = collection(firestore, 'IT')
        const ColSnapshot = await getDocs(ColinfoRef)

        var ColDepartment = [];
        ColSnapshot.forEach((doc) => {
            ColDepartment.push({
                ...doc.data(),
                id: doc.id
            });
        });

        res.status(200).json(genResSuccess("GET_COLLECTION_SUCCESS", ColDepartment))

    } catch (error) {

        res.status(400).json(genResFail("GET_COLLECTION_ERROR", { id: id, function: "cpm/list", error: error.stack }))

    }

}