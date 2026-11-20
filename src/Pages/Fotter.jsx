import { useState } from 'react';
import { profile } from '../data';
import Icon from '../Components/Icon';
export default function Footer(){
  const [copyState,setCopyState]=useState('Copy email');
  async function copyEmail(){
    try {await navigator.clipboard.writeText(profile.email);setCopyState('Email copied');}
    catch {setCopyState('Please select and copy the email above');}
  }
  return <footer id="contact" className="contact-section"><div className="container">
    <div className="contact-top" data-reveal><div><p className="eyebrow light">LET’S CONNECT</p><h2>Good work starts<br/>with a conversation.</h2><p>Have a role, a project, or an idea in mind?<br/>I’d love to hear about it.</p></div><div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-buttons"><a className="button button-primary" href={`mailto:${profile.email}`}><Icon name="mail" size={18}/> Say hello</a><button className="button button-outline" type="button" onClick={copyEmail}><Icon name={copyState==='Email copied'?'check':'copy'} size={17}/>{copyState==='Email copied'?'Copied':'Copy email'}</button></div><p className="copy-status" role="status">{copyState==='Copy email'?'':copyState}</p><a href="tel:+923456400191" className="phone">{profile.phone}</a></div></div>
    <div className="footer-bottom"><a className="brand" href="#home"><img className="brand-logo" src={profile.logo} alt=""/><span>Aitzaz Afzal</span></a><span>© {new Date().getFullYear()} · Lahore, Pakistan</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={profile.resume} download="Aitzaz_Afzal_Resume.pdf">Resume</a></div></div>
  </div></footer>;
}
