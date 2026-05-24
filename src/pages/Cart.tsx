import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (item.quantity * 24.99), 0); // Assuming a price of £24.99 per item
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-40 pb-20 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-10 h-10 text-on-surface-variant opacity-20" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase mb-4">Your Arsenal is Empty</h1>
        <p className="text-on-surface-variant max-w-md mb-12">You haven't added any biological triggers to your cart yet. Time to fuel up.</p>
        <Link 
          to="/shop"
          className="kinetic-gradient text-on-primary-fixed px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Browse Shop
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 min-h-screen bg-background"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase">Your <span className="text-primary">Cart</span></h1>
              <button 
                onClick={clearCart}
                className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-red-500 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-surface-container-low rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-8 border border-outline-variant/10"
                  >
                    <div className="w-32 h-32 flex-shrink-0 bg-surface-container-high rounded-2xl p-4">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain drop-shadow-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-black font-headline uppercase italic mb-1">{item.name}</h3>
                      <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${item.color}`}>{item.flavor}</p>
                      
                      <div className="flex items-center justify-center sm:justify-start gap-6">
                        <div className="flex items-center bg-surface-container-highest rounded-full px-4 py-2 gap-4">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-on-surface-variant hover:text-primary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold min-w-[1.5rem] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-on-surface-variant hover:text-primary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-on-surface-variant hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black font-headline text-primary">£{(item.quantity * 24.99).toFixed(2)}</p>
                      <p className="text-xs text-on-surface-variant opacity-60">£24.99 / unit</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-surface-container-high rounded-[2.5rem] p-8 sticky top-32 border border-outline-variant/10">
              <h2 className="text-2xl font-black font-headline italic uppercase mb-8">Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-bold text-on-surface">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Shipping</span>
                  <span className="font-bold text-on-surface">
                    {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                  <span className="text-xl font-black font-headline italic uppercase">Total</span>
                  <span className="text-3xl font-black font-headline text-primary">£{total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full kinetic-gradient text-on-primary-fixed py-5 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/20 mb-6">
                Checkout
              </button>

              <div className="text-center">
                <Link 
                  to="/shop"
                  className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
