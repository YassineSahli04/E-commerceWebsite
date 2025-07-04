import { useState, useEffect } from 'react';
import all_product from '../Assets/all_product';
import './Filter.css';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';

export default function Filter({ items, onFilter }) {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({ minPrice: 0, maxPrice: Math.max(...items.map(i => i.new_price)) });

  const availableLocation = [...new Set(items.map(item => item.city))];
  const maxPrice = Math.max(...items.map(item => item.new_price));

  const itemCounts = {
    traditional: items.filter(i => i.type === 'Traditional House').length,
    apartment: items.filter(i => i.type === 'Apartment').length,
    villa: items.filter(i => i.type === 'Villa').length,
  };

  useEffect(() => {
    let filtered = items;

    if (selectedType) {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    if (selectedLocations.length > 0) {
      filtered = filtered.filter(item => selectedLocations.includes(item.city));
    }

    if (selectedPrice) {
      filtered = filtered.filter(item =>
        item.new_price >= selectedPrice.minPrice && item.new_price <= selectedPrice.maxPrice
      );
    }

    onFilter(filtered);
  }, [selectedType, selectedLocations, selectedPrice, items, onFilter]);

    const handleTypeFilter = (type) => {
    if (!type) {
        onFilter(items); 
    } else {
        const filtered = items.filter(item => item.type === type);
        onFilter(filtered);
    }
    };

  const handleLocationFilter = (locations) => {
    setSelectedLocations(locations);
  };

  const handlePriceFilter = (range) => {
    
    setSelectedPrice(range);
  };

  return (
    <div className="filter-container w-25 mr4 pa3">
      <div style={{ position: 'sticky', top: '20px' }}>
        <ul className="list pa0 ma0 pb3 bb b--black-10">
          <li className="f6 fw5 silver mb2">
            <div className="flex justify-between">
              Filters
              <span>{items.length} Products</span>
            </div>
          </li>
            <li>
            <button
                onClick={() => handleTypeFilter(null)}
                className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-dark-blue flex justify-between">
                All properties
                <span>{items.length}</span>
            </button>
            </li>
          <li>
            <button onClick={() => handleTypeFilter('Traditional House')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-dark-blue flex justify-between">
              Traditional Houses
              <span>{itemCounts['traditional']}</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleTypeFilter('Apartment')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-dark-blue flex justify-between">
              Apartments
              <span>{itemCounts['apartment']}</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleTypeFilter('Villa')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-dark-blue flex justify-between">
              Villas
              <span>{itemCounts['villa']}</span>
            </button>
          </li>
        </ul>

        <LocationFilter availableLocations={availableLocation} onFilter={handleLocationFilter} />
        <PriceFilter maxPrice={maxPrice} onFilter={handlePriceFilter} />
      </div>
    </div>
  );
}
