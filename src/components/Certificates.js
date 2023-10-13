import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Certificates = () => {
  return (
    <>
      <motion.div 
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}

        className="awards-container">
        <Helmet>
            <title>Certificates | Ebenezer Antwi</title>
            <meta name='description' content='You can find my achievements here.' />
            <meta name='keywords' content='ebcodes,EbCodes,EBCODES, Ebenezer Antwi,ebenezerantwi,EbenezerAntwi, My Portfolio,ebenezerantwi.netlify.app' />
            
            <meta property='og:site_name' content='Ebenezer Antwi' />
            <meta property="og:url" content="https://ebenezerantwi.netlify.app/certificates" />
            <meta property="og:type" content="website" />
            <meta property='og:title' content='Certificates | Ebenezer Antwi' />
            <meta property='og:description' content='You can find my achievements here.' />
            <meta property="og:image" itemProp='image' content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="ebenezerantwi.netlify.app" />
            <meta property="twitter:url" content="https://ebenezerantwi.netlify.app/certificates" />
            <meta name="twitter:title" content="Certificates | Ebenezer Antwi" />
            <meta name="twitter:description" content="You can find my achievements here." />
            <meta name="twitter:image" content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
            <link rel='canonical' href='/' />
        </Helmet>
        <h4>CERTIFICATES</h4>
        <h2>MY CERTIFICATES</h2>
          <section class="timeline-section">
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">June, 2023</div>
                <div class="timeline-content">
                  <h3>PROGRAMMING WITH JAVASCRIPT</h3>
                  <p>I was fortunate enough to partake in this course powered by <span>Coursera.</span> Having completed online courses on HTML and CSS, I needed to learn JavaScript to make my projects more interactive. During this course, I was exposed to vital lessons such as arrays, functions, DOM, classes, testing, etc. With the knowledge acquired from this course, I could build projects more effectively.</p>
                  <a href='https://www.coursera.org/account/accomplishments/certificate/NCG2M8UKH65Z' target='_blank' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">May, 2023</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Building projects that were not responsive was giving me a headache. So, I decided to find an online course that would help me solve these issues. I got to know about this course offered by <span>freeCodeCamp</span> from a friend. I learned the best way to make my projects very responsive on various screen sizes. During this course, I was given five different projects to work on, and they were completed successfully.</p>
                  <a href='https://www.freecodecamp.org/certification/antwiebenezer/responsive-web-design' target='_blank' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
              {/* <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">July 2022</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <a href='https://www.sololearn.com/Certificate/CT-KHVQLLZH/png' target='_blank' rel='noreferrer'>CHECK IT</a>
                </div>
              </div> */}
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">May, 2021</div>
                <div class="timeline-content">
                  <h3>HTML</h3>
                  <p>I wanted to learn web development, so I inquired about it and became aware that HTML plays a significant role in the field. A friend introduced me to a mobile app called <span>Sololearn</span> that teaches this course. The app demonstrated what it takes to structure a web page, and through it, I studied the basic elements to construct a page.</p>
                  <a href='https://www.sololearn.com/Certificate/CT-Y4HSQYNM/png' target='_blank' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
            </div>
          </section>
      </motion.div>
    </>
  )
}

export default Certificates;