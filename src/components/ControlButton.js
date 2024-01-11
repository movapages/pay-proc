const ControlButton = (props) => {
  const { isButtonDisabled, setShowMainView } = props;

  const buttonClass = (isButtonDisabled ? 'bg-gray-200 text-gray-700' : 'bg-green-500 text-white');

  return (
    <div className="mt-16 w-3/4 flex flex-row justify-end">
      <button
        className={[buttonClass, 'py-2 px-6 rounded'].join(' ')}
        disabled={isButtonDisabled} onClick={() => setShowMainView(false)}>
        Order review
      </button>
    </div>
  );
};

export default ControlButton;