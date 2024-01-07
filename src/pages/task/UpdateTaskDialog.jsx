import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { showTask, updateTask } from "../../app/features/ApiSlice";
import { useDispatch } from "react-redux";
const UpdateTaskDialog = ({ show, onHide, task }) => {
  if (!task) {
    // If task is null, you may want to handle this case or render an error message.
    return null;
  }

  console.log(task);
  const { _id, name, description, TaskManager, Status } = task;
  const [taskName, setTaskName] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskManager, setTaskManager] = useState(TaskManager);
  const [taskStatus, setStatus] = useState(Status);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // Perform any additional validation if needed
    const updatedTask = {
      // Assuming you have a unique identifier for the task
      _id,
      taskName,
      taskDescription,
      taskManager,
      taskStatus,
    };
  
    dispatch(updateTask(updatedTask));
    dispatch(showTask());
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="taskManager">
            <Form.Label>Task Manager</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task manager"
              value={taskManager}
              onChange={(e) => setTaskManager(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="taskStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status"
              value={taskStatus}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateTaskDialog;
