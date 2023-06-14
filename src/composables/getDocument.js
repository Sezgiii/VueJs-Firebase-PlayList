import {ref} from "vue";
import {projectFirestore} from "../firebase/config";

const getDocument = (collection, id) => {
    const document = ref(null)
    const error = ref(null);

    let documentRef = projectFirestore.collection(collection).doc(id)

    documentRef.onSnapshot(
        (doc) => {
            if(doc.data()){
                document.value = ({...doc.data(), id:doc.id})
                error.value = null;
            }else{
                error.value = 'Document not found'
            }

        
    }, (err) => {
        console.log(err.message);
        error.value = ' colud not fetch data'

    })
    return {document, error}
}
export default getDocument;