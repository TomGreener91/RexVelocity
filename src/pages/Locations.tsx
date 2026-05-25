import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Search, Store, Navigation, Phone, Clock, Globe } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Zap } from 'lucide-react';
import { locations } from '../data/locations';
import { Container } from '../components/Container';
import { PageHero } from '../components/PageHero';

export const Locations = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <PageHero
        title={<>Find Your <br /><span className="text-secondary italic">Source</span></>}
        description="The surge is spreading globally. Locate your nearest Rex Velocity authorized deployment center and refuel your biological arsenal."
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7P3z6elJ_vZ64UexC9qos5pI7PxIrZMc9UTXkaoJVey1F_YX5iRXv3MR1XI8v7aJ6Zmq-zZWMUC0e8NmIsVmXnE3O5Rk3hs-fyNG5LyCB2gl0GVsoaGkcDt-Udnp8cEhZaszkzDjxZfeT3bBwigEQpK31Ow2s9tzUeZJ0ykMdzQaJ-id6XGEz-o03KB87iMXsSJhqG92_Dt0Hh_Y9lrrHgth8WjI8H0I_KHfgUUTxDbk4Yk84-7qk2itMxotQNZnhgDeALlHP9k"
        themeColor="secondary"
        hasGridBackground={true}
        backgroundContent={
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block z-0">
            <MapPin className="w-[600px] h-[600px] text-primary rotate-12 animate-float" />
          </div>
        }
      />

      {/* Store Locator Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Search */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl shadow-black/5 sticky top-28">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black font-headline uppercase italic">Territory</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Enter City or Postcode"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl py-5 px-6 focus:outline-none focus:border-secondary transition-colors text-base font-medium placeholder:opacity-50"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-secondary hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {locations.map((store, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-[2rem] bg-surface-container-lowest hover:bg-surface-container-highest transition-all cursor-pointer border border-transparent hover:border-secondary/30 group relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-lg font-black font-headline uppercase italic group-hover:text-secondary transition-colors line-clamp-1">{store.name}</h4>
                          <button className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            <Navigation className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-on-surface-variant font-light">{store.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Map View */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="w-full h-[500px] lg:h-[800px] bg-surface-container-highest rounded-[3.5rem] relative overflow-hidden border border-outline-variant/10 shadow-2xl shadow-black/20 group">
                <MapContainer center={[51.505, -0.09]} zoom={11} style={{ height: '100%', width: '100%', zIndex: 0 }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  {locations.map((loc) => {
                    const customIcon = L.divIcon({
                      html: renderToString(
                        <div className="relative flex items-center justify-center w-8 h-8">
                          <div className="absolute w-full h-full rounded-full bg-primary/40 animate-ping"></div>
                          <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary shadow-[0_0_15px_rgba(255,143,112,0.8)] border-2 border-surface-container-highest">
                            <Zap className="w-3 h-3 text-on-primary" />
                          </div>
                        </div>
                      ),
                      className: '', // Clear default class
                      iconSize: [32, 32],
                      iconAnchor: [16, 16],
                    });
                    return (
                    <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
                      <Popup className="custom-popup">
                        <div className="flex flex-col gap-1 min-w-[150px]">
                          <div className="font-black font-headline uppercase italic text-on-surface text-sm border-b border-white/10 pb-1 mb-1 pr-6">{loc.name}</div>
                          <div className="text-[10px] text-on-surface-variant font-light leading-tight">{loc.address}</div>
                          <div className={`text-[10px] mt-1 font-black uppercase tracking-widest ${loc.status === 'Open' ? 'text-emerald-500' : 'text-orange-500'}`}>
                            {loc.status}
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                    );
                  })}
                </MapContainer>

                {/* Map Scanning Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary/30 shadow-[0_0_20px_rgba(255,215,9,0.5)] animate-scan z-10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Become a Reseller Partner */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic leading-none mb-6">Authorize Your <span className="text-primary">Territory</span></h2>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8">Become an authorized source for Rex Velocity. Join our elite network of gyms, retailers, and distributors carrying the future of energy science.</p>
              <div className="space-y-4">
                {[
                  { icon: Store, title: 'Strategic Support', text: 'Premium POS displays and brand alignment kits.' },
                  { icon: Navigation, title: 'Global Network', text: 'Inclusion in our interactive deployment grid.' },
                  { icon: Clock, title: 'Priority Stock', text: 'Early access to limited edition seasonal drops.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-surface-container-high border border-outline-variant/5">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-sm text-on-surface-variant font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-background p-10 rounded-[3rem] border border-primary/20 shadow-2xl">
                <h3 className="text-2xl font-black font-headline uppercase italic mb-8">Wholesale Intake</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input placeholder="Business Name" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                    <input placeholder="Website URL" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <input placeholder="Contact Email" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors" />
                  <textarea rows={4} placeholder="Describe your performance territory..." className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                  <button className="w-full kinetic-gradient text-on-primary-fixed py-5 rounded-full font-black font-headline uppercase italic tracking-widest text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                    Apply for Authorization
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};
