import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.13 2.8A3.9 3.9 0 018.5 2a.9.9 0 01.54.21c.13.1.24.22.35.35.07.09.11.2.11.32V6.5H8.41a1.5 1.5 0 100 1H9.5v9.42a.5.5 0 01-.18.38c-.47.38-1.08.7-1.82.7-1.19 0-2.07-.6-2.64-1.31a4.06 4.06 0 01-.82-1.76c-.33-.08-.7-.25-1.05-.55A3 3 0 012 12c0-.56.04-1.06.12-1.5h3.13c.64 0 1.16.47 1.24 1.09a1.5 1.5 0 101 0A2.25 2.25 0 005.25 9.5h-2.8a1.9 1.9 0 01.83-.85c-.29-.83-.21-1.8.06-2.57.18-.49.45-.96.84-1.27.25-.2.55-.34.88-.36.14-.68.55-1.25 1.07-1.66zm4.37 11.7h.75c1.24 0 2.25-1 2.25-2.25v-1.84a1.5 1.5 0 10-1 0v1.84c0 .69-.56 1.25-1.25 1.25h-.75V2.88a.5.5 0 01.11-.32c.1-.13.22-.25.35-.35A.9.9 0 0111.5 2c.85 0 1.71.28 2.37.8.52.4.93.97 1.07 1.65.33.02.63.16.88.36.39.31.66.78.84 1.27.27.77.35 1.74.06 2.57l.21.12c.28.19.49.45.64.76.3.6.43 1.44.43 2.47a3 3 0 01-.99 2.38c-.34.3-.72.47-1.05.55-.1.56-.38 1.2-.82 1.76A3.34 3.34 0 0112.5 18c-.74 0-1.35-.32-1.82-.7a.5.5 0 01-.18-.38V14.5zM7 6.5a.5.5 0 100 1 .5.5 0 000-1zm0 6a.5.5 0 100 1 .5.5 0 000-1zm6-3a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const BrainCircuitFilled = wrapIcon(rawSvg({}), 'BrainCircuitFilled');
export default BrainCircuitFilled;
      