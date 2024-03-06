import React, { useState, useRef } from 'react';
import SectionHeading from './SectionHeading';
import toast from 'react-hot-toast';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmailJS } from '../actions/sendEmailJS';
import Footer from './Footer';

export default function Contact() {
  const [inputValue, setInputValue] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  const form = useRef();
  return (
    <motion.section
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1.5 }}
      viewport={{ once: true }}
      className="h-auto pt-6 sm:pt-8 lg:pt-12 md-8 max-w-[1920px] m-auto"
      id="#contact"
    >
      <div className="mt-20 pb-4">
        <SectionHeading>Contact Us</SectionHeading>
      </div>

      <motion.div
        initial={{ x: -300, opacity: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        viewport={{ once: true }}
        className="h-auto bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542083131-01357347695a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col h-auto bg-black/60">
          <div className="container flex flex-col flex-2 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Beyond Pixels – We Capture Emotions.
                </h1>

                <p className="max-w-xl mt-6">
                  Feel free to reach out to us with any inquiries, bookings, or
                  to discuss your specific photography needs. We look forward to
                  the opportunity to collaborate with you and transform your
                  moments into unforgettable images. Contact us today, and let's
                  start capturing memories together!"
                </p>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 ">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500 text-[1.5rem]"
                      href="https://www.tiktok.com/@deopalculanphotography"
                    >
                      <FaTiktok />
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500 text-[1.5rem]"
                      href="https://www.facebook.com/deopalculanphotography"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  duration: 0.3,
                  delay: 0.4,
                  stiffness: 85,
                }}
                viewport={{ once: true }}
                className="mt-8 lg:w-1/2 lg:mx-6"
              >
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white opacity-95 shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700">
                    Get In Touch
                  </h1>

                  <p className="mt-2 text-gray-500 ">
                    Ask us anything and we would love to hear from you
                  </p>

                  <form
                    ref={form}
                    className="mt-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                     
                      sendEmailJS(form);
                      toast.success('Email sent successfully!');
                      
                      setInputValue({
                        senderMessage: '',
                        senderEmail: '',
                        senderName: '',
                      });
                    }}
                  >
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        name="user_name"
                        maxLength={100}
                        value={inputValue.senderName}
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            senderName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="youremail@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 d focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        name="user_email"
                        maxLength={500}
                        value={inputValue.senderEmail}
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            senderEmail: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        placeholder="Message"
                        name="message"
                        maxLength={5000}
                        value={inputValue.senderMessage}
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            senderMessage: e.target.value,
                          })
                        }
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                    >
                      get in touch
                    </button>
                  </form>
                </div>
              </motion.div>
              
            </div>
            <Footer />
          </div>
         
        </div>
        
      </motion.div>
    </motion.section>
  );
}
