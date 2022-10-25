import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <p className="category-title">{title}</p>
        <p className="category-subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
