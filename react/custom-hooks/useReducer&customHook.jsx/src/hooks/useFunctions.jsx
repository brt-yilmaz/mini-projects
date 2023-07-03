import { useEffect, useReducer } from "react";

const initialState = {
  engineStarted: false,
  currentGear: 0,
  currentSpeed: 0,
  distanceTraveled: 0,
};

const ActionType = {
  TOGGLE_ENGINE: "TOGGLE_ENGINE",
  GEAR_UP: "GEAR_UP",
  GEAR_DOWN: "GEAR_DOWN",
  ACCELERATE: "ACCELERATE",
  DECELERATE: "DECELERATE",
  DISTANCE: "DISTANCE",
};

function vanReducer(state, action) {
  switch (action.type) {
    case ActionType.TOGGLE_ENGINE:
      return {
        ...state,
        engineStarted: !state.engineStarted,
        currentGear: 0,
        currentSpeed: 0,
      };

    case ActionType.GEAR_UP:
      if (!state.engineStarted) return state;
      if (state.currentGear === 4) return state;
      return {
        ...state,
        currentGear: state.currentGear + 1,
      };

    case ActionType.GEAR_DOWN:
      if (state.currentGear === 0) return state;
      return {
        ...state,
        currentGear: state.currentGear - 1,
      };

    case ActionType.ACCELERATE:
      if (state.currentSpeed > 250) return state;
      return {
        ...state,
        currentSpeed: state.currentSpeed + state.currentGear * 20,
      };

    case ActionType.DECELERATE:
      return {
        ...state,
        currentSpeed:
          state.currentSpeed - state.currentGear * 15 < 0
            ? 0
            : state.currentSpeed - state.currentGear * 15,
      };
    case ActionType.DISTANCE:
      return {
        ...state,
        distanceTraveled: state.distanceTraveled + state.currentSpeed / 3600,
      };

    default:
      return state;
  }
}

function useVanReducer() {
  const [state, dispatch] = useReducer(vanReducer, initialState);

  useEffect(() => {
    if (!state.engineStarted) return;
    let timer = setInterval(() => {
      dispatch({ type: ActionType.DISTANCE });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.engineStarted]);

  const toggleEngine = () => dispatch({ type: ActionType.TOGGLE_ENGINE });
  const gearUp = () => dispatch({ type: ActionType.GEAR_UP });
  const gearDown = () => dispatch({ type: ActionType.GEAR_DOWN });
  const accelerate = () => dispatch({ type: ActionType.ACCELERATE });
  const decelerate = () => dispatch({ type: ActionType.DECELERATE });

  return {
    state,
    toggleEngine,
    gearUp,
    gearDown,
    accelerate,
    decelerate,
  };
}

export default useVanReducer;
