import React from 'react';
// import './Home.css';
type Props = {
  isCurrentlyDisplayed: boolean
}
const Home: React.FC<Props> = (props) => {
  return (
    <div className="home">
      <h1>Alex Smith</h1>
      <p>Web Developper</p>
    </div>
  );
}

export default Home;
