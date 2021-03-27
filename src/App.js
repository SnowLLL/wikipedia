import './index.css'
import React from 'react';

function App() {  
  const [state, setstate] = React.useState({
    value:''
  })
  const [items, setItems] = React.useState({
    title:'',
    pageid:''
  });

  const displayHandler = (e) =>{
    document.getElementById('searchIcon').style.visibility = 'hidden';
    document.getElementById('inputBar').style.visibility = 'visible';
    document.getElementById('description').style.visibility = 'hidden';
    
  }
  const reset = () => {
    document.getElementById('searchIcon').style.visibility = 'visible';
    document.getElementById('inputBar').style.visibility = 'hidden';
    document.getElementById('description').style.visibility = 'visible';
    document.getElementById('searchResult').innerHTML ='';
    setstate({
      value:''
    });
  }

  const handleChange = (e) => {
      setstate({
        value: e.target.value
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('inputBar').style.visibility = 'visible';
    getContents();
  }

  const getContents = () =>{
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${state.value}`)
    .then(res=>res.json())
    .then(result=>{
      result = result.query.search;

      result.map((item)=>{
        setItems({
          title: item.title,
          pageid: item.pageid
        })
        return document.getElementById('searchResult').insertAdjacentHTML('beforeend',
               "<div><a href='https://en.wikipedia.org/?curid="+item.pageid+"'><h3>"+item.title+"</h3></a></div>");
      })
    })
  }

  return (
    <div className="App">
      <div>
         <p>Click here for a random article</p>
         <div id="searchIcon">
            <i className="fas fa-search fa-7x" onClick ={displayHandler}></i>
         </div>
         <div id="inputBar"> 
            <form onSubmit={handleSubmit}>
              <input type="text" id="searchWords" name='words' value={state.value} onChange={handleChange}></input>
              <i className="fas fa-times fa-3x" id="resetBIcon" onClick={reset}></i>
              <p id="searchResult" />
            </form>
         </div>
         <p id="description">Click icon to search</p>
      </div>
    </div>
  );
}

export default App;
