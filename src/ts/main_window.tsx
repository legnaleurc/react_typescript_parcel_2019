import * as React from 'react';
import { hot } from 'react-hot-loader/root';


function MainWindow (props: {}) {
  return (
    <h1>Hello, world!</h1>
  );
}


const HotMainWindow = hot(MainWindow);


export { HotMainWindow as MainWindow };
