import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => response)
      .catch((error) => { throw new Error(`An error occured: ${error}`); });
  }
}
