import { useState } from 'react';
import { sculptureList } from './data';
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FormControl, FormLabel } from "@mui/material";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleSelectChange(event: SelectChangeEvent<string>) {
    const selectedIndex = sculptureList.findIndex(sculpture => sculpture.name === event.target.value);
    if (selectedIndex !== -1) {
      setIndex(selectedIndex);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <Container maxWidth="sm" sx={{ width: '600px', height: 'auto', margin: '0 auto' }}>
      <Box component="section" sx={{ p: 2, border: '1px solid gray' }}>
        <>
        <Typography variant="h6" component="h6">
          <h2>SHAWN ASHLEE GUARIN - CPEITEL3</h2>
        </Typography>
          <Stack direction="row" spacing={2} justifyContent={'center'}>
            <Button 
              variant="contained"
              onClick={handleNextClick}
              color="primary"
              startIcon={<ArrowForwardIosIcon />}
              disabled={index === sculptureList.length - 1}>
              <Typography variant="h6" component="h6">
                NEXT
              </Typography>
            </Button>
            <Button 
                onClick={handleBackClick}
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIosNewIcon />}
                disabled={index === 0}
              >
                <Typography variant="h6" component="h6">
                  BACK
                </Typography>
            </Button>
          </Stack>
          
          <Typography variant="h4" fontWeight={'bold'} paddingTop={4} component="h2">
              {sculpture.name} 
          </Typography>

          <Typography variant="h6" fontSize={16} component="h6">
              {sculpture.artist} <br/>
              {/* {sculpture.records} */}
          </Typography>

          <Typography variant="h6" fontSize={12} paddingTop={3} component="h6">
            ({index + 1} of {sculptureList.length})
          </Typography>

          <Button
              onClick={handleMoreClick}
              sx={{
                margin: '5px',
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}>
              {showMore ? 'Hide' : 'Show'} details
          </Button>

        {showMore && <Typography variant="body1">{sculpture.description}</Typography>}
          <img 
            src={sculpture.url} 
            alt={sculpture.alt} />

        <SelectComponent index={index} onChange={handleSelectChange} />
        </>
      </Box>
    </Container>
  );
}

function SelectComponent({ index, onChange }: { index: number; onChange: (event: SelectChangeEvent<string>) => void }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
      <FormLabel sx={{ color: 'white' }}>Select an artist</FormLabel>
      <Select
        value={sculptureList[index].name}
        onChange={onChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'green',
            },
            '&:hover fieldset': {
              borderColor: 'darkgreen',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
          '.MuiSelect-icon': {
            color: 'green',
          },
        }}
      >
        {sculptureList.map((sculpture, i) => (
          <MenuItem key={i} value={sculpture.name} sx={{ color: 'black' }}>
            {sculpture.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}