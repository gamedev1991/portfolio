
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Card from './common/Card';
import Button from './common/Button';
import AnimatedText from './common/AnimatedText';
import { Mail, Linkedin, ExternalLink, Send, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return;

    setIsSubmitting(true);

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size animate-grid-background opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">Get In Touch</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Interested in discussing a project or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card variant="neon" className="p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cyber-darker/70 border border-white/10 focus:border-cyan-500 text-white px-4 py-2 rounded-md outline-none transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cyber-darker/70 border border-white/10 focus:border-cyan-500 text-white px-4 py-2 rounded-md outline-none transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-cyber-darker/70 border border-white/10 focus:border-cyan-500 text-white px-4 py-2 rounded-md outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <Send size={16} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 text-center text-green-400 text-sm animate-fade-in">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 text-center text-red-400 text-sm animate-fade-in">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white/70 mb-6">
                Feel free to reach out through the contact form or connect with me directly through these channels:
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:rahulohri2007@gmail.com" 
                  className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>Email</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/rahul-ohri/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                
                <a
                  href="https://github.com/gamedev1991"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-colors">
                    <Github size={18} />
                  </div>
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="https://steamcommunity.com/profiles/76561198123903147/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <span>Steam Game Profile</span>
                </a>
              </div>
            </div>
            
            <Card variant="hover" className="p-5 border border-white/10">
              <h4 className="text-lg font-medium text-white mb-2">Let's Build Something Amazing</h4>
              <p className="text-white/70 text-sm">
                Whether you're looking for a product manager, game developer, or a collaborative partner for your next project, I'm excited to discuss how my skills and experience can contribute to your success.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
