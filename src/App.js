
const title = "React" //define outside the function is best.  Gets rendered one time

//this is a basic javaScript object whose parts can be used in the DOM
const welcome = {
  greeting: "Hey",
  title: "React",
};

//Note that I can create a function outside the main App, then call this function inside the App. My function takes a parameter, which I must provide when I call it.

function getTitle(title) {
  return title;
}

function App() {
//if variable defined here, then it should be dependent on parameters in the function.  gets rendered every time the function runs.
  return (
    //This mixture of html and javaScript is called JSX.  This is what gets displayed in the browser.
  
    //When creating inputs in React use htmlFor instead of for.
    <div>
      <h1>
        Hello there {title}
        {welcome.greeting} {welcome.title}
        Good morning {getTitle("Jocelyn")}
      </h1>

      
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" placeholder="Search for anything"/>


    </div>
      
  
  );
}

export default App;
