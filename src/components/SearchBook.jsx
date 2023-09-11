import { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Container, Row } from "react-bootstrap";
import Book from "./Book";
import CommentArea from "./CommentArea";

class SearchBook extends Component {
  state = {
    searchValue: "",
    selected: null,
  };

  setSelectedValue = (value) => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row className='justify-content-center'>
            <Col md='8' className='px-2 my-3'>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search a book'
                  className='me-2'
                  aria-label='Search'
                  onChange={(event) => this.setState({ searchValue: event.target.value })}
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs='9'>
              <Row className='row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-3 border-1 border-black gy-2'>
                {this.props.books
                  .filter((book) => book.title.toLowerCase().includes(this.state.searchValue))
                  .map((book, index) => (
                    <Col key={`book-${index}`}>
                      <Book
                        src={book.img}
                        title={book.title}
                        asin={book.asin}
                        selected={this.state.selected}
                        setSelectedValue={this.setSelectedValue}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>

            <Col xs='3'>
              <CommentArea asin={this.state.selected} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchBook;
