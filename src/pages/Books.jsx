import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';


export default function Bookshelf() { 
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term) => {
        setSearchTerm(term);
      };
return (
   
    <><Navbar /> 
    <Hero onSearch={handleSearch} />
            <Featured searchTerm={searchTerm} /></>
)

}