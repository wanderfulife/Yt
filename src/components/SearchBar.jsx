// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Input } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () =>
  <div>
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        color: '#121212'
      }}
    >
      <Input
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
        disableUnderline='true'
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'grey' }}>
        <Search/>
      </IconButton>
    </Paper>
  </div>

export default SearchBar
