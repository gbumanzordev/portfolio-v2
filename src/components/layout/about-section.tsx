import { GlassmorphicCard, SectionHeading } from '@/components'
import { Button } from '@/components/ui'

export function AboutSection() {
  return (
    <section id='about' className='py-32 relative flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
        <div className='absolute bottom-1/3 left-1/3 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
      </div>

      <div className='container relative z-10'>
        <SectionHeading title='About Me' subtitle='My background and journey' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16'>
          <div className='relative'>
            <div className='absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 blur-xl opacity-70'></div>
            <div className='relative aspect-square rounded-xl overflow-hidden border border-zinc-800'>
              <img
                src='https://picsum.photos/600/600?random=1'
                alt='Gerson Umanzor Alberto'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
              <div className='absolute bottom-0 left-0 w-full p-6'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>
                  <span className='text-sm font-medium'>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <GlassmorphicCard>
              <p className='text-lg text-zinc-300'>
                I&#39;m a passionate software engineer with experience building web applications and digital products. I
                specialize in frontend development with React and Next.js, but I&#39;m also comfortable working with backend
                technologies.
              </p>
              <p className='text-lg text-zinc-300 mt-4'>
                My journey in tech started with a strong foundation in software development. I&#39;ve worked with various
                companies to create intuitive, performant, and accessible digital experiences.
              </p>
              <p className='text-lg text-zinc-300 mt-4'>
                When I&#39;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                and staying up-to-date with the latest industry trends.
              </p>

              <div className='grid grid-cols-2 gap-4 mt-8'>
                <div className='space-y-1'>
                  <div className='text-sm text-zinc-500'>Name</div>
                  <div className='font-medium'>Gerson Umanzor Alberto</div>
                </div>
                <div className='space-y-1'>
                  <div className='text-sm text-zinc-500'>Email</div>
                  <div className='font-medium'>gerson@gbumanzor.dev</div>
                </div>
                <div className='space-y-1'>
                  <div className='text-sm text-zinc-500'>Location</div>
                  <div className='font-medium'>San Salvador, El Salvador</div>
                </div>
                <div className='space-y-1'>
                  <div className='text-sm text-zinc-500'>Availability</div>
                  <div className='font-medium text-green-500'>Open to opportunities</div>
                </div>
              </div>

              <div className='mt-8'>
                <Button className='bg-zinc-800 hover:bg-zinc-700 text-white'>Download Resume</Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  )
}
