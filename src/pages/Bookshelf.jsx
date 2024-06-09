import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Container, IconButton , Stack} from '@mui/material';
import Navbar from '../components/Navbar';
import { Delete } from '@mui/icons-material';

export default function Bookshelf() {
  const [bshelf, setbshelf] = useState(JSON.parse(localStorage.getItem('bshelf')) || []);

  useEffect(() => {
    const savedbshelf = JSON.parse(localStorage.getItem('bshelf')) || [];
    setbshelf(savedbshelf);
  }, []);

  const removeFrombshelf = (bookId) => {
    const updatedbshelf = bshelf.filter((book) => book.key !== bookId);
    setbshelf(updatedbshelf);
    localStorage.setItem('bshelf', JSON.stringify(updatedbshelf));
  };
  return (
    <><Navbar />
    <Container sx={{ display: 'flex', flexDirection: 'column',alignItems: 'left',pt: { xs: 14, sm: 20 },pb: { xs: 8, sm: 12 }, }} >
      <Typography textAlign="left" fontSize="clamp(3.0rem, 10vw, 3rem)">
        My bshelf
      </Typography>
      <Grid container spacing={3} sx={{ pt: '3rem' }}>
        {bshelf.map((book) => {
          const coverImage = book.cover_i
            ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://via.placeholder.com/128x193.png?text=No+Cover';

          return (
            <Grid item key={book.key} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{height: 350,borderRadius: 2,overflow: 'hidden',
                }}
              >
                <img src={coverImage} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               
              </Card>
              <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom>{book.title}</Typography>
                    <IconButton onClick={() => removeFrombshelf(book.key)} aria-label="Remove from bshelf" sx={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      <Delete />
                    </IconButton>
                    </Stack>
                  </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </Container></>
  );
}
