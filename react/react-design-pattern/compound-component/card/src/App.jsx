import Card from "./components/Card/Card";
import CardItem from "./components/Card/CardItem";
import content from "./components/content";

function App() {
  return (
    <Card limit={1}>
      <Card.CardContent>
        <Card>
          <Card.CardContent>
            {content.map((item, index) => {
              return <CardItem key={index} item={item} />;
            })}
          </Card.CardContent>

          <Card.Expand>
            <button>show more</button>
          </Card.Expand>

          <Card.Collapse>
            <button>show less</button>
          </Card.Collapse>
        </Card>

        <Card limit={4}>
          <Card.Expand>
            <div>show more</div>
          </Card.Expand>

          <Card.CardContent>
            {content.map((item, index) => {
              return <CardItem key={index} item={item} />;
            })}
          </Card.CardContent>
          <Card.Collapse>
            <div>show less</div>
          </Card.Collapse>
        </Card>
      </Card.CardContent>
      <Card.Collapse>
        <div>show less</div>
      </Card.Collapse>
      <Card.Expand>
        <div>show more</div>
      </Card.Expand>
    </Card>
  );
}

export default App;
