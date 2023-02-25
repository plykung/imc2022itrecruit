import firestore from '../../../../utils/firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore'
import genResFail from '../../../../utils/response/genResFail'
import genResSuccess from '../../../../utils/response/genResSuccess'


export default async function handler(req, res) {
    const { id } = req.query

    if (!id) {
        res.status(400).json(genResFail("MISSING_PARAMETER"))
    } else {
        try {
            const queryRef = collection(firestore, 'IT', id, 'compartmentRole')
            const ColSnapshot = await getDocs(queryRef)


            var queryResults = [];
            ColSnapshot.forEach((doc) => {
                queryResults.push({
                    ...doc.data(),
                    id: doc.id
                });
            });

            res.status(200).json(genResSuccess("GET_COLLECTION_DOC_SUCCESS", queryResults))

        } catch (error) {
            res.status(400).json(genResFail("GET_COLLECTION_DOC_ERROR", { id: id, function: "cpm/item", error: error.stack }))
        }
    }

}