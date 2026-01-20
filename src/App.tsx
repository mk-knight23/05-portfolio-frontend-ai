import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Layers, Cpu, Zap, Headphones, Send, User, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

const concepts = [
  { id: 1, title: "Component-Based", desc: "Build encapsulated components that manage their own state, then compose them to make complex UIs.", icon: <Layers className="w-6 h-6 text-indigo-500" /> },
  { id: 2, title: "Declarative", desc: "React makes it painless to create interactive UIs. Design simple views for each state in your application.", icon: <Code2 className="w-6 h-6 text-blue-500" /> },
  { id: 3, title: "Learn Once, Write Anywhere", desc: "You can develop new features in React without rewriting existing code.", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
  { id: 4, title: "JSX", desc: "JSX is a syntax extension that makes it easier to write and add HTML in React.", icon: <Cpu className="w-6 h-6 text-purple-500" /> },
  { id: 5, title: "Virtual DOM", desc: "React creates an in-memory data structure cache, computes mapping, and efficiently updates the browser.", icon: <BookOpen className="w-6 h-6 text-green-500" /> },
  { id: 6, title: "React Hooks", desc: "Hooks let you use state and other React features without writing a class.", icon: <Headphones className="w-6 h-6 text-rose-500" /> },
];

function App() {
  const [feedback, setFeedback] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 italic-none">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full">
              Learning Path 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Master <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">React JS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
              A comprehensive guide to building modern, efficient, and scalable user interfaces with the world's most popular JavaScript library.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Concepts</h2>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8">Course Info</h2>
            <div className="space-y-6">
              <InfoItem icon={<User className="w-5 h-5 text-indigo-500" />} label="Instructor" value="Kazi" />
              <InfoItem icon={<MapPin className="w-5 h-5 text-indigo-500" />} label="Location" value="Latur, India" />
              <InfoItem icon={<Mail className="w-5 h-5 text-indigo-500" />} label="Email" value="Kazi@gmail.com" />
              <InfoItem icon={<Phone className="w-5 h-5 text-indigo-500" />} label="Contact" value="+91 876534567" />
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-indigo-900 mb-2">Completion Badge Included</h4>
                <p className="text-indigo-700 text-sm">Every student who completes the course and builds the final project receives a certificate of excellence.</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-[2rem] bg-slate-900 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Student Feedback</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you think..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
              <button className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-indigo-500/20">
                Submit Feedback
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2024 Kazi Website. Part of the 30 Projects Rebuild Wave.</p>
      </footer>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 italic-none">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default App;
