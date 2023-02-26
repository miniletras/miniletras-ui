const someTag = (data: Record<string, any>, tagName: string): boolean => {
  return data.meta?.frontmatter?.tags?.some((tag: string) => tag === tagName)
}

export { someTag }
