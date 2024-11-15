import Introduction from "../../introduction/introduction";
import CardTable from "../../cards/cardTable/cardTable";

const images = {
  card1: require('../../../img/storieCard/image.png'),
  card2: require('../../../img/storieCard/image2.png'),
  card3: require('../../../img/storieCard/image3.png'),
  card4: require('../../../img/storieCard/image4.png'),
  card4: require('../../../img/storieCard/image4.png')
};

function Stories() {
  const cards = [
    [
      { image: images.card1, onClick: () => alert("Card 1 clicado") },
      { image: images.card2, onClick: () => alert("Card 2 clicado") }
    ],
    [
      { image: images.card3, onClick: () => alert("Card 3 clicado") },
      { image: images.card4, onClick: () => alert("Card 4 clicado") }
    ]
  ];

  return (
    <div className='container'>
      <Introduction 
        title="Histórias" 
        text="Amor, nessa página guardaremos nossas histórias mais especiais, contadas em cada detalhe, 
          para que possamos reviver juntos os melhores momentos da nossa vida. Um lugar para relembrarmos cada sorriso, 
          conquista e carinho compartilhado ao longo do nosso caminho. "
      />
      <CardTable cards={cards} />
    </div>  
  );
}

export default Stories;