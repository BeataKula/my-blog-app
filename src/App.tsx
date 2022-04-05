import React , {Component} from "react";
import Post from "./components/Post";
import "./App.css";

class App extends Component{
  state = {
      posts:[]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({posts: json});
      });
  }

  render(){
    const postsList = this.state.posts.map((post) => {
      return <Post key={post['id']}  post={post} />;
    });

    return (
      <div className="App">
          <header className="App-header">
              <h1>Blog Beaty</h1>
          </header>
          <div>
              <ul className="post-list">{postsList}</ul>
          </div>
      </div>
  );
  }
}

export default App;
