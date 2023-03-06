import { useSelector, useDispatch } from 'react-redux';


import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { FilterContainer, FilterInput, FilterLabel } from './FilterForm.styled';

export const FilterForm = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  return (
    <FilterContainer>
      <FilterLabel>
          Find contacts by name
        <FilterInput type="text"
          placeholder="Search name"
          value={filter}
          onChange={handleFilter} />
        </FilterLabel>
    </FilterContainer>
  );
};