import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 6.68A.75.75 0 017 6h3.25a.75.75 0 010 1.5H7.68l-.1 1.13.44-.06a2.85 2.85 0 11.36 5.68c-.75 0-1.5-.3-2.03-.84l-.38-.38a.75.75 0 111.06-1.06l.38.38a1.36 1.36 0 002.34-.95c0-.82-.72-1.45-1.53-1.34l-1.37.18a.75.75 0 01-.85-.8l.25-2.76zM5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm8.28-3.28a.75.75 0 10-1.06 1.06l.72.72-.72.72a.75.75 0 101.06 1.06l.72-.72.72.72a.75.75 0 101.06-1.06l-.72-.72.72-.72a.75.75 0 10-1.06-1.06l-.72.72-.72-.72z" fill={primaryFill} /></svg>;
}

const Multiplier5X20Filled = wrapIcon(rawSvg({}), 'Multiplier5X20Filled');
export default Multiplier5X20Filled;
      