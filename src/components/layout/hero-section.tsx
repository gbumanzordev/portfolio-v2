import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRight, Github, Mail, Twitter } from 'lucide-react'
import { CreativeHero } from '@/components'

export function  HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden md:pt-16'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/3 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000'></div>
      </div>

      <div className='container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <div className='inline-block'>
            <div className='relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4'>
              <span className='relative z-10'>Software Engineer & Technical Lead</span>
              <span className='absolute inset-0 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-500/20 animate-pulse'></span>
            </div>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
            <span className='block'>Hello, there, I'm</span>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white'>
              Gerson Umanzor
            </span>
          </h1>
          <p className='text-xl text-zinc-400 max-w-[600px]'>
            I craft exceptional digital experiences with code, creativity, and a passion for innovation.
          </p>
          <div className='flex flex-wrap gap-4 pt-4'>
            <Link href='#projects'>
              <Button className='relative overflow-hidden group bg-gradient-to-r from-gray-700 to-gray-600 border-0 hover:from-gray-600 hover:to-gray-500'>
                <span className='relative z-10 flex items-center'>
                  View Projects <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </span>
                <span className='absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity'></span>
              </Button>
            </Link>
            <Link href='#contact'>
              <Button
                variant='outline'
                className='border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500'
              >
                Contact Me
              </Button>
            </Link>
          </div>
          <div className='flex gap-4 pt-4'>
            <Link href='https://github.com/gbumanzor.dev' target='_blank' rel='noopener noreferrer'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              >
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Button>
            </Link>
            {/* <Link href="https://www.linkedin.com/in/gbumanzordev/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link> */}
            <Link href='https://twitter.com/gbumanzordev' target='_blank' rel='noopener noreferrer'>
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
        <div className='flex justify-center'>
          <CreativeHero />
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1'>
          <div className='w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse'></div>
        </div>
      </div>
    </section>
  )
}
