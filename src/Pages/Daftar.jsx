import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

function Daftar() {
  const [formDaftar, setFormDaftar] = useState({
    nama: "",
    email: "",
    nomorHp: "",
    semester: null,
    ipk: null,
    beasiswa: "",
    berkas: "",
  });

  useEffect(() => {
    document.title = "Daftar Beasiswa";
    handleSemesterChange(formDaftar.semester);
  }, [formDaftar.semester]);
  const navigate = useNavigate();
  const [setIpk] = useState("");
  const [beasiswa, setBeasiswa] = useState("");

  const handleSemesterChange = (value) => {
    switch (value) {
      case 1:
        setFormDaftar({ ...formDaftar, ipk: "4.00" });
        break;
      case 2:
        setFormDaftar({ ...formDaftar, ipk: "3.70" });
        break;
      case 3:
        setFormDaftar({ ...formDaftar, ipk: "2.84" });
        break;
      case 4:
        setFormDaftar({ ...formDaftar, ipk: "3.15" });
        break;
      case 5:
        setFormDaftar({ ...formDaftar, ipk: "1.78" });
        break;
      case 6:
        setFormDaftar({ ...formDaftar, ipk: "2.53" });
        break;
      case 7:
        setFormDaftar({ ...formDaftar, ipk: "3.60" });
        break;
      case 8:
        setFormDaftar({ ...formDaftar, ipk: "2.98" });
        break;
      // tambahkan case sesuai dengan jumlah semester yang ada
      default:
        setFormDaftar({ ...formDaftar, ipk: "Data tidak tersedia" });
        break;
    }
  };

  // onChange={(e) => {
  //   setFormDaftar({
  //     ...formDaftar,
  //     semester: e.target.value,
  //   });
  // }}

  // const handleIpkChange = (event) => {
  //   const newIpk = event.target.value;
  //   setIpk(newIpk);

  //   if (newIpk < 3) {
  //     setBeasiswa("");
  //   }
  // };

  const handleSubmitOrder = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: `http://localhost:4000/api/mahasiswa`,
        data: data,
      });
      navigate("/hasil");
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>Daftar Beasiswa</h1>
          <Container>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                border: "1px solid black",
                padding: "15px",
                marginBottom: "60px",
              }}
            >
              <Container>
                <h2 style={{ paddingBottom: "30px" }}>
                  Form Registrasi Beasiswa
                </h2>
                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Masukkan Nama</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <TextField
                      label="Nama Lengkap"
                      placeholder="Masukkan Nama"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setFormDaftar({
                          ...formDaftar,
                          nama: e.target.value,
                        });
                      }}
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Masukkan Email</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <TextField
                      label="Email"
                      type="email"
                      placeholder="email@example.com"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setFormDaftar({
                          ...formDaftar,
                          email: e.target.value,
                        });
                      }}
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Masukkan Nomor HP</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <TextField
                      label="Nomor HP"
                      type="number"
                      placeholder="08XXXXXXXXXX"
                      style={{ width: "100%" }}
                      required={
                        formDaftar.nomorHp === "" || formDaftar.nomorHp < 0
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setFormDaftar({
                          ...formDaftar,
                          nomorHp: e.target.value,
                        });
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Semester saat ini</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        placeholder="Pilih Semester"
                      >
                        Semester
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Semester"
                        onChange={(e) => {
                          setFormDaftar({
                            ...formDaftar,
                            semester: e.target.value,
                          });
                        }}
                        required
                      >
                        <MenuItem value={1}>Semester 1</MenuItem>
                        <MenuItem value={2}>Semester 2</MenuItem>
                        <MenuItem value={3}>Semester 3</MenuItem>
                        <MenuItem value={4}>Semester 4</MenuItem>
                        <MenuItem value={5}>Semester 5</MenuItem>
                        <MenuItem value={6}>Semester 6</MenuItem>
                        <MenuItem value={7}>Semester 7</MenuItem>
                        <MenuItem value={8}>Semester 8</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">IPK terakhir</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <TextField
                      placeholder="IPK"
                      type="number"
                      style={{ width: "100%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      value={formDaftar.ipk}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Pilihan Beasiswa</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        placeholder="Pilih Beasiswa"
                      >
                        Beasiswa
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Beasiswa"
                        onChange={(e) => {
                          setFormDaftar({
                            ...formDaftar,
                            beasiswa: e.target.value,
                          });
                        }}
                        disabled={
                          formDaftar.ipk < 3 || formDaftar.semester === null
                        }
                      >
                        <MenuItem value={"Beasiswa Akademik"}>
                          Beasiswa Akademik
                        </MenuItem>
                        <MenuItem value={"Beasiswa Non-Akademik"}>
                          Beasiswa Non-Akademik
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={3}>
                    <Typography variant="h6">Upload Berkas Syarat</Typography>
                  </Grid>
                  <Grid item lg={9}>
                    <Button
                      variant="outlined"
                      component="label"
                      onChange={(e) => {
                        setFormDaftar({
                          ...formDaftar,
                          berkas: e.target.files[0].name,
                        });
                      }}
                      disabled={
                        formDaftar.ipk < 3 || formDaftar.semester === null
                      }
                    >
                      Choose File...
                      <input
                        hidden
                        accept="image/pdf/zip/*"
                        multiple
                        type="file"
                      />
                    </Button>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={10}
                  style={{ alignItems: "center", paddingBottom: "30px" }}
                >
                  <Grid item lg={6}>
                    <Button
                      variant="contained"
                      component="label"
                      onClick={() => {
                        if (
                          /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(
                            formDaftar.email
                          )
                        ) {
                          handleSubmitOrder(formDaftar);
                        } else {
                          alert("Lengkapi email dengan benar");
                        }
                      }}
                      disabled={
                        formDaftar.ipk < 3 ||
                        formDaftar.nama === "" ||
                        formDaftar.email === "" ||
                        formDaftar.nomorHp === "" ||
                        formDaftar.nomorHp < 0 ||
                        formDaftar.semester === null ||
                        formDaftar.ipk === null ||
                        formDaftar.beasiswa === "" ||
                        formDaftar.berkas === ""
                      }
                      sx={{ width: "100%", height: "40px" }}
                    >
                      Daftar
                    </Button>
                  </Grid>
                  <Grid item lg={6}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        width: "100%",
                        height: "40px",
                      }}
                      onClick={() => navigate("/")}
                    >
                      Batal
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
}

export default Daftar;
