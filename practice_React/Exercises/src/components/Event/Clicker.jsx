const Clicker = (chill) => {
  const addEventLisener = () => {
    alert(chill.message);
  };
  return (
    <>
      <button onClick={addEventLisener}>Please Click Here</button>
    </>
  );
};

export default Clicker;

