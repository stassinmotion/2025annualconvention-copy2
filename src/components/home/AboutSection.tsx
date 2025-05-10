import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flag, Users, Award, Lightbulb, GraduationCap, Network } from 'lucide-react';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import CountdownTimer from '@/components/CountdownTimer';
const AboutSection = () => {
  const conventionStartDate = new Date('2025-06-09T13:00:00');
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div className="w-full lg:w-3/4 text-center relative z-10 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <div className="mb-12">
              <CountdownTimer targetDate={conventionStartDate} compact={false} className="max-w-3xl mx-auto" label="START YOUR ENGINES" />
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 mb-6 bg-white/10">
              <p className="text-white text-lg md:text-xl tracking-wide leading-relaxed glow-text max-w-2xl mx-auto text-center">
                Tires are spinning, gears are shifting — we're nearly at the starting line. Here's your sneak peek before we go full throttle!
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link to="/agenda">
                <motion.button whileHover={{ boxShadow: "0 0 16px 4px #fff, 0 0 0 2px #3b82f6" }} className="relative px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#0a2540] overflow-hidden shadow-lg transition border-none">
                  <span className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(45deg, #fff 7%, transparent 7%, transparent 50%, #fff 50%, #fff 57%, transparent 57%, transparent), linear-gradient(-45deg, #fff 7%, transparent 7%, transparent 50%, #fff 50%, #fff 57%, transparent 57%, transparent)", backgroundSize: "20px 20px"}} />
                  <span className="relative z-10">Tentative Agenda</span>
                </motion.button>
              </Link>
              <Link to="/updates">
                <motion.button whileHover={{ boxShadow: "0 0 16px 4px #fff, 0 0 0 2px #3b82f6" }} className="relative px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#0a2540] overflow-hidden shadow-lg transition border-none">
                  <span className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(45deg, #fff 7%, transparent 7%, transparent 50%, #fff 50%, #fff 57%, transparent 57%, transparent), linear-gradient(-45deg, #fff 7%, transparent 7%, transparent 50%, #fff 50%, #fff 57%, transparent 57%, transparent)", backgroundSize: "20px 20px"}} />
                  <span className="relative z-10">See the Latest Updates</span>
                </motion.button>
              </Link>
            </div>
            <span className="inline-block bg-red-400/10 font-bold uppercase px-3 py-1 rounded-full mb-6 text-slate-50 text-lg">
              WINNING FORMULA: 82 COUNTIES, 1 VISION
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;