import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center mx-auto shadow-xl">
            <Code2 className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Ethan Hopper
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          aka <span className="font-bold text-slate-900">CodeGhost</span>
        </p>

        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer & Creative Problem Solver
        </p>

        <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">
          Building elegant solutions to complex problems. Specialized in modern web technologies and scalable architectures.
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 font-medium hover:scale-105"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-slate-700 hover:text-slate-900 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-slate-700 hover:text-slate-900 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ethan@codeghost.dev"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-slate-700 hover:text-slate-900 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
