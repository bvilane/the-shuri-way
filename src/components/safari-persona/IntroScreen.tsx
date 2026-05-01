import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface IntroScreenProps {
  onBegin: () => void;
}

const HERO_IMAGE = "https://shuri-safari-persona-assets.s3.us-east-1.amazonaws.com/tempo/still/zebra-standing-in-dust-serengeti-tanzania-afric-2026-03-09-07-17-12-utc.jpg";

const IntroScreen = ({ onBegin }: IntroScreenProps) => {
  return (
    <div
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-8"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#1C2B1E]/85" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-sm"
        style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary mb-8">
          The Shuri Collection
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
          What kind of safari experience were you made for?
        </h1>
        <p className="font-body text-base text-secondary mb-12 leading-relaxed">
          No two people experience the wild the same way. Swipe left or right on real scenarios and we will show you exactly what kind of safari you would enjoy.
        </p>
        <Button
          onClick={onBegin}
          className="font-body text-sm tracking-wider uppercase px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Begin
        </Button>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
