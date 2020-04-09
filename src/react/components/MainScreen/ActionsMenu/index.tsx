import React, { ReactElement, useCallback } from "react";
import { connect } from "react-redux";
import { worldSlice, playerSlice, locationsTypes } from "src/redux/modules";

interface ActionsMenuProps {
  className?: string;
}

const mapDispatchToProps = {
  incDay: () => worldSlice.actions.incDay(),
  setLocation: (locationKey: locationsTypes.Locations) =>
    playerSlice.actions.setLocation({ locationKey }),
};

interface ActionsMenuProps {
  incDay: () => void;
  setLocation: (location: locationsTypes.Locations) => void;
}
export const ActionsMenu = (props: ActionsMenuProps): ReactElement => {
  const { incDay, setLocation } = props;
  const onQuitFromHome = useCallback(
    () => setLocation(locationsTypes.Locations.DownTown),
    [setLocation]
  );
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
