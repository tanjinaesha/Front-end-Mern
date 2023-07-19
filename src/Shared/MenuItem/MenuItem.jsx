const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="flex flex-col md:flex-row space-x-3 pb-10">
      <div className="flex-shrink-0">
        <img src={image} className="w-[120px] md:w-[200px]" alt={name} />
      </div>
      <div className="flex-grow">
        <h3 className="uppercase">{name}</h3>
        <p>{recipe}</p>
        <div className="md:flex md:justify-between md:items-center">
          <span>{price}</span>
          {/* Additional content for larger screens */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
