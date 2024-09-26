const ColorPicker = ({ onChange }) => {
  console.log(onChange);

  return (
    <div className="colorPicker">
      <input type="color" onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
