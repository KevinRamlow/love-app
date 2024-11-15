import Introduction from "../../introduction/introduction";
import CardTable from "../../cards/cardTable/cardTable";
import { useNavigate } from 'react-router-dom';

const images = {
  card1: require('../../../img/storieCard/image.png'),
  card2: require('../../../img/storieCard/image2.png'),
  card3: require('../../../img/storieCard/image3.png'),
  card4: require('../../../img/storieCard/image4.png')
};

function Stories() {
  const navigate = useNavigate();

  const cards = [
    [
      { image: images.card1, onClick: () => navigate('/card', { state: { title: 'Título do Card 1', text: 'Texto do Card 1' } }) },
      { image: images.card2, onClick: () => navigate('/card', { state: { title: 'Título do Card 2', text: 'Texto do Card 2' } }) }
    ],
    [
      { image: images.card3, onClick: () => navigate('/card', { state: { title: 'Título do Card 3', text: 'Texto do Card 3' } }) },
      { image: images.card4, onClick: () => navigate('/card', { state: { title: 'Título do Card 4', text: 'Texto do Card 4' } }) }
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