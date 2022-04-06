import React , {Component} from "react";
import Post from "./components/Post";
import Loader from "./components/Loader";
import Message, { categoryTypeString }from "./components/Message";

import "./App.css";

type appStateType = {
  posts: Array<typeof Post>,
  isloaded: boolean,
  isError: boolean,
  headerMessageText: String,
  messageText: String,
  showMessage: boolean,
  categoryMessage: categoryTypeString
}

class App extends Component <{}, appStateType> {
  categoryMessageInfo: categoryTypeString = "info";

  state = {
      posts:[],
      isloaded: false,
      isError: false,
      headerMessageText: "",
      messageText: "",
      showMessage: false,
      categoryMessage: this.categoryMessageInfo
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => {
          if (response.status === 200) {
            return response.json();
          } else {
            this.setState({
              posts: [], 
              isloaded: false,
              isError:true,
              headerMessageText: "We're sorry we can't show you Blog!",
              messageText: "An error occurred while loading data: <br/>" + response.text,
              showMessage: true,
              categoryMessage: "negative",
            });

            return [];
          }
        }
      )
      .then(json => {
        this.setState({
            posts: json, 
            isloaded: true
        });
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
              <Loader isActive={!this.state.isloaded}/>
              <Message
                showMessage={this.state.showMessage}
                category={this.state.categoryMessage}
                headerText={this.state.headerMessageText}
                text={this.state.messageText}
                color="red"
                size="large"
              />
              <ul className="post-list">{postsList}</ul>
          </div>
      </div>
    );
  }
}

export default App;
