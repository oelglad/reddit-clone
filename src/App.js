import React from 'react';
// CSS Files
import './App.css';
import Post from './components/post'
// Custom components




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
   }
  
  }
  render() {
    return (
      <div className="App">
      <Post />
      </div>
    );
  }
}
export default App;
//This is similar to the mapping function in render() { return() }
// for (let i = 0; i < this.state.posts.length; i++) {
//   let post = this.state.posts[i];
//   <button onClick={(e) => this.upVote(post)}
// }