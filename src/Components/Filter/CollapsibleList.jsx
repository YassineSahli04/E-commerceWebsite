import { useState } from 'react';

export default function CollapsibleList({ title, children, actionButton, defaultVisible }) {
  const [visible, setVisible] = useState(defaultVisible);

  return (
    <div className="pv4 bb b--black-10">
      <div className="flex items-start justify-between relative mb2">
        <button
          onClick={() => setVisible((visible) => !visible)}
          
          className={
            'btnFilter bn b pa0 tl w-100 bg-transparent hover-dark-blue' +
            (visible ? ' dark-blue' : '')
          }
        >
          {title}
        </button>
        <div className="absolute absolute-center-y right-0">{actionButton}</div>
      </div>
      {visible ? <ul className="list pa0 ma0">{children}</ul> : null}
    </div>
  );
}
