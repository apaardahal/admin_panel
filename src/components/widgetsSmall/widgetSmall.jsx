import './widgetSmall.css';
import { Visibility } from '@material-ui/icons';

export default function widgetSmall() {
    return (
        <div className = "widgetSm">
           <span className = "widgetSmTitle">New Joined Members</span>
           <ul className = "widgetSmList">
               <li className = "widgetSmListItem">
                   <img src = "/assets/apaar.jpg" className = "widgetSmImg"/>
                   <div className = "widgetSmUser">
                       <span className = "widgetSmUsername">Apaar Dahal</span>
                       <span className = "widgetSmUserTitle">MERN Stack developer</span>
                   </div>
                   <button className = "widgetSmButton">
                        <Visibility className = "widgetSmIcon"/>
                        Display
                   </button>
               </li>
               <li className = "widgetSmListItem">
                   <img src = "/assets/apaar.jpg" className = "widgetSmImg"/>
                   <div className = "widgetSmUser">
                       <span className = "widgetSmUsername">Apaar Dahal</span>
                       <span className = "widgetSmUserTitle">MERN Stack developer</span>
                   </div>
                   <button className = "widgetSmButton">
                        <Visibility/>
                        Display
                   </button>
               </li>
               <li className = "widgetSmListItem">
                   <img src = "/assets/apaar.jpg" className = "widgetSmImg"/>
                   <div className = "widgetSmUser">
                       <span className = "widgetSmUsername">Apaar Dahal</span>
                       <span className = "widgetSmUserTitle">MERN Stack developer</span>
                   </div>
                   <button className = "widgetSmButton">
                        <Visibility/>
                        Display
                   </button>
               </li>
               <li className = "widgetSmListItem">
                   <img src = "/assets/apaar.jpg" className = "widgetSmImg"/>
                   <div className = "widgetSmUser">
                       <span className = "widgetSmUsername">Apaar Dahal</span>
                       <span className = "widgetSmUserTitle">MERN Stack developer</span>
                   </div>
                   <button className = "widgetSmButton">
                        <Visibility/>
                        Display
                   </button>
               </li>
               <li className = "widgetSmListItem">
                   <img src = "/assets/apaar.jpg" className = "widgetSmImg"/>
                   <div className = "widgetSmUser">
                       <span className = "widgetSmUsername">Apaar Dahal</span>
                       <span className = "widgetSmUserTitle">MERN Stack developer</span>
                   </div>
                   <button className = "widgetSmButton">
                        <Visibility/>
                        Display
                   </button>
               </li>
           </ul>
        </div>
    )
}
