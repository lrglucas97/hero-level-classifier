const name = "Arkadius";
const xp = 7312;
let level = ""

if (xp < 1000) {
  level = "Iron";
} else if (xp <= 2000) {
  level = "Bronze";
} else if (xp <= 6000) {
  level = "Silver";
} else if (xp <= 7000) {
  level = "Gold";
} else if (xp <= 8000) {
  level = "Platinum";
} else if (xp <= 9000) {
  level = "Ascending";
} else if (xp <= 10000) {
  level = "Immortal";
} else {
  level = "Radiant";
}

console.log(name + " the Hero, has a " + level + " rank.");