import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AddCard } from "../../redux/cartSlice";
import axios from "axios";
import Header from "../../Components/Header/Header";
const theme = createTheme();

const Index = () => {
  const [ListProducts, setListProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parms = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/product/search/${parms.key}`
      )
      .then((res) => setListProducts(res.data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ marginTop: "40px" }}
        >
          <span>Sản Phẩm Tìm Kiếm</span>
        </Typography>

        <Container sx={{ py: 8 }} maxWidth="px">
          <Grid container spacing={1} sx={{ marginLeft: "40px" }}>
            {ListProducts.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ width: "300px" }}>
                  <NavLink
                    to={`detailProduct/${item._id}`}
                    className="bg-image rounded hover-zoom"
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "300px" }}
                      image={item.imageProduct}
                      alt="random"
                    />
                  </NavLink>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.nameProduct}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => dispatch(AddCard(item))}
                    >
                      Mua Hàng
                    </Button>
                    <Button size="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Index;
