import React, { useState, useEffect } from 'react';
import './index.css';
import { Button, Modal, Input, Space } from 'antd';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [existingNames, setExistingNames] = useState ([]);
  const [name, setName] = useState();

  useEffect(() =>{
    fetchNames();
},[]);

const fetchNames = async () => {
    const response = await fetch("./data.json").then(
      (response) => response.json()
    );
    const data = existingNames(response);
    setExistingNames(data.folderName);
    console.log(existingNames);

  };

  const handlename = (e) => {
    fetchNames()
    setName(e.target.value);
    console.log(name);
    if (name.trim() === '') {
        alert('Please enter a name.');
        return;
    }

    if(existingNames.includes(name)){
        alert('Name already exist. Please enter a new Name');
        return;
    }

    // console.log(`Submitted Name: ${name}`);
  
};

// const handleNameChange = (Event) => {
//     setName(Event.target.value);
    
// };

  const handleTypeChange =(e) => {

    setSelectedType(e.target.value);


  }


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Create New Training" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
        <p>Please provide below information to create a training:</p> 
        <div>
        <label>Training Name:</label> <br/>
        <input type="text" id= "name" placeholder="Please enter a unique name" value={name} onChange={handlename}/><br/> <br/>
        </div>
        <div>
        <label >Event Type:</label> <br/>
        <div>
          <div>
        <label>
        <input type="radio" name="type" value="call" checked= {selectedType === 'call'} onChange={handleTypeChange} />
        Call Type
        </label>
        {selectedType === 'call' && (
          <div> 
            <label>
            <input type="radio" name="callSubType" value="landline" />
            Landline </label>
            <label>
            <input type="radio" name="callSubType" value="telematics" />
            Telematics </label>
            </div>
        )}
        </div>
        <div>
          <label>
          <input type="radio" name="type" value="event" checked= {selectedType === 'event'} onChange={handleTypeChange} />
        Event Type
        </label>
        {selectedType === 'event' && (
          <div> 
            <label>
            <input type="radio" name="eventSubType" value="svl" />
            SVL </label>
            <label>
            <input type="radio" name="eventSubType" value="acn" />
            ACN </label>
            <label>
            <input type="radio" name="eventSubType" value="followup" />
            Follow Up </label>
            </div>
        )}
        </div> 
        </div>
        </div>
        </div>
      </Modal>
    </>
  );
};

export default App;