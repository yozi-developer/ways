import { StoreState } from "src/redux/configureStore";
import { useSelector } from "react-redux";
import React, { FC } from "react";
import { createSelector } from "reselect";
import { locations } from "src/redux/modules";

interface HeaderProps {
  className?: string;
}

const selectLocation = createSelector(
  (state: StoreState) => ({ locations, locationKey: state.player.locationKey }),
  ({ locations, locationKey }) => locations[locationKey]
);

const Header: FC<HeaderProps> = (props) => {
  const day = useSelector((state: StoreState) => state.world.day);
  const location = useSelector(selectLocation);
  return (
    <header className={props.className}>
      <div>День: {day}</div>
      <div>Место: {location.name}</div>
    </header>
  );
};
export default Header;
