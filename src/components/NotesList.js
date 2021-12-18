import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <div className="notes-list">
             <AddNote handleAddNote={handleAddNote} />
            {notes.map((note)=>  <Note key={note.id} id={note.id} text = {note.text} date={note.date} handleDeleteNote={handleDeleteNote} />)}
           
        </div>
    )
}
export default NotesList;