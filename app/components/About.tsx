'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white font-roboto"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-400 font-inter">
              Hi there! I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional web applications. With experience in modern web technologies, I strive to build user-friendly and efficient solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 font-roboto text-gray-700 dark:text-gray-300">
              <div>
                <div className="space-y-1">
                <h3 className="font-semibold">Name:</h3>
                <p className="text-lg font-medium">Sarabjeet Singh</p>
              </div>
              </div>
              <div>
                <div className="space-y-1">
                <h3 className="font-semibold">Location:</h3>
                <p className="text-lg font-medium">India</p>
              </div>
              </div>
              <div>
                <div className="space-y-1">
                <h3 className="font-semibold">Experience:</h3>
                <p className="text-lg font-medium">2+ Years</p>
              </div>
              </div>
              <div>
                <div className="space-y-1">
                <h3 className="font-semibold">Speciality:</h3>
                <p className="text-lg font-medium">Full Stack Development</p>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-96"
          >
            {/* Add your profile image here */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  className="w-64 h-64 bg-white rounded-full shadow-lg overflow-hidden"
                >
                  {/* Add your profile picture here */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
