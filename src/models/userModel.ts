import connection from './connection';
const { ObjectId } = require('mongodb')

const getByid = async (id: any) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('users').findOne(ObjectId(id));
}

const add = async ({ nome, email, password, hora_de_criacao, hora_de_atualizacao }) => {
  const db = await connection();
  return db.collection('users')
    .insertOne({ nome, email, password, hora_de_criacao, hora_de_atualizacao });
}

const update = async ({ id, nome, email, password }) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('users')
    .updateOne({ _id: ObjectId(id) }, { $set: { nome, email, password } });
}

const exclude = (id: any) => {
  if(!ObjectId.isValid(id)) return null;
  connection().then((db) => db.collection('users').deleteOne({ _id: ObjectId(id) }))
}

module.exports = { getByid, add, update, exclude }