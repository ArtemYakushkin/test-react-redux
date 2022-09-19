import { Button } from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { getStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/actons";

export const StatusFilter = () => {

  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const handleFilterChange = filter =>
    dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
      <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
      <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};