export interface NavItem {
  label: string
  href: string
  dropdownItems?: {
    label: string
    href: string
  }[]
}

export interface ScenarioItem {
  id: string
  title: string
  description: string
  imageUrl: string
}

export type Language = "en" | "zh"

export interface ProductFeature {
  icon?: string // Lucide icon name or image path
  title: string
  description: string
}

export interface ProductParameter {
  category?: string
  parameters: {
    label: string
    value: string | string[]
  }[]
}

export interface Product {
  id: number
  slug: string
  category: "AC Charging" | "DC Charging" | "ESS" | "Platform"
  name: string
  subtitle: string
  description?: string
  imageUrl: string[]
  maxPower: string
  bulletPoints: string[] // e.g. "Very easy to use..."
  detailedFeatures?: ProductFeature[]
  parametersImage?: string
}

