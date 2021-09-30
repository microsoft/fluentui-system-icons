import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8a6 6 0 10-5.75 6 4.47 4.47 0 01-.22-1H8a5 5 0 115-5v.03c.34.04.68.11 1 .22V8zm-5.42 2.28a.75.75 0 10-.47 1.21c.1-.43.26-.84.47-1.21zM8.5 4.91A.5.5 0 007.5 5v3.59a.5.5 0 001-.09V4.91zm.56 7.22a2 2 0 001.4-2.43v-.04c.25-.17.52-.32.8-.43a2 2 0 002.56.02c.3.13.59.3.84.5a2 2 0 001.3 2.2 3.52 3.52 0 01.03.9l-.03.02a2 2 0 00-1.4 2.43v.04a3.5 3.5 0 01-.8.43 2 2 0 00-2.56-.02 3.5 3.5 0 01-.84-.5 2 2 0 00-1.3-2.2 3.52 3.52 0 01-.03-.9l.03-.02zm4.2.37a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const ErrorCircleSettings16Regular = wrapIcon(rawSvg({}), 'ErrorCircleSettings16Regular');
export default ErrorCircleSettings16Regular;
      