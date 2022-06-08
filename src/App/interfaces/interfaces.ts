export interface ISport {
  id: string;
  name: string;
  order: number;
  regions: IRegion[]
}

export interface IRegion {
  id: string;
  name: string;
  order: number;
  tournaments: ITournament[]
}

export interface ITournament {
  id: string;
  name: string;
  order: number;
  games: IGame[];
}

export interface IGame {
  _id: string;
  home: IGameItem;
  away: IGameItem;
  markets_count: number;
  match_info: IMatchInfo;
}

export interface IGameItem {
  id: string;
  alias: string,
  name: string;
}

export interface IMatchInfo {
  score: number;
}

