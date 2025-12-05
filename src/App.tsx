import { useState } from 'react';
import { GiftBox } from './components/GiftBox';
import { MemoryLane } from './components/MemoryLane';
import { SpecialNote } from './components/SpecialNote';
import { PyariChori } from './components/PyariChori';

export default function App() {
  const [currentSection, setCurrentSection] = useState<'gift' | 'memories' | 'note' | 'tribute'>('gift');

  return (
    <div className="min-h-screen">
      {currentSection === 'gift' && (
        <GiftBox onUnwrap={() => setCurrentSection('memories')} />
      )}
      
      {currentSection === 'memories' && (
        <MemoryLane onNavigateToNote={() => setCurrentSection('note')} />
      )}
      
      {currentSection === 'note' && (
        <SpecialNote onComplete={() => setCurrentSection('tribute')} />
      )}
      
      {currentSection === 'tribute' && (
        <PyariChori />
      )}
    </div>
  );
}
