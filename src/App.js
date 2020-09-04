import React,{useState}  from 'react';
import './App.css';
import Button from './UI/Button/Button'
import Image from './UI/Image/Image'

const images_links=["https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

function App() {
  const [state,updateState]=useState({
    selected_image:0
  })
  function imageChangeHandler(event){
    updateState({selected_image:parseInt(event.target.id)})
  }
   function imageClickedHandler(){
    let selected=(state.selected_image===2)? 0:state.selected_image+1
    updateState({selected_image:parseInt(selected)})
   }
  return (
    <div className="App">
      <Button clicked={imageChangeHandler} id={0} selected={(state.selected_image===0)} >First</Button>
      <div className="sub__div">
        <Image clicked={imageClickedHandler} src={images_links[state.selected_image]}></Image>
        <Button clicked={imageChangeHandler} id={1} selected={(state.selected_image===1)}>Second</Button>
      </div>
      <Button clicked={imageChangeHandler} id={2} selected={(state.selected_image===2)}>Third</Button>
    </div>
  );
}

export default App;
