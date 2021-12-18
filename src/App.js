import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";
import { useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    
  ]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[]);
  useEffect(() => {
   localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes])
 
  const addNote =(text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    setNotes([...notes, newNote]);

  }
  const deleteNote = (id) => {
    console.log("handle delete");
    const newNote = notes.filter((note) => note.id != id);
    setNotes(newNote);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  )
}
export default App;