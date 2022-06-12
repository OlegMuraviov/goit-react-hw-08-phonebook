import { memo } from 'react';
const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <label htmlFor="filter">Пошук контакту по імені: </label>
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </div>
  );
};
export default memo(Filter);
