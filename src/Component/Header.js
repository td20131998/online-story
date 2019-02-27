import React from 'react';
import { Row, Col } from 'reactstrap';
import '../Css/Header.css';

const Header = () => (
    <Row className="header">
        <Col>Logo</Col>
        <Col className="header-menu center">Khám phá</Col>
        <Col className="header-menu">Viết</Col>
        <Col className="header-menu">Cộng đồng</Col>
        <Col>Search</Col>
        <Col>Đăng nhập</Col>
        <Col>Đăng ký</Col>
    </Row>
);

export default Header;