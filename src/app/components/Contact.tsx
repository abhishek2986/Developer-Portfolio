import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let success = false;
    const accessKey = import.meta.env.WEB3FORM_ACCESS_KEY;
    const apiUrl = import.meta.env.WEB3FORM_API;
    try {
      const form = new FormData();
      form.append("access_key", accessKey);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        success = true;
        setSubmitted(true);
        setMessageSent(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again.");
    }
    setTimeout(() => {
      setSubmitted(false);
      setMessageSent(false);

      if (success) {
        setFormData({ name: "", email: "", message: "" }); // ✅ always reliable
      }
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abhishek974667@gmail.com",
      link: "mailto:abhishek974667@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "9054819747",
      link: "tel:+919054819747",
      color: "from-green-500 to-emerald-500",
    },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   label: "Location",
    //   value: "Vadodara, India 📍",
    //   link: null,
    //   color: "from-purple-500 to-pink-500",
    // },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com",
      color: "hover:from-gray-700 hover:to-gray-900",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhishekpatil-dev/",
      color: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      link: "https://twitter.com",
      color: "hover:from-sky-500 hover:to-sky-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full mb-4"
          >
            <MessageSquare className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
                    ></div>
                    <div className="relative flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                      <div
                        className={`p-3 bg-gradient-to-br ${info.color} text-white rounded-lg`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="relative text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Available for work
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Open to full-time opportunities and freelance projects
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          focusedField === "name"
                            ? "border-blue-500 dark:border-blue-400"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          focusedField === "email"
                            ? "border-blue-500 dark:border-blue-400"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          focusedField === "message"
                            ? "border-blue-500 dark:border-blue-400"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none`}
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={submitted}
                    whileHover={{ scale: submitted ? 1 : 1.02 }}
                    whileTap={{ scale: submitted ? 1 : 0.98 }}
                    className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      submitted
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    } text-white shadow-lg hover:shadow-xl disabled:cursor-not-allowed`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitted && messageSent && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-green-600 dark:text-green-400 font-medium"
                    >
                      "Thank you! I'll get back to you soon. 🚀"
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
