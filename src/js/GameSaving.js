export default class GameSaving {
  constructor(id, created, {
    userId, userName, userLevel, userPoints,
  }) {
    this.id = id;
    this.created = created;
    this.userInfo = {
      id: userId,
      name: userName,
      level: userLevel,
      points: userPoints,
    };
  }
}
