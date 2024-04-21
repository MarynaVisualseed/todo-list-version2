import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskList = ({modal, toggle, save}) => {
    const [listName, setListName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
       
        if(name === "listName") {
            setListName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = listName
        taskObj["Description"] = description
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task List</ModalHeader>
            <ModalBody>
            <form>
                <div className = "form-group">
                    <label>List Name</label>
                    <input type = "text" className = "form-control" 
                    value = {listName}
                    onChange = {handleChange}
                    name = "listName"/>
                </div>
                <div className = "form-group">
                    <label>Description</label>
                    <textarea row = "5" className = "form-control" 
                    value = {description} 
                    onChange = {handleChange}
                    name = "description">
                    </textarea>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskList;