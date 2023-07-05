import "./App.css";
import Animals from "./components/Animals";
import Modal from "./components/Modal";
import Users from "./components/Users";

function App() {
  return (
    <Modal>
      <Modal.Open opens={"users"}>
        <button>Open User Modal</button>
      </Modal.Open>
      <Modal.Window name={"users"}>
        <Users />
      </Modal.Window>
      <Modal.Open opens={"animals"}>
        <button>Open Animals Modal</button>
      </Modal.Open>
      <Modal.Window name={"animals"}>
        <Animals />
      </Modal.Window>
    </Modal>
  );
}

export default App;
