import Categories from './components/categories-directory/categories.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: '/imgs/back-hat.png',
    },
    {
      id: 2,
      title: 'Collars and Harness',
      imageUrl: '/imgs/back-harness.png',
    },
    {
      id: 3,
      title: 'Shoes',
      imageUrl: '/imgs/back-shoes.png',
    },
    {
      id: 4,
      title: 'Outerwear',
      imageUrl: '/imgs/back-outerwear.png',
    },
    {
      id: 5,
      title: 'Backpacks',
      imageUrl: '/imgs/back-backpack.png',
    },
  ]

  return (
    <Categories categories={categories}/>
    // <div className='categories-container'>
    //   {categories.map(({id, title, imageUrl}) => (
    //     <Categoryitem
    //       key={id}
    //       title={title}
    //       imageUrl={imageUrl}
    //     />
    //   ))}
    // </div>
  );
}

export default App;
