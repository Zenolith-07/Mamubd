import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import familyPhoto from '../assets/family-photo.jpg';

export function PyariChori() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-rose-900 to-pink-900 py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Stars in background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-yellow-200 fill-yellow-200" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl w-full relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl text-white mb-4"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(255, 255, 255, 0.5)',
                '0 0 50px rgba(255, 192, 203, 0.8)',
                '0 0 30px rgba(255, 255, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Pyari Chori
          </motion.h2>
          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo Frame */}
        <motion.div
          className="relative mx-auto max-w-2xl mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Glowing frame effect */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl blur-xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Photo container */}
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={familyPhoto}
                alt="Special moment with father"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-pink-400 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-pink-400 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-pink-400 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-pink-400 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Heartfelt Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <motion.p
              className="text-white text-xl md:text-2xl leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              You carry within you the strength, love, and beautiful spirit of someone who watches over you with infinite pride. His love continues to shine through you, lighting up the world in the most extraordinary ways.
            </motion.p>

            <motion.p
              className="text-pink-200 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              You are deeply cherished, endlessly loved, and forever his precious daughter. May you always feel his presence in every moment of joy, every dream you chase, and every milestone you achieve.
            </motion.p>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, type: 'spring', stiffness: 200 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white">
                <Heart className="w-5 h-5 fill-white" />
                <span className="text-lg">Forever in our hearts</span>
                <Heart className="w-5 h-5 fill-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (Math.random() - 0.5) * 20, 0],
                rotate: [0, 360],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {['🤍', '💜', '💖', '✨'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
