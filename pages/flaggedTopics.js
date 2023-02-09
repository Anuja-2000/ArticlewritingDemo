/*
first my type
import Image from 'next/legacy/image'
import Link from 'next/Link'
import { Box } from '@mui/material'
function flaggedTopics() {
  return (
    <div className="bg-image-wrapper">

     <Image src="/writing.png.jpg"
        alt="Picture of the writing of Admins"
        layout="fill"
      />
   <Box className='text-Box'> Flagged Topics</Box>
   </div>
  );
}
export default flaggedTopics 
*/
/*
Attemp to create a ui by mui*/
import * as React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>Topic</Item>
      </Grid>
      <Grid item xs={3}>
        <Item>Keyword</Item>
      </Grid>
      <Grid item xs={3}>
        <Item><button type="submit" onClick={}>Accept</button></Item>
      </Grid>
      <Grid item xs={3}>
        <Item><button type="submit" onClick={}>Reject</button></Item>
      </Grid>
      
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Container maxWidth="sm" >

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        {/*From hear Should be form a while loop to get rows of topics in our project*/}
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
         </Grid> 
          <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

 /*data grid easy
 import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
*/