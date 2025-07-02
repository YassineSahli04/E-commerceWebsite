import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import CollapsibleList from './CollapsibleList';
import FilterToggle from './FilterToggle';

export default function PriceFilter({ maxPrice, onFilter }) {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([0, maxPrice]);
  const [filterActive, setFilterActive] = useState(false);

  const onApplyFilter = () => {
    setFilterActive(true);
    onFilter({ minPrice: values[0], maxPrice: values[1] });
  };

  const onClearFilter = () => {
    setFilterActive(false);
    setValues([0, maxPrice]);
    onFilter({ minPrice: null, maxPrice: null }); 
  };

  return (
    <CollapsibleList
      title="Price"
      actionButton={
        <FilterToggle
          visible={visible}
          active={filterActive}
          onApply={onApplyFilter}
          onClear={onClearFilter}
        />
      }
    >
      <li>
        <div className="mv2">
          <div className="flex">
            <div className="flex-auto">
              <div className="flex mb2 justify-center fw5">
                ${values[0]} - ${values[1]}
              </div>
              <Slider.Root
                onValueChange={(newValues) => {
                  setValues([newValues[0], newValues[1]]);
                  setVisible(true);
                }}
                className="flex items-center relative mw-100 slider"
                value={values}
                min={0}
                max={maxPrice}
                step={50}
                minStepsBetweenThumbs={1}
              >
                <Slider.Track className="slider__track bg-moon-gray relative flex-auto">
                  <Slider.Range className="slider__range bg-light-purple" />
                </Slider.Track>
                <Slider.Thumb className="slider__thumb db w1 h1 bg-white br-100" />
                <Slider.Thumb className="slider__thumb db w1 h1 bg-white br-100" />
              </Slider.Root>
            </div>
          </div>
        </div>
      </li>
    </CollapsibleList>
  );
}
