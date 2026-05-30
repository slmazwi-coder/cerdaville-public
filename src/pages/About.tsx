import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

export const About = () => {
  const [campusFailed, setCampusFailed] = useState(false);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">About Cedarville Public School</h1>

        {/* Our School */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 pl-5 mb-6" style={{ borderColor: '#0A9396' }}>
              <h2 className="text-2xl font-bold text-school-blue">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>Cedarville Public School is a public combined school (Grade R through to Grade 11/12) located in the Mzingisi Location of Cedarville, in the Alfred Nzo District of the Eastern Cape Province, South Africa. As a no-fee school, it serves the broader Cedarville and Matatiele communities, providing accessible quality education to learners from Grade R through to the Matric (Grade 12) level.</p>
              <p>The school falls under the jurisdiction of the Eastern Cape Department of Education and is committed to preparing learners for life through rigorous, contemporary, and relevant teaching methodologies.</p>
              <p>Nestled in the heart of the Eastern Cape, our school is dedicated to nurturing young minds and building a brighter future for our community through quality education and strong values.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#eef0f7] h-[280px] sm:h-[360px]"
          >
            {!campusFailed ? (
              <img
                src="/assets/about/cedarville-campus.png"
                alt="Cedarville Public School campus"
                className="w-full h-full object-cover"
                onError={() => setCampusFailed(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0F1A2E] via-[#1B2A4A] to-[#0A9396] flex items-center justify-center">
                <div className="text-center text-white/70 px-6">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                    <ImageIcon />
                  </div>
                  <div className="font-semibold">Campus image</div>
                  <div className="text-sm text-white/60 font-mono">public/assets/about/</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Principal's Message */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Principal's Message</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0A9396' }} />
          </div>

          <div className="bg-[#E5F4F1] rounded-3xl overflow-hidden shadow-lg border border-[#d6e5ef]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center bg-school-navy p-8 md:p-10">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-xl mb-5" style={{ borderColor: '#0A9396' }}>
                  <div className="w-full h-full flex items-center justify-center bg-[#1B2A4A]">
                    <img src="/assets/about/principal.jpg" alt="Principal" className="w-full h-full object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white text-center leading-tight">School Principal</h3>
                <p className="text-sm font-semibold mt-1 text-center" style={{ color: '#0A9396' }}>Principal</p>
                <div className="w-10 h-0.5 mt-4 rounded-full opacity-60" style={{ backgroundColor: '#0A9396' }} />
              </div>

              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                <div className="text-6xl font-serif leading-none mb-2 opacity-40 select-none" style={{ color: '#0A9396' }}>"</div>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>Welcome to Cedarville Public School. We are committed to providing a safe, inclusive and stimulating environment that enables every learner to reach their full potential through quality teaching, strong values and community partnership.</p>
                  <p>Our dedicated team of educators works tirelessly to ensure that our learners receive the best possible education, preparing them for life beyond the classroom.</p>
                  <p>We invite families and learners to join us in this journey of growth, learning, and achievement as we continue to serve the Cedarville and Matatiele communities.</p>
                </div>
                <div className="text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none" style={{ color: '#0A9396' }}>"</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Our Mission & Vision</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0A9396' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-school-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0A9396' }}>Our Mission</h3>
              <p className="text-white/90 leading-relaxed">To provide accessible, quality education that prepares learners for life through rigorous, contemporary, and relevant teaching methodologies, fostering holistic development and community engagement.</p>
            </div>
            <div className="bg-school-teal rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">To be a leading public school in the Alfred Nzo District, recognized for academic excellence, strong values, and producing learners who are prepared to serve their communities and contribute meaningfully to society.</p>
            </div>
          </div>
        </motion.section>

        {/* Key Facts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Key Facts</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0A9396' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'School Type', value: 'No-Fee Public School' },
              { label: 'Grades', value: 'Grade R – 12' },
              { label: 'Location', value: 'Mzingisi, Cedarville' },
              { label: 'District', value: 'Alfred Nzo District' },
            ].map((fact, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow border border-gray-100 border-b-4" style={{ borderBottomColor: '#1B2A4A' }}>
                <p className="text-2xl font-bold text-school-blue">{fact.value}</p>
                <p className="text-gray-500 font-medium mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};
