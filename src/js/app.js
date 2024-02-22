import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';
//  import json from './parser';
//  import read from './reader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  const {
    id,
    created,
    userInfo: {
      id: userId,
      name: userName,
      level: userLevel,
      points: userPoints,
    },
  } = JSON.parse(saving);
  const gameSaving = new GameSaving(id, created, {
    userId, userName, userLevel, userPoints,
  });
  return gameSaving;
})
  .catch((error) => { throw new Error(`An error occured: ${error}`); });
