import React from 'react';
import CreatePost from './components/CreatePost'
import './App.css';
import { array } from '../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "Casey R Harding",
      voteCount:0 ,
      posts:[{
        title:"This is a post!",
        content:"My post is pretttttty good.It's about",
        author: " harding, Casey Harding",
        voteCount:0
      }]
    
    }
  }
  onContentChange =(e) => {
    const name = e.target.name;
    const content = e.target.value;
    this.setState({
      [name] : content
    })
  }
  postSubmit=(e)=>{
    e.preventDefault();
    const posts = this.state.posts;
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: 0
    }
    posts.push(newPost);

    this.setState({
      content:"",
      title: ""

    })
  }

  vote = (e, sentPost, operator)=> {
    e.preventDefault();
   
    // for(let i=0; i< this.state.posts.length; i++)
    // if(this.state.posts[i].title !== sentPost.title)
    const casey =this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    switch (operator) {
      case "plus":
        sentPost.voteCount++
        break;
        case "minus":
        sentPost.voteCount--
        break;
        default:
          console.error("something terrible occured in vote function")
    }
    this.setState({
      posts: [...casey, sentPost]
      // posts.push(sentpost)
    })
  }
  // downVote = (e, sentPost)=> {
  //   e.preventDefault();
  //   const casey=[]
    // for(let i=0; i< this.state.posts.length; i++)
    // if(this.state.posts[i].title !== sentPost.title)
    // const post =this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    // sentPost.voteCount--;
    // this.setState({
    //   posts: [...casey, sentPost]
      // posts.push(sentpost)
  //   })
  // }
  render() {
    return (
      <div className="App">
       <CreatePost 
          postSubmit={this.postSubmit}
          onContentChange = {this.onContentChange}
          titlle={this.state.title}
          content={this.state.content}
        />
        {this.state.posts.map((post, key)=>
          <div key={key} className={post.voteCount >= 0? "post-wrapper":"post-Wrapper post-wraper-negative"}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.voteCount}</p>
            <button onClick={(e) => this.vote(e, "plus")}>Vote UP!</button>
            <button onClick={(e) => this.vote(e, "minus")}>Vote DOWN!</button>
          </div>
          )}
      </div>
    );
  }
}
export default App;

// const arr =[1,2,3,4,5]
//array.map((val,key) => {
 // val.addEventListener('click', voteUp(val))
//})