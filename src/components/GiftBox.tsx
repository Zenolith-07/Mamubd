import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Confetti from 'react-confetti';
import { Gift, Sparkles } from 'lucide-react';

interface GiftBoxProps {
  onUnwrap: () => void;
}

export function GiftBox({ onUnwrap }: GiftBoxProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleUnwrap = () => {
    setIsUnwrapped(true);
    setShowConfetti(true);
    
    // Show banner after short delay
    setTimeout(() => {
      setShowBanner(true);
    }, 500);

    // Navigate to next section
    setTimeout(() => {
      onUnwrap();
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      {/* Spotlight effect */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl"
        animate={{
          scale: isUnwrapped ? 3 : 1,
          opacity: isUnwrapped ? 0 : 1,
        }}
        transition={{ duration: 1.5 }}
      />

      {/* Gift Box */}
      <AnimatePresence>
        {!isUnwrapped && (
          <motion.div
            className="relative z-10 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUnwrap}
            exit={{ scale: 0, rotate: 360, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gift className="w-32 h-32 text-pink-300 drop-shadow-2xl" strokeWidth={1.5} />
              
              {/* Sparkles around gift */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-6 h-6 text-pink-300" />
              </motion.div>
            </motion.div>

            <motion.p
              className="mt-8 text-white text-center text-2xl"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Click to Unwrap 🎁
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Birthday Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <motion.h1
                className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300"
                style={{
                  textShadow: '0 0 40px rgba(255, 192, 203, 0.5)',
                }}
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Happiest Birthday!
              </motion.h1>
              
              <motion.div
                className="mt-4 flex justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {['🎉', '🎂', '🎈', '✨', '💝'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-4xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
