import React, {PropTypes} from 'react';
import '../../styles/css/Cell.css';

let Cell = (props) => {
    let class_name="c-cell--"+(props.alive ? "alive" : "dead");
    return (
      <td className={class_name}>
      </td>
    );
}


export default Cell;
