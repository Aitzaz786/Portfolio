import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Icon from '../Components/Icon';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Fotter';
import { profile, experience } from '../data';
export default function Home() {
  useEffect(() => {
    const oldSection=location.hash.match(/^#\/(about|skills|projects|fotter)$/)?.[1];
    if(oldSection) document.getElementById(oldSection === 'fotter' ? 'contact' : oldSection)?.scrollIntoView();
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer=new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }),{threshold:0.08});
    document.querySelectorAll('[data-reveal]').forEach(el => {el.classList.add('will-reveal'); observer.observe(el);});
    return () => observer.disconnect();
  },[]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow light">SOFTWARE ENGINEER · LAHORE, PAKISTAN</p>
            <h1 id="hero-title">Hi, I’m Aitzaz.<br/>I build for<br/><span>the real world.</span></h1>
            <p className="hero-description">Full stack web & mobile development.<br/>Thoughtful interfaces, reliable APIs, and the systems that bring them together.</p>
            <div className="hero-actions"><a href="#projects" className="button button-primary">Explore my work</a><a href={profile.resume} className="button button-outline" download="Aitzaz_Afzal_Resume.pdf"><Icon name="download" size={18}/> Download resume</a></div>
            <p className="current-role"><span className="status-dot"/> Currently Software Engineer at <strong>Webseo Pakistan</strong></p>
          </div>
          <div className="system-visual" aria-label="Development stack: interfaces, application logic, and infrastructure">
            <div className="visual-heading"><span className="mono">FROM INTERFACE TO INFRASTRUCTURE</span><Icon name="layers" size={20}/></div>
            <div className="stack-panel panel-front"><div className="panel-icon"><Icon name="layout" size={23}/></div><div><span className="panel-label">THE EXPERIENCE</span><h2>Web & mobile</h2><p>React · Next.js · React Native</p></div><div className="mini-window"><i/><i/><i/><span/></div></div>
            <div className="connector"><span/><span/><span/></div>
            <div className="stack-panel panel-back"><div className="panel-icon"><Icon name="code" size={23}/></div><div><span className="panel-label">THE ENGINE</span><h2>APIs & integrations</h2><p>Node.js · NestJS · OpenAI</p></div><span className="code-mark">{'{ }'}</span></div>
            <div className="connector"><span/><span/><span/></div>
            <div className="stack-panel panel-cloud"><div className="panel-icon"><Icon name="cloud" size={23}/></div><div><span className="panel-label">THE FOUNDATION</span><h2>Cloud & data</h2><p>AWS · Supabase · Redis</p></div><div className="data-bars"><i/><i/><i/></div></div>
            <div className="visual-footer"><span>One connected product.</span><span className="mono">FULL STACK / MERN</span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>Built across the stack.</span><div><span>React & Next.js</span><span>Node.js & NestJS</span><span>React Native & Expo</span><span>AWS & Redis</span></div></div>
      </section>
      <Projects />
      <About />
      <section className="section experience-section container" id="experience" aria-labelledby="experience-title">
        <div className="section-heading" data-reveal><div><p className="eyebrow">EXPERIENCE</p><h2 id="experience-title">Building. Learning.<br/>Getting better.</h2></div><p>Hands-on experience across client projects, full stack applications, and collaborative teams.</p></div>
        <div className="timeline">{experience.map(item => <article className={`experience-row ${item.current ? 'current' : ''}`} key={item.company+item.date} data-reveal>
          <div className="experience-date"><span>{item.date}</span>{item.current && <span className="current-badge">Current role</span>}</div>
          <div className="experience-body"><div className="job-heading"><h3>{item.role}</h3><span>{item.mode}</span></div><p className="company">{item.company}</p><p>{item.description}</p></div>
        </article>)}</div>
      </section>
      <Skills />
      <Footer />
    </main>
  </>;
}
