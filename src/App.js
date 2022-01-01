//here we define an array of objects outside the App component.  We want to render this array inside the browser.  I tried to render the array as though it were an object, but that did not work.  I must use JS methods to loop through the array, then do something with it.

//find a specific thing using list.find(); find many things with list.filter(); list.map will change the list somehow; list.forEach; list.sort; list.every; list.includes.  These all manipulate, transform, create, loop through arrays of objects.
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

//looping through the array is similar to JS but painting the DOM is different.  How I want the DOM to look has to be in the return statement between some tags(<li></li>) if there are many elements in the DOM.

//Use a "key" attribute to keep track of the order of the elements.

//So how do you include many elements with varied looks? Use spans to connct them
function App() {
  return(
    <div>
      <h1>My list</h1>

      <label htmlFor="search">Search</label>
      <input type="text" id="search" placeholder="type anything here" />

      <hr />
      
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
      </ul>

    

    </div>

  );
}
export default App