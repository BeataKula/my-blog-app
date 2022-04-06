import React , {Component} from "react";
import Post from "./components/Post";
import Loader from "./components/Loader";
import Message from "./components/Message";

import "./App.css";

class App extends Component{
  state = {
      posts:[],
      isloaded: false,
      isError: false,
      headerMessageText: "",
      messageText: "",
      showMessage: false,
      //Prawdopodobnie tu mu musze jakoś wskazać, że to jest typu sizeTypeString
      categoryMessage: "info"
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
                //TODO zmienić na  category={this.state.categoryMessage} - nie działa nie wiem czemu ?????
                category="negative"
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
