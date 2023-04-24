function distanceFromHqInBlocks(num) {
  const hqLocation = 42;
  const distance = Math.abs(num - hqLocation);
  return distance;
}

console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(value) {
  const hqInFeet = 264;
  const distanceFeet = distanceFromHqInBlocks(value) * hqInFeet;
  return distanceFeet;
}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, distnation) {
  const blockInFeet = 264;
  const distance = Math.abs(distnation - start) * blockInFeet;
  return distance;
}

function calculatesFarePrice(start, distnation) {
  const distance = Math.abs(start - distnation) * 264;
  let price;

  if (distance <= 400) {
    price = 0;
  } else if (distance <= 2000) {
    price = (distance - 400) * 0.02;
  } else if (distance < 2500) {
    price = 25;
  } else {
    price = "cannot travel that far";
  }

  return price;
}

console.log(distanceTravelledInFeet(2));
