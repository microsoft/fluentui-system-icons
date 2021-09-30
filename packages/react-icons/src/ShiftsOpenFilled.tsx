import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 000-1.5H5.75A2.75 2.75 0 003 5.75v8.5A2.75 2.75 0 005.75 17H7.5a.75.75 0 000-1.5H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5z" fill={primaryFill} /><path d="M12.5 3a.75.75 0 000 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 000 1.5h1.75A2.75 2.75 0 0017 14.25v-8.5A2.75 2.75 0 0014.25 3H12.5z" fill={primaryFill} /><path d="M10.5 5.75a.75.75 0 00-1.5 0v4.5c0 .41.34.75.75.75h3.5a.75.75 0 000-1.5H10.5V5.75z" fill={primaryFill} /></svg>;
}

const ShiftsOpenFilled = wrapIcon(rawSvg({}), 'ShiftsOpenFilled');
export default ShiftsOpenFilled;
      