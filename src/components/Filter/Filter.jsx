import { memo } from 'react';
const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </div>
  );
};
export default memo(Filter);
