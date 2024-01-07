import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted pt-1"
    >
      <section className="mt-3">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {" "}
                Task Managment System
              </h6>
              <p>
                A task management system is a software tool or platform that
                helps individuals or teams organize, track, and prioritize their
                tasks and projects. It typically includes features such as task
                lists, deadlines, reminders, collaboration tools, and progress
                tracking.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Features</h6>
              <p>
                <a href="#!" className="text-reset">
                  Task Automation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Blueprints
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Task Management
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Time Tracking
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                <a href="#!" className="text-reset">
                  Analyst Speak
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessibility
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Webinars
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Explore
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4s">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>000 New Delhi</p>
              <p>taskmanager@gmail.com</p>
              <p>+ 01 234 567 89</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#">
          Task Managment System
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
