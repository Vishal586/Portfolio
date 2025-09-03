import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCloud, FiCpu, FiDatabase, FiMonitor } from 'react-icons/fi';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building scalable applications with modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiDatabase className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Backend Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building robust APIs using <span className="text-purple-300 font-medium">Node.js</span> and 
                <span className="text-purple-300 font-medium"> Express</span>, with authentication using 
                <span className="text-purple-300 font-medium"> JWT</span>. Experienced in 
                <span className="text-purple-300 font-medium"> RESTful API design</span> and 
                <span className="text-purple-300 font-medium"> MongoDB</span> for database management. 
                Implemented <span className="text-purple-300 font-medium">real-time features</span> using 
                <span className="text-purple-300 font-medium"> Socket.IO</span> and integrated 
                <span className="text-purple-300 font-medium"> payment systems</span> with 
                <span className="text-purple-300 font-medium"> Stripe</span>. Focused on 
                <span className="text-purple-300 font-medium"> clean architecture</span> and 
                <span className="text-purple-300 font-medium"> scalable application design</span>.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCloud className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Full Stack Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Developed full-stack applications using the <span className="text-purple-300 font-medium">MERN stack</span> 
                with role-based authentication systems. Built projects including 
                <span className="text-purple-300 font-medium"> job portals</span>, 
                <span className="text-purple-300 font-medium"> AI virtual assistants</span> with 
                <span className="text-purple-300 font-medium"> Gemini AI integration</span>, and 
                <span className="text-purple-300 font-medium"> e-commerce platforms</span>. 
                Experienced in <span className="text-purple-300 font-medium">state management</span> with 
                <span className="text-purple-300 font-medium"> Redux Toolkit</span> and 
                <span className="text-purple-300 font-medium"> responsive UI design</span> using 
                <span className="text-purple-300 font-medium"> Tailwind CSS</span>. 
                Deployed applications using <span className="text-purple-300 font-medium">Vercel</span> and 
                <span className="text-purple-300 font-medium"> cloud services</span> like 
                <span className="text-purple-300 font-medium"> Cloudinary</span> for media management.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCpu className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Frontend Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building interactive user interfaces with modern frameworks like 
                <span className="text-purple-300 font-medium"> React.js</span> and 
                <span className="text-purple-300 font-medium"> Next.js</span>. Skilled in creating 
                <span className="text-purple-300 font-medium"> responsive designs</span> using 
                <span className="text-purple-300 font-medium"> Tailwind CSS</span> and implementing 
                <span className="text-purple-300 font-medium"> dynamic routing</span>. Experienced with 
                <span className="text-purple-300 font-medium"> component-based architecture</span> and 
                <span className="text-purple-300 font-medium"> API integration</span>. Focused on 
                <span className="text-purple-300 font-medium"> performance optimization</span> and 
                <span className="text-purple-300 font-medium"> user experience</span>.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiAward className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Solved 350+ coding challenges across LeetCode, GeeksforGeeks, and CodeStudio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Ranked in the Top 10% on GeeksforGeeks Campus Leaderboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Mentor at GSSoC'25 (Girl Script Summer of Code)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Completed GeeksforGeeks 160 Days DSA course and Soft Skills training</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;