import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
// import Friends from './Friends'

function App() {
  // const actors =['Sakib khan', 'Raj', 'Siam'];
  const singers = [
    {id: 1, name: 'James', age: 45},
    {id: 2, name: 'Nobel', age: 25},
    {id: 3, name: 'Sumi' , age: 65},
  ];

  const books = [
    {id:1, name: 'Bangla', price: 100},
    {id:2, name: 'English', price: 150},
    {id:3, name: 'Math', pricje: 200},
  ]
  return (
    <>
      <h2>Abdullah all Mojahid</h2> 
      <h1>Vite + React</h1>
      {/* <Friends></Friends> */}
       <BookStore books={books}></BookStore>

       {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
       } */}

      {/* <Actor name='Mojahid'></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo
        task='learm react'
        isDone={true}></Todo>
      <Todo 
        task='explore concept'
        isDone={false}></Todo>
      <Todo
        task='Try JSX' 
        isDone={true}></Todo> */}

       {/* <Person></Person>
       <Device name='laptop' price='100'></Device>
       <Device name='mobile'></Device>
       <Device></Device>
       <Person></Person>
       <Student gtade='7' score='98'></Student>
       <Student grade='8' score='77'></Student>
       <Student></Student>
       <Developer></Developer> */}
    </>
  )
}
function Device (props){
  // console.log(props);
  return (
    <h2>This is device: {props.name} and price: {props.price} </h2>
  )
}
function Person (){
  const age = 15;
  const money = 20;
  const person = {name: 'mojhahid', age: 14};

  return (
    <h3>I am {person.name} with age: {person.age}</h3>
  )
}

const {grade, score} = {gtade: '7', score: '98'};
function Student({grade = 0, score = 1}){
  console.log(grade, score);
  const age = 14;
  const name = 'Mojahid';
  return (
  <div className='student'>
    <h1>This is a student, </h1>
    <h3>Name: {name} </h3>
    <p>Age:{grade} </p>
    <p>Score:{score}</p>
</div>
)
}

function Developer (){
  const developerStyle = {
    margin: '20px', 
    border: '2px solid red',
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Mojahid</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
