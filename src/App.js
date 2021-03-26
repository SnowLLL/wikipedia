import './index.css'

const displayHandler = () =>{
  document.getElementById('searchIcon').style.visibility = 'hidden';
  document.getElementById('inputBar').style.visibility = 'visible';
}
const reset = () => {
  document.getElementById('searchIcon').style.visibility = 'visible';
  document.getElementById('inputBar').style.visibility = 'hidden';
}

function App() {
  return (
    <div className="App">
      <div>
         <p>Click here for a random article</p>
         <div id="searchIcon">
            <i class="fas fa-search fa-7x" onClick ={displayHandler}></i>
         </div>
         <div id="inputBar">
            <input type="text" id="searchWords"></input>
            <i class="fas fa-times fa-3x" id="resetBIcon" onClick={reset}></i>
         </div>
         <p id="description">Click icon to search</p>
      </div>
    </div>
  );
}

export default App;
