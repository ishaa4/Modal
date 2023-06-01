import React, { useState, useEffect } from "react";
import "./index.css";
import { Button, Modal } from "antd";
import folderData from "./data.json";
import Item from "antd/es/list/Item";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [names, setNames] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [border, setBorder] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setNames(folderData?.data);
    } catch (error) {}
  };
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    setErrorMessage("");
  };
  const handleTypeChange = (e) => {
    setSelectedType(e?.target?.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
    fetchData();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (names?.map((e) => e.folderName)?.includes(nameInput)) {
      setErrorMessage("Name already exists");
      setBorder(true);
    } else {
      setErrorMessage("checked");
      setBorder(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Create New Training"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <div>
          <p>Please provide below information to create a training:</p>
          <div>
            <label>Training Name:</label> <br />
            <input
              type="text"
              id="names"
              placeholder="Please enter a unique name"
              value={nameInput}
              onChange={handleNameChange}
              style={border ? { border: "2px solid red" } : { border: "" }}
            />
            <br /> <br />
            {errorMessage}
          </div>
          <div>
            <label>Event Type:</label> <br />
            <div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="call"
                    checked={selectedType === "call"}
                    onChange={handleTypeChange}
                  />
                  Call Type
                </label>
                {selectedType === "call" && (
                  <div>
                    <label>
                      <input type="radio" name="callSubType" value="landline" />
                      Landline{" "}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="callSubType"
                        value="telematics"
                      />
                      Telematics{" "}
                    </label>
                  </div>
                )}
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="event"
                    checked={selectedType === "event"}
                    onChange={handleTypeChange}
                  />
                  Event Type
                </label>
                {selectedType === "event" && (
                  <div>
                    <label>
                      <input type="radio" name="eventSubType" value="svl" />
                      SVL{" "}
                    </label>
                    <label>
                      <input type="radio" name="eventSubType" value="acn" />
                      ACN{" "}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="eventSubType"
                        value="followup"
                      />
                      Follow Up{" "}
                    </label>
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
