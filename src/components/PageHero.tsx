import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Container } from './Container';

interface PageHeroProps {
  title: ReactNode;
  description: ReactNode;
  backgroundImage: string;
  themeColor: 'primary' | 'secondary';
  pulse?: boolean;
  rightContent?: ReactNode; // For stats in Reviews
  backgroundContent?: ReactNode; // For MapPin in Locations
  hasGridBackground?: boolean; // For Shop and Locations
}

export const PageHero = ({
  title,
  description,
  backgroundImage,
  themeColor,
  pulse = false,
  rightContent,
  backgroundContent,
  hasGridBackground = false
}: PageHeroProps) => {
  const glowColorClass = themeColor === 'primary' ? 'bg-primary/10' : 'bg-secondary/10';

  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] ${glowColorClass} rounded-full blur-[160px] ${pulse ? 'animate-pulse' : ''}`}></div>

        {hasGridBackground && (
          <div className="absolute inset-0 bg-[radial-gradient(#ff8f70_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
        )}

        <img
          alt="Hero background"
          className={`w-full h-full object-cover opacity-10 mix-blend-overlay grayscale ${hasGridBackground ? 'contrast-150' : ''}`}
          src={backgroundImage}
          referrerPolicy="no-referrer"
        />
      </div>

      <Container className={`relative z-10 ${rightContent ? '' : 'text-center lg:text-left'}`}>
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${rightContent ? 'text-center lg:text-left' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={rightContent ? 'lg:w-3/5' : 'max-w-4xl'}
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-headline tracking-tighter mb-8 uppercase italic leading-[0.8] drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>

          {rightContent && (
            <div className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:max-w-xs">
              {rightContent}
            </div>
          )}
        </div>
      </Container>

      {backgroundContent}
    </section>
  );
};