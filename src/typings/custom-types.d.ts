// Custom Interfaces used in self made react components
export interface ConfigProps {
  name: string,
  domain: string,
  author: string,
  description?: string,
  socialImageTitle?: string,
  socialImageSubtitle?: string,
  github?: string,
  linkedin?: string,
}

export interface HeadProps {
  title?: string,
  description?: string,
  route?: string,
  config?: ConfigProps,
}

export interface NavBarProps {
  title?: string,
  imgSrc?: string,
  menuLinks?: Array<string>,
  show?: boolean
}

export interface PageError {
  message?: string
  statusCode: number
}

// Interfaces for graphCMS Response handling

export interface PageGraph {
  pages: [
    {
      title: String,
      cover_image: String,
      blocks: Array<object>
    }
  ]
}

export interface ContactData {
  name?: String,
  email: String,
  message?: String,
}