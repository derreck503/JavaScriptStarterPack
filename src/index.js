import numeral from 'numeral';
import './index.css';

const courseVal = numeral(1000).format('$0,0.00');
//debugger;
//we use 'backticks' = `` to tell javascript to parse variables
console.log(`I would pay ${courseVal} for this awesome course!`); // eslint-disable-line no-console