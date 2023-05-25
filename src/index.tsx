import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Model, createServer} from 'miragejs';

createServer({
  models:{
    book:Model,
  },
  seeds(server){
    server.db.loadData({
      books:[
        {
                id:1,
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid",
                pages: 354,
                type: "Read",
                createdAt: new Date("2023-04-22"),
              },
              {
                id:2,
                title: "Normal People",
                author: "Sally Rooney",
                pages: 263,
                type: "Unread",
                createdAt: new Date("2023-03-01")
              },
      ]
    });
  },
  routes(){
    this.namespace= "api";
    this.get("/books", ()=>{
      return this.schema.all('book');
    });
    this.post("/books", (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('book', data)
    })
  }
})
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


