import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import Book from "./Book";

class SearchBook extends Component{

state = {

     searchValue : "",
  
}


render(){
    return(
          <>
               <Row className="justify-content-center">
                    <Col md="8" className="px-2 my-3">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search a book"
                                className="me-2"
                                aria-label="Search"
                                onChange={event => this.setState({ searchValue: event.target.value})}
                            />
                        </Form>  
                    </Col>
               </Row>
               <Row className="row-cols-4 px-3 border-1 border-black gy-2">
                    {
                    this.props.books.filter((book) => book.title.toLowerCase().includes(this.state.searchValue)).map((book, index) => (
                        <Col key={`book-${index}`}>
                            <Book src={book.img} title={book.title} asin={book.asin} />
                        </Col>
                     
                    ))
                     
                    }
               </Row>
          </>
    )
}
}

export default SearchBook;