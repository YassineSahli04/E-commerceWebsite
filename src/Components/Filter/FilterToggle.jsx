export default function FilterToggle(props) {
  const { visible, active, onClear, onApply } = props;

  if (active) {
    return (
      <button onClick={onClear} className="btnFilter ph3 pv1 br3 f6 ba b--moon-gray">
        Clear
      </button>
    );
  }

  if (visible) {
    return (
      <button onClick={onApply} className="btnFilter ph3 pv1 br3 f6 ba b--moon-gray">
        Apply
      </button>
    );
  }

  return null;
}
