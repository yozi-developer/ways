import { StoreState } from "../../../../redux/configureStore";
import { connect } from "react-redux";
import React, { FC } from "react";

interface MappedState {
  day: number;
}
const mapStateToProps = (
  state: StoreState,
  ownProps: HeaderOwnProps
): MappedState => {
  return {
    day: state.worldState.day
  };
};

interface HeaderOwnProps {
  className?: string;
}
interface HeaderProps extends MappedState, HeaderOwnProps {}

export const Header: FC<HeaderProps> = props => {
  return (
    <header className={props.className}>
      <div>День: {props.day}</div>
    </header>
  );
};

export default connect(mapStateToProps)(Header);
