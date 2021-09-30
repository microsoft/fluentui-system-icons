import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 011 0V2h2v-.5a.5.5 0 011 0V2c.83 0 1.5.67 1.5 1.5V10H9.5c-.83 0-1.5.67-1.5 1.5V15H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5zm.5 4.5c0 .28.22.5.5.5h4a.5.5 0 000-1H6a.5.5 0 00-.5.5zm0 3c0 .28.22.5.5.5h4a.5.5 0 000-1H6a.5.5 0 00-.5.5zm0 3c0 .28.22.5.5.5h.5a.5.5 0 000-1H6a.5.5 0 00-.5.5zM9 14.69l.15-.13 3.41-3.41.13-.15H9.5a.5.5 0 00-.5.5v3.19z" fill={primaryFill} /></svg>;
}

const Notepad16Filled = wrapIcon(rawSvg({}), 'Notepad16Filled');
export default Notepad16Filled;
      