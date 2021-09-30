import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 10c1.63 0 3.16.65 4.28 1.8a.75.75 0 11-1.07 1.04 4.48 4.48 0 00-6.43.01.75.75 0 11-1.07-1.05A5.98 5.98 0 0112 13.5zM7.16 6.78c.24-.3.65-.36.97-.18l.09.06 2.5 2a.75.75 0 01-.47 1.34 1.25 1.25 0 11-1.71-1.16l-1.26-1a.75.75 0 01-.12-1.06zm6.12 1.88l2.5-2a.75.75 0 011.02 1.1l-.08.08-1.26 1a1.25 1.25 0 11-1.7 1.29V10a.75.75 0 01-.55-1.26l.07-.08 2.5-2-2.5 2z" fill={primaryFill} /></svg>;
}

const EmojiAngry24Regular = wrapIcon(rawSvg({}), 'EmojiAngry24Regular');
export default EmojiAngry24Regular;
      