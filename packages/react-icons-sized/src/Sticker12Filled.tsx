import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1h6a2 2 0 012 2v3H8a2 2 0 00-1.71.96.92.92 0 01-.3.05c-.31 0-.57-.16-.76-.35a1.79 1.79 0 01-.28-.37.5.5 0 00-.9.44v.01l.01.02a1.78 1.78 0 00.12.18c.07.12.19.27.34.42.3.3.8.65 1.48.65V11H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm1.5 4a.5.5 0 100-1 .5.5 0 000 1zm3 0a.5.5 0 100-1 .5.5 0 000 1zM11 7H8a1 1 0 00-1 1v3h.5a.5.5 0 00.35-.15l3-3A.5.5 0 0011 7.5V7z" fill={primaryFill} /></svg>;
}

const Sticker12Filled = wrapIcon(rawSvg({}), 'Sticker12Filled');
export default Sticker12Filled;
      