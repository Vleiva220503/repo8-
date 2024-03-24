import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';

const SelectorEstado = () => {
  const estados = [
    { valor: 'activo', color: '#4CAF50' }, // verde
    { valor: 'en revision', color: '#000000' }, // negro
    { valor: 'vencido', color: '#F44336' }, // rojo
    { valor: 'button', color: '#9C27B0' } // lila
  ];

  const [estadoSeleccionado, setEstadoSeleccionado] = useState('en revision');

  const handleChange = (event) => {
    setEstadoSeleccionado(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
      <Select
        id="selector-estado"
        value={estadoSeleccionado}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: estados.find(estado => estado.valor === estadoSeleccionado)?.color,
              color: 'white',
              '& .MuiMenuItem-root': {
                justifyContent: 'center',
              },
            }
          }
        }}
        sx={{
          backgroundColor: estados.find(estado => estado.valor === estadoSeleccionado)?.color,
          color: 'white',
          borderRadius: '5px',
          height: '25px', 
          textAlign: 'center',
          '& .MuiSvgIcon-root': { 
            color: 'white',
          },
          '& .MuiSelect-select': {
            paddingTop: '2px',
            paddingBottom: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none', 
          }
        }}
      >
        {estados.map((estado) => (
          <MenuItem key={estado.valor} value={estado.valor} sx={{ justifyContent: 'center' }}>
            {estado.valor}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorEstado;
