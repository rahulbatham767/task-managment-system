import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/home";
import Footer from "./layout/Footer";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import AddTaskForm from "./pages/task/AddTaskForm";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./components/utils/PrivateRoute";
import GivenTasks from "./pages/task/GivenTasks";
import UpdateTask from "./pages/task/UpdateTask";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomAlert from "./pages/CustomAlert";
import { useEffect, useState } from "react";

const App = () => {
  const { loggedIn } = useSelector((state) => state.user);

  const [context, setContext] = useState({
    msg: "",
    type: "",
    show: false,
  });

  useEffect(() => {}, [setContext]);

  return (
    <BrowserRouter>
      <Header setContext={setContext} />
      <CustomAlert context={context} />
      <div style={{ height: "50%" }}>
        <Routes>
          <Route
            exact
            path="/task-managment-system"
            element={
              <PrivateRoute>
                {" "}
                <Home />{" "}
              </PrivateRoute>
            }
          />
          {loggedIn ? (
            <>{/* Render nothing if the user is logged in */}</>
          ) : (
            <>
              <Route
                exact
                path="/register"
                element={<Register setContext={setContext} />}
              />
              <Route
                exact
                path="/login"
                element={<Login setContext={setContext} />}
              />
            </>
          )}
          <Route
            exact
            path="/tasks"
            element={
              <PrivateRoute>
                <GivenTasks />{" "}
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/addtask"
            element={
              <PrivateRoute>
                <AddTaskForm setContext={setContext} />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/update-task"
            element={
              <PrivateRoute>
                <UpdateTask />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
