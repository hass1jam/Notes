import mongoose from 'mongoose';
import { NoteSchema } from './NoteSchema';

export const NoteModel = mongoose.model("Note",NoteSchema);