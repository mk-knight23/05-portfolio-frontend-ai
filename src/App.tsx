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
      {/* Premium Hero Section */}
      <section className="relative py-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-5 py-2 mb-8 text-xs font-black tracking-[0.2em] text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              ENGINEERING EXCELLENCE 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
              Architect <br /><span className="bg-gradient-to-br from-indigo-400 via-white to-purple-400 bg-clip-text text-transparent">Digital Worlds</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-12 font-medium">
              A masterclass on building high-performance, accessible, and stunningly beautiful user interfaces with React.
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
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-indigo-500/30 shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(99,102,241,0.12)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-50 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
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

          <div className="p-12 rounded-[3rem] bg-slate-950 text-white shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />
            <h3 className="text-3xl font-black mb-8 tracking-tighter relative z-10">Enrolment & Support</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8 relative z-10">
              <div>
                <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-widest">Share Your Vision</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you master React?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/[0.06] focus:border-indigo-500/50 outline-none transition-all placeholder:text-slate-700 text-lg font-medium"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
              <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black flex items-center justify-center gap-3 transition-all group shadow-xl shadow-indigo-500/20 active:scale-95">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Kazi Musharraf. Part of the 30 Projects Modernization Wave.</p>
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
