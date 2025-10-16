import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

import { Button } from '@/components/ui'
import {
  ProjectCard,
  SkillBadge,
  Timeline,
  ContactForm,
  FloatingNav,
  ScrollProgress,
  SectionHeading,
  GlassmorphicCard,
} from '@/components'
import { AboutSection, HeroSection } from '@/components/layout'
import { skills } from '@/utils/skills'

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden'>
      <ScrollProgress />
      <FloatingNav />

      <HeroSection />
      <AboutSection />

      {/* Skills Section */}
      <section id='skills' className='py-32 relative  flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-1/3 left-1/4 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
        </div>

        <div className='container relative z-10'>
          <SectionHeading title='My Skills' subtitle='Technologies I work with' />

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
            {skills.map(item => (<SkillBadge key={item.name} name={item.name} level={item.level} />))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-32 relative  flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-1/4 left-1/3 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
          <div className='absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
        </div>

        <div className='container relative z-10'>
          <SectionHeading title='Featured Projects' subtitle='Some of my recent work' />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
            <ProjectCard
              title='SchoolAI'
              description='A full-stack educational platform built with NextJS and SpiceDB'
              tags={['Next.js', 'TypeScript', 'Prisma', 'SpiceDB']}
              image='https://picsum.photos/600/400?random=8'
              demoUrl='https://schoolai.com'
              repoUrl=''
            />
            <ProjectCard
              title='Payload Transformer'
              description='An NPM package with helper functions to transform deep JSON objects to camelCase, snake_case and others.'
              tags={['NodeJS', 'TypeScript']}
              image='https://picsum.photos/600/400?random=2'
              demoUrl='https://example.com'
              repoUrl='https://github.com'
            />
            <ProjectCard
              title='AI Content Generator'
              description="An AI-powered content generation tool using OpenAI's GPT models."
              tags={['Next.js', 'OpenAI API', 'Node.js', 'MongoDB']}
              image='https://picsum.photos/600/400?random=3'
              demoUrl='https://example.com'
              repoUrl='https://github.com'
            />
            <ProjectCard
              title='Fitness Tracker'
              description='A mobile-first fitness tracking application with data visualization.'
              tags={['React Native', 'TypeScript', 'D3.js', 'Firebase']}
              image='https://picsum.photos/600/400?random=4'
              demoUrl='https://example.com'
              repoUrl='https://github.com'
            />
            <ProjectCard
              title='Weather Dashboard'
              description='A beautiful weather dashboard with forecasts and historical data.'
              tags={['React', 'Weather API', 'Chart.js', 'Styled Components']}
              image='https://picsum.photos/600/400?random=6'
              demoUrl='https://example.com'
              repoUrl='https://github.com'
            />
            <ProjectCard
              title='Portfolio Website'
              description='This portfolio website built with Next.js and Tailwind CSS.'
              tags={['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']}
              image='https://picsum.photos/600/400?random=5'
              demoUrl='https://example.com'
              repoUrl='https://github.com'
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-32 relative  flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-1/3 right-1/3 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
          <div className='absolute bottom-1/4 left-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
        </div>

        <div className='container relative z-10'>
          <SectionHeading title='Work Experience' subtitle='My professional journey' />

          <div className='mt-16'>
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-32 relative  flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
          <div className='absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
        </div>

        <div className='container relative z-10'>
          <SectionHeading title='Get In Touch' subtitle="Let's work together" />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16'>
            <GlassmorphicCard>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center'>
                    <Mail className='h-5 w-5 text-gray-400' />
                  </div>
                  <div>
                    <div className='text-sm text-zinc-500'>Email</div>
                    <div className='font-medium'>gerson@gbumanzor.dev</div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center'>
                    <Linkedin className='h-5 w-5 text-gray-400' />
                  </div>
                  <div>
                    <div className='text-sm text-zinc-500'>LinkedIn</div>
                    <div className='font-medium'>linkedin.com/in/gbumanzordev</div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center'>
                    <Github className='h-5 w-5 text-gray-400' />
                  </div>
                  <div>
                    <div className='text-sm text-zinc-500'>GitHub</div>
                    <div className='font-medium'>github.com/gbumanzordev</div>
                  </div>
                </div>
              </div>

              <div className='mt-8 pt-8 border-t border-zinc-800'>
                <h4 className='text-lg font-medium mb-4'>Current Status</h4>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-zinc-800 py-12  flex items-center justify-center overflow-hidden'>
        <div className='container flex flex-col md:flex-row justify-between items-center gap-6'>
          <div>
            <Link href='/' className='font-bold text-xl'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white'>Gerson</span>
              <span className='text-white'>Umanzor</span>
            </Link>
            <p className='text-sm text-zinc-500 mt-2'>
              © {new Date().getFullYear()} Gerson Umanzor Alberto. All rights reserved.
            </p>
          </div>
          <div className='flex gap-4'>
            <Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              >
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Button>
            </Link>
            <Link href='https://www.linkedin.com/in/gbumanzordev/' target='_blank' rel='noopener noreferrer'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              >
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
            </Link>
            <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Button>
            </Link>
            <Link href='mailto:gerson@gbumanzor.dev'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              >
                <Mail className='h-5 w-5' />
                <span className='sr-only'>Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
