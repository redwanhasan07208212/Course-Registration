import { useEffect, useState } from "react";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [courses, setCourses] = useState([]);
  const [courseDetail, setcourseDetail] = useState([]);
  const [creditCount, setCreditCount] = useState(0);
  const [creditRemaining, setcreditRemaining] = useState(0);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleCourseDetail = (course) => {
    const isExist = courseDetail.find((item) => item.id == course.id);
    let count = course.credit;
    if (isExist) {
      alert("already this one is added in your course");
    } else {
      courseDetail.forEach((cred) => {
        count = count + cred.credit;
      });
      const remainingCredit = 20 - count;
      const newCourseDetail = [...courseDetail, course];
      if (remainingCredit < 0) {
        alert("You can not registration any more courses");
      } else {
        setcourseDetail(newCourseDetail);
        setCreditCount(count);
        setcreditRemaining(remainingCredit);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <div className="lg:flex container mx-auto">
        <Courses
          courses={courses}
          handleCourseDetail={handleCourseDetail}
        ></Courses>
        <CourseDetail
          courseDetail={courseDetail}
          creditCount={creditCount}
          creditRemaining={creditRemaining}
        ></CourseDetail>
      </div>
    </>
  );
}

export default App;
