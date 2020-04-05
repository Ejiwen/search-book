import React from "react";
import "./styles.css";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'JS',
    url: 'https://js.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'css',
    url: 'https://css.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
];



const serchBook = (e) => {
  let st = state.list.map(t => t.title);
  let s = e.target.value;
 if(st.includes(s))
 console.log("Find it");
}


export default function App() {
  this.state = {
    list,
  }
  return (
    <div className="App">
      <h1>Search Book</h1>
      <input onChange={serchBook} />
    </div>
  );
}
