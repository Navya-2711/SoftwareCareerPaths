import React from 'react';
import './About.css';
import Navbar1 from '../Navbar1/Navbar1';

function About() {
  return (
    <>
    <Navbar1/>
    <section className="about">
      <h2>SOFTWARE CAREER PATHS</h2>
      <p>
      The field of software development offers a wide variety of career paths, each with its own set of opportunities, challenges, and potential for growth. Below is an overview of the primary career paths within the software industry, highlighting key companies, 
      the impact of AI on these roles, and common placement questions you may encounter during interviews.
      </p>
      <h1>OUR MISSION</h1>
      
      <div className="card-container1">
        <div className="card1">
          <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_660952912_396368.jpg" className="card-img"/>
          <h3>Top Companies</h3>
          <p>
          Our mission is to select top companies in India, such as TCS, Accenture, Wipro, Infosys, and others.
           We aim to provide comprehensive information about these leading firms to give you a complete understanding of their operations.
           
          </p>
        </div>

        <div className="card1">
          <img src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=" alt="Vision" className="card-img" />
          <h3>Ai</h3>
          <p>
          If you have any doubts, you can ask the AI. It is designed to assist you with any questions or concerns you may have.
           The AI added to this webpage is functioning correctly, 
          ensuring a smooth and helpful experience as you navigate through the site.
          </p>
        </div>

        <div className="card1">
          <img src="https://external-preview.redd.it/microsoft-starts-rolling-out-notepads-spellcheck-and-v0-o_ZU0-FMNSxgI6v4cHj5zi2zG_Gee5h-sH_j5Nj2fPE.jpg?auto=webp&s=e47ef319dc71351b30e8bc4b24a77511bbc213a1" alt="Safety" className="card-img" />
          <h3>Notepad</h3>
          <p>
          In the notepad, you can write answers and save them in the history for future reference. It also allows you to edit the content whenever necessary. The changes are saved automatically. This makes it easy to manage and update your notes efficiently.
          </p>
        </div>

        
      </div>

    
      <h1 className='abh'>TEAM LEADERS</h1>
      <div className="card-container2">
      
        <div className="card2">
          <img src="https://img.freepik.com/premium-photo/beautiful-cute-anime-girl-innocent-anime-teenage_744422-6819.jpg?w=360" className="card-img1"/>
          <h3>Navya</h3>
          <p>
          8519963801
           
          </p>
        </div>

        <div className="card2">
          <img src="https://img.freepik.com/premium-photo/beautiful-cute-anime-girl-innocent-anime-teenage_744422-6819.jpg?w=360" alt="Vision" className="card-img1" />
          <h3>Prudhula</h3>
          <p>8179497192
          
          </p>
        </div>

        <div className="card2">
          <img src="https://img.freepik.com/premium-photo/beautiful-cute-anime-girl-innocent-anime-teenage_744422-6819.jpg?w=360" alt="Safety" className="card-img1" />
          <h3>Gandhi Kumari</h3>
          <p>9243785665
         
          </p>
        </div>

        
      </div>


    <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
          <li><a href="/Home">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Companies">Companies</a></li>
            <li><a href="/Contact">Contact</a></li>
            
          </ul>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="/Coding">placements</a></li>
            <li><a href="/Ai">Ai</a></li>
            <li><a href="/Note">Notepad</a></li>
            <li><a href="/History">History</a></li>
            
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
 

    </section>
    </>
  );
}

export default About;
