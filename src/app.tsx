import { GithubIcon } from './components/github-icon'
import { LinkedinIcon } from './components/linkedin-icon'
import { MailIcon } from './components/mail-icon'

import resumePdf from './utils/resume.pdf'
import resumeDoc from './utils/resume.docx'

const SocialLinks = [
  {
    icon: GithubIcon,
    name: 'Github',
    link: 'https://github.com/tysoneketone'
  },
  {
    icon: LinkedinIcon,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/tyson-eketone-aa433844/'
  },
  {
    icon: MailIcon,
    name: 'Email',
    link: 'mailto: tysoneketone@gmail.com'
  }
]

export default function App() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Tyson Eketone</h1>
        <h3 className="text-base font-semibold text-emerald-500 sm:text-lg lg:text-xl">
          Full-Stack Software Engineer
        </h3>

        <ul className="flex divide-x-2">
          <li className="px-3 text-xs uppercase sm:text-sm">TypeScript</li>
          <li className="px-3 text-xs uppercase sm:text-sm">ReactJS</li>
          <li className="px-3 text-xs uppercase sm:text-sm">Ruby On Rails</li>
          <li className="px-3 text-xs uppercase sm:text-sm">Go</li>
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-3 place-items-center gap-10 ">
        {SocialLinks.map(({ icon: Icon, link, name }) => (
          <a
            key={name}
            href={link}
            className="flex cursor-pointer flex-col items-center gap-y-2 transition duration-200 ease-in-out hover:text-emerald-400"
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
            <span className="hidden text-xs sm:block">{name}</span>
          </a>
        ))}
      </div>

      <div className="mt-12 space-y-5 lg:mt-14">
        <h3 className="text-center font-bold uppercase">My Resume</h3>
        <div className="flex flex-col gap-5 lg:flex-row">
          <a
            href={resumePdf}
            download="Tyson Eketone Resume.pdf"
            className="rounded-lg border-2 border-emerald-500 px-6 py-1.5 transition duration-200 ease-in-out hover:bg-emerald-500"
          >
            <span className="text-sm font-semibold">Download .PDF</span>
          </a>

          <a
            href={resumeDoc}
            download="Tyson Eketone Resume.docx"
            className="rounded-lg border-2 border-emerald-500 px-6 py-1.5 transition duration-200 ease-in-out hover:bg-emerald-500"
          >
            <span className="text-sm font-semibold">Download .Docx</span>
          </a>
        </div>
      </div>
    </main>
  )
}
