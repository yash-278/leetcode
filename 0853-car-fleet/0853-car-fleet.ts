function carFleet(target: number, position: number[], speed: number[]): number {
  const speedAndPos = position.map((pos, i) => {
    return {
      position: pos,
      speed: speed[i],
    };
  });

  speedAndPos.sort((a, b) => a.position - b.position);

  let fleet = 0;

  const fleetStack: {
    position: number;
    speed: number;
  }[] = [];

  for (let i = speedAndPos.length - 1; i >= 0; i--) {
    const car = speedAndPos[i];

    if (fleetStack.length === 0) {
      fleetStack.push(car);
      fleet += 1;
      continue;
    }

    const currTime = (target - car.position) / car.speed;

    const prevTime =
      (target - fleetStack[fleetStack.length - 1].position) /
      fleetStack[fleetStack.length - 1].speed;

    if (currTime <= prevTime) {
      continue;
    }

    fleetStack.pop();
    fleetStack.push(car);
    fleet += 1;
  }

  return fleet;
}
