import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<>
			<nav className="navbar">
				<Logo />
				<Link to="/login">
					<h3 id="logo">
						<i className="bx bx-log-in"></i> LogIn
					</h3>
				</Link>
			</nav>
			<div className="slider">
                <Carousel>
                    <div>
                        <img src="images/slide1.jpg" alt="slide 1"/>
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="images/slide2.jpg" alt="slide 2"/>
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="images/slide3.jpg" alt="slide 3"/>
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>	
			</div>
                
            <div className="cards">
                
                <Card>
                    <Card.Img variant="top" src="images/card1.jpg" alt="card 1"/>
                    <Card.Body>
                        <Card.Text>
                        Banking is an industry that handles cash, credit, and other financial transactions.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="images/card2.jpg" alt="card 2"/>
                    <Card.Body>
                        <Card.Text>
                        Transition from the earlier using ATM machines to new age online banking.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="images/card3.jpg" alt="card 3"/>
                    <Card.Body>
                        <Card.Text>
                        Online banking also known as Internet banking allows users to conduct financial transactions via internet.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src="images/card4.jpg" alt="card 4"/>
                    <Card.Body>
                        <Card.Text>
                        Through online banking your money is safe and is always growing.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="payment">
                <h3>Payment & Security</h3>
                <div className="icons">
                <i class='bx bxl-paypal' ></i>
                <i class='bx bxs-credit-card-alt'></i>
                <i class='bx bxs-credit-card' ></i>
                <i class='bx bxl-visa' ></i>
                <i class='bx bxl-mastercard'></i>
                </div>

            </div>
            <footer className="footer">
                <h3>©Copyright 2022<i className='bx bxs-paper-plane' ></i> Avion Bank</h3>
                <div className="icons">
                    <i class='bx bxl-facebook' ></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-twitter' ></i>
                </div>
            </footer>
		</>
	);
};

export default HomePage;
