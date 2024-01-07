import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel slide={false}>
      hi
      <Carousel.Item>
        <div style={{ height: "400px" }}>
          <img src="/image/time.jpg" alt="" className="img-fluid" />
        </div>

        <Carousel.Caption>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Effective Task Management
            </h2>
            <p className="text-gray-700">
              Efficient task management is crucial for the success of any
              project. It involves organizing, planning, and executing tasks in
              a systematic manner to achieve specific goals. Whether you are
              working on a personal project or collaborating with a team,
              effective task management helps you stay organized and meet
              deadlines. Key elements of successful task management include:
              <ul className="list-disc pl-6">
                <li>Creating a clear and detailed task list</li>
                <li>Setting priorities and deadlines</li>
                <li>Assigning tasks to team members</li>
                <li>Regularly tracking and updating progress</li>
                <li>Adapting to changes and challenges</li>
              </ul>
              Utilizing task management tools and methodologies can
              significantly improve productivity and collaboration. Whether you
              prefer traditional to-do lists, kanban boards, or digital project
              management platforms, choosing the right tools for your workflow
              is essential. Remember, effective task management is not just
              about completing tasks but also about achieving desired outcomes
              and continuous improvement in your work processes.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
