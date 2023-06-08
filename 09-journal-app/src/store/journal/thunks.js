import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch( savingNewNote() )
        // get state tiene acceso a todo lo que hay en el store de redux de ahi saco el user ID
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        // creo la referencia al punto donde lo quiero insertar, la coleccion
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) )
        // digo que quiero crear y en dondde lo quiero crear
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe')
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}