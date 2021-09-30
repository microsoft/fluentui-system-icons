import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.16 1.03c.26.08.4.37.31.63l-.5 1.5a.5.5 0 01-.94-.32l.5-1.5a.5.5 0 01.63-.31zm3.7 1.82a.5.5 0 10-.71-.7l-2 2a.5.5 0 00.7.7l2-2zm-10.25.3a2 2 0 013.26-.52l6.58 6.98a2 2 0 01-.64 3.2l-3.94 1.74a3.5 3.5 0 01-6.34 2.8l-1.2.52a1.5 1.5 0 01-1.67-.3l-1.22-1.22a1.5 1.5 0 01-.3-1.7l5.47-11.5zm-.16 13.78a2.5 2.5 0 004.5-1.97l-4.5 1.97zm2.7-13.61a1 1 0 00-1.64.25l-5.46 11.5a.5.5 0 00.1.57l1.22 1.21a.5.5 0 00.55.1L16.4 11.9a1 1 0 00.33-1.6l-6.59-6.98zM17 6a.5.5 0 000 1h1.5a.5.5 0 100-1H17z" fill={primaryFill} /></svg>;
}

const MegaphoneLoudRegular = wrapIcon(rawSvg({}), 'MegaphoneLoudRegular');
export default MegaphoneLoudRegular;
      