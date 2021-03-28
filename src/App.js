import './index.css'
import React from 'react';

function App() {  
  const [state, setstate] = React.useState({
    value:''
  })
  // const [items, setItems] = React.useState({
  //   title:'',
  //   pageid:''
  // });

  const displayHandler = (e) =>{
    document.getElementById('searchIcon').style.visibility = 'hidden';
    document.getElementById('inputBar').style.visibility = 'visible';
  }
  const reset = () => {
    document.getElementById('searchIcon').style.visibility = 'visible';
    document.getElementById('inputBar').style.visibility = 'hidden';
  }

  const handleChange = (e) => {
      setstate({
        value: e.target.value
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getContents();
  }

  const getContents = () =>{
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${state.value}`)
    .then(res=>res.json())
    .then(result=>{
      result.query.search.map((item)=>{
        document.getElementById('searchResult').insertAdjacentHTML('afterend',
              "<p><a href='https://en.wikipedia.org/?curid="+item.pageid+"'><h3>"+item.title+"</h3></a></p>");
      })
    })
  }

  return (
    <div className="App">
      <div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/657px-Wikipedia-logo-v2.svg.png" alt="Wikipedia Logo" />
         <div id="searchIcon">
            <i className="fas fa-search fa-5x" onClick ={displayHandler}></i>
            <p>Click icon to search</p>
         </div>
         <div id="inputBar"> 
            <form onSubmit={handleSubmit}>
              <input type="text" id="searchWords" name='words' value={state.value} onChange={handleChange}></input>
              <i className="fas fa-times fa-3x" id="resetBIcon" onClick={reset}></i>
              <div id="searchResult" />
            </form>
         </div>
      </div>
    </div>
  );
}

export default App;
