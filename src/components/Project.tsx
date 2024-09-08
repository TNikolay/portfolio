import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { fadeIn } from '@/utils/animation'
import { Button } from './ui/button'
import { ExternalLinkIcon, Github } from 'lucide-react'

export interface IProjectData {
  name: string
  description?: string
  image?: string
  stack?: string[]
  demo?: string
  src?: string
}

interface IProps {
  data: IProjectData
  index: number
}

export function Project({ data, index }: IProps) {
  const { name, description, image, stack, demo, src } = data
  return (
    <motion.div
      className='flex flex-col p-4 m-auto my-8 gap-8 bg-white border-gray-200 shadow-md sm:flex-row md:mx-4 hover:shadow-lg group rounded-xl border transition-colors hover:border-gray-300 hover:hover:bg-gray-100'
      variants={fadeIn(0, 100, 0)} initial='hidden' whileInView='show' viewport={{ once: true }}
    >
      <div className={`flex-1 px-4 mb-6 ${index % 2 === 0 ? 'sm:order-1' : ''}`}>
        <h3 className='my-6 text-2xl font-bold text-center group-hover:text-primary'>{name}</h3>
        {description && <p className='mb-12'>{description}</p>}
        {(demo || src) && (
          <p>
            {demo && (
              <Button asChild variant="outline" className='mr-4 mb-4 py-6 px-4 font-bold text-blue-700 hover:text-primary'>
                <a href={demo} target='_blank'>
                  <ExternalLinkIcon className="mr-2 size-6" />
                  Live Demo
                </a>
              </Button>
            )}

            {src && (
              <Button asChild variant="outline" className='mr-4 py-6 px-4 font-bold text-blue-700 hover:text-primary'>
                <a href={src} target='_blank'>
                  <Github className="mr-2 size-6" />
                  Source code
                </a>
              </Button>
            )}
          </p>
        )}


        {stack &&
          <div className='my-6 flex flex-wrap gap-4'>
            {stack.map((item) => <Badge key={item} variant='secondary' className='py-1 px-4 text-base text-primary italic font-light 
            group-hover:bg-white'> {item} </Badge>)}
          </div>
        }
      </div>


      {image && (
        <div className='w-[260px] md:w-[320px] lg:w-[400px] m-auto'>
          {demo ? (
            <a href={demo} target='_blank'>
              <img className='rounded-xl' src={`${import.meta.env.BASE_URL}/assets/projects/${image}`} alt='{name}' />
            </a>
          ) : (
            <img className='rounded-xl' src={`${import.meta.env.BASE_URL}/assets/projects/${image}`} alt='{name}' />
          )}
        </div>
      )}
    </motion.div>
  )
}
