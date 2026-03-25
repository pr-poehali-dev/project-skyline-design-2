import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  tags?: { label: string; icon: string; description?: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
}