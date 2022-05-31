import React,{useState} from 'react';
import Card from '../UI/Card';
import './TableItem.css';
import "./Modal.css";
import Button from '../UI/Button';
let a="hai";
const TableItem = (props) => {
  a=props.firstName+' '+props.lastName;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Card className='expense-item'>
     
      <div className='expense-item__description'>
        <h2>{props.id}</h2>
        <h2>{props.firstName}</h2>
        <h2>{props.lastName}</h2>
        <Button className="openModalBtn" onClick={() => { setModalOpen(true);}} >
           View Details
        </Button>  {modalOpen && <Modal  setOpenModal ={setModalOpen} />}
      </div>
    </Card>
  );
}
function Modal({setOpenModal }) {
    return (
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => {  setOpenModal(false); }}>
              X
            </button>
          </div>
          <div className="title">
            <h1>My Name is {a}</h1>
          </div>
        </div>
    );
  }

export default TableItem;