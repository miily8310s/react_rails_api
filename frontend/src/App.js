import React, { Component } from "react";
import PostList from "./components/PostList";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    const posts = [];
    this.state = {
      posts,
    };
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    // axios.get(`http://localhost:8000/api/v1/posts/`).then((res) => {
    axios.get(`${process.env.REACT_APP_API}/api/v1/posts/`).then((res) => {
      this.setState({
        posts: res.data.data,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const posts = this.state.posts.slice();
    const countPost = this.state.posts.length + 1;

    // posts.push({
    //   id: countPost,
    //   title: title,
    //   completed: false,
    // });

    axios
      // .post(`http://localhost:8000/api/v1/posts/`, {
      .post(`${process.env.REACT_APP_API}/api/v1/posts/`, {
        title: `title${countPost}`,
        note: title,
      })
      .then((res) => {
        // res.data.data;
        this.setState({ posts: [...this.state.posts, res.data.data] });
      });

    // this.setState({ posts: [...this.state.posts, res.data.data] });
    // this.setState({ countPost });

    e.target.title.value = "";
  }

  deletePost(id) {
    const num = this.state.posts[id - 1].id;
    console.log(num);
    // axios.delete(`http://localhost:8000/api/v1/posts/${num}`).then((res) => {
    axios
      .delete(`${process.env.REACT_APP_API}/api/v1/posts/${num}`)
      .then((res) => {
        const posts = [...this.state.posts.filter((post) => post.id !== id)];
        console.log(posts);
        this.setState({
          posts,
        });
      });
    // const posts = [...this.state.posts.filter((post) => post.id !== id)];
    // console.log(posts);
    // this.setState({
    //   posts,
    // });
  }

  render() {
    return (
      <div className="list">
        <h2>Check Posts</h2>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <PostList posts={this.state.posts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default App;
