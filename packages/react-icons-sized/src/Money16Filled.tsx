import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75v-5.5zm3 .25V4H3v.5a.5.5 0 01-.5.5H2v1h.5C3.33 6 4 5.33 4 4.5zM9 7a2 2 0 10-4 0 2 2 0 004 0zm2-3h-1v.5c0 .83.67 1.5 1.5 1.5h.5V5h-.5a.5.5 0 01-.5-.5V4zM4 9.5C4 8.67 3.33 8 2.5 8H2v1h.5c.28 0 .5.22.5.5v.5h1v-.5zm7 .5v-.5c0-.28.22-.5.5-.5h.5V8h-.5c-.83 0-1.5.67-1.5 1.5v.5h1z" fill={primaryFill} /><path d="M4.5 13a1.5 1.5 0 01-1.43-1.04c.14.03.28.04.43.04h8.25C12.99 12 14 11 14 9.75V5.09c.58.2 1 .76 1 1.41v3.25c0 1.8-1.46 3.25-3.25 3.25H4.5z" fill={primaryFill} /></svg>;
}

const Money16Filled = wrapIcon(rawSvg({}), 'Money16Filled');
export default Money16Filled;
      