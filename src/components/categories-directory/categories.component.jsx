import DirectoryItem from '../directory-item/directory-item.component';

import { CategoriesContainer } from './categories.style';

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: '/imgs/back-hat.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Collars and Harness',
    imageUrl: '/imgs/back-harness.png',
    route: 'shop/collars and harness',
  },
  {
    id: 3,
    title: 'Shoes',
    imageUrl: '/imgs/back-shoes.png',
    route: 'shop/shoes',
  },
  {
    id: 4,
    title: 'Outerwear',
    imageUrl: '/imgs/back-outerwear.png',
    route: 'shop/outwear',
  },
  {
    id: 5,
    title: 'Backpacks',
    imageUrl: '/imgs/back-backpack.png',
    route: 'shop/backpacks',
  },
]

const Directory = () => {

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
        />
      ))}
  </CategoriesContainer>
  );

}

export default Directory;