import Categoryitem from '../category-item/category-item.component';

import './categories.style.scss';

const Categories = ({categories}) => {

  return (
    <div className='categories-container'>
      {categories.map(({id, title, imageUrl}) => (
        <Categoryitem
          key={id}
          title={title}
          imageUrl={imageUrl}
        />
      ))}
  </div>
  );

}

export default Categories;