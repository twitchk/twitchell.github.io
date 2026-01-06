'use client'

import Image from 'next/image'
import { ArrowDown, Download, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m{' '}
                <span className="gradient-text">Twitchell Addai</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Mechanical Engineer & AI Enthusiast
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Graduate Research Assistant at North Dakota State University with 6+ years of experience 
                in mechanical engineering, specializing in AI, machine learning, and transportation systems. 
                Passionate about creating innovative solutions for complex engineering challenges.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <a 
                href="/RESUME - Twitchell Addai.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:twitchellkashty1@gmail.com"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-700 hover:text-primary-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/twitchell-addai-a07087126/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700 hover:text-primary-600" />
              </a>
              <a
                href="https://x.com/twitchelladdai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter size={20} className="text-gray-700 hover:text-primary-600" />
              </a>
              <a
                href="https://www.facebook.com/twitchell.kashty/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-700 hover:text-primary-600" />
              </a>
              <a
                href="https://www.instagram.com/twitchkashty/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-700 hover:text-primary-600" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/profile.jpg"
                  alt="Twitchell Addai"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 