import * as React from 'react';
import { hot } from 'react-hot-loader';


function MainWindow (props: {}) {
  return (
    <h1>Hello, world! asdfasdfasdf aefawefaw</h1>
  );
}


const HotMainWindow = hot(module)(MainWindow);


export { HotMainWindow as MainWindow };
