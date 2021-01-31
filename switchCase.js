// switch case

let athleteFinalPosition;
athleteFinalPosition = 'second place';

switch (athleteFinalPosition) { // must place the normal brackets and the curly brackets
  case('first place'):
    console.log('You get the gold medal!');
    break;
  case('second place'):
    console.log('You get the silver medal!');
    break;
  case('third place'):
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
