import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import momSpecial from '../assets/mom-special.jpg';
import papamamu from '../assets/PapaMamu.jpg';
import memamu from '../assets/Memamu.jpg';
import masisters from '../assets/Masisters.jpg';
import wholefamily from '../assets/Wholefam.jpg';
interface Memory {
  id: number;
  image: string;
  caption: string;
  date: string;
  description: string;
}

interface MemoryLaneProps {
  onNavigateToNote: () => void;
}

export function MemoryLane({ onNavigateToNote }: MemoryLaneProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  // Sample memories - replace with actual photos
  const memories: Memory[] = [
    {
      id: 1,
      image: momSpecial,
      caption: "My special Mom",
      date: "Super Mom",
      description: "You are defineatly the best Mom that i couldve ever asked for."
    },
    {
      id: 2,

      image: papamamu,
      caption: "LOML",
      date: "My Heartbeat",
      description: "I hope in every lifetime i get you guys as my parents cause i cant imagine my life without you."
    },
    {
      id: 3,
      image: memamu,
      caption: "US",
      date: "From a loving son",
      description: "Malai dherei kuraune kam nagaribaksio hola."
    },
    {
      id: 4,
      image: masisters,
      caption: "Motherly love to daughters",
      date: "Angles on Earth",
      description: "The way you mom's handle everything together is truly magnificient."
    },
    {
      id: 5,
      image: wholefamily,
      caption: "The Fam",
      date: "Bombastic family",
      description: "In the quiet moments, we found the loudest happiness."
    }
  ];

  const toggleFlip = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Memory Lane
          </motion.h2>
          <motion.p
            className="text-gray-600 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Flip the cards to relive our beautiful moments together
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          {/* Cards Display */}
          <div className="flex items-center justify-center gap-4 w-full px-16">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + memories.length) % memories.length;
              const memory = memories[index];
              const isCenter = offset === 0;
              const isFlipped = flippedCards.has(memory.id);

              return (
                <motion.div
                  key={memory.id}
                  className="relative"
                  style={{
                    perspective: '1000px',
                  }}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.4,
                    x: offset * 20,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="relative w-80 h-96 cursor-pointer"
                    onClick={() => isCenter && toggleFlip(memory.id)}
                    animate={{
                      rotateY: isFlipped ? 180 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <ImageWithFallback
                        src={memory.image}
                        alt={memory.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl mb-2">{memory.caption}</h3>
                        <p className="text-sm opacity-90">{isCenter ? 'Click to reveal' : ''}</p>
                      </div>
                      {isCenter && (
                        <motion.div
                          className="absolute top-4 right-4 bg-white/90 rounded-full p-2"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                        </motion.div>
                      )}
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="text-center">
                        <div className="mb-4">
                          <Heart className="w-12 h-12 text-pink-500 mx-auto fill-pink-500" />
                        </div>
                        <h3 className="text-3xl mb-3 text-purple-800">{memory.caption}</h3>
                        <p className="text-pink-600 mb-6">{memory.date}</p>
                        <p className="text-gray-700 leading-relaxed">{memory.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                ? 'bg-purple-600 w-8'
                : 'bg-purple-300 hover:bg-purple-400'
                }`}
            />
          ))}
        </div>

        {/* Navigate Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={onNavigateToNote}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg text-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(219, 39, 119, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Special Note ❤️
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
