import { motion } from 'framer-motion'
import { Mail, Phone, Send, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

/**
 * Contact Component: Includes a functional contact form using EmailJS
 * and personal contact information.
 */
export default function Contact() {
  // Reference to the form element
  const form = useRef();
  
  // States for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  /**
   * Handles form submission using EmailJS.
   * You will need to replace the IDs with your own from the EmailJS dashboard.
   */
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your Service ID
      'YOUR_TEMPLATE_ID',  // Replace with your Template ID
      form.current,
      'YOUR_PUBLIC_KEY'    // Replace with your Public Key
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset(); // Clear the form on success
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      // Remove the status message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      {/* Header section with title and subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gradient">Let's Work Together</h2>
        <p className="text-secondary">Have a project in mind? Let's discuss how we can bring your ideas to life.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* --- LEFT: Functional Contact Form --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-lg font-bold text-primary mb-6">Send me a message</h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            {/* Name + Email row: Input names must match your EmailJS template variables */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-secondary font-medium">Name *</label>
                <input
                  type="text"
                  name="user_name" // Variable name for EmailJS
                  required
                  placeholder="Your name"
                  className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-secondary font-medium">Email *</label>
                <input
                  type="email"
                  name="user_email" // Variable name for EmailJS
                  required
                  placeholder="your.email@example.com"
                  className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-secondary font-medium">Subject *</label>
              <input
                type="text"
                name="subject" // Variable name for EmailJS
                required
                placeholder="Project discussion"
                className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-secondary font-medium">Message *</label>
              <textarea
                name="message" // Variable name for EmailJS
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success/Error Feedback Messages */}
            {status === 'success' && (
              <p className="text-green-400 text-xs text-center font-medium animate-fade-in">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center font-medium animate-fade-in">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>

        {/* --- RIGHT: Contact Info & Socials --- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Get in touch</h3>
            <div className="flex flex-col gap-3">
              {/* Direct Email link */}
              <a href="mailto:work.aniket4@gmail.com" className="flex items-center gap-4 glass-card p-4 hover:border-accent/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary mb-0.5">Email</p>
                  <p className="text-sm text-primary font-medium group-hover:text-accent transition-colors">work.aniket4@gmail.com</p>
                </div>
              </a>

              {/* Phone number card */}
              <div className="flex items-center gap-4 glass-card p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary mb-0.5">Phone</p>
                  <p className="text-sm text-primary font-medium">+91 9975499107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-base font-bold text-primary mb-3">Follow me</h3>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/aniket-shinde-15413a2b7" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/aniket.shinde_7" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Location / Map Placeholder */}
          <div className="glass-card flex-1 min-h-[160px] flex flex-col items-center justify-center gap-2 text-secondary/40">
            <MapPin size={28} />
            <p className="text-xs">Mumbai, Maharashtra, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
