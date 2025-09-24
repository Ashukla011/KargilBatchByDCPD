import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherApp from './components/WeatherApp/WeatherApp';
function App() {
  // condetional rendring 
 const isLogin = true;
 let content;
  if(!isLogin){
   content = <Header/>
  }else{
    content = <h1>Login First</h1>
  }
  const user = {
  name: 'K.S Chittra',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
  return (
    <>
     {/* {content}
      <Header 
      Name = {user.name} 
      className={"avatar"}
      imageURL={user.imageUrl}
      width={user.imageSize}
      height={user.imageSize}
      /> */}
      {/* {isLogin ?  <Header 
      Name = {user.name} 
      className={"avatar"}
      imageURL={user.imageUrl}
      width={user.imageSize}
      height={user.imageSize}
      />:<h1>Login First</h1>}
       */}
      {/* conditional ? operator.  */}
      {/* {isLogin &&  <Header 
      Name = {user.name} 
      className={"avatar"}
      imageURL={user.imageUrl}
      width={user.imageSize}
      height={user.imageSize}
      />} */}

      <WeatherApp/>
    </>
  )
}

export default App
