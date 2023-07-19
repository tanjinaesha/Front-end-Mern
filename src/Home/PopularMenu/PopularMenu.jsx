import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <div>
      <section>
        <SectionTitle heading="from our menu" subHeading="Popular menu" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map(item => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default PopularMenu;
