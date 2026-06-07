import { motion, AnimatePresence } from 'motion/react';
import { Zap, ChevronLeft, ChevronRight, FlaskConical, Timer, Salad, Leaf, PawPrint, ShoppingCart, ArrowRight, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Container } from '../components/Container';

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { addToCart } = useCart();

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-dim/30 via-transparent to-transparent"></div>
        </div>
        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-3">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-headline tracking-tighter leading-[0.85] kinetic-text uppercase italic">
              UNLEASH THE <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PRIMAL</span> SURGE
            </h1>
            <p className="text-lg md:text-2xl text-on-surface-variant max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              Engineered for the modern apex predator. No jitters. No crash. Just raw, prehistoric power in every can.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
              <Link 
                to="/shop"
                className="bg-secondary text-on-secondary-fixed px-8 md:px-10 py-3 md:py-4 rounded-full font-black text-base md:text-lg hover:scale-110 transition-transform flex items-center gap-2 group shadow-xl shadow-secondary/20 animate-pulse"
              >
                GRAB A CASE 
                <Zap className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform fill-current" />
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center px-6 sm:px-12 lg:px-0 mb-8 lg:mb-0"
          >
            <div className="absolute -inset-4 sm:-inset-10 bg-primary/20 blur-[60px] sm:blur-[100px] rounded-full animate-pulse"></div>
            <img 
              className="w-full max-w-sm sm:max-w-md lg:max-w-2xl transform hover:rotate-0 transition-transform duration-700 drop-shadow-[0_20px_20px_rgba(255,93,46,0.3)] lg:drop-shadow-[0_35px_35px_rgba(255,93,46,0.5)] z-20 animate-float" 
              alt="3D render of a fierce metallic T-Rex breaking through orange energy" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmus1f3hN6LCAqjQjkGad7EM_gGKm6B75Wp6GWzc3KELso5CU3s9FrjZWeDmslXeVMYVEoa4d3C_u7FV3nkvpjtWcIomUbUvMi8OduyrkOQAxVKhrOqf1wWvhVUKrt5Y3UNsYWhNKr5hRQsudoQL-heOlJdyBxn7muY9XghJHLxW1kz_Oqa7xnDcWcd_XsGPExMl0ySbNyNpmBnGzBOHQgwdpcUkZUthIEwEXe4rzMN7-BACGaNTiWa2-iPWk4B4loTr69kgtLZ4"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </Container>
      </header>

      {/* Product Showcase */}
      <section className="py-20 bg-surface-container-low overflow-hidden">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-20 text-center md:text-left"
          >
            <div className="animate-float">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4 uppercase italic">The Arsenal</h2>
              <p className="text-on-surface-variant max-w-md">Pick your fuel. Each flavor is precision-balanced with zero sugar and maximum intensity.</p>
            </div>
          </motion.div>

          <div className="relative h-[600px] md:h-[650px] flex items-center justify-center group/carousel">
            {/* Navigation Arrows - Repositioned for better UX */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-10 z-50 pointer-events-none">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 pointer-events-auto shadow-2xl group/btn"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90 pointer-events-auto shadow-2xl group/btn"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
              {products.map((product, index) => {
                // Calculate relative position with wrapping for 8 products
                let relativePos = index - currentIndex;
                const half = Math.floor(products.length / 2);
                if (relativePos > half) relativePos -= products.length;
                if (relativePos < -half) relativePos += products.length;

                // Determine visibility and styling based on relative position
                const isActive = relativePos === 0;
                const isVisible = Math.abs(relativePos) <= 2;
                
                // Mobile override: only show the active one
                const mobileVisible = isActive;

                return (
                  <motion.div 
                    key={product.id}
                    initial={false}
                    animate={{
                      x: relativePos * 280, // Reduced spacing to fit 5 cards
                      z: Math.abs(relativePos) * -150, // Push side cards further back
                      scale: isActive ? 1 : (Math.abs(relativePos) === 1 ? 0.85 : 0.7),
                      rotateY: relativePos * -20, // More aggressive 3D rotation
                      opacity: isActive ? 1 : (Math.abs(relativePos) === 1 ? 0.6 : (Math.abs(relativePos) === 2 ? 0.3 : 0)),
                      zIndex: 30 - Math.abs(relativePos) * 10,
                      filter: isActive ? 'blur(0px)' : (Math.abs(relativePos) === 1 ? 'blur(2px)' : 'blur(6px)'),
                    }}
                    style={{
                      perspective: '1000px'
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                    className={`absolute group bg-surface-container-high rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-shadow duration-500 flex-shrink-0 w-[300px] md:w-[340px] h-[500px] md:h-[580px] border border-outline-variant/10 ${isActive ? 'shadow-2xl shadow-primary/20' : ''} ${!isVisible ? 'pointer-events-none' : ''} ${!mobileVisible ? 'hidden md:flex' : 'flex'}`}
                  >
                    <Link 
                      to={`/product/${product.id}`}
                      className={`absolute inset-0 z-20 ${!isActive ? 'pointer-events-none' : ''}`}
                      aria-label={`View ${product.name}`}
                    />
                    <div className="absolute top-0 right-0 p-6 md:p-8">
                      <span className="text-secondary font-black text-5xl md:text-6xl opacity-10 font-headline">{product.id}</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center h-full justify-between w-full">
                      <div className="flex-1 flex items-center justify-center w-full">
                        <img 
                          className={`h-56 md:h-72 w-full object-cover rounded-3xl transition-all duration-700 shadow-2xl ${isActive ? 'animate-glow scale-110' : 'grayscale opacity-50'}`} 
                          alt={product.name} 
                          src={product.img} 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                      <div className={`text-center mt-4 transition-all duration-500 w-full ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
                        <div className="min-h-[4rem] md:min-h-[5.5rem] flex items-center justify-center mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold font-headline italic leading-[1.1] py-1">{product.name}</h3>
                        </div>
                        <p className={`${product.color} font-bold text-sm md:text-base min-h-[3rem] flex items-center justify-center`}>{product.flavor}</p>
                        <div className="flex items-center gap-3 mt-4 w-full relative z-30">
                          <div 
                            className={`flex-1 bg-on-surface text-background py-3 rounded-full font-bold text-center text-sm uppercase tracking-widest transition-all ${isActive ? 'opacity-100 translate-y-0 group-hover:scale-105 active:scale-95' : 'opacity-0 translate-y-4'}`}
                          >
                            View Details
                          </div>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addToCart(product);
                            }}
                            disabled={!isActive}
                            className={`w-12 h-12 bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center transition-all ${isActive ? 'opacity-100 translate-y-0 hover:scale-110 active:scale-90 hover:bg-primary hover:text-on-primary' : 'opacity-0 translate-y-4'}`}
                            title="Add to Cart"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Rex? Section */}
      <section className="py-24 relative overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-12">
              <div className="group">
                <div className="flex justify-between mb-4 items-end">
                  <span className="text-2xl font-black font-headline italic uppercase">Natural Caffeine</span>
                  <span className="text-secondary font-bold">200MG</span>
                </div>
                <div className="h-3 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="energy-gauge-animate"
                  ></motion.div>
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between mb-4 items-end">
                  <span className="text-2xl font-black font-headline italic uppercase">B-Vitamin Complex</span>
                  <span className="text-secondary font-bold">400% DV</span>
                </div>
                <div className="h-3 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="energy-gauge-animate"
                  ></motion.div>
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between mb-4 items-end">
                  <span className="text-2xl font-black font-headline italic uppercase">Zero Crash Buffer</span>
                  <span className="text-secondary font-bold">OPTIMIZED</span>
                </div>
                <div className="h-3 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="energy-gauge-animate"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black font-headline italic tracking-tighter leading-none">THE SCIENCE OF THE <span className="text-primary">PREDATOR</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-surface-container-high p-6 md:p-8 rounded-xl border-l-4 border-primary hover:bg-surface-container-highest transition-colors text-left">
                <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
                <h4 className="text-lg md:text-xl font-bold mb-2">Alpha-Bio Formula</h4>
                <p className="text-on-surface-variant text-sm">Synthetic-free ingredients derived from high-altitude botanicals.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 rounded-xl border-l-4 border-secondary hover:bg-surface-container-highest transition-colors text-left">
                <Timer className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-4" />
                <h4 className="text-lg md:text-xl font-bold mb-2">Sustained Release</h4>
                <p className="text-on-surface-variant text-sm">Micro-encapsulated energy for 6+ hours of mental dominance.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 rounded-xl border-l-4 border-tertiary hover:bg-surface-container-highest transition-colors text-left">
                <Salad className="w-8 h-8 md:w-10 md:h-10 text-tertiary mb-4" />
                <h4 className="text-lg md:text-xl font-bold mb-2">Pure Transparency</h4>
                <p className="text-on-surface-variant text-sm">Every element disclosed. No proprietary "blends" hiding fillers.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 rounded-xl border-l-4 border-white hover:bg-surface-container-highest transition-colors text-left">
                <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white mb-4" />
                <h4 className="text-lg md:text-xl font-bold mb-2">Zero Sugar</h4>
                <p className="text-on-surface-variant text-sm">Ketogenic friendly. Zero calories. One hundred percent rush.</p>
              </div>
            </div>
          </motion.div>
        </Container>
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4 scale-150">
          <img className="w-full animate-float" alt="Giant translucent T-Rex head in profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6kMyBb17ryp-HedFlcEKs7u4PpZXm6XtjbhvjXpQGwjBZLXA8eJT3JPfd_LPmLrzHLRYlygyb6unt1wWzMNWAIR1DeI_Aozz6PprPPPdKfi30gOm3GhQ8Zlot7GdZX_r7xijlIcn2eCNWESRkMBh-w50CrDsTJkQDkXCh129FeRQb7rbHMV6wU17OgEU7VcA72tw1f-ulCzJhmm1XvsR_a3-aEQoZ1vo5AYMWOxc7bIZKujd6bVyzr2GT-RPULYLi2ClkCRHCq7Y" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <Container className="bg-gradient-to-br from-primary-container to-secondary rounded-[3rem] p-16 md:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-7xl font-black font-headline text-on-primary-container tracking-tighter uppercase italic leading-none">JOIN THE PACK</h2>
            <p className="text-on-primary-container/80 text-lg md:text-xl font-medium">Subscribe now and get 15% off your first prehistoric crate. Fresh drops, exclusive swag, and total energy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input className="bg-white/20 border-none rounded-full px-6 md:px-8 py-3 md:py-4 w-full max-w-sm text-on-primary-container placeholder:text-on-primary-container/50 focus:ring-2 focus:ring-white text-sm md:text-base" placeholder="YOUR APEX EMAIL" type="email" />
              <button className="bg-on-primary-container text-white px-10 md:px-12 py-3 md:py-4 rounded-full font-black hover:scale-105 transition-transform shadow-2xl text-sm md:text-base w-full sm:w-auto">SUBSCRIBE</button>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 opacity-20 transform -rotate-45">
            <PawPrint className="w-[200px] h-[200px] text-on-primary-container animate-pulse" />
          </div>
        </Container>
      </section>
    </motion.div>
  );
};
