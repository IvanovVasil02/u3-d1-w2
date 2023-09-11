import { Component } from "react";
import { Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  fetchComments = async (selectedBook) => {
    this.setState({ isLoading: true });
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZmMGUyMzIxNGMzYTAwMTQzYzYyMTQiLCJpYXQiOjE2OTQ0MzY4OTksImV4cCI6MTY5NTY0NjQ5OX0.snMOVlbxPhtOos0CeGr0k2ua7Fh0CHimBND0wwDHrZY",
        },
      });

      const data = await response.json();
      let comments = await data.filter((book) => book.elementId === this.props.asin);
      console.log(data);
      console.log(comments);
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <ListGroup variant='flush' className='sticky-top rounded-4 overflow-hidden'>
        <ListGroup.Item className='d-flex align-items-start bg-success text-white'>Recensioni libro: </ListGroup.Item>

        {this.state.comments <= 0 && (
          <ListGroup.Item variant='secondary' className='rounded-bottom-4'>
            Seleziona un libro per vedere le recensioni...
          </ListGroup.Item>
        )}

        {this.state.comments &&
          this.state.comments.map((comm) => (
            <ListGroup.Item variant='secondary' key={comm["_id"]}>
              <b>{comm.author}:</b> {comm.comment}
            </ListGroup.Item>
          ))}

        {this.state.isLoading && <Spinner animation='border' variant='primary' className='m-auto mt-3' />}
      </ListGroup>
    );
  }
}

export default CommentArea;
