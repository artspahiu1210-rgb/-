import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConvexQueryClient } from '@convex-dev/react-query'
import { ConvexProvider } from 'convex/react'
import './app.css'

// 1. Define the main page component
function Home() {
  const beefBurgers = [
    {
      name: 'The Rock',
      description: 'Double beef patty, smoked rashers, lettuce, tomato, house sauce, pickles, and fried onions.',
      price: '£9',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
      popular: true,
    },
    {
      name: 'Double Mighty',
      description: 'Double beef patty, 5 Bites sauce, lettuce, tomato, raw onions, and pickles.',
      price: '£8',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Triple Tower',
      description: '3 patties stack, BBQ sauce, lettuce, fried onion, tomato, and pickles.',
      price: '£10',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Melted Majesty',
      description: 'Beef patty, lettuce, tomato, cheese, pickles, onions, and ketchup.',
      price: '£6',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mush Royal',
      description: 'Beef patty, mushroom, tomato, pickles, lettuce, fried onions, and burger sauce.',
      price: '£7',
      image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mr Egg',
      description: 'Beef patty, fried egg, lettuce, tomato, onion, pickles, mayo & ketchup.',
      price: '£7',
      image: 'https://images.unsplash.com/photo-1513185158878-8d8c196b7c7c?q=80&w=800&auto=format&fit=crop',
    }
  ]

  const chickenBurgers = [
    {
      name: 'Flamey Chicken',
      description: 'Fried chicken breast, spicy sauce, onion, lettuce, jalapeño, and cheese.',
      price: '£7',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Chicken Supreme',
      description: 'Fried chicken breast, lettuce, tomato, onion, pickle, and cheese.',
      price: '£7',
      image: 'https://images.unsplash.com/photo-1525164286253-04e68b9d94bb?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Smoky Chicken',
      description: 'Smoky grilled chicken, BBQ sauce, and mixed vegetables.',
      price: '£7',
      image: 'https://images.unsplash.com/photo-1606755962773-533039d91784?q=80&w=800&auto=format&fit=crop',
    }
  ]

  const sides = [
    { name: 'Fries', price: '£2' },
    { name: 'Sweet Potato Fries', price: '£2.50' },
    { name: 'Loaded Fries', price: '£3.50' },
    { name: 'Onion Rings', price: '£3.00' }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-black tracking-tighter">
                FIVE<span className="text-orange-500">BITES</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
              <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
              <a href="#location" className="hover:text-orange-500 transition-colors">Visit Us</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:02012345678" 
                className="hidden lg:flex items-center gap-2 text-sm font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/10"
              >
                <span>📞</span>
                020 1234 5678
              </a>
              <div className="flex gap-2">
                <a 
                  href="https://www.ubereats.com" 
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-black bg-[#06C167] hover:opacity-90 px-3 py-2 rounded-lg transition-all text-white"
                >
                  Uber Eats
                </a>
                <a 
                  href="https://www.deliveroo.co.uk" 
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-black bg-[#00CCBC] hover:opacity-90 px-3 py-2 rounded-lg transition-all text-white"
                >
                  Deliveroo
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2000&auto=format&fit=crop" 
            alt="Delicious Smash Burger" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Golders Green's Choice for Smash Burgers
            </div>
            <h1 className="text-6xl sm:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
              BOLDER. <br />
              JUICIER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SMASHED.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-xl font-medium">
              Experience the perfect crust and juicy center. Hand-smashed daily on a screaming hot grill.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#menu" 
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-black font-black py-5 px-10 rounded-2xl transition-all text-xl shadow-2xl shadow-orange-500/40"
              >
                View Our Menu
              </a>
              <a 
                href="#location" 
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl font-black py-5 px-10 rounded-2xl transition-all text-xl"
              >
                Find Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter uppercase">Our Menu</h2>
            <div className="w-24 h-2 bg-orange-500 rounded-full" />
          </div>

          <h3 className="text-3xl font-black mb-12 text-center text-orange-500 uppercase tracking-widest">Beef Burgers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {beefBurgers.map((item) => (
              <div key={item.name} className="group bg-neutral-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-orange-500/50 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {item.popular && (
                    <div className="absolute top-6 left-6 bg-orange-500 text-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                      Local Favorite
                    </div>
                  )}
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md text-white font-black text-xl px-4 py-2 rounded-2xl border border-white/10">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{item.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-black mb-12 text-center text-orange-500 uppercase tracking-widest">Chicken Burgers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {chickenBurgers.map((item) => (
              <div key={item.name} className="group bg-neutral-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-orange-500/50 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md text-white font-black text-xl px-4 py-2 rounded-2xl border border-white/10">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{item.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-black mb-12 text-center text-orange-500 uppercase tracking-widest">Sides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sides.map((item) => (
              <div key={item.name} className="flex justify-between items-center p-6 bg-neutral-900/50 border border-white/5 rounded-2xl">
                <span className="font-bold text-lg uppercase">{item.name}</span>
                <span className="text-orange-500 font-black">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit & Contact Section */}
      <section id="location" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div id="contact" className="bg-neutral-900 p-12 sm:p-16 rounded-[3rem] border border-white/5">
              <h3 className="text-4xl font-black mb-12 tracking-tighter uppercase">VISIT FIVE BITES</h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 shrink-0 text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="font-black text-2xl tracking-tight mb-2 uppercase">Our Location</p>
                    <p className="text-neutral-400 text-lg leading-relaxed">123 Golders Green Road,<br />London NW11 8BB</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      className="inline-flex items-center gap-2 mt-4 text-orange-500 font-black hover:underline"
                    >
                      GET DIRECTIONS ➡️
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 shrink-0 text-2xl">
                    🕒
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-2xl tracking-tight mb-6 uppercase">Opening Hours</p>
                    <div className="grid grid-cols-2 gap-y-3 text-lg font-medium">
                      <span className="text-neutral-500">Mon - Thu</span>
                      <span className="text-right">12PM - 11PM</span>
                      <span className="text-neutral-500">Fri - Sat</span>
                      <span className="text-right">12PM - 1AM</span>
                      <span className="text-neutral-500">Sunday</span>
                      <span className="text-right">12PM - 11PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 shrink-0 text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="font-black text-2xl tracking-tight mb-2 uppercase">Call Us</p>
                    <a href="tel:02012345678" className="text-4xl font-black text-orange-500 hover:text-orange-400 transition-colors">020 1234 5678</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.123!2d-0.198!3d51.572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876107!2sGolders%20Green%20Rd%2C%20London!5e0!3m2!1sen!2suk!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery CTA Section */}
      <section className="py-32 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 uppercase">Order to your door</h2>
          <p className="text-xl text-neutral-400 mb-12">Can't make it to Golders Green? Find us on your favorite delivery apps.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
             <a href="https://www.ubereats.com" className="bg-[#06C167] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform">Uber Eats</a>
             <a href="https://www.deliveroo.co.uk" className="bg-[#00CCBC] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform">Deliveroo</a>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/10 text-center bg-black">
        <span className="text-3xl font-black tracking-tighter mb-4 block">
          FIVE<span className="text-orange-500">BITES</span>
        </span>
        <p className="text-neutral-500 text-sm max-w-xs mx-auto mb-8">
          The ultimate smash burger experience in the heart of Golders Green.
        </p>
        <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">© 2024 Five Bites Burgers. Golders Green Road, London.</p>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-8 left-6 right-6 z-50 flex gap-3">
        <a 
          href="tel:02012345678" 
          className="w-16 flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl border border-white/10 text-white py-4 rounded-[1.5rem] shadow-2xl text-2xl"
        >
          📞
        </a>
        <a 
          href="#menu" 
          className="flex-1 flex items-center justify-center gap-3 bg-orange-500 text-black py-4 rounded-[1.5rem] shadow-xl"
        >
          <span className="font-black text-lg uppercase tracking-tight">View Menu</span>
        </a>
        <a 
          href="https://www.ubereats.com" 
          className="w-16 flex flex-col items-center justify-center bg-[#06C167] text-white py-4 rounded-[1.5rem] shadow-2xl text-2xl"
        >
          🛒
        </a>
      </div>
    </div>
  )
}

// 2. Setup Convex and QueryClient
const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL!
const convexQueryClient = new ConvexQueryClient(CONVEX_URL)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryKeyHashFn: convexQueryClient.hashFn(),
      queryFn: convexQueryClient.queryFn(),
    },
  },
})
convexQueryClient.connect(queryClient)

// 3. Render the App directly
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <ConvexProvider client={convexQueryClient.convexClient}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </ConvexProvider>
    </React.StrictMode>
  )
}
