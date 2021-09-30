import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2a6.47 6.47 0 00.57 7.76c-.8.16-1.66.24-2.59.24-3.42 0-5.94-1.07-7.49-3.24a2.75 2.75 0 01-.5-1.6v-.91C2 15 3 14 4.24 14h7.77zm2.83 3.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 00-.7-.7l-3.65 3.64-1.65-1.64zM10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const PersonAvailable24Filled = wrapIcon(rawSvg({}), 'PersonAvailable24Filled');
export default PersonAvailable24Filled;
      