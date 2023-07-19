import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

function MenuCategory({ items, title, img }) {
  return (
    <div>
      <section>
        {title && <Cover img={img} title="our menu" />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(item => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuCategory;
