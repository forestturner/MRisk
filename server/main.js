import { Meteor } from 'meteor/meteor';
import { Players } from '../players.js';
import { Territories } from '../territories.js';

const PLAYER_TIMEOUT = 60000;
const TERRITORIES_FRESH = [
  { continent: "North America",
    value: 5,
    territories:
    [
      {tName: "Alaska",location:1,owner:-1, armySize: 0 },
      {tName: "Alberta", location:2, owner: -1, armySize: 0},
      {tName: "Central America", location:3, owner: -1, armySize: 0},
      {tName: "Eastern United States", location:4, owner: -1, armySize: 0},
      {tName: "Greenland", location:5, owner: -1, armySize: 0},
      {tName: "Northwest Territory", location:6, owner: -1, armySize: 0},
      {tName: "Ontario", location:7, owner: -1, armySize: 0},
      {tName: "Quebec", location:8, owner: -1, armySize: 0},
      {tName: "Western United States", location:9, owner: -1, armySize: 0}
    ]
  },
  { continent: "South America",
    value: 2,
    territories:
    [
      {tName: "Argentina", location:1, owner: -1, armySize: 0},
      {tName: "Brazil", location:2, owner: -1, armySize: 0},
      {tName: "Peru", location:3, owner: -1, armySize: 0},
      {tName: "Venezuela", location:4, owner: -1, armySize: 0}
    ]
  },
  { continent: "Europe",
    value: 5,
    territories:
    [
      {tName: "Great Britain", location:1, owner: -1, armySize: 0},
      {tName: "Iceland", location:2, owner: -1, armySize: 0},
      {tName: "Northern Europe", location:3, owner: -1, armySize: 0},
      {tName: "Scandinavia", location:4, owner: -1, armySize: 0},
      {tName: "Southern Europe", location:5, owner: -1, armySize: 0},
      {tName: "Ukraine", location:6, owner: -1, armySize: 0},
      {tName: "Western Europe", location:7, owner: -1, armySize: 0}
    ]
  },
  {continent: "Africa",
    value: 3,
    territories: [
      {tName: "Congo", location: 1, owner: -1, armySize: 0},
      {tName: "East Africa", location: 2, owner: -1, armySize: 0},
      {tName: "Egypt", location: 3, owner: -1, armySize: 0},
      {tName: "Madagascar", location: 4, owner: -1, armySize: 0},
      {tName: "North Africa", location: 5, owner: -1, armySize: 0},
      {tName: "South Africa", location: 6, owner: -1, armySize: 0}
    ]
  },
  { continent: "Asia",
    value:7,
    territories: [
      {tName: "Afghanistan", location:1, owner: -1, armySize: 0},
      {tName: "China", location:2, owner: -1, armySize: 0},
      {tName: "India", location:3, owner: -1, armySize: 0},
      {tName: "Irkutsk", location:4, owner: -1, armySize: 0},
      {tName: "Japan", location:5, owner: -1, armySize: 0},
      {tName: "Kamchatka", location:6, owner: -1, armySize: 0},
      {tName: "Middle East", location:7, owner: -1, armySize: 0},
      {tName: "Mongolia", location:8, owner: -1, armySize: 0},
      {tName: "Siam", location:9, owner: -1, armySize: 0},
      {tName: "Siberia", location:10, owner: -1, armySize: 0},
      {tName: "Ural", location:11, owner: -1, armySize: 0},
      {tName: "Yakutsk", location:12, owner: -1, armySize: 0}
    ]
  },
  {continent: "Australia",
    value:2,
    territories: [
      {tName: "Eastern Australia", location:1, owner: -1, armySize: 0},
      {tName: "Indonesia", location:2, owner: -1, armySize: 0},
      {tName: "New Guinea", location:3, owner: -1, armySize: 0},
      {tName: "Western Australia", location:4, owner: -1, armySize: 0}
    ]
  }
];


function newGame(){

  console.log(TERRITORIES_FRESH.length);
  for(let i = 0; i < TERRITORIES_FRESH.length; i++)
  {
    for(let j = 0; j < TERRITORIES_FRESH[i].territories.length; j++)
    {
      Territories.insert({
        continent: TERRITORIES_FRESH[i].continent,
        tName: TERRITORIES_FRESH[i].territories[j].tName,
        location: TERRITORIES_FRESH[i].territories[j].location,
        owner: TERRITORIES_FRESH[i].territories[j].owner,
        armySize: TERRITORIES_FRESH[i].territories[j].armySize
      });
    }
  }

}

newGame();

// Meteor.NewGame();
// Meteor.setInterval(cleanIdle, PLAYER_TIMEOUT + 1000);
// Meteor.setInterval(spawnPellets, 1000);
