import React from 'react';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../assets/menu/pizza-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../Hooks/useMenu';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from '../assets/menu/dessert-bg.jpeg';
const Menu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular');
    const dessert=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');


    return (
        <div>
        <Cover img={menuImg } title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <SectionTitle heading="Don't miss it"
                subHeading="Todays offer">
                    
                </SectionTitle>
                <h1 className="text-center font-bold mb-5">Offered menu</h1>
                <MenuCategory items={offered}></MenuCategory>
                <h1 className="text-center font-bold mb-5">Dessert menu</h1>
                <MenuCategory items={dessert}  img={dessertImg} > dessert</MenuCategory>
                <h1 className="text-center font-bold mb-5">FISH  menu</h1>
                <MenuCategory items={soup} >SOUP</MenuCategory>
                <h1 className="text-center font-bold mb-5">salad menu</h1>
                <MenuCategory items={salad}  >SALAD</MenuCategory>
                <h1 className="text-center font-bold mb-5">Pizza menu</h1>
                <MenuCategory items={pizza}  >Pizza</MenuCategory>
        </div>
    );
};

export default Menu;