import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">AM</div>
          <ul className="nav-links">
            <li className={activeSection === 'home' ? 'active' : ''}>
              <button onClick={() => setActiveSection('home')}>Home</button>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <button onClick={() => setActiveSection('about')}>About</button>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <button onClick={() => setActiveSection('experience')}>Experience</button>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <button onClick={() => setActiveSection('projects')}>Projects</button>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <button onClick={() => setActiveSection('education')}>Education</button>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <button onClick={() => setActiveSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activeSection === 'home' && (
          <section id="home" className="hero">
            <div className="hero-content">
              <h1>Aayush Moktan</h1>
              <h2>AI/ML Engineer & Software Developer</h2>
              <p>Transforming data into intelligent solutions</p>
              <div className="cta-buttons">
                <button className="primary-btn" onClick={() => setActiveSection('projects')}>View Projects</button>
                <button className="secondary-btn" onClick={() => setActiveSection('contact')}>Contact Me</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-img-placeholder">AM</div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm an AI/ML enthusiast currently pursuing advanced studies in Applied AI Solutions 
                  Development at George Brown College. With a background in Software Engineering and 
                  IoT, I combine technical expertise with practical industry experience to develop 
                  intelligent solutions.
                </p>
                <p>
                  My passion lies in developing and deploying machine learning models, with hands-on
                  experience in Python, TensorFlow, PyTorch, and OpenCV. I have strong analytical and 
                  problem-solving skills with a keen interest in computer vision and AI-driven automation.
                </p>
              </div>
              <div className="skills">
                <h3>Technical Skills</h3>
                <div className="skill-categories">
                  <div className="skill-category">
                    <h4>Data Analysis & Processing</h4>
                    <p>SQL, Python (Pandas, NumPy), R, Excel, C++, Java, Bash</p>
                  </div>
                  <div className="skill-category">
                    <h4>Machine Learning & AI</h4>
                    <p>Scikit-learn, XGBoost, PyTorch, TensorFlow, Deep Learning, NLP, OpenCV, YOLO, LLM, RAG</p>
                  </div>
                  <div className="skill-category">
                    <h4>Visualization & Reporting</h4>
                    <p>Power BI, Tableau, Matplotlib, Seaborn, Report Builder, Alteryx, Plotly</p>
                  </div>
                  <div className="skill-category">
                    <h4>Data Wrangling & ETL</h4>
                    <p>SQL, PySpark, Snowflake, Hadoop, APIs, Hive, Pig, NoSQL (MongoDB)</p>
                  </div>
                  <div className="skill-category">
                    <h4>Cloud & Infrastructure</h4>
                    <p>AWS, Docker, REST APIs, WebSocket</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section id="experience">
            <h2>Work Experience</h2>
            <div className="timeline">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Software Engineer</h3>
                  <span className="duration">Sep 2021 – Aug 2023</span>
                </div>
                <h4>Nabil Bank Ltd., Kathmandu, Nepal</h4>
                <ul>
                  <li>Developed ETL processes and automated reporting using Power BI Report Builder, improving efficiency by 45% in financial reporting</li>
                  <li>Assisted as Data administrator and ensured data accuracy during bank's acquisition process</li>
                  <li>Designed in-house applications, including MIS and SWIFT Payment systems</li>
                  <li>Automated 11+ manual banking processes using RPA, improving operational efficiency by 25%</li>
                  <li>Integrated APIs with Core Banking System and provided technical training for 248 branches</li>
                </ul>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Assistant Software Engineer</h3>
                  <span className="duration">Apr 2021 - Aug 2021</span>
                </div>
                <h4>Uplift Solutions Pvt. Ltd., Kathmandu, Nepal</h4>
                <ul>
                  <li>Participated in all phases of the software development lifecycle</li>
                  <li>Developed frontend interfaces using Vue.js and React</li>
                  <li>Designed backend RESTful APIs with Node.js</li>
                  <li>Implemented data scraping scripts using Python's BeautifulSoup library</li>
                </ul>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Jr. Web Developer</h3>
                  <span className="duration">Jun 2019 - Dec 2020</span>
                </div>
                <h4>ESC Pvt. Ltd., Kathmandu, Nepal</h4>
                <ul>
                  <li>Optimized database queries for the Nepal Government's "Darta Chalani" project, boosting system efficiency by 70%</li>
                  <li>Developed a stock management system with data-driven forecasting for hospital pharmacies</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-content">
                  <h3>Resume Analyzer</h3>
                  <p className="tech-stack">NLP, Transformers, Cosine Similarity</p>
                  <p>Built a resume-ranking system using DistilBERT for sentence embeddings and cosine similarity to match resumes with job descriptions.</p>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-content">
                  <h3>Vegetable Detection</h3>
                  <p className="tech-stack">YOLO, OpenCV</p>
                  <p>Developed an object detection model using YOLOv8 and OpenCV with 95% accuracy in identifying vegetables. Optimized performance using data augmentation and hyperparameter tuning.</p>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-content">
                  <h3>Stock Market Analysis</h3>
                  <p className="tech-stack">Random Forest, XGBoost, LSTM</p>
                  <p>Developed predictive models for Nabil Bank's stock market data using multiple algorithms. Preprocessed time-series data and applied feature engineering for trend analysis.</p>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-content">
                  <h3>NYC Taxi Analytics</h3>
                  <p className="tech-stack">Power BI</p>
                  <p>Developed an interactive Power BI dashboard to analyze NYC taxi trip data, uncovering insights on trip demand, fare distribution, and route efficiency.</p>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-content">
                  <h3>Kaggle LLM Competition</h3>
                  <p className="tech-stack">NLP, Prompt Engineering</p>
                  <p>Participated in the "LLMs: You Can't Please Them All" competition, optimizing NLP-generated essays using prompt engineering and data analysis techniques.</p>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-content">
                  <h3>Covid-19 Vaccination Progress</h3>
                  <p className="tech-stack">Plotly, Time Series Analysis</p>
                  <p>Analyzed global COVID-19 vaccination data using Plotly, creating interactive visualizations to track vaccination progress and identify trends.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section id="education">
            <h2>Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <h3>Applied AI Solutions Development</h3>
                <h4>George Brown College, Toronto</h4>
                <p className="duration">Sep 2024 – Sep 2025</p>
                <p>Relevant Coursework: Data Analysis, Machine Learning, Big Data, Data Ethics, Deep Learning, Mathematics</p>
              </div>
              
              <div className="education-item">
                <h3>IoT and Machine Intelligence</h3>
                <h4>Sheridan College, Brampton</h4>
                <p className="duration">Sep 2023 – Aug 2024</p>
                <p>Relevant Coursework: Robotics, Machine Learning, Embedded System, Sensors</p>
              </div>
              
              <div className="education-item">
                <h3>BSc. Hons Computing (Software Engineering)</h3>
                <h4>University of Northampton</h4>
                <p className="duration">Sep 2017 – Sep 2020</p>
                <p>Relevant Coursework: Programming, Database, Problem Solving, Software Engineering</p>
              </div>
            </div>
            
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>
                <li>Data Analysis with Python by IBM (Coursera)</li>
                <li>Data Analytics Capstone by Google (Coursera)</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:aayush.moktan1116@gmail.com">aayush.moktan1116@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+14376637040">437-663-7040</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span>Ontario, Canada</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/aayush-moktan-392754159" target="_blank" rel="noopener noreferrer">linkedin.com/in/aayush-moktan-392754159</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">GitHub:</span>
                  <a href="https://github.com/moktanaayush" target="_blank" rel="noopener noreferrer">github.com/moktanaayush</a>
                </div>
              </div>
              
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Message" rows="5"></textarea>
                  </div>
                  <button type="submit" className="primary-btn">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Aayush Moktan. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aayush-moktan-392754159" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/moktanaayush" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;