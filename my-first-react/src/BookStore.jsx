export default function BookStore({books}){
  return (
     <div>
       <h4>Book: {books.length} </h4>
       {
        <books className="map"></books>
       }
     </div>
  )
}