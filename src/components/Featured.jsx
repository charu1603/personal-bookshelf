import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Container, Stack, IconButton } from '@mui/material';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export default function Featured({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const fetchBooks = async (query) => {
    
    const url = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.docs || []);
      console.log(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

 
  useEffect(() => {
    const defaultQuery = 'bestsellers'; 
    fetchBooks(searchTerm || defaultQuery);
  }, [searchTerm]);
 const handleAddToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const isBookInBookshelf = (book) => {
    return bookshelf.some((b) => b.key === book.key);
  };

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
          const coverImage = book.cover_i
            ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://via.placeholder.com/128x193.png?text=No+Cover';

          return (
            <Grid item key={book.key} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: 350,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={coverImage}
                  alt={book.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                 </Card> <CardContent>
                 <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom>{book.title}</Typography>
                    <IconButton
                      onClick={() => handleAddToBookshelf(book)}
                      color="primary"
                    >
                      {isBookInBookshelf(book) ? <FaBookmark /> : <FaRegBookmark />}
                    </IconButton>
                  </Stack>
             
              </CardContent>
             
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}


