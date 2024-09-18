const ColorPicker = ({ onChange }) => {
  console.log(onChange);

  return (
    <div className="colorPicker">
      <input type="color" onChange={onChange}></input>
    </div>
  );
};

export default ColorPicker;
