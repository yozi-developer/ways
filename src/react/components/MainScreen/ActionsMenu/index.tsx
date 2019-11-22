import React, { FC, useCallback } from "react";
import { incDay } from "../../../../redux/modules/worldState/actions";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../../redux/modules/player/actions";
import { Locations } from "../../../../redux/modules/locations/types";

interface ActionsMenuProps {
  className?: string;
}

const ActionsMenu: FC<ActionsMenuProps> = props => {
  const dispatch = useDispatch();
  const onIncDay = useCallback(() => dispatch(incDay()), [dispatch]);
  const onQuitFromHome = useCallback(
    () => dispatch(setLocation(Locations.DownTown)),
    [dispatch]
  );
  return (
    <ul className={props.className}>
      <li>
        <button onClick={onQuitFromHome}>Выйти из дома</button>
      </li>
      <li>
        <button onClick={onIncDay}>Закончить день</button>
      </li>
    </ul>
  );
};

export default ActionsMenu;
