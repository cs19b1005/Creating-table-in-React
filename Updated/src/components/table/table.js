import React  from 'react';
import '../../App.js'
import TableItem from './TableItem';
import Card from '../UI/Card';
import './table.css';
const data = (props) => {
  return (

    <Card className="expenses">
     {props.items.map((expenses) => <TableItem key={expenses.id} id={expenses.id}firstName={expenses.firstName}lastName={expenses.lastName}  />)}
    </Card>
  );
}

export default data;