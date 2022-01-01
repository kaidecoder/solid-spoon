import Item from "./Item"

const list = [
    {
      title: "React",
      url: "Https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
    
  ]

function List (){
    return(
        <>
            <ul>
        {list.map(function (item) {
          return (
          <p key={item.objectID}>
              <span><h1>Title: <a href={item.url}>{item.title}</a></h1></span>
              <span><h2>Author: {item.author}</h2></span>
              <span><h3>Comments: {item.num_comments}</h3></span>
              <span><h3>Points: {item.points}</h3></span>

          </p>

          
          )
        })}

        <Item />
      </ul>
        
        </>

    );
}
export default List