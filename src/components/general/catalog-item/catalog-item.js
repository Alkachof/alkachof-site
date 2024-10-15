function CatalogItem({ item }) {
  return (
    <div className="catalog-item" role="region">
      <div className="image-container">
      <img src={item.image} alt={item.name} />
      </div>
      <div className="catalog-item-info">
        <p className="catalog-item-name">{item.name}</p>
        <p className="catalog-item-price">${item.price}</p>
      </div>
      <div className="catalog-item-actions">
        <button className="button button-primary">Comprar</button>
        <button className="button button-secondary">Ver más</button>
      </div>
    </div>
  );
}

export default CatalogItem;
