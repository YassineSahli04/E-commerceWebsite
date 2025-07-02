export default function FilterToggle(props) {
  const { visible, active, onClear, onApply } = props;

  if (active) {
    return (
      <button onClick={onClear} className="btn ph3 pv1 br3 f6 ba b--moon-gray">
        Clear filter
      </button>
    );
  }

  if (visible) {
    return (
      <button onClick={onApply} className="btn ph3 pv1 br3 f6 ba b--moon-gray">
        Apply filter
      </button>
    );
  }

  return null;
}
