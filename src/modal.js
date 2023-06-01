// import React, { useState, useEffect} from 'react';
// import { Button, Modal } from 'antd';

// const ModalComponent = () => {
//     const [existingNames, setExistingNames] = useState ([]);

//     useEffect(() =>{
//         fetchNames();
//     }, []);

//     const fetchNames = async () => {
//         const response = await fetch("./data.json").then(
//           (response) => response.json()
//         );
//         const data = existingNames(response);
//         setExistingNames(data.folderName);
//       };

// const [name, setName] = useState('');
// const [isClassSelected, setClassSelected] = useState(false);
// const [isBranchSelected, setBranchSelected] = useState(false);
// const [isSubmitEnabled, setSubmitEnabled] = useState(false);

// const handleSubmit = () => {
//     if (name.trim === '') {
//         alert('Please enter a name.');
//         return;
//     }

//     if(existingNames.includes(name)){
//         alert('Name already exist. Please enter a new Name');
//         return;
//     }

//     console.log('Submitted Name: ${name}');
//     onclose()
// };

// const handleNameChange = (Event) => {
//     setName(Event.target.value);
// };

// const handleClassSelected = () => {
//     setClassSelected(true);
//     setBranchSelected(false);
//     setSubmitEnabled(true);
// };

// const handleBranchSelected = () => {
//     setClassSelected(false);
//     setBranchSelected(true);
//     setSubmitEnabled(true);
// };

// // const onClose = () => {
// //     setModalOpen(false);
// // };

// // return(
// //     <div className ={`modal ${isOpen ? `open` : ''}`}>
// //         <div className="modal-content">
// //             <span className="close" onClick={onClose}>
// //                 &times;
// //             </span>
// //             <h2>Create New Training</h2>
// //             <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange}/>
// //             <div className="radio-group">
// //                 <label>
// //                     <input type="radio" name="option" checked={isClassSelected} onChange={handleClassSelected}/>
// //                     Call Type
// //                 </label>
// //                 <label>
// //                 <input type="radio" name="option" checked={isBranchSelected} onChange={handleClassSelected}/>
// //                 Event Type 
// //                 </label>
// //                 </div>
// //                 {isSubmitEnabled && (
// //                     <div className="additional-button">
// //                         <button>Button 1</button>
// //                         <button>Button 2</button>
// //                         <button>Button 3</button>
// //                     </div>
// //                 )}
// //                 <div className="button-group">
// //                     <button onClick={handleSubmit}>Submit</button>
// //                     <button onClick={onClose}>Close</button>
// //                 </div>
// //                 </div>
// //                 </div>
// // );
// //                 };

// //                 export default ModalComponent;