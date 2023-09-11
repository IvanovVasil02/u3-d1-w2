import { Component } from "react";
import Card from "react-bootstrap/Card";

class Book extends Component {
  checkSelect = (value) => (value === this.props.selected ? "selected" : "");

  render() {
    return (
      <>
        <Card
          onClick={() => this.props.setSelectedValue(this.props.asin)}
          className={(this.checkSelect(this.props.asin), "h-100")}
        >
          <Card.Img variant='top' src={this.props.src} />
          <Card.Body className='d-flex'>
            <Card.Title className='mt-auto'> {this.props.title}$</Card.Title>
          </Card.Body>
        </Card>

        {/* {this.state.selected && <CommentArea asin={this.props.asin} />} */}
      </>
    );
  }
}

export default Book;
