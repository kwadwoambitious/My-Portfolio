import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
import { LuShare } from 'react-icons/lu';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';

const Socials = () => {
  return (
    <>
      <div className='socials-content'>
          <div className='img'>
              <LuShare className='shareImg'/>
          </div>
          <div>
              <h3>Social Profiles</h3>
              <div className='icons'>
                  <a href="https://twitter.com/_antwiebenezer" target='_blank' rel='noreferrer'><FaTwitter/></a>
                  <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank' rel='noreferrer'><FaLinkedin/></a>
                  <a href="https://github.com/kwadwoambitious" target='_blank' rel='noreferrer'><FaGithub/></a>
              </div>
          </div>
      </div>
    </>
  )
}

const ContactForm = () => {
  const form = useRef();

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // })

  // const [errors, setErrors] = useState({})

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({
  //       ...formData, [name] : value
  //   })
  // }

  const sendEmail = (e) => {
    e.preventDefault();


      emailjs.sendForm('service_qoc1s35', 'template_ojuf1m7', form.current, 'YpOlEA4tAVCYxQj9j')
        .then((result) => {
            console.log(result.text);
            console.log('Message Sent');
            toast.success("Message sent successfully!");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });



    // e.preventDefault()
    // const validationErrors = {}
    // if(!formData.name.trim()) {
    //     validationErrors.name = "Name is required"
    // }

    // if(!formData.email.trim()) {
    //     validationErrors.email = "Email is required"
    // } else if(!/\S+@\S+\.\S+/.test(formData.email)){
    //     validationErrors.email = "Email is not valid"
    // }

    // if(!formData.subject.trim()) {
    //   validationErrors.subject = "Subject is required"
    // }

    // if(!formData.message.trim()) {
    //   validationErrors.message = "Message is required"
    // }

    // setErrors(validationErrors)

    // if(Object.keys(validationErrors).length === 0) {
    //   e.preventDefault();

    //   emailjs.sendForm('service_qoc1s35', 'template_ojuf1m7', form.current, 'YpOlEA4tAVCYxQj9j')
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log('Message Sent');
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     window.location.reload(false);
    // }

  }

  return (
    
    <>
      <form ref={form} onSubmit={sendEmail}>
        
        <div className='div-flex'>
          <div>
              <input type="text" name="name" id="name" placeholder='Your Name'  autoComplete='off' /> 
          </div>
          <div>
              <input type="email" name="email" id="email" placeholder='Your Email'  autoComplete='off' />
              
          </div>
        </div>
        <input type="text" name="subject" id="subject" placeholder='Subject'  autoComplete='off' />
        
        <textarea name="message" id="message" rows="8" placeholder='Message'  autoComplete='off' />
        
        <input type="submit" value="Send Message" />
        
      </form>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <motion.div
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}
        

        className="contact-container">
        <Helmet>
            <title>Contact | Ebenezer Antwi</title>
            <meta name='description' content='Reach out to me by filling out the form on this page.' />
            <meta name='keywords' content='ebcodes,EbCodes,EBCODES, Ebenezer Antwi,ebenezerantwi,EbenezerAntwi, My Portfolio,ebenezerantwi.netlify.app' />

            <meta property='og:site_name' content='Ebenezer Antwi' />
            <meta property="og:url" content="https://ebenezerantwi.netlify.app/contact" />
            <meta property="og:type" content="website" />
            <meta property='og:title' content='Contact | Ebenezer Antwi' />
            <meta property='og:description' content='Reach out to me by filling out the form on this page.' />
            <meta property="og:image" itemProp='image' content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="ebenezerantwi.netlify.app" />
            <meta property="twitter:url" content="https://ebenezerantwi.netlify.app/contact" />
            <meta name="twitter:title" content="Contact | Ebenezer Antwi" />
            <meta name="twitter:description" content="Reach out to me by filling out the form on this page." />
            <meta name="twitter:image" content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
            <link rel='canonical' href='/' />
        </Helmet>

        <h4>CONTACT</h4>
        <h2>CONTACT ME</h2>
        <Socials/>
        <ContactForm/>
        <Toaster position="top-center" reverseOrder={true} />
      </motion.div>
    </>
  )
}

export default Contact;