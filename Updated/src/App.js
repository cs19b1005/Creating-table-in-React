import React from 'react';
import Expenses from './components/table/table';
const App = () => {
  const table = [
    {
      id: '1',
      firstName: 'Subhasree',
      lastName: 'Balija',
    },
    { 
      id: '2', 
      firstName: 'Deepika', 
      lastName: 'Illa',
   },
    {
      id: '3',
      firstName: 'Bhargavi',
      lastName: 'Balija',
    },
    {
      id: '4',
      firstName: 'Vignesh',
      lastName: 'Akula',
     
    },
  ];

 

  return (
    <div>
      <Expenses items={table} />
    </div>
  );
}

export default App;