import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeGridItem from './components/HomeGridItem';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
        <Typography pt={1} variant='h5'>Computer Science</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Decimal to Binary and Binary to Decimal" path="/decbinandbindec"/>
            <HomeGridItem calcName="Hexadecimal to Binary and Binary to Hexadecimal" path="/hexbinandbinhex"/>
            <HomeGridItem calcName="Octal to Binary and Binary to Octal" path="/octbinandbinoct"/>
            <HomeGridItem calcName="Binary Adder" path="/binaryadder"/>
            <HomeGridItem calcName="Octal Adder" path="/octaladder"/>
            <HomeGridItem calcName="Hexadecimal Adder" path="/hexadecimaladder"/>
        </Grid>
        <br/>
        <Typography pt={1} variant='h5'>Mathematical</Typography>
        <hr/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={1}>
            <HomeGridItem calcName="Simple Interest" path="/simpleinterest"/>
            <HomeGridItem calcName="Compound Interest" path="/compoundinterest"/>
        </Grid>
    </Container>
  );
}