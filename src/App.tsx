import "./App.css";
import { Button, IconButton } from "./components";

export function App() {
    return (
        <>
            {/* <div id="header" className="header">
                <IconButton icon="bi bi-sun" />
                <IconButton icon="bi bi-moon" />
            </div> */}
            <div className="topnav">
                <a className="active" href="#home">
                    Home
                </a>
                <a href="#work-section">Work</a>
                <a href="#education-section">Education</a>
                <a href="#skills-section">Skills</a>
                <a href="#projects-section">Projects</a>
                <a href="#contact-section">Contact</a>
            </div>
            <div id="home" className="section">
                <h1>Hi, I'm Anika Rede.</h1>
                <p>
                    Seeking software engineering job. Previous SWE internship
                    experience in various orgs, strongest in Python, JavaScript,
                    and Java. Can provide access to projects on private Git
                    repos if requested.
                </p>
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
                    <ul>
                        <li>
                            Tech stack: Javascript (Seismic: SN-internal React,
                            Tectonic: SN-internal CLI), Java, testing frameworks
                            (Selenium, Jest)
                        </li>
                    </ul>

                    <li>
                        AI Agents: on Gartner as leading product in this growing
                        field -- skills learned: extreme stress management,
                        tight deadlines, delivering high quality at high speed,
                        team communication inside product team + outside (PM,
                        QE, PgM, app BUs)
                    </li>
                    <ul>
                        <li>
                            Tech stack: Javascript (client-side & server-side),
                            Java, testing frameworks (Chai)
                        </li>
                    </ul>
                </ul>
                <h2>
                    Software Engineer Intern | ServiceNow | May 2021 to Aug 2021
                </h2>
                <ul>
                    <li>UI Builder: Formula builder</li>
                    <li>
                        Built low/no-code code editing experience within UI
                        Builder Web Experience platform using Monaco Editor and
                        domain-specific Excel-like language; Streamlined simple
                        processes like arithmetic, boolean, and comparative
                        operations and implemented new UX infrastructure to
                        enable this feature
                    </li>
                    {/* · Designed and implemented Monaco Editor with a parser and domain-specific language into Web Experience
                    platform for ServiceNow (UI Builder) as a low/no-code solution for both citizen and pro developers (features
                    include Intellisense, hover for information, error marking/checking, accessibility tabbing, etc)
                    · Improved UX backend infrastructure to allow arithmetic, boolean, comparative, and functional operations via
                    our newly created formula bar
                    · Tech stack: JavaScript, HTML, CSS, Java */}
                    <li>Tech stack: Javascript, HTML/CSS, Java</li>
                </ul>
                {/* Web Design Lead | Pando Tutors | Aug 2020 to Dec 2020 | pandotutors.org
                · Spun up Wix website with Corvid code for initial website for start-up and enabled SEO (227 clicks in 3
                months); Tripled site engagement (measured in session duration, started at 3min, now averaging 9min)
                · Open-sourcing website built-from-scratch for long-term functionality
                · Tech stack: Wix with Corvid, JavaScript (React.js, Stripe.js) */}
                <h2>Software Engineer Intern | ICSI | Jan 2020 to Sept 2020</h2>
                <ul>
                    {/* <li>
                        NLP research assistant: worked on multi-document
                        summarization using BERT and GPT-2 models
                    </li>
                    <li>
                        Built data processing pipeline to convert raw text data
                        into model-ready format using Python (pandas, numpy,
                        scipy); Fine-tuned BERT and GPT-2 models for
                        multi-document summarization task using PyTorch and
                        HuggingFace Transformers library; Evaluated model
                        performance using ROUGE metric and compared with
                        baseline models
                    </li>
                    <li>Tech stack: Python, PyTorch, TensorFlow</li> */}
                    <li>
                        Created translation tool to parse complex languages into
                        its sub-components: took lexicon of ~8000 words,
                        estimated frequency of top 150 words in audio samples,
                        and modeled learning system from the data
                    </li>
                    <li>Tech stack: Python, JavaScript (React.js, jQuery)</li>
                </ul>
                <h2>
                    Software Engineer Intern | Pulse Q&A | June 2019 to Aug 2019
                </h2>
                <ul>
                    <li>Script for web scraping</li>
                    <li>
                        Improved office workflow by 30% with automation tools:
                        updated members’ profiles (web crawler), found proper
                        marketing audience (Chrome extension), and deployed
                        surveys (React.js)
                    </li>
                    <li>
                        Got marketing contact information from ZoomInfo in csv
                        files, extracted data from these files, for some reason
                        web scraped peoples' LinkedIn profiles for contact
                        information as well
                    </li>
                    <li>
                        Tech stack: Python (pandas, bs4), JavaScript (React.js),
                        MongoDB, Java (selenium)
                    </li>
                </ul>
                {/* <Button label="My button" /> */}
            </div>
            <div id="education-section" className="section">
                <h1>Education section</h1>
                <h2>
                    University of California Berkeley | Dec 2021 | GPA: 3.45
                </h2>
                <ul>
                    <li>
                        Major: B.S. in Electrical Engineering and Computer
                        Science (EECS)
                    </li>
                    <li>Minor: Linguistics</li>
                    <li>
                        Associations: Society of Women Engineers, Association of
                        Women in EE&CS, Engineers Without Borders, CS Kickstart
                    </li>
                    {/* · CS Kickstart: Industrial Relations Committee member
                    · Association of Women in EE&CS: Committee member on Personal Projects and Curriculum teams
                    · Engineers Without Borders:
                    o Panama Team: Designed and built water distribution system for underdeveloped community in Panama;
                    Participated on Design subteam (AutoCAD)
                    o Guatemala Team: Founding new project in Guatemala around water distribution for small community */}
                    <li>Coursework</li>
                    <ul>
                        <li>
                            General: Data Structures and Algorithms, Discrete
                            Mathematics
                        </li>
                        <li>
                            Concentration: Artificial Intelligence, Machine
                            Learning, Probability & Random Processes,
                            Optimization of Engineering Models, Natural Language
                            Processing
                        </li>
                    </ul>
                    {/* General: CS61A Structure and Interpretation of Computer Programs, CS61B Data Structures and Algorithms,
                    CS61C Computer Architecture, CS70 Discrete Mathematics and Probability, EE16AB Designing Information
                    Devices and Systems, CS 170 Efficient Algorithms and Intractable Problems
                    Linguistics: LING100 Linguistics, LING120 Syntax, LING181 Lexical Semantics, LING121 Formal
                    Semantics, LING115 Morphology
                    Concentration: CS288 Natural Language Processing, EECS189 Machine Learning, EECS126 Probability &
                    Random Processes, EECS127 Optimization of Engineering Models, CS188 Artificial Intelligence */}
                </ul>
                <h2>Hathaway Brown | May 2018 | GPA: 4.36</h2>
                <ul>
                    <li>National Merit Finalist, graduated ‘Cum Laude’</li>
                    <li>
                        Wrote 22-page research manuscript for four-year EECS
                        research project (MEMS) at CWRU
                    </li>
                </ul>
                <h2>Birchwood</h2>
            </div>
            <div id="research-section" className="section">
                <h1>Research experience</h1>

                {/* Natural Language Processing Research Intern | UCSF Hong Lab (URAP) | Sept 2021 to Present
                · PI: Dr. Julian Hong, Mentor: Travis Zack
                · Analyzing sentiment and emotion of official cancer center tweets to understand bias (GoEmotions and
                DeepMoji)
                · Classifying doctor’s notes to understand whether comments on symptoms are biased by patients’ gender, race,
                etc. to help improve accuracy of scoring patients for further treatment
                · Tech stack: Python (pytorch, tensorflow, scipy, numpy, pandas, nltk)
                Computational Linguistics Research Intern | ICSI (URAP) | Jan 2020 to Sept 2020
                · Mentor: Dmetri Hayes
                · Parsed complex languages into sub-components: took lexicon of ~8000 words, estimated frequency of top
                150 words in audio samples, and now modeling learning system from the data
                · Designed flow to gamify language learning and increase engagement among young children (web-based
                application in computational linguistics)
                · Tech stack: Python, JavaScript (React.js, jQuery)
                Electrical Engineering Research Intern | Jadoo Tech (URAP) | Feb 2019 to Sept 2019
                · PI: Dr. Waqas Khalid
                1
                · Derived theoretical equations to successfully model accuracy and efficiency of lab-created nanotech sensor
                · Tested scale of nanosensors’ effects in scope with surface area and applicability of such devices in real-time to
                display as marketable material to possible investors
                Electrical Engineering Research Intern | Case Western Reserve University | Feb 2015 to Aug 2018
                · PI: Dr. Philip Feng
                · Fabricated multimode micromembrane resonators for unique platform to quickly, accurately, and noninvasively
                study behaviors of metastatic cancer cells (https://ieeexplore.ieee.org/document/7863470)
                · Notable Awards: 2018 Siemens Semi-Finalist, Advancement to AJAS and NJSHS Conferences
                · Tech stack: Solidworks, MATLAB, COMSOL Multiphysics, 3DS Max */}

                <h1>Research publications & presentations</h1>

                {/* A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation of Breast Cancer Cells Using
                Micromechanical Resonators”, National Junior Science and Humanities Symposium (NJSHS High-
                School Student Conference), May 2‒5, 2018.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation of Breast Cancer Cells Using
                Micromechanical Resonators”, Junior Sciences and Humanities Symposium (JSHS High-School
                Student Competition), Mar. 14‒17, 2018. Advancement to National JSHS.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation of Breast Cancer Cells Using
                Micromechanical Resonators”, Hathaway Brown SREP Symposium, Mar. 6, 2018. Mu Alpha Theta
                Award.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation of Breast Cancer Cells Using
                Micromechanical Resonators”, American Junior Academy of Science Conference (AAAS High-School
                Student Conference), Feb. 15‒19, 2018.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation and Patterning of Breast Cancer
                Cells Using Vibrating Micromechanical Membranes in Biofluids”, Siemens (High-School Student
                Manuscript Competition), Sept. 24, 2017. 2017 Siemens Competition Semifinalist.
                H. Jia, H. Tang, A. Rede, X. Liu, H. Liu and P. X. -. Feng, "Dynamic manipulation and patterning of breast
                cancer cells in biosolution," 2017 IEEE 30th International Conference on Micro Electro Mechanical
                Systems (MEMS), Las Vegas, NV, 2017, pp. 569-572, doi: 10.1109/MEMSYS.2017.7863470.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation and Patterning of Breast Cancer
                Cells Using Micromechanical Resonators”, Scientific Enrichment Opportunity (CWRU High-School
                Student Summer Program), July 28, 2017.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation and Patterning of Breast Cancer
                Cells Using Micromechanical Resonators”, CWRU ShowCASE (CWRU High-School Student
                Competition), Apr. 21, 2017.
                A. Rede, H. Jia, H. Tang, P.X.-L. Feng, Ohio Academy of Science (OAS) Annual Meeting, Apr. 8,
                2017. Advancement to American Junior Academy of Science (AJAS). Awarded as Melvin Scholar.
                A. Rede, H. Jia, H. Tang, P.X.-L. Feng, Akron BEST (Bridging Engineering, Science, and Technology)
                Medicine Engineering Fair (High-School Student Competition), Mar. 11, 2017. Silver Medal.
                A. Rede, H. Jia, H. Tang, X. Liu, H. Liu, P.X.-L. Feng, “Dynamic Manipulation and Patterning of Breast Cancer
                Cells Using Micromechanical Resonators”, Hathaway Brown SREP Symposium, Mar. 7, 2017. Yale
                Science and Engineering Award (YSEA).
                A. Rede, H. Jia, H. Tang, P.X.-L. Feng, “Microparticle Patterning Using Micromechanical Resonators”, CWRU
                ShowCASE (CWRU High-School Student Competition), Apr. 15, 2016.
                A. Rede, H. Jia, H. Tang, P.X.-L. Feng, “Microparticle Patterning Using Micromechanical
                Resonators”, Hathaway Brown SREP Symposium, Mar. 8, 2016. Material Science Award (ASM
                Materials Education Foundation).
                A. Rede, H. Jia, H. Tang, P.X.-L. Feng, “Background Information on Biosensors for the Examination of Cancer
                Cells”, Hathaway Brown SREP Symposium, Mar. 9, 2015. */}
            </div>
            <div id="skills-section" className="section">
                <h1>Skills section</h1>
                <h2>Technical skills</h2>
                <ul>
                    <li>
                        Programming Languages: Javascript (jQuery), Python
                        (pytorch, scipy, numpy, pandas, bs4), Java (selenium),
                        C#, SQL, HTML/CSS
                    </li>
                    <li>Frameworks: React.js, Node.js, TensorFlow</li>
                    <li>Tools: Git, Jenkins</li>
                    <li>Testing: selenium, jest, chai</li>
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
                    <li>
                        Ancient Indian Astronomy | Aug to Dec 2020 |
                        github.com/guswnd914/cs189_project_S_final
                    </li>
                    <ul>
                        <li>
                            Building a machine learning model to predict
                            planetary motions, eclipses, and moon phases from
                            ancient Indian astronomy; Currently building model
                            to fit oscillating data (elliptical orbits)
                        </li>
                        <li>Tech stack: Python (numpy, skyfield, sklearn)</li>
                    </ul>
                    <li>
                        ML Mini-Projects | Aug to Dec 2019 |
                        github.com/arede22/MLDecal_projects
                    </li>
                    <ul>
                        <li>
                            Explored machine learning mini-projects like Deep
                            Dream and Sentiment Analysis
                        </li>
                        <li>
                            Learned how to optimize models e.g. reducing cost
                            from .99 to .15
                        </li>
                        <li>
                            Tech stack: Python (numpy, pytorch, tensorflow,
                            scipy, pandas)
                        </li>
                    </ul>
                    <li>
                        CS61B: The Game | Apr to May 2019 |
                        youtu.be/cdlxhQVUIro?t=10
                    </li>
                    <ul>
                        <li>
                            Built game from scratch with partner: multi-leveled
                            with avatar, enemies, items, and boss
                        </li>
                        <li>
                            Created a 2D game in Java using OOP principles
                            (inheritance, encapsulation, polymorphism)
                        </li>
                        <li>
                            Implemented A* pathfinding algorithm for enemy
                            movement and collision detection for player and
                            enemy interactions
                        </li>
                        <li>
                            Tech stack: Java (debugging with unit tests, data
                            structures and algorithms)
                        </li>
                    </ul>

                    {/* Portfolio Website | May 2020 to Sept 2020 | github.com/arede22/theanikarede
                    · Deployed portfolio website with HTML5, CSS3, and JavaScript in React.js framework (web development)
                    Tech stack: React.js, HTML5, CSS3, JavaScript, AWS S3 */}
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
