const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')
class Todo {
 constructor(text, isDone) {
   this.text = text,
   this.isDone = isDone,
   this.id = uuidv4()
 }

 static all() {
   return new Promise((resolve, reject) => {
     fs.readFile(
       path.join(__dirname, '..', 'db', 'todos.json'),
       'utf-8',
       (e, content) => {
         if (e) {
           reject(e)
         } else {
           resolve(JSON.parse(content))
           console.log("This is test!" + content)
         }
       }
     )
   })
 }

 async save() {
   const todos = await Todo.all()
   todos.push({
     text: this.text,
     isDone: this.isDone,
     id: this.id,
   })
   return new Promise((resolve, reject) => {
     fs.writeFile(
       path.join(__dirname, '..', 'db', 'todos.json'),
       JSON.stringify(todos),
       (err) => {
         if (err) {
           reject(err)
         } else {
           resolve()
         }
       }
     )
   })
 }

 static async getById(id) {
    const todos = await Todo.all()
    return todos.find((u) => u.id == id)
  }
  
  static async update(id, data) {
    const todos = await Todo.all()
    const idx = todos.findIndex((u) => u.id == id)
    const updatedCourse = {
      id: id,
      text: data.text,
      isDone: data.isDone,
    }
    todos[idx] = updatedCourse
    new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'db', 'todos.json'),
        JSON.stringify(todos, null, 2),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
    return updatedCourse
  }

  static async destroy(id) {
    const todos = await Todo.all()
    const idx = todos.findIndex((u) => u.id == id)
    todos.splice(idx, 1)
    new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'db', 'todos.json'),
        JSON.stringify(todos),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }
}
module.exports = Todo