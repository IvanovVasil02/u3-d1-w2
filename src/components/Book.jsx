import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CommentArea from "./CommentArea";


class Book extends Component{

    state = {
        selected : false,
       
    }

    checkSelect = event => {
        this.setState({selected: !this.state.selected});
    }

    componentDidMount = ()=>{
        
    }
           

    render(){
        return( 
                <>
                    <Card  onClick={()=>this.checkSelect()} style={{border: this.state.selected? "2px solid green" : "none"}}  > 
                        <Card.Img variant="top" src={this.props.src} className="h-100 object-fit-cover" />
                        <Card.Body className="d-flex">
                            <Card.Title className="mt-auto"> {this.props.title}$</Card.Title>
                        </Card.Body>
                    </Card>
                    
                    {this.state.selected && <CommentArea  asin={this.props.asin} />}
                </>
      )
    }
}

export default Book;