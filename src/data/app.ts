import { usePaginate, someTag, sortByDate } from "~/utils"
import type { RelatedArticles, PaginateData, DataShare, MetaArticles, PaginateList } from "~/types"

// Get data frontmatter using function getRoutes from useRouter
const getDataRoutes = () => {
  const router = useRouter()
  const routes = router.getRoutes()
  return routes
}

// Filter data routes to get the tag data and limit as needed
const getItemsByMenu = (menuItem: string, limit?: number) => {
  const tagPosts = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length)
    .filter((data) => someTag(data, menuItem))
    .slice(0, limit)
  const sortedByDate = sortByDate(tagPosts)
  const important =
    sortedByDate.find((post) => {
      const tags = post.meta.frontmatter.tags
      return tags.includes("important")
    }) ?? {}
  const noImportant = sortedByDate.filter((post) => {
    const tags = post.meta.frontmatter.tags
    return !tags.includes("important")
  })

  return [important, ...noImportant]
}

// Get params's value from url
const getParams = (value: string) => {
  const router = useRouter()
  return router.currentRoute.value.params[value]
}

// Filter data routes to get the articles data and limit as needed
const getArticles = (limit?: number) => {
  const isPosts = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length)
    .slice(0, limit)

  return sortByDate(isPosts)
}

// Get the latest important by tag
const latestItemByMenuTag = (menuItem: string, tag: string) => {
  const importantItem = getItemsByMenu(menuItem).filter((data) => someTag(data, tag))
  const frontmatterClubs = importantItem.map((data) => data.meta.frontmatter)

  return sortByDate(frontmatterClubs)[0]
}

// Get the latest article
const latestArticle = () => {
  const frontmatter = getDataRoutes()
    .filter((data) => data.meta.frontmatter)
    .map((data) => data.meta.frontmatter) as Record<string, any>[]

  return sortByDate(frontmatter)[0]
}

// Filter data to get specific articles based on tags
const getArticlesTags = (tags: Array<string>) => {
  const isPosts = getDataRoutes().filter((data) => Object.keys(data.meta).length)
  const filter = isPosts.filter((tag: Record<string, any>) =>
    tags.every((filter) => tag.meta.frontmatter.tags.includes(filter)),
  )
  return filter
}

// Filter data to get data of search
const getArticlesSearch = (tags: Array<string>) => {
  const isPosts = getDataRoutes().filter((data) => Object.keys(data.meta).length)
  const filter = isPosts.filter((tag: Record<string, any>) =>
    tags.every((filter) => tag.meta.frontmatter.name.includes(filter)),
  )
  return filter
}

// Filter data to get related articles data
const getRelatedArticles = ({ limit, tags, name }: RelatedArticles) => {
  const isPosts = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length)
    .filter((data: Record<string, any>) => data.meta.frontmatter.name !== name)
    .slice(0, limit)
  const filter = isPosts.filter((tag: Record<string, any>) =>
    tags.some((filter) => tag.meta.frontmatter.tags.includes(filter)),
  )

  return filter as MetaArticles[] | []
}

// Filter paginate data
const paginateData = ({ articles, currentPage, pageSize }: PaginateData): PaginateList => {
  const getArticles = articles
  const { startPage, endPage, startIndex, endIndex } = usePaginate({
    totalItems: getArticles.length,
    currentPage: currentPage,
    pageSize: pageSize,
  })

  const prev: number = currentPage - 1 >= startPage ? currentPage - 1 : 0
  const next: number = currentPage + 1 <= endPage ? currentPage + 1 : 0
  const mid = Array(prev, currentPage, next).filter((value) => value > startPage && value < endPage)

  const listArticles = getArticles.slice(startIndex, endIndex + 1) as MetaArticles[] | []

  return {
    startPage,
    mid,
    endPage,
    listArticles,
  }
}

const dataShare = (url: string, { name: title, description }: Record<string, any>): DataShare[] => {
  return [
    {
      icon: "facebook",
      network: "facebook",
      name: "Facebook",
      url: url,
      title,
      description,
      hashtags: "test",
    },
    {
      icon: "twitter",
      network: "twitter",
      name: "Twitter",
      url: url,
      title,
      hashtags: "test",
    },
    {
      icon: "whatsapp",
      network: "whatsapp",
      name: "Whatsapp",
      url: url,
      description,
      title,
    },
    {
      icon: "telegram",
      network: "telegram",
      name: "Telegram",
      url: url,
      description,
      title,
    },
  ]
}

export {
  dataShare,
  getArticles,
  getArticlesSearch,
  getArticlesTags,
  getItemsByMenu,
  getParams,
  getRelatedArticles,
  latestArticle,
  latestItemByMenuTag,
  paginateData,
}
