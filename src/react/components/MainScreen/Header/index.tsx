import { StoreState } from "../../../../redux/configureStore";
import { useSelector } from "react-redux";
import React, { FC } from "react";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = props => {
  const day = useSelector((state: StoreState) => state.worldState.day);
  return (
    <header className={props.className}>
      <div>День: {day}</div>
    </header>
  );
};
export default Header;
