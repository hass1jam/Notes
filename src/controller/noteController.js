import { NoteModel } from '../model/NoteModel';

const create = (req, res, next) => {

    NoteModel.create(req.body,( err, succ)=>{
        if(err) console.log(err);
        res.json(succ);
    });
};

const getNotes = (req, res, next) => {
    NoteModel.find({},(err, data) =>{
        if(err) console.log(err);
        res.json(data);
    });
};

const deleteNote = (req, res, next) => {
    
    NoteModel.deleteOne({ _id: req.params.id}, (err, data) =>{
        if(err) console.log(err);
        res.json(data);
    });
};

const putNote = (req, res, next) => {
    NoteModel.updateOne( { "_id" : req.params.id }, req.body, (err, data)=>{
        if(err) console.log(err);
        res.json(data);
    });
};

const getNote = (req, res, next) => {
    NoteModel.findOne( { "_id" : req.params.id }, (err, data)=>{
        if(err) console.log(err);
        res.json(data);
    });
};


export default {
    NoteCreate : create,
    NotesGet : getNotes,
    NoteDelete: deleteNote,
    NoteGet : getNote,
    NotePut : putNote
}