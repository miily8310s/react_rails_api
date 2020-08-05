import React, { useContext, Component } from "react";
import Post from "./Post";
import PropTypes from "prop-types";

// export default class PostList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [],
//     };
//   }

//   componentDidMount() {
//     // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//     //   const persons = res.data;
//     //   console.log(persons);
//     //   this.setState({ persons });
//     // });
//     axios.get(`http://localhost:8000/api/v1/posts/`).then((res) => {
//       this.setState({
//         persons: res.data.data,
//       });
//     });
//   }

//   render() {
//     const persons = this.state.persons;
//     return (
//       <ul>
//         {persons.map((person) => (
//           <li key={person.title}>
//             {person.title} {person.note}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

class PostList extends Component {
  render() {
    return this.props.posts.map((post, i) => (
      <>
        <label>
          <input type="checkbox"></input>
          <i></i>
          <Post key={post.id} post={post} deletePost={this.props.deletePost} />
          <button id="trash" onClick={() => this.props.deletePost(i + 1)}>
            ×
          </button>
        </label>
      </>
    ));
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostList;
