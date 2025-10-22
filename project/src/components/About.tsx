import { Code, Zap, Users, Trophy } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency, delivering exceptional user experiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams, communicating clearly, and sharing knowledge.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Committed to continuous learning and delivering high-quality solutions.'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Next.js',
    'GraphQL', 'Docker', 'AWS', 'Git'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate about crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.title}</h3>
              <p className="text-slate-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
