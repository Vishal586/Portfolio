import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block cursor-pointer select-none"> Hi, I'm Vishal Kumar</span>
              </span>
            </h1>
            <p className="text-lg text-gray-300 font-mono cursor-pointer select-none">
              {"Building Scalable, Distributed, and Resilient Architectures"}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl mb-8 text-purple-200 cursor-pointer select-none">
            Software Developer | Full Stack Developer | Mentor at GSSoC'25
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/projects" duration={500}>
              View My Work
            </Link>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Vishal_Kumar_Resume.pdf" // place resume inside public folder
            download="Vishal_Kumar_Resume.pdf"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all inline-block"
          >
            View My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
