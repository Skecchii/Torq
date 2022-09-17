import React, { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import NoteAPI from "utils/BackendAPIS/NoteBackend";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Note = ({ notes, setNotes }) => {
  const [note, setNote] = useState({});
  const [textField, setTextField] = useState("");


  useEffect(() => {
    let fetchNotes = async () => {
      let res = await NoteAPI.get(``).catch((err) => console.log(err));
      setNote(res.data);
    };
    fetchNotes();
  }, []);

  const addNote = (note) => {
    setNotes(([...notes, note]))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    NoteAPI.post("/create", textField).then((res) => {
        setTextField('')
        addNote(res.data)
    });
  };

  const handleChange = (e) => {
    setTextField({ ...textField, [e.target.id]: e.target.value });
  };

  const deleteNote = (id) => {
    NoteAPI.delete(`/${id}/delete`).then(res => setNote(id))
    window.location.reload()
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="note">notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="note"
            name="note"
            onChange={handleChange}
          ></Form.Control>
          <Button type="submit">+</Button>
        </Form>
      </Card.Body>
      {notes.map((note, index) => {
        return (
          <ul key={index} style={{listStyle: 'none'}}>
            <li>{note.note} <button type="submit" onClick={() => deleteNote(note.id)}>x</button></li>
          </ul>
        );
      })}
    </Card>
  );
};

export default Note;
