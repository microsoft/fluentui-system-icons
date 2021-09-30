import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 9.97v10.28c0 .97-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V11.8A6.47 6.47 0 0022 9.97zM10.02 6a6.63 6.63 0 001.22 4.32v11.66L11 22H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27zm-.78 11.5h-1.6a.75.75 0 000 1.5H9.34a.75.75 0 000-1.5h-.1zm7 0h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1 2a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h3a.5.5 0 000-1H16V3.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const DualScreenClock24Filled = wrapIcon(rawSvg({}), 'DualScreenClock24Filled');
export default DualScreenClock24Filled;
      