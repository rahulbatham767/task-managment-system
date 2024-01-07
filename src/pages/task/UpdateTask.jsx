import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateTaskDialog from "./UpdateTaskDialog";
const UpdateTask = ({ task }) => {
  const [showUpdateTaskDialog, setShowUpdateTaskDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(task);

  const openUpdateTaskDialog = () => {
    setSelectedTask(task);
    setShowUpdateTaskDialog(true);
  };

  const closeUpdateTaskDialog = () => {
    setSelectedTask(null);
    setShowUpdateTaskDialog(false);
  };

  return (
    <>
      <Button
        variant="info"
        size="sm"
        className="me-2"
        onClick={() => openUpdateTaskDialog(task)}
      >
        update
      </Button>
      <UpdateTaskDialog
        show={showUpdateTaskDialog}
        onHide={closeUpdateTaskDialog}
        task={selectedTask}
      />
    </>
  );
};

export default UpdateTask;
