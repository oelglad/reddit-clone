import React, {Component} from 'react';
import CreatePost from './createPost';
import PostList from './postList';
import 'font-awesome/css/font-awesome.min.css';


class Post extends Component {
constructor(props){
    super(props);

    this.state = {
        title: "",
      content: "",
      author: "Casey R Harding",
      voteCount: 0,
      comments: [],
      posts: [{
        title: "This is a post!",
        content: "My post is pretttttttttty good. It's about my day!",
        author: "Harding, Casey Harding",
        voteCount: 0,
        comments: ["this post sucks", "That guy is a jerk, don't listen to him"]
      }]
    }
  }
  onContentChange = (e) => {
    const name = e.target.name;
    const content = e.target.value;
    this.setState({
      [name]: content
    })
  }
  postSubmit = (e) => {
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
      posts,
      content: "",
      title: "",
    })
  }
  vote = (e, sentPost, operator) => {
    e.preventDefault();
    // const casey = [];
    //Filter, under the hood, is doing this
    // for (let i = 0; i < this.state.posts.length; i++) {
    //   if (this.state.posts[i].title !== sentPost.title) {
    //     casey.push(this.state.posts[i]);
    //   }
    // }
    const casey = this.state.posts.filter(checkPost => checkPost.title !== sentPost.title);
    switch(operator) {
      case "plus":
        sentPost.voteCount++
        break;
      case "minus":
        sentPost.voteCount--
        break;
      default:
        console.error("Something terrible occured in vote function")
    }
    this.setState({
      posts: [...casey, sentPost]
    })
  }
  render(){
      return (
          <div>
        <CreatePost
        postSubmit={this.postSubmit}
        onContentChange={this.onContentChange}
        title={this.state.title}
        content={this.state.content}
      />
      <PostList
      posts={this.state.posts}
      vote={this.vote}
      />
      </div>
      )
  }

    }




export default Post;