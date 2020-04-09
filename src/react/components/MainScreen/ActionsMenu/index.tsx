import React, { ReactElement, useCallback } from "react";
import { worldSlice } from "src/redux/modules/worldState";
import { connect } from "react-redux";
import { Locations } from "src/redux/modules/locations/types";
import { playerSlice } from "src/redux/modules/player";

interface ActionsMenuProps {
  className?: string;
}

const mapDispatchToProps = {
  incDay: () => worldSlice.actions.incDay(),
  setLocation: (locationKey: Locations) =>
    playerSlice.actions.setLocation({ locationKey }),
};

interface ActionsMenuProps {
  incDay: () => void;
  setLocation: (location: Locations) => void;
}
export const ActionsMenu = (props: ActionsMenuProps): ReactElement => {
  const { incDay, setLocation } = props;
  const onQuitFromHome = useCallback(() => setLocation(Locations.DownTown), [
    setLocation,
  ]);
  return (
    <ul className={props.className}>
      <li>
        <button onClick={onQuitFromHome}>Выйти из дома</button>
      </li>
      <li>
        <button onClick={incDay}>Закончить день</button>
      </li>
    </ul>
  );
};

export default connect(null, mapDispatchToProps)(ActionsMenu);
