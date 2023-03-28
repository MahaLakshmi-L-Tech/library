import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaBook, FaGift, FaCalculator } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousels from "./carousel";
import Nav from "react-bootstrap/Nav";
import jesus from "./images/jesus.jpg";
import bones from "./images/bones.jpg";
import star from "./images/star.jpg";
import life from "./images/life.jpg";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Carousels />
        <div className="searchBar">
          <InputGroup className="inputsearchBar">
            <Form.Control placeholder="First Name" className="forminput" />
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Middle Name"
              className="forminput"
            />
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Last Name"
              className="forminput"
            />

            <Form className="d-flex">
              <Button
                variant="outline-success"
                className="forminput buttonSearch"
              >
                Search Author
              </Button>
            </Form>
          </InputGroup>
        </div>
        <div>
          <div className="titlelibcontainer">
            <h1>Welcome To The Library</h1>
            <p>Welcome to the Most popular Library Today</p>
            <p style={{ alignSelf: "center" }}>
              -----------------------
              <FaBook />
              --------------------------
            </p>
          </div>

          <div className="libcontainer">
            <div className="icon">
              <FaGift size={"100px"} />
              <h4>EBOOKS</h4>

              <p style={{ marginLeft: "30px" }}>
                An elecronic version of a printed book that can be read on
                computer
              </p>
              <h6>
                <u>Read More</u>
              </h6>
            </div>
            <div className="icon">
              <FaBook size={"100px"} />
              <h4>AUDIOBOOKS</h4>

              <p style={{ marginLeft: "30px" }}>
                An audio or CD recordering of a reading of a book ,typically a
                novel
              </p>
              <h6>
                <u>Read More</u>
              </h6>
            </div>
            <div className="icon">
              <MdContentCopy size={"100px"} />
              <h4>MAGAZINE</h4>

              <p style={{ marginLeft: "30px" }}>
                A periadical publication containing airticals and illustions
                information
              </p>
              <h6>
                <u>Read More</u>
              </h6>
            </div>
            <div className="icon">
              <FaCalculator size={"100px"} />
              <h4>TEANS AND KIDS</h4>

              <p style={{ marginLeft: "30px" }}>
                The years of persons age from 13 to 19 and are the kids and
                teens
              </p>
              <h6>
                <u>Read More</u>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="titlelibcontainerbottomtop">
            <div className="titlelibcontainerbottom">
              <h1>Our Top Categories</h1>
              <p>Here are some of the Top Categories of the books available</p>
              <p style={{ alignSelf: "center" }}>
                -----------------------
                <FaBook />
                --------------------------
              </p>
            </div>
            <div className="titlecontainerbottom">
              <Navbar className="titlecontainerbottomnavbar" variant="light">
                <AiOutlineArrowLeft className="arrow" />
                <Navbar.Brand
                  style={{
                    color: "white",
                    backgroundColor: "orange",
                  }}
                >
                  Arts and Photography
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>Biographics and memories</Nav.Link>
                  <Nav.Link>Bussiness</Nav.Link>
                  <Nav.Link>Computers and Internet</Nav.Link>
                  <Nav.Link>
                    <AiOutlineArrowRight className="arrowdown" />
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </div>
          <div className="bookcontainer">
            <img
              className="d-block  bookimageHeight imgheight"
              src={jesus}
              alt="First slide"
            />
            <img
              className="d-block  bookimageHeight"
              src={star}
              alt="First slide"
            />
            <img
              className="d-block  bookimageHeight"
              src={bones}
              alt="First slide"
            />
            <img
              className="d-block  bookimageHeight"
              src={life}
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
