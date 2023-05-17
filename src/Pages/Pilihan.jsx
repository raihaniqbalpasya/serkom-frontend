import { Fragment, useEffect } from "react";
import Navbar from "../Components/Navbar";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import imglink1 from "../Assets/PRESTASI-AKADEMIK.jpg";
import imglink2 from "../Assets/PRESTASI-NON-AKADEMIK.jpg";

function Pilihan() {
  useEffect(() => {
    document.title = "Pilihan Beasiswa";
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          Pilihan Beasiswa
        </h1>
        <Grid container spacing={5} sx={{ mt: "40px", ml: "20px" }}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imglink1}
                  alt="akademik"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Beasiswa Akademik
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem voluptates magni iste temporibus, quod iusto
                    obcaecati a tenetur, rerum magnam eaque officiis eos ab
                    voluptatem pariatur dolor possimus molestias neque.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imglink2}
                  alt="non-akademik"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Beasiswa Non-Akademik
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem voluptates magni iste temporibus, quod iusto
                    obcaecati a tenetur, rerum magnam eaque officiis eos ab
                    voluptatem pariatur dolor possimus molestias neque.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Pilihan;
