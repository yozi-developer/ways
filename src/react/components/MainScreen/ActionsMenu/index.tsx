import React, { FC, useCallback } from "react";
import { incDay } from "../../../../redux/modules/worldState/actions";
import { useDispatch } from "react-redux";

interface ActionsMenuProps {
  className?: string;
}

const ActionsMenu: FC<ActionsMenuProps> = props => {
  const dispatch = useDispatch();
  const onIncDay = useCallback(() => dispatch(incDay()), [dispatch]);
  return (
    <ul className={props.className}>
      <li>
        <button onClick={() => alert("Not implemented")}>Выйти из дома</button>
      </li>
      <li>
        <button onClick={onIncDay}>Закончить день</button>
      </li>
    </ul>
  );
};

export default ActionsMenu;
