import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Container, Stack, IconButton } from '@mui/material';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export default function Featured({ searchTerm }) {
  const [books, setBooks] = useState([]);
 

  const fetchBooks = async (query) => {
    const url = `https://book-rest-api-production.up.railway.app/`; 

    try {
      const response = await axios.get(url);
      setBooks(response.data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    const defaultQuery = 'bestsellers'; 
    fetchBooks(searchTerm || defaultQuery);
  }, [searchTerm]);



  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
        <Typography textAlign="left" fontSize="clamp(3.0rem, 10vw, 3rem)">
          Featured
        </Typography>
        <Typography
          textAlign="left"
          color="text.secondary"
          sx={{ alignSelf: 'left', width: { sm: '100%', md: '80%' } }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
        </Typography>
      </Stack>
      <Grid container spacing={3} sx={{ pt: '3rem' }}>
        {books.map((book) => {
      

          return (
            <Grid item key={book.key} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: 350,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={book.image_url}
                  alt={book.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h6">
                      {book.title}
                    </Typography>
                  
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
