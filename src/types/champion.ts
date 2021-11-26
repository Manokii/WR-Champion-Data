// Generated by https://quicktype.io

export interface Champion {
  name: string;
  image: Image;
  difficultyLevel: string;
  roles: Role[];
  url: URL;
}

export interface Image {
  url: string;
  title: string;
}

export interface Role {
  name: string;
  icon: Image;
  machineName: string;
}

export interface URL {
  url: string;
}
