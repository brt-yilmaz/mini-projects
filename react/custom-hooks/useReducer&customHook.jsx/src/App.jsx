import "./App.css";
import Button from "./components/Button";
import Info from "./components/Info";
import Van from "./components/Van";
import useFunctionsReducer from "./hooks/useFunctions";
import icon from "../public/gearshift.svg";

export default function App() {
  const { state, toggleEngine, gearUp, gearDown, accelerate, decelerate } =
      useFunctionsReducer(),
    { engineStarted } = state;

  return (
    <div className="App">
      <Van engineStatus={engineStarted} />
      <Button
        label={`ENGINE ${engineStarted ? "ON" : "OFF"}`}
        className={`engine-${engineStarted ? "on" : "off"}`}
        onClick={toggleEngine}
      />
      <Info state={state} />
      <div className={"function-buttons"}>
        <Button icon={icon} onClick={gearUp} label="GEAR UP" />
        <Button icon={icon} onClick={gearDown} label="GEAR DOWN" />
        <Button onClick={accelerate} label="ACCELERATE" />
        <Button onClick={decelerate} label="DECELERATE" />
      </div>
    </div>
  );
}
