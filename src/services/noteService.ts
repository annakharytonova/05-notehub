import axios from "axios";

import type { Note, NoteTag } from "../types/note";

interface NotesParam {
  notes: Note[];
  totalPages: number;
}

const url = "https://notehub-public.goit.study/api/notes";

export async function fetchNotes(
  query: string,
  page: number,
): Promise<NotesParam> {
  const optionsNote = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
    params: {
      search: query,
      page,
      perPage: 12,
    },
  };
  const response = await axios.get<NotesParam>(url, optionsNote);
  return response.data;
}

interface CreateNoteParam {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function createNote(newNote: CreateNoteParam): Promise<Note> {
  const optionsCreate = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  };
  const response = await axios.post<Note>(url, newNote, optionsCreate);
  return response.data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const optionsDelete = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  };
  const response = await axios.delete<Note>(`${url}/${noteId}`, optionsDelete);
  return response.data;
}
