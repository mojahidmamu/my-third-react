
// export default function Todo({task}){
//   return (
//     <li>Task: {task} </li>
//   )
// }

// conditional rendaring option: 01
// export default function Todo({task, isDone}){
//   if(isDone === true){
//     return <li>Finished: {task} </li>
//   }else{
//     return <li>Work on: {task} </li>
//   }
  
// }

// conditional rendaring option: 02
// export default function Todo({task, isDone}){
//     if(isDone){
//       return  <li>Finish: {task} </li>
//     }
//     return <li>Work on: {task} </li>
//   }

// conditional rendaring option: 03=>ternery operator
// export default function Todo({task, isDone}){
//      return (
//       <li> {isDone ? 'Finished' : 'work on'} : {task} </li>
//      )
//   }

// conditional rendaring option: 04 => &&
// export default function Todo({task, isDone}){
//   return (
//    <li> {task}: {isDone && 'Done'}  </li>
//   )
// }

// conditional rendaring option: 05 => ||
export default function Todo({task, isDone}){
  return (
   <li> {task} {isDone || ': Do it'}  </li>
  )
}
