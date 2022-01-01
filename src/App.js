import List from "./components/List"
import Search from "./components/Search"

//here we define an array of objects outside the App component.  We want to render this array inside the browser.  I tried to render the array as though it were an object, but that did not work.  I must use JS methods to loop through the array, then do something with it.

//find a specific thing using list.find(); find many things with list.filter(); list.map will change the list somehow; list.forEach; list.sort; list.every; list.includes.  These all manipulate, transform, create, loop through arrays of objects.


//looping through the array is similar to JS but painting the DOM is different.  How I want the DOM to look has to be in the return statement between some tags(<li></li>) if there are many elements in the DOM.

//Use a "key" attribute to keep track of the order of the elements.

//So how do you include many elements with varied looks? Use spans to connct them
function App() {
  return(
    <div>
      <h1>My list</h1>

      <Search />

      <hr />
      
      <List />

    

    </div>

  );
}
export default App