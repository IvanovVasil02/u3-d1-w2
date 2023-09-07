import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


class CommentArea extends Component{

  state = {
    comments : [],
  }

  fetchComments = async (selectedBook)=>{
    const URL = "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin;
    try{
      
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjQwYWMwMzRmZjAwMTQwM2Y1NmYiLCJpYXQiOjE2OTI5NTE1NjIsImV4cCI6MTY5NDE2MTE2Mn0.WzUEH9dUMb6Rhhvrm-VSLjHN5UujsM0u6efWoRms0A4",    
         }
      });

      const data = await response.json();

      this.setState({ comments: data });

      console.log(data)

    }catch(error){
      console.log(error);
    }

  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render(){
    return (
      <ListGroup variant="flush" className={this.props.className}>
          
         { this.state.comments.map((comm, index) => (
            <ListGroup.Item><b>{comm.author}:</b> {comm.comment}</ListGroup.Item>
      
          ))
        }
      </ListGroup>
     
       
       
     
    ); 
  }
}

export default CommentArea;