import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { bgcolor, Container } from "@mui/system";
import { AlignVerticalCenter } from "@mui/icons-material";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from '@mui/material/Typography'

const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function FullWidthGrid() {
  return (
    <Container maxWidth='md'>
    <Card sx={{ zIndex: 1}}>
      <CardContent>
        <Box sx={{ flexGrow: 1, bgcolor: "black"}}>
          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid xs={6} md={6}>
              <Item>xs=6 md=4</Item>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
    </Container>
  );
}