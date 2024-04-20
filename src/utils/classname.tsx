import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combining clsx or classnames with tailwind-merge allows us to conditionally join Tailwind CSS classes in classNames together
// without style conflicts. Inspired by shadcn / ui.
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}
