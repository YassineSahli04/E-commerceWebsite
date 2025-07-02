import all_product from '../Assets/all_product';
import './Filter.css';
// import LocationFilters from './LocationFilters';
import PriceFilter from './PriceFilter';

export default function Filter({ items, onFilter }) {
    const itemCounts = {
        traditional: items.filter(i => i.type === 'traditional').length,
        apartment: items.filter(i => i.type === 'apartment').length,
        villa: items.filter(i => i.type === 'villa').length,
    };
    const maxPrice = Math.max(...items.map(item => item.new_price));

    const handleTypeFilter = (type) => {
        const filtered = items.filter(item => item.type === type);
        onFilter(filtered);
    };
    const handlePriceFilter = ({ minPrice, maxPrice }) => {
        if(minPrice===null || maxPrice===null){
            onFilter(all_product);
        }else{
            const filtered = items.filter(item => item.new_price >= minPrice && item.new_price <= maxPrice);
            onFilter(filtered);
        }

    };

  return (
    <div className="w-25 mr4 pa3">
      <div style={{ position: 'sticky', top: '20px' }}>
        <ul className="list pa0 ma0 pb3 bb b--black-10">
          <li className="f6 fw5 silver mb2">
            <div className="flex justify-between">
              Filters
              <span>{items.length} Products</span>
            </div>
          </li>
          <li>
            <button onClick={() => handleTypeFilter('traditional')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-light-purple flex justify-between">
              Traditional Houses
              <span>{itemCounts['traditional']}</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleTypeFilter('apartment')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-light-purple flex justify-between">
              Apartment
              <span>{itemCounts['apartment']}</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleTypeFilter('villa')} className="btnFilter bn fw5 pa0 pv2 w-100 tl bg-transparent hover-light-purple flex justify-between">
              Villa
              <span>{itemCounts['villa']}</span>
            </button>
          </li>
        </ul>

        {/* <LocationFilters items={items} onFilter={onFilter} /> */}
        <PriceFilter maxPrice={maxPrice} onFilter={handlePriceFilter} />
      </div>
    </div>
  );
}
