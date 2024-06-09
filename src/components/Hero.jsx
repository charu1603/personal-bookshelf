import React, { useState } from 'react';
import { Box, Container, Stack, Typography, TextField , Button} from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function Hero({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <Box
      id="hero" sx={(theme) => ({width: '100%',backgroundImage: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,backgroundSize: '100% 20%',backgroundRepeat: 'no-repeat',
      })}
    >
      <Container sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',textAlign: 'center',justifyContent: 'center',pt: { xs: 14, sm: 40 },pb: { xs: 8, sm: 12 },height: '60vh',}} >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography variant="h1"sx={{display: 'flex',flexDirection: { xs: 'column', md: 'row' },alignSelf: 'center',textAlign: 'center',fontSize: 'clamp(3.5rem, 10vw, 4rem)',}}>
            Inspiring stories of&nbsp;
            <Typography component="span"variant="h1"sx={{fontSize: 'clamp(3rem, 10vw, 4rem)',color: 'primary.light',}}>
              products
            </Typography>
          </Typography>
          <Typography textAlign="center" color="text.secondary" sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}>
            Explore our cutting-edge books, delivering high-quality solutions tailored to your needs.
            Elevate your experience with top-tier features and services.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }}spacing={1} useFlexGaptextAlign="center" sx={{ alignSelf: 'center', width: { sm: '100%', md: '70%' } }}>
            <TextField id="search" label="Search books" variant="outlined" value={searchTerm} onChange={handleSearch} sx={{ width: { xs: '90%', sm: '80%' } }}/>
             <Button variant="contained" color="primary" onClick={handleSearch} sx={{ width: 'fit-content' }}>
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
