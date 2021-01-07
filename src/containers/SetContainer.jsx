import React from 'react';
import Chevron from '../components/Chevron';
import Set from '../components/Set';


function SetContainer(props) {
  return (
    <div className='setContainer'>
      <Chevron key={props.node.identifier} identifier={props.node.identifier} />
      <Set key={props.node.identifier} set={props.node.slots} />
    </div>
  );
}

// class SetContainer extends Component {
//   render() {
//     return (
//       <div className='setContainer'>
//         <Chevron />
//         <Set />;
//       </div>
//     );
//   }
// }

export default SetContainer;