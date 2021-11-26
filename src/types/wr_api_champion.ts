export interface WildRiftAPIResponse {
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
  allContentstackChampionDetail: AllContentstackChampionDetail;
  contentstackChampionDetailGlobal: ContentstackChampionDetailGlobal;
  allContentstackArticles: AllContentstackArticles;
  pageMetadata: PageMetadata;
  championMetadata: ChampionMetadata;
}

export interface AllContentstackArticles {
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: Link;
  date: string;
  featuredImage: FeaturedImage;
  categories: Category[];
  tags: Tag[];
  articleType: ArticleType;
  youtubeLink: string;
  externalLink: string;
  showTableOfContents: boolean;
}

export enum ArticleType {
  ExternalLink = "External link",
  NormalArticle = "Normal article",
  Youtube = "Youtube",
}

export interface Category {
  title: Title;
  url: Link;
}

export enum Title {
  Announcements = "Announcements",
  Community = "Community",
  Dev = "Dev",
  Esports = "Esports",
  GameUpdates = "Game Updates",
}

export interface Link {
  url: string;
}

export interface FeaturedImage {
  focalPoint: FocalPoint;
  banner: Link;
}

export enum FocalPoint {
  Bottom = "Bottom",
  Center = "Center",
  Top = "Top",
}

export interface Tag {
  title: string;
  is_hidden: boolean | null;
  url: Link;
}

export interface AllContentstackChampionDetail {
  nodes: AllContentstackChampionDetailNode[];
}

export interface AllContentstackChampionDetailNode {
  title: string;
  hero: string;
  heroImage: BackButtonIcon;
  heroVideo: HeroVideo[];
  heroVideoMobile: HeroVideo[];
  subtitle: string;
  roles: Role[];
  difficulty: string;
  difficultyLevel: string;
  abilities: Ability[];
  skins: Skin[];
  buttons: Button[];
  promoAd: PromoAd;
  relatedTags: RelatedTag[];
}

export interface Ability {
  type: string;
  title: string;
  thumbnail: BackButtonIcon;
  description: string;
  videos: HeroVideo[];
}

export interface BackButtonIcon {
  url: string;
  title: string;
}

export interface HeroVideo {
  video: Video;
  posterImage: BackButtonIcon;
}

export interface Video {
  file: BackButtonIcon;
}

export interface Button {
  title: string;
  href: string;
}

export interface PromoAd {
  isEnabled: boolean;
  selectedPromos: any[];
}

export interface RelatedTag {
  title: string;
}

export interface Role {
  name: string;
  icon: BackButtonIcon;
  machineName: string;
}

export interface Skin {
  name: string;
  splash: BackButtonIcon;
  icon: BackButtonIcon;
}

export interface ChampionMetadata {
  nodes: ChampionMetadataNode[];
}

export interface ChampionMetadataNode {
  title: string;
  subtitle: string;
  image: BackButtonIcon;
  skins: Skin[];
  buttons: Button[];
}

export interface ContentstackChampionDetailGlobal {
  championDetailGlobal: ChampionDetailGlobal;
  articlesGlobal: ArticlesGlobal;
}

export interface ArticlesGlobal {
  relatedArticlesCopyParts: string[];
}

export interface ChampionDetailGlobal {
  roleCopy: string;
  difficultyCopy: string;
  abilitiesCopy: string;
  skinsCopy: string[];
  backButtonIcon: BackButtonIcon;
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
  image: BackButtonIcon;
  site?: string;
}

export interface PageContext {
  id: string;
  language: string;
  intl: Intl;
}

export interface Intl {
  language: string;
  languages: any[];
  routed: boolean;
  originalPath: string;
  redirect: boolean;
  defaultLanguage: string;
}
