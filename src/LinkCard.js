import React from 'react';
import './AdminPanel.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import search from './images/search_icon.png'
import publish from './images/publisher_icon.png'
import { Link, animateScroll as scroll } from "react-scroll";

function LinkCard(props) {
  return (
    <div className="Admin-Panel_card">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.body}
          </Card.Text>
          <Button variant="primary" onClick={pressCardButton}>  Start  </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function pressCardButton() {
  scroll.scrollToTop()

}

export default LinkCard;
