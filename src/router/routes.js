import note from '../controller/noteController';

const routes = (app) => {

    app.route('/api/notes')
        .get(note.NotesGet)


    app.route('/api/note')
        .post(note.NoteCreate);

    app.route('/api/note/:id')
        .delete(note.NoteDelete)
        .get(note.NoteGet)
        .put(note.NotePut);
};

export default routes;