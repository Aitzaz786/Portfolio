import Icon from '../Components/Icon';
export default function About() {
  return <section className="about-section section" id="about" aria-labelledby="about-title"><div className="container about-grid">
    <div data-reveal><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">An eye for the interface.<br/>A mind for the system.</h2><div className="location"><Icon name="pin" size={18}/> Based in Lahore, Pakistan</div></div>
    <div className="about-copy" data-reveal><p className="intro">I’m Aitzaz Afzal, a full stack developer with 2+ years of experience turning ideas into working applications.</p><p>I work across React, Next.js, Node.js and React Native, connecting responsive interfaces with APIs, databases and cloud services. My projects also include AI integrations, payment systems and subscription services.</p><p>I care about clear interfaces, maintainable code and understanding how each part of a product fits together.</p>
      <div className="education"><span className="eyebrow">EDUCATION</span><h3>BS Computer Science</h3><p>Government College University, Faisalabad <span>Expected 2027</span></p><div className="previous-education"><p><strong>ICS (Physics)</strong><span>Lahore · 2021–2023</span></p><p><strong>Matric</strong><span>Future Vision Academy · 2019–2021</span></p></div></div>
    </div>
  </div></section>;
}
