import React, { FC } from "react";
import { StoreState } from "../../../../redux/configureStore";
import { incDay } from "../../../../redux/modules/worldState/actions";
import { connect } from "react-redux";

interface OwnProps {
  className?: string;
}
const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  return {};
};

const mapDispatchToProps = { incDay };
type Actions = typeof mapDispatchToProps;
interface ActionsMenuProps extends OwnProps, Actions {}

export const ActionsMenu: FC<ActionsMenuProps> = props => {
  return (
    <ul className={props.className}>
      <li>
        <button onClick={() => alert("Not implemented")}>Выйти из дома</button>
      </li>
      <li>
        <button onClick={props.incDay}>Закончить день</button>
      </li>
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionsMenu);
