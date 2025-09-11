import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';


main()

function main() {
    const rootDiv = document.createElement('div');
    document.body.append(rootDiv);

    ReactDOM.render(<App />, rootDiv);
}

