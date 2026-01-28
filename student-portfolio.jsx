import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, Download, BookOpen, Award, Code, Users, Lightbulb, Target, GraduationCap, Calendar, MapPin, Send } from 'lucide-react';

const StudentPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML & CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 75, category: 'Programming' },
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'SQL & Databases', level: 65, category: 'Backend' },
    { name: 'Git & GitHub', level: 80, category: 'Tools' },
    { name: 'Microsoft Office', level: 90, category: 'Productivity' }
  ];

  const coursework = [
    { course: 'Data Structures & Algorithms', grade: 'A', skills: ['Problem Solving', 'Python', 'Optimization'] },
    { course: 'Web Development', grade: 'A-', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { course: 'Database Management Systems', grade: 'B+', skills: ['SQL', 'MySQL', 'Data Modeling'] },
    { course: 'Object-Oriented Programming', grade: 'A', skills: ['Java', 'Design Patterns'] }
  ];

  const projects = [
    {
      title: 'Student Grade Tracker',
      description: 'A web application that helps students track their grades, calculate GPA, and visualize academic performance across semesters.',
      type: 'Academic Project',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['Local storage', 'Grade calculations', 'Responsive design']
    },
    {
      title: 'Library Management System',
      description: 'Database-driven system for managing book inventory, member records, and borrowing transactions for the school library.',
      type: 'Group Project',
      tech: ['Python', 'SQLite', 'Tkinter'],
      highlights: ['CRUD operations', 'Search functionality', 'Team collaboration']
    },
    {
      title: 'Personal Blog Website',
      description: 'A responsive blog platform where I share my learning journey, coding tutorials, and tech articles.',
      type: 'Personal Project',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['Responsive layout', 'Dark mode', 'SEO optimized']
    }
  ];

  const activities = [
    {
      title: 'Computer Science Society',
      role: 'Active Member',
      period: '2023 - Present',
      description: 'Participated in coding workshops, hackathons, and tech talks'
    },
    {
      title: 'Programming Bootcamp',
      role: 'Participant',
      period: 'Summer 2024',
      description: 'Intensive 6-week bootcamp on full-stack web development'
    },
    {
      title: 'Peer Tutoring Program',
      role: 'Volunteer Tutor',
      period: '2023 - 2024',
      description: 'Helped fellow students with programming fundamentals and math'
    }
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              My Portfolio
            </button>
            
            <div className="hidden md:flex gap-6">
              {['About', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['About', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <GraduationCap size={18} />
                OJT Student | Available Now
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Hello! I'm <br/>
                <span className="text-blue-600">Maria Santos</span>
              </h1>
              <p className="text-xl text-gray-600">
                3rd Year BS Computer Science Student
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Eager to learn and grow through hands-on experience. Looking for an OJT opportunity where I can apply my academic knowledge, develop new skills, and contribute to real projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Me
                </button>
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-200 hover:border-blue-600 transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-xl flex items-center justify-center text-white text-7xl font-bold">
                MS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Goal</h3>
              <p className="text-gray-600">
                To gain practical experience in software development and contribute to innovative projects while learning from industry professionals.
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interests</h3>
              <p className="text-gray-600">
                Web development, problem-solving, learning new technologies, and building projects that make a difference.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strengths</h3>
              <p className="text-gray-600">
                Fast learner, team player, detail-oriented, strong problem-solving skills, and passionate about coding.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-semibold text-gray-900">20 years old</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">Quezon City, Metro Manila</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Current Status</p>
                  <p className="font-semibold text-gray-900">3rd Year Student</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">GWA</p>
                  <p className="font-semibold text-gray-900">1.75 (Dean's Lister)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Education & Skills
          </h2>

          {/* University Info */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
                <p className="text-lg text-gray-600 mt-1">University of the Philippines Diliman</p>
                <p className="text-gray-500 mt-1">Expected Graduation: June 2026</p>
                <p className="text-blue-600 font-semibold mt-2">General Weighted Average: 1.75 (Dean's List)</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Relevant Coursework</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {coursework.map((course, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900">{course.course}</h5>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {course.grade}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {course.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 bg-white text-gray-600 rounded border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-sm text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Activities & Involvement</h3>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-4 border-l-4 border-blue-600 pl-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{activity.title}</h4>
                    <p className="text-blue-600 font-semibold text-sm">{activity.role}</p>
                    <p className="text-gray-500 text-sm mb-2">{activity.period}</p>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Academic Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-blue-600" size={20} />
                  <span className="text-xs font-semibold text-blue-600 uppercase">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white text-blue-600 rounded text-xs font-semibold border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
            <BookOpen className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Always Learning</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              I'm constantly working on new projects and expanding my skillset. Currently exploring React, Node.js, and cloud technologies to prepare for industry opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm actively looking for OJT opportunities where I can learn, grow, and contribute. Feel free to reach out if you think I'd be a good fit for your team!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:maria.santos@email.com" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Address</p>
                    <p className="text-sm text-gray-600">maria.santos@email.com</p>
                  </div>
                </a>

                <a href="tel:+639123456789" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mobile Number</p>
                    <p className="text-sm text-gray-600">+63 912 345 6789</p>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn Profile</p>
                    <p className="text-sm text-gray-600">linkedin.com/in/mariasantos</p>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group">
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-900 transition-colors">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">GitHub Profile</p>
                    <p className="text-sm text-gray-600">github.com/mariasantos</p>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send a Message</h3>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Hi Maria, I'd like to discuss..."
                />
                {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Maria Santos • OJT Portfolio</p>
          <p className="text-gray-500 text-sm mt-2">Ready to learn and contribute 🚀</p>
        </div>
      </footer>
    </div>
  );
};

export default StudentPortfolio;