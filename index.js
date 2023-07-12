function distanceFromHqInBlocks(block){
  let distance = (block - 42)
  if (distance < 0) {
      return (distance * -1)
  } else{
  return distance}
}

function distanceFromHqInFeet(block){
  let distance = (block - 42) * 264
  if (distance < 0) {
      return (distance * -1) 
  } else{
  return distance
  }
}

function distanceTravelledInFeet(start, destination) {
  let distance = (destination - start) * 264
  if (distance < 0) {
      return (distance * -1)
  } else {
  return distance
  }
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = (destination - start) * 264
  if (distanceTravelled <= 400) {
      return 0
  } else if (distanceTravelled <= 2000 && 2500) {
      let fare = (distanceTravelled - 400) * 0.02;
      return fare
  } else if(distanceTravelled <= 2500) {
      return 25
  } else {
      return "cannot travel that far"
  }
}