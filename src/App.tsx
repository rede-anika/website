import "./App.css";
import { Button, IconButton } from "./components";

export function App() {
    return (
        <>
            <div id="header" className="header">
                <IconButton icon="bi bi-sun" />
                <IconButton icon="bi bi-moon" />
            </div>
            <div id="work-section" className="section">
                <h1>Work section</h1>
                <h2>Software Engineer | ServiceNow | May 2022 to present</h2>
                <ul>
                    <li>
                        UI Builder: improving on a difficult-to-use product to
                        making it into a more usable, flexible product +
                        internal improvements
                    </li>
                    <li>
                        AI Agents: on Gartner as leading product in this growing
                        field -- skills learned: extreme stress management,
                        tight deadlines, delivering high quality at high speed,
                        team communication inside product team + outside (PM,
                        QE, PgM, app BUs)
                    </li>
                </ul>
                <h2>
                    Software Engineer Intern | ServiceNow | May 2021 to Aug 2021
                </h2>
                <ul>
                    <li>UI Builder: Formula builder</li>
                    <li>Tech stack: Javascript, HTML/CSS, Java</li>
                </ul>
                <h2>Software Engineer Intern | ICSI | Jan 2020 to Sept 2020</h2>
                <h2>
                    Software Engineer Intern | Pulse Q&A | June 2019 to Aug 2019
                </h2>
                <Button label="My button" />
            </div>
            <div id="education-section" className="section">
                <h1>Education section</h1>
                <h2>UC Berkeley | Dec 2021 | GPA: 3.45</h2>
                <ul>
                    <li>
                        Major: B.S. in Electrical Engineering and Computer
                        Science (EECS)
                    </li>
                    <li>Minor: Linguistics</li>
                </ul>
                <h2>HB</h2>
                <h2>Birchwood</h2>
            </div>
            <div id="skills-section" className="section">
                <h1>Skills section</h1>
                <h2>Technical skills</h2>
                <ul>
                    <li>
                        Programming Languages: Javascript, Python, Java,
                        JavaScript
                    </li>
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
                <p>Official email address</p>
                <div className="contact-buttons">
                    <IconButton icon="bi bi-github" label="Github" />
                    <IconButton icon="bi bi-linkedin" label="LinkedIn" />
                    <IconButton icon="bi bi-instagram" label="Instagram" />
                    <IconButton icon="bi bi-strava" label="Strava" />
                </div>
            </div>
        </>
    );
}
