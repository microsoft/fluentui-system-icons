import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v1.7a3.5 3.5 0 10-5.45 4.3 2.5 2.5 0 00-1.86.86c-.4.45-.69 1.08-.69 1.76v.32a4 4 0 000 .06H4a2 2 0 01-2-2V6zm9.43 7.53c.27-.3.66-.53 1.12-.53h4.9c.46 0 .86.24 1.12.53.26.29.43.69.43 1.09v.32c0 1.63-1.63 3.06-4 3.06s-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1zM15 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /></svg>;
}

const ScreenPersonFilled = wrapIcon(rawSvg({}), 'ScreenPersonFilled');
export default ScreenPersonFilled;
      