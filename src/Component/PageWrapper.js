import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../Component/Header';
// import '../Css/PageWrapper.css';

class PageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            // <Container fluid={true}>
            //     <Header />
            // </Container>

            <div className="container">
                <div></div>
            </div>
        );
    }
}

export default PageWrapper;