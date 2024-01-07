import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/features/ApiSlice";
const AddTaskForm = () => {
  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    TaskManager: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));
    setTaskData({
      name: "",
      description: "",
      TaskManager: "",
    });
  };

  return (
    <Container style={{ width: "30rem" }} className="mt-5 mb-5">
      <Card className="p-3">
        <div className="mt-4">
          <h2>Add Task</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTaskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                name="name"
                value={taskData.name}
                onChange={handleChange}
                minLength={5}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTaskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
                minLength={10}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTaskManager" className="mb-3">
              <Form.Label>Task Manager</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task manager"
                name="TaskManager"
                value={taskData.TaskManager}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
        </div>
      </Card>
    </Container>
  );
};

export default AddTaskForm;
