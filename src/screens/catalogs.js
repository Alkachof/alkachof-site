import { useState } from "react";
import CatalogItem from "../components/general/catalog-item/catalog-item";
import SectionHeader from "../components/general/section-header/section-header";

function Catalogs() {
  
  const [catalogs, setCatalogs] = useState([
    {
      id: 1,
      name: "Catálogo 1",
      image: "https://picsum.photos/400",
      price: "1000",
    },
    {
      id: 2,
      name: "Catálogo 2",
      image: "https://picsum.photos/400",
      price: "2000",
    },
    {
      id: 3,
      name: "Catálogo 3",
      image: "https://picsum.photos/400",
      price: "3000",
    },
  ]);

  return (
    <div className="console-section" role="main">
      <SectionHeader title="Mis catálogos" />
      <div className="catalogs" role="list">
        {catalogs.map((catalog) => (
          <CatalogItem key={catalog.id} item={catalog} />
        ))}
      </div>
    </div>
  );
}

export default Catalogs;
