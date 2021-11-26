export interface WildRiftAPIResposeAllChampions {
  componentChunkName: string;
  path: string;
  result: Result;
  staticQueryHashes: string[];
}

export interface Result {
  data: Data;
  pageContext: PageContext;
}

export interface Data {
  allContentstackChampions: AllContentstackChampions;
  pageMetadata: PageMetadata;
}

export interface AllContentstackChampions {
  nodes: AllContentstackChampionsNode[];
}

export interface AllContentstackChampionsNode {
  titleParts: string[];
  description: string;
  rolesData: RolesData;
  difficultiesData: DifficultiesData;
  championList: ChampionList[];
  latestReleases: LatestReleases;
}

export interface ChampionList {
  name: string;
  image: Image;
  difficultyLevel: DifficultyLevelEnum;
  roles: Role[];
  url: URL;
}

export enum DifficultyLevelEnum {
  High = "high",
  Low = "low",
  Moderate = "moderate",
}

export interface Image {
  url: string;
  title: string;
}

export interface Role {
  name: Name;
  icon: Image;
  machineName: MachineName;
}

export enum MachineName {
  Assassins = "assassins",
  Fighters = "fighters",
  Mages = "mages",
  Marksmen = "marksmen",
  Supports = "supports",
  Tanks = "tanks",
}

export enum Name {
  Assassin = "ASSASSIN",
  Fighter = "FIGHTER",
  Mage = "MAGE",
  Marksman = "Marksman",
  NameAssassin = "Assassin",
  NameFighter = "Fighter",
  NameMARKSMAN = "MARKSMAN",
  Support = "SUPPORT",
  Tank = "TANK",
}

export interface URL {
  url: string;
}

export interface DifficultiesData {
  allDifficultiesText: string;
  difficultyLevels: DifficultyLevel[];
}

export interface DifficultyLevel {
  name: string;
  machineName: string;
}

export interface LatestReleases {
  title: string;
  articles: any[];
}

export interface RolesData {
  allRolesText: string;
  roles: DifficultyLevel[];
}

export interface PageMetadata {
  nodes: PageMetadataNode[];
}

export interface PageMetadataNode {
  opengraph: Opengraph;
  twitter: Opengraph;
}

export interface Opengraph {
  title: string;
  description: string;
  image: Image;
  site?: string;
}

export interface PageContext {
  language: string;
  intl: Intl;
}

export interface Intl {
  language: string;
  languages: string[];
  messages: Messages;
  routed: boolean;
  originalPath: string;
  redirect: boolean;
  defaultLanguage: string;
}

export interface Messages {
  "siteMetadata.title": string;
  "footer.builtWith": string;
  "404.notFound": string;
  "404.message": string;
  "home.welcome": string;
  "home.main_title": string;
}
