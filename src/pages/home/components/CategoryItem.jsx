const CategoryItem = ({ icon, categoryName }) => {
  return (
    <div className="category-item">
      <img src={icon} alt="" />
      <span>{categoryName}</span>
    </div>
  );
};

export default CategoryItem;
