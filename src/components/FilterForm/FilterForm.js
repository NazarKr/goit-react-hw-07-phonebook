import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectorFilters } from 'redux/filter/filterSelector';

import { FilterContainer, FilterInput } from './FilterForm.styled';

export const FilterForm = () => {
  const filter = useSelector(selectorFilters);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };


  return (
    <FilterContainer>
      <FilterInput
        type="text"
        value={filter}
        placeholder="Search contact"
        onChange={handleFilter}
      />
    </FilterContainer>
  );
}
