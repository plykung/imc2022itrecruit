import firebase from "./fbinit";
import { getFirestore } from 'firebase/firestore'

const fs = getFirestore(firebase)

export default fs