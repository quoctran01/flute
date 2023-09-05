import "./home.css";
import Header from "../../Components/Header/Header";
import ListProducts from "../../Components/ListProducts/ListProducts";
import Slider from "../../Components/Slider/Slider";
import { Col, Container, Row } from "react-bootstrap";
import MenuCategory from "../../Components/MenuCategory/Index";
import Footer from "../../Components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Menu/> */}
      <Container>
        <Slider />
      </Container>
      <ListProducts />
    </div>
  );
};

export default HomePage;
