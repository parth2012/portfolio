import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parththaker1991@gmail.com",
      color: "bg-yellow-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9601350850",
      color: "bg-pink-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
      color: "bg-purple-400",
    },
  ];

  const socialLinks = [
    // { icon: Github, url: '#', color: 'bg-black text-white' },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/pthaker",
      color: "bg-blue-600 text-white",
    },
    // { icon: Twitter, url: '#', color: 'bg-blue-400 text-white' },
    // { icon: Instagram, url: '#', color: 'bg-pink-500 text-white' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 transform rotate-1">
            GET IN TOUCH
          </h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto border-2 border-black"></div>
          <p className="text-xl font-bold text-gray-700 mt-6 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing
            together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000] transform -rotate-1"
          >
            <h3 className="text-3xl font-black text-black mb-6">
              SEND MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-3 border-black font-medium focus:outline-none focus:ring-0 focus:border-yellow-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-3 border-black font-medium focus:outline-none focus:ring-0 focus:border-yellow-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-3 border-black font-medium focus:outline-none focus:ring-0 focus:border-yellow-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 border-3 border-black font-medium focus:outline-none focus:ring-0 focus:border-yellow-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-400 text-black py-4 px-6 border-3 border-black font-bold text-lg shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200 flex items-center justify-center gap-2"
              >
                SEND MESSAGE
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                  className={`${info.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 flex items-center space-x-4`}
                >
                  <info.icon className="w-8 h-8 text-black" />
                  <div>
                    <h4 className="font-black text-black text-lg">
                      {info.label}
                    </h4>
                    <p className="font-bold text-black">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] transform rotate-1"
            >
              <h4 className="text-2xl font-black text-black mb-4">FOLLOW ME</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${social.color} p-3 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200`}
                    target="_blank"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#fff] transform -rotate-1"
            >
              <h4 className="text-2xl font-black mb-2">LET'S WORK TOGETHER!</h4>
              <p className="font-bold">
                I'm always excited to take on new challenges and create amazing
                digital experiences. Drop me a line!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
