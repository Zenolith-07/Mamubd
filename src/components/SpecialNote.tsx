import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Pen } from 'lucide-react';

interface SpecialNoteProps {
  onComplete: () => void;
}

export function SpecialNote({ onComplete }: SpecialNoteProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Your heartfelt message - customize this
  const message = `Dear Mamu,

On this special day, I want you to know how truly amazing and extraordinary you are. Your presence in this world brings light to every corner it touches, and your smile has the power to brighten even the darkest days.

You are strong, resilient, and incredibly inspiring. The way you navigate life with grace and kindness reminds everyone around you what it means to be genuinely good-hearted. You have and have been inspiring me to be a better person every single day.

Thank you for being exactly who you are – authentic, caring, and absolutely wonderful and the best mom in the world. May this birthday mark the beginning of your best year yet, filled with dreams realized, adventures embraced, and endless moments of joy.

Never forget that you are loved, appreciated, and celebrated not just today, but every single day. I will forever love you and appreciate you for whatever you have done for me and will continue to do so.

Here's to you, to the memories we've shared, and to all the beautiful moments yet to come. I wish you the best birthday and best years that's coming, I hope your life is always filled with joy and never ending love.

Happy Birthday Mamu! 🎂💖

With all my love and warmest wishes,
Aadhu`;

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30); // Typing speed in milliseconds

      return () => clearTimeout(timeout);
    } else if (currentIndex === message.length && !isComplete) {
      setIsComplete(true);
      // Auto-navigate after message completes
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  }, [currentIndex, message, isComplete, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 py-12 px-4 flex items-center justify-center">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4"
            animate={{
              boxShadow: [
                '0 4px 20px rgba(219, 39, 119, 0.2)',
                '0 4px 30px rgba(147, 51, 234, 0.3)',
                '0 4px 20px rgba(219, 39, 119, 0.2)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Pen className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">A Special Note Just for You</span>
          </motion.div>
        </motion.div>

        {/* Note Paper */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-tl-full" />

          {/* Typewriter Text */}
          <div className="relative z-10">
            <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">
              {displayedText}
              {!isComplete && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-purple-600 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </pre>
          </div>

          {/* Completion Animation */}
          {isComplete && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-center gap-3">
                {['💖', '✨', '🌟', '💝', '🎉'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: i * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: -50,
              }}
              animate={{
                y: [-50, -window.innerHeight - 100],
                x: [0, (Math.random() - 0.5) * 100],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'linear',
              }}
            >
              💝
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
