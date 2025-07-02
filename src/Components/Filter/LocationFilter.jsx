import CollapsibleList from './CollapsibleList';
import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import FilterToggle from './FilterToggle';
import { useSearchParams } from 'react-router-dom';

export default function LocationFilter({ availableLocations, onFilter }) {
  const [search, setSearch] = useSearchParams();
  const filteredLocations = search.get('locations')?.split(',') ?? [];
  const [locations, setLocations] = useState(filteredLocations);

  const onLocationChange = (location) => (checked) => {
    let locs = [...locations];
    if (checked) {
      locs.push(location);
    } else {
      locs = locs.filter((loc) => loc !== location);
    }
    setLocations(locs);
  };

  const hasFilters = filteredLocations.length > 0;

  return (
    <CollapsibleList
      defaultVisible={hasFilters}
      title="Location"
      actionButton={
        <FilterToggle
          visible={locations.length > 0}
          active={hasFilters}
          onApply={() => {
            search.set('locations', locations.join(','));
            setSearch(search, { replace: true });
            onFilter(locations);
          }}
          onClear={() => {
            search.delete('locations');
            setLocations([]);
            setSearch(search, { replace: true });
            onFilter([]);
          }}
        />
      }
    >
      {availableLocations
        .filter((loc) => {
          if (filteredLocations.length === 0) return true;
          return filteredLocations.includes(loc);
        })
        .map((value, index) => (
          <li key={index} className="pv2">
            <div className="flex items-center">
              <Checkbox.Root
                id={value}
                name={value}
                disabled={hasFilters}
                onCheckedChange={onLocationChange(value)}
                checked={locations.includes(value)}
                className="checkbox lh-solid flex items-center justify-center pa0 bg-white w125 h125 br2 bn"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="checkbox__icon w125 h125" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor={value} className="ml3 fw5 f5">
                {value}
              </label>
            </div>
          </li>
        ))}
    </CollapsibleList>
  );
}
