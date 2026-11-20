import { useState } from 'react';
import { projects } from '../data';
const domain = url => new URL(url).hostname;
function Artwork({ project }) {
  return <div className={`project-art ${project.theme}`} aria-hidden="true">
    <span className="art-caption">{project.type === 'Web & App' ? 'WEB + MOBILE' : 'WEB EXPERIENCE'}</span>
    {project.theme === 'passage' && <div className="sound-wave">{Array.from({length:21},(_,i)=><i key={i} style={{height:`${18 + Math.sin(i * .64)**2 * 65}%`}}/>)}</div>}
    <span className="project-wordmark" lang={project.theme === 'poetry' ? 'ur' : undefined}>{project.mark}</span>
    {project.theme === 'tours' && <div className="road-lines"><i/><i/><i/></div>}
    {project.theme === 'poetry' && <span className="poetry-lines">اردو کے رنگ، لفظوں کے سنگ</span>}
    <span className="art-domain">{domain(project.url)}</span>
  </div>;
}
export default function Projects(){
  const [filter,setFilter]=useState('All projects');
  const shown=projects.filter(project => filter==='All projects' || (filter==='Web & app' ? project.type==='Web & App' : project.type==='Web'));
  const featured=shown.filter(p=>p.featured), others=shown.filter(p=>!p.featured);
  return <section className="section projects-section container" id="projects" aria-labelledby="projects-title">
    <div className="section-heading" data-reveal><div><p className="eyebrow">SELECTED WORK</p><h2 id="projects-title">Ideas, made tangible.</h2></div><p>A collection of web and mobile projects.<br/>Explore the products behind the code.</p></div>
    <div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{['All projects','Web & app','Web only'].map(label=><button type="button" key={label} aria-pressed={filter===label} onClick={()=>setFilter(label)}>{label}</button>)}</div><span className="project-count" aria-live="polite">{shown.length} projects</span></div>
    <div className="featured-grid">{featured.map(project=><article className="project-card" key={project.name}><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in new tab)`}><Artwork project={project}/><div className="project-info"><div><h3>{project.name}</h3><p>{project.type}</p></div><span className="visit-label">Visit website</span></div></a></article>)}</div>
    {others.length>0 && <div className="project-list">{others.map(project=><a className="project-row" key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in new tab)`}><div className="project-initial" aria-hidden="true">{project.name[0]}</div><div className="project-name"><h3>{project.name}</h3><span>{domain(project.url)}</span></div><div className="project-tech">{project.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div><span className="visit-label">Visit website</span></a>)}</div>}
  </section>;
}
