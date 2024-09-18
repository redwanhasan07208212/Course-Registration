import PropTypes from 'prop-types'
import { BsCurrencyDollar } from "react-icons/bs";
import { LuBookOpen } from "react-icons/lu";
const Course = ({course,handleCourseDetail,handleCount}) => {
    const {cover_img,title,description,price,credit} = course;
  return (
    <div className="bg-[#FFF] px-4 drop-shadow shadow-xl rounded-xl">
       <img className="w-[288px] h-[144px] mb-4 pt-4" src={cover_img} alt="" />
       <h1 className="mb-2 text-[16px] font-semibold">{title}</h1>
       <p className="text-[#1C1B1B99] font-normal">{description}</p>
       <div className="flex items-center mt-[19px] text-[#1C1B1B99]">
        <span className="mr-3"><BsCurrencyDollar></BsCurrencyDollar></span>
        <p className="mr-3">Price:{price}</p>
        <span className="mr-3"><LuBookOpen></LuBookOpen></span>
        <p>Credit: {credit}hr</p>
       </div>
       <button onClick = {()=>{handleCourseDetail(course);handleCount();}} className="w-full mb-4 mt-[26px] text-xl font-semibold rounded-lg border border-solid border-[#2F80ED] text-[#FFF] bg-[#2F80ED] py-[9px]">Select</button>
    </div>
  )
}

Course.propTypes = {
    course: PropTypes.object,
    handleCourseDetail:PropTypes.func,
    handleCount: PropTypes.func
}

export default Course