const SelectorLabel = ({ message, array, condition, alternative, changeHandler }) => {
  return (
    <>
      <dt>{message}</dt>
      <dd>
        <select onChange={changeHandler}>
          {
            condition
              ? array.map(ele => <option key={ele} value={ele}>{ele}</option>)
              : <option>{alternative}</option>
          }
        </select>
      </dd>
    </>
  );
};

export default SelectorLabel
