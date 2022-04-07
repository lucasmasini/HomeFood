import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Sobre Nosotros</Heading>
                        <FooterLink href="#">HomeFood</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Mision</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contacto</Heading>
                        <FooterLink href="#">Mail: contacto@homefood.com</FooterLink>
                        <FooterLink href="#">Ayuda</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Redes</Heading>
                        <FooterLink target='_blank' href="https://m.facebook.com/home.php?_rdr">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink target='_blank' href="https://www.instagram.com/?hl=es">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink target='_blank' href="https://twitter.com/home?lang=es">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;