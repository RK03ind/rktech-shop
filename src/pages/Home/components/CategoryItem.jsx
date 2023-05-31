const CategoryItem = ({ icon, categoryName }) => {
  return (
    <div className="category-item">
      <img src={icon} alt={categoryName} />
      <span>{categoryName}</span>
    </div>
  );
};

export default CategoryItem;
