
import sysImg from "../assets/images/home/sys.jpg"
import policy from "../assets/images/home/services/policy.png"
import training from "../assets/images/home/services/s7.png"
import performance from "../assets/images/home/services/s2.png"
import evaluation from "../assets/images/home/services/s6.png"
import recruit from "../assets/images/home/services/recruit.png"

//ICONS
import { FaQuoteLeft, FaShieldAlt } from "react-icons/fa"
import { RiFileSearchLine, RiSettings3Line } from "react-icons/ri"
import { RiBarChartBoxLine, RiLineChartLine, RiBuilding4Line, RiFileTextLine, RiPresentationLine, RiServerLine, RiShieldCheckLine,  } from "react-icons/ri"
import { MdArrowDropDown, MdVerified } from "react-icons/md"

export default [
          {
            id:1,
            icon: RiFileSearchLine,
            title:`Recruitment Selection and Employee Retention`,
            descript:`From sourcing to employee retention, 
                      we deliver a seamless hiring experience 
                      that secures long-term value for 
                      your organisation.`,
            img: recruit,
            imgAlt:`Recruitment`,
            link:`/services/recruitment-retention`,
          },
          {
            id:2,
            icon:RiSettings3Line,
            title:`Creation of HR systems`,
            descript:`Transform your HR process with customized 
                      systems built for efficiency, accuracy, 
                      and sustainable growth.`,
            img:sysImg,
            imgAlt:`HR systems`,
            link:`/services/hr-systems`,
          },
          {
            id:3,
            icon:RiBarChartBoxLine,
            title:`Job Evaluation and Salary Survey`,
            descript:`Accurate job analysis and salary benchmarking 
                      solutions designed to enhance pay equity, 
                      compliance, and employee 
                      confidence.`,
            img:evaluation,
            imgAlt:`Job evaluation`,
            link:`/services/job-evaluation-salary-survey`,
          },
          {
            id:4,
            icon:RiLineChartLine,
            title:`Performance Management`,
            descript:`Structured performance frameworks 
                      that align employee output with 
                      organizational objectives and 
                      sustainable growth.`,
            img:performance,
            imgAlt:`Performance`,
            link:`/services/performance-management`,
          },
          {
            id:5,
            icon:RiFileTextLine,
            title:`Policies and Contract Formulation`,
            descript:`let us help you to craft professional 
                      policy and contract frameworks that 
                      establish clear expectations, reduce risk, 
                      and support operational stability`,
            img:policy,
            imgAlt:`Policy documents`,
            link:`/services/policies-contracts`,
          },
          {
            id:6,
            icon:RiPresentationLine,
            title:`Training and Development`,
            descript:`At NanthConsults, our training programs 
                      focus on enhancing employee competence, 
                      leadership capacity, and workplace 
                      performance.`,
            img:training,
            imgAlt:`Training`,
            link:`/services/training-development`,
          },
          {
            id:7,
            icon:RiShieldCheckLine,
            title:`Integrated Management Systems`,
            descript:`From implementation to audit, we 
                      deliver IMS solutions that position 
                      your business for global 
                      standards.`,
            link:`/services/integrated-management-systems`,
          },
          {
            id:8,
            icon:RiServerLine,
            title:`HR Outsourcing`,
            descript:`We provide reliable, end-to-end HR 
                      support that ensures efficiency, 
                      compliance, and peace of 
                      mind.`,
            link:`/services//services/hr-outsourcing`,
          },
]