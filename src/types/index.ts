import type { ViteSSGContext } from "vite-ssg"

export type UserModule = (ctx: ViteSSGContext) => void

export type Icons = "line" | "facebook" | "twitter" | "telegram" | "whatsapp"

type Network = "facebook" | "twitter" | "telegram" | "whatsapp" | "pinterest"

export interface DataShare {
  icon: Icons
  network: Network
  url: string
  name: string
  title?: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
}

export interface NavbarMenu {
  name: string
  to: string
}

export interface RelatedArticles {
  limit: number
  tags: Array<string>
  name: string
}

export interface PaginateData {
  articles: Array<unknown>
  currentPage: number
  pageSize: number
}

export interface Paginate {
  totalItems: number
  currentPage: number
  pageSize: number
  maxPages?: number
}

export interface ContactForm {
  name?: string
  phoneNumber?: string
  email?: string
  reason?: string
  subscribeChild?: string
  testSession?: boolean
}

interface Instances {}

interface Props {
  default: boolean
}

interface Meta2 {
  frontmatter: Frontmatter
}

interface Frontmatter {
  name: string
  thumbnail: string
  date: string
  description: string
  tags: string[]
  meta?: Meta[]
}

interface Meta {
  property?: string
  content: string
  name?: string
}

export interface MetaArticles {
  path: string
  name: string
  meta: Meta2
  props: Props
  children: any[]
  instances: Instances
  leaveGuards: Instances
  updateGuards: Instances
  enterCallbacks: Instances
  components: Instances
}

export interface PaginateList {
  startPage: number
  mid: any[]
  endPage: number
  listArticles: MetaArticles[] | []
}
