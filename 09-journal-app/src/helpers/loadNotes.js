import { FirebaseDB } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

export const loadNotes = async (uid = '') => {
    console.log('entramos al loadnotes');
    if(!uid) throw new Error('El UID del usuario no existe');
    
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    console.log('referecia a la coleccion',collectionRef);
    const docs = await getDocs(collectionRef);
    const notes = []
    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    });
    console.log('notes',notes);
    return notes;
}