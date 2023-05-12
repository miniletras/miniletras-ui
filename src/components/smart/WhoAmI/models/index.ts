
export type UlBaseTheme = 'default' | 'subtitles'

export interface UlBaseSubtitles {
  h4: string
  h5?: string
  h6?: string
}
export interface UlBaseList {
  label: string
  icon?: string
}

export interface UlBaseLists {
  subtitles?: UlBaseSubtitles
  list: UlBaseList[]
}

