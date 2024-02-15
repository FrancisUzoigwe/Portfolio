import { useSelector } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import vite from "../assets/react.svg"
const TimeLine = () => {

  const mode = useSelector((state: any) => state.mode)
  return (
    <div className={`${!mode ? "bg-black text-white" : "bg-white text-black"} mt-5`}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2024 - present"
          iconStyle={{ backgroundColor: 'rgb(33, 150, 243)', color: '#fff', background: `url(${vite})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          icon={``}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer </h3>
          <h4 className="vertical-timeline-element-subtitle">FlexiCart</h4>
          <p />
          <li>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2023 - 2024"
          iconStyle={{ backgroundColor: 'rgb(33, 150, 243)', color: '#fff', background: `url(${vite})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          icon={``}
        >
          <h3 className="vertical-timeline-element-title">Frontend Lead </h3>
          <h4 className="vertical-timeline-element-subtitle">Dirt2School</h4>
          <p />
          <li>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2023 - 2024"
          iconStyle={{ backgroundColor: 'rgb(33, 150, 243)', color: '#fff', background: `url(${vite})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          icon={``}
        >
          <h3 className="vertical-timeline-element-title">Chief Technical Offiver (C.T.O) </h3>
          <h4 className="vertical-timeline-element-subtitle">Dirt2School</h4>
          <p />
          <li>
            Ensured responsiveness and functionalities worked perfectly fine and also enhanced user expreince.
          </li>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine