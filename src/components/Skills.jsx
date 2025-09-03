import { motion } from 'framer-motion';
import { FiCpu, FiDatabase, FiLayers, FiCloud } from 'react-icons/fi';

const skillCategories = [
  {
    title: "Backend Development",
    icon: <FiCpu className="text-purple-400 text-xl" />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO']
  },
  {
    title: "Frontend Development",
    icon: <FiLayers className="text-purple-400 text-xl" />,
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    title: "Database Management",
    icon: <FiDatabase className="text-purple-400 text-xl" />,
    skills: ['MongoDB', 'SQL', 'Database Design', 'Data Modeling', 'MongoDB Atlas']
  },
  {
    title: "DevOps & Cloud",
    icon: <FiCloud className="text-purple-400 text-xl" />,
    skills: ['Git', 'GitHub', 'Vercel', 'AWS', 'Cloudinary']
  },
  {
    title: "Programming Languages",
    icon: <FiCpu className="text-purple-400 text-xl" />,
    skills: ['C++', 'JavaScript', 'Java', 'Data Structures', 'Algorithms']
  }
];

const Skills = () => {
  return (
    <section 
      id="skills"
      className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4 sm:leading-[66px]">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Full-stack development expertise with focus on MERN stack and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (catIndex * 0.1) + (skillIndex * 0.03), duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 bg-gray-700/40 rounded-lg text-gray-100 border border-gray-600/30 hover:border-purple-400/50 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">Development Focus Areas</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and methodologies I specialize in for building modern applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['MERN Stack', 'CRUD Operations', 'API Integration', 'Responsive UI', 'Authentication', 'Payment Systems', 'Real-time Apps', 'Deployment']
              .map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (i * 0.05), duration: 0.5 }}
                className="p-6 bg-gray-800/40 rounded-lg border border-gray-700/50 text-center hover:bg-gray-700/60 transition-colors"
              >
                <div className="text-purple-300 font-medium">{principle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;