function Info({ state }) {
  return (
    <>
      <p>
        The current gear is: <span className="number">{state.currentGear}</span>
        The current speed is:{" "}
        <span className="number">{state.currentSpeed}</span>
      </p>
      <p>Distance Traveled: {state.distanceTraveled.toFixed(2)} km</p>
    </>
  );
}

export default Info;
