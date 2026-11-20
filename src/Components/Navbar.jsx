import { useEffect, useState } from 'react';
import { profile } from '../data';
import Icon from './Icon';
const links = [['projects','Work'],['about','About'],['experience','Experience'],['skills','Skills'],['contact','Contact']];
export default function Navbar() {
  const [open,setOpen]=useState(false);
  useEffect(() => {
    const close = event => { if(event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown',close);
    return () => window.removeEventListener('keydown',close);
  },[]);
  return <header className="site-header"><nav className="container navigation" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Aitzaz Afzal home"><img className="brand-logo" src={profile.logo} alt=""/><span>Aitzaz Afzal</span></a>
    <button className="menu-toggle" type="button" aria-controls="navigation-links" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
    <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(([id,label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href={profile.resume} download="Aitzaz_Afzal_Resume.pdf">Resume <Icon name="download" size={16}/></a>
    </div>
  </nav></header>;
}
