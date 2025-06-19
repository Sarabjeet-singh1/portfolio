'use client';

import { motion } from 'framer-motion';
import { 
  JavaScriptIcon, 
  ReactIcon, 
  NextjsIcon, 
  NodejsIcon, 
  TypeScriptIcon, 
  TailwindIcon, 
  GitIcon, 
  MongoDBIcon
} from './icons/SkillIcons';

const Skills = () => {
  const skills = [
    { 
      name: 'JavaScript', 
      icon: <JavaScriptIcon className="w-12 h-12" /> 
    },
    { 
      name: 'React', 
      icon: <ReactIcon className="w-12 h-12" /> 
    },
    { 
      name: 'Next.js', 
      icon: <NextjsIcon className="w-12 h-12" /> 
    },
    { 
      name: 'Node.js', 
      icon: <NodejsIcon className="w-12 h-12" /> 
    },
    { 
      name: 'TypeScript', 
      icon: <TypeScriptIcon className="w-12 h-12" /> 
    },
    { 
      name: 'Tailwind CSS', 
      icon: <TailwindIcon className="w-12 h-12" /> 
    },
    { 
      name: 'Git', 
      icon: <GitIcon className="w-12 h-12" /> 
    },
    { 
      name: 'MongoDB', 
      icon: <MongoDBIcon className="w-12 h-12" /> 
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">


        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl shadow-lg dark:shadow-gray-700"
            >
              <div className="flex items-center gap-4 p-6 rounded-xl shadow-lg dark:shadow-gray-700 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">Expertise in building modern web applications</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
