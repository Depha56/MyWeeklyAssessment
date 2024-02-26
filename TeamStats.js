// 1. Declare a const variable called team and set it to an empty object.
const team = {};

// 2. Add _players and _games properties to the team object and initialize both to empty arrays.
team._players = [];
team._games = [];

// 3. Populate the _players array with three players.
team._players.push({
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
});
team._players.push({
  firstName: "Bob",
  lastName: "Johnson",
  age: 30,
});
team._players.push({
  firstName: "Charlie",
  lastName: "Brown",
  age: 27,
});

// 4. Populate the _games array with three games.
team._games.push({
  opponent: "Titans",
  teamPoints: 100,
  opponentPoints: 98,
});
team._games.push({
  opponent: "Eagles",
  teamPoints: 110,
  opponentPoints: 105,
});
team._games.push({
  opponent: "Rockets",
  teamPoints: 95,
  opponentPoints: 92,
});

// 5. Create a getter method called players to retrieve the _players property.
team.players = function () {
  return this._players;
};

team.games = function () {
  return this._games;
};

team.addPlayer = function (newFirstName, newLastName, newAge) {
  const newPlayer = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge,
  };
  this._players.push(newPlayer);
};

team.addGame = function (newOpponent, newTeamPoints, newOpponentPoints) {
  const newGame = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints,
  };
  this._games.push(newGame);
};

team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Titans", 100, 98);

console.log(team.players());
console.log(team.games());
