
export enum UlBaseTheme {
  DEFAULT = "default",
  DEFAULT_GRAY = "default-gray",
  SUBTITLES = "subtitles",
}


export type UlBaseThemeType = UlBaseTheme.DEFAULT | UlBaseTheme.DEFAULT_GRAY | UlBaseTheme.SUBTITLES

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
  list: UlBaseList[]
  subtitles?: UlBaseSubtitles
}

