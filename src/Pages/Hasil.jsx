import React, { Fragment, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

function Hasil() {
  const [listOrder, setListOrder] = useState([]);

  React.useEffect(() => {
    document.title = "Hasil Beasiswa";
    getListOrder();
  }, []);

  const getListOrder = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:4000/api/mahasiswa`,
      });
      // console.log(res);
      setListOrder(res.data.data);
      // console.log(res.data);
      //   navigate('/');
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            marginBottom: "40px",
          }}
        >
          Hasil Beasiswa
        </h1>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderBlock: "solid" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Nomor HP</TableCell>
                <TableCell align="center">Semester</TableCell>
                <TableCell align="center">IPK</TableCell>
                <TableCell align="center">Beasiswa</TableCell>
                <TableCell align="center">Berkas</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOrder.length !== 0
                ? listOrder.map((item, index) => {
                    return (
                      <TableRow
                        key={index + 1}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{item.nama}</TableCell>
                        <TableCell align="center">{item.email}</TableCell>
                        <TableCell align="center">{item.nomorHp}</TableCell>
                        <TableCell align="center">{item.semester}</TableCell>
                        <TableCell align="center">{item.ipk}</TableCell>
                        <TableCell align="center">{item.beasiswa}</TableCell>
                        <TableCell align="center">{item.berkas}</TableCell>
                        <TableCell align="center">{item.status}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Fragment>
  );
}

export default Hasil;
