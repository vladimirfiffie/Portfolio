import React from 'react'

export function Button({children, className='', variant='primary', ...props}){
  const base = 'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-shadow duration-200'
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-2xl',
    ghost: 'bg-transparent text-indigo-600 border border-indigo-200 hover:bg-indigo-50 dark:border-white/10',
  }
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}

export function IconButton({icon, ariaLabel, ...props}){
  return (
    <button
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center p-2 rounded-md bg-white/80 shadow-sm hover:scale-105 transition-transform ${props.className ?? ''}`}
      {...props}
    >
      {icon ? icon : <span className="text-xl">🔘</span>}
    </button>
  )
}

export function Card({ children, className = '', accent = false }){
  return (
    <div className={`rounded-xl border border-neutral-200 dark:border-white/6 bg-white dark:bg-neutral-900 p-4 shadow-input ${className}`}>
      {accent ? <div className="-mt-6 mb-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-t-xl" /> : null}
      {children}
    </div>
  )
}

export function Badge({ children, className = '' }){
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800 ${className}`}>
      {children}
    </span>
  )
}

const Aceternity = { Button, IconButton, Card, Badge }

export default Aceternity
