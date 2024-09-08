import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Project, type IProjectData } from './Project'
import { useReducer, useState } from "react"

interface IProps {
  projects: IProjectData[]
}

const createStackSet = (projects: IProjectData[]) => {
  const stackSet = new Set<string>()
  for (const project of projects) {
    if (project.stack)
      for (const item of project.stack) stackSet.add(item)
  }
  return Array.from(stackSet)
}

export function ProjectList({ projects }: IProps) {

  const [stack, setStack] = useState<string[]>(() => createStackSet(projects))
  const [curStack, setCurStack] = useState<Set<string>>(new Set())
  const [newestFirst, toggleNewestFirst] = useReducer((state) => !state, false)

  const changeCurStack = (item: string) => {
    curStack.has(item) ? curStack.delete(item) : curStack.add(item)
    setCurStack(new Set(curStack))
  }

  const t = !curStack.size ? projects : projects.filter((project) => project.stack?.some(item => curStack.has(item)))
  const filteredProjects = newestFirst ? t.toReversed() : t

  return (
    <>
      <h2>Projects</h2>
      {/* Show all button */}
      <div className='px-4 my-12 flex flex-wrap gap-4'>
        <Badge variant='secondary'
          className={'py-1 px-4 shadow text-base italic font-light cursor-pointer ' + (curStack.size === 0
            ? 'bg-primary text-primary-foreground hover:bg-primary/60'
            : 'bg-white hover:bg-primary/80')}
          onClick={() => setCurStack(new Set())}>
          Show all
        </Badge>

        {/* Show stack list*/}
        {stack.map((item) =>
          <Badge key={item} variant='secondary'
            className={'py-1 px-4 shadow text-base italic font-light cursor-pointer ' + (curStack.has(item)
              ? 'bg-primary text-primary-foreground hover:bg-primary/60'
              : 'bg-white hover:bg-primary/80')}
            onClick={() => changeCurStack(item)}>
            {item}
          </Badge>
        )}
      </div>

      {/* Sorting */}
      <div className="flex items-center space-x-2 ml-4 mb-8 ">
        <Checkbox id="DisplayOrder" className="peer size-6" checked={newestFirst} onCheckedChange={toggleNewestFirst} />
        <label
          htmlFor="DisplayOrder"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Newest first
        </label>
      </div>

      {/* Project list */}
      {filteredProjects.map((project) => <Project data={project} key={project.name} />)}
    </>
  )
}
