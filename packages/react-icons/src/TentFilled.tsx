import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.4 2.82a.5.5 0 00-.77 0 20.89 20.89 0 01-4.91 3.9.5.5 0 00-.25.36L3.37 15H2.5a.5.5 0 000 1h3.94a.5.5 0 00.1.01h6.9a.5.5 0 00.1-.01h3.96a.5.5 0 000-1h-.84l-1.1-7.92a.5.5 0 00-.24-.36 20.89 20.89 0 01-4.92-3.9zM7.51 15c.84-1.22 1.7-2.79 2.49-5.26.7 2.23 1.5 3.78 2.49 5.26H7.5z" fill={primaryFill} /></svg>;
}

const TentFilled = wrapIcon(rawSvg({}), 'TentFilled');
export default TentFilled;
      