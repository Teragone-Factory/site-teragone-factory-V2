import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: ButtonVariant
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] hover:bg-blue-500',
  ghost: 'text-zinc-200 hover:bg-white/5 hover:text-white',
  outline:
    'border border-white/10 text-white hover:border-primary/70 hover:bg-primary/10',
}

export function Button({ href, variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
