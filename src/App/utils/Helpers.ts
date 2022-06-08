import { ISport } from "../interfaces/interfaces";

export const dataNormalizer = (data: any[]): ISport[] => {
  const normalizedData: ISport[] = [];
  const sportStorage: { [key: string]: any } = {};

  for (let i: number = 0; i < data.length; i++) {
    if (!sportStorage[data[i].sport.name]) {
      Object.assign(sportStorage, {
        [data[i].sport.name]: {
          id: data[i].sport.id,
          name: data[i].sport.name,
          order: data[i].sport.order,
          regions: {}
        }
      });
    }

    if (!sportStorage[data[i].sport.name].regions[data[i].region.name]) {
      Object.assign(sportStorage[data[i].sport.name].regions, {
        [data[i].region.name]: {
          id: data[i].region.id,
          name: data[i].region.name,
          order: data[i].region.order,
          tournaments: {}
        }
      });
    }

    if (!sportStorage[data[i].sport.name].regions[data[i].region.name].tournaments[data[i].tournament.name]) {
      Object.assign(sportStorage[data[i].sport.name].regions[data[i].region.name].tournaments, {
        [data[i].tournament.name]: {
          id: data[i].tournament.id,
          name: data[i].tournament.name,
          order: data[i].tournament.order,
          games: []
        }
      });
    }

    sportStorage[data[i].sport.name].regions[data[i].region.name].tournaments[data[i].tournament.name].games.push({
      _id: data[i]._id,
      home: data[i].home,
      away: data[i].away,
      markets_count: data[i].markets_count,
      match_info: data[i].match_info
    });
  }

  for (let key in sportStorage) {
    const sportItem: ISport = { ...sportStorage[key], regions: Object.values(sportStorage[key].regions)};

    for (let i: number = 0; i < sportItem.regions.length; i++) {
      sportItem.regions[i].tournaments = Object.values(sportItem.regions[i].tournaments);
    }

    normalizedData.push(sportItem);
  }

  return normalizedData;
}
