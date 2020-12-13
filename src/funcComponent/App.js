import React from 'react';
import ShinYS from './ShinYS';
import Food from './Food';


function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <ShinYS />
      <ShinYS2 test1="김치" test2={[true, 1, 2, 3]} />
      <ShinYS3 fav="떡볶이" />
      <ShinYS3 fav="라면" />
      <Food />

    </div>
  );
}

function ShinYS2(props) {
  console.log(props);
  return <h2>ShinYS2 {props.test1}</h2>;
}

function ShinYS3({ fav }) {
  return <h2>즐겨먹는 음식은 : {fav}</h2>;
}

export default App;
