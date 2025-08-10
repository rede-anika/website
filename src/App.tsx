import './App.css';
import { Button } from './components/Button';

export function App() {
  return (
    <>
      <div id="work-section" className="section">
        <h1>Work section</h1>
        <h2>Software Engineer | ServiceNow | May 2022 to present</h2>
        <ul>
          <li>UI Builder</li>
          <li>AI Agents</li>
        </ul>
        <Button label="My button" />
      </div>
      <div id="education-section" className="section">
        <h1>Education section</h1>
        <h2>UC Berkeley | Dec 2021 | GPA: 3.45</h2>
        <ul>
          <li>Major: B.S. in Electrical Engineering and Computer Science (EECS)</li>
          <li>Minor: Linguistics</li>
        </ul>
        <h2>HB</h2>
        <h2>Birchwood</h2>
      </div>
      <div id="skills-section" className="section">
        <h1>Skills section</h1>
        <h2>Technical skills</h2>
        <ul>
          <li>Programming Languages: Javascript, Python, Java, JavaScript</li>
          <li>Frameworks: React, Node.js, TensorFlow</li>
          <li>Tools: Git, Jenkins</li>
        </ul>
        <h2>Soft skills</h2>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
        </ul>
      </div>
      <div id="projects-section" className="section">
        <h1>Projects section</h1>
        <ul>
          <li>Ancient Indian Astronomy</li>
          <li>ML Mini-Projects</li>
          <li>CS61B: The Game</li>
        </ul>
      </div>
      <div id="contact-section" className="section">
        <h1>Contact section</h1>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Strava</li>
        </ul>
      </div>
    </>
  );
}
