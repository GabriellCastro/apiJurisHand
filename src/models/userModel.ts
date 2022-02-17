import connection from './connection';
import { ObjectId } from 'mongodb';

export const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
}

export const getByid = async (id: any) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('users').findOne(new ObjectId(id));
}

export const add = async ({ nome, email, password, hora_de_criacao, hora_de_atualizacao }) => {
  const db = await connection();
  return db.collection('users')
    .insertOne({ nome, email, password, hora_de_criacao, hora_de_atualizacao });
}

export const update = async ({ id, nome, email, password }) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('users')
    .updateOne({ _id: new ObjectId(id) }, { $set: { nome, email, password } });
}

export const exclude = (id: any) => {
  if(!ObjectId.isValid(id)) return null;
  connection().then((db) => db.collection('users').deleteOne({ _id: new ObjectId(id) }))
}

