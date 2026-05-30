import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, BookOpen } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate 2023', value: '70%+', icon: TrendingUp },
  { label: 'Total Learners', value: '600+', icon: Users },
  { label: 'Dedicated Educators', value: '25+', icon: Award },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Notices */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-teal-100 text-school-teal shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-school-teal">Notice</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-teal-100 text-gray-700">2027</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">2027 Admissions applications are open</h3>
                <p className="text-gray-700 mt-1">Applications for the <span className="font-bold">2027</span> academic year are now open. Grade R through to Grade 11.</p>
                <a href="/admissions" className="mt-4 inline-flex items-center gap-2 text-school-teal font-bold">
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-amber-100 text-school-blue shrink-0">
                <BookOpen size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-school-blue">Academics</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-amber-100 text-gray-700">CAPS</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">Comprehensive CAPS curriculum</h3>
                <p className="text-gray-700 mt-1">Full academic programme from Grade R to Grade 12 including Sciences, Commerce, and Humanities.</p>
                <a href="/subjects" className="mt-4 inline-flex items-center gap-2 text-school-blue font-bold">
                  View subjects <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 -mt-4 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-b-4 border-school-teal"
            >
              <div className="p-4 bg-teal-50 rounded-xl text-school-teal">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Motto</h2>
          <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
            "Enter to Learn, Leave to Serve"
          </p>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            A no-fee public school in the Mzingisi Location of Cedarville, Alfred Nzo District, Eastern Cape — 
            providing accessible quality education from Grade R through to Matric (Grade 12), serving the Cedarville and Matatiele communities.
          </p>
        </div>
      </section>

      {/* School Phases */}
      <section className="py-16 bg-school-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our School Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: 'Foundation Phase', grades: 'Grade R – 3', desc: 'Building strong foundations for young learners' },
              { phase: 'Intermediate Phase', grades: 'Grade 4 – 6', desc: 'Developing core skills and knowledge' },
              { phase: 'Senior Phase', grades: 'Grade 7 – 9', desc: 'Preparing for further education' },
              { phase: 'FET Phase', grades: 'Grade 10 – 12', desc: 'Working towards Matriculation' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-school-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-school-blue">{item.phase}</h3>
                <p className="text-school-teal font-semibold text-sm mt-1">{item.grades}</p>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
