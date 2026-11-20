import { skillGroups } from '../data';
import Icon from '../Components/Icon';
export default function Skills(){
  return <section className="section skills-section" id="skills" aria-labelledby="skills-title"><div className="container">
    <div className="section-heading" data-reveal><div><p className="eyebrow">MY TOOLKIT</p><h2 id="skills-title">The right tools.<br/>Across the whole stack.</h2></div><p>Technologies I’ve worked with to build, connect and deploy web and mobile applications.</p></div>
    <div className="skills-grid">{skillGroups.map(group => <article className="skill-group" key={group.title} data-reveal><div className="skill-icon"><Icon name={group.icon} size={23}/></div><h3>{group.title}</h3><p>{group.caption}</p><ul className="skill-tags">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
  </div></section>;
}
