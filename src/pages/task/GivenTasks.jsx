import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, showTask } from "../../app/features/ApiSlice";

import UpdateTask from "./UpdateTask";

const GivenTasks = () => {
  const data = useSelector((state) => state.user.task.data);
  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = useState("");
  useEffect(() => {
    dispatch(showTask());
  }, [dispatch, selectedTask]);
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
    dispatch(showTask());
  };

  return (
    <Container className="mt-4" style={{ height: "50vh" }}>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Task Manager</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.TaskManager}</td>
              <td>{value.Status}</td>
              <td>
                <UpdateTask task={value} />
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    handleDelete(value._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GivenTasks;
