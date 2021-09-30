import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a.5.5 0 000 1h4a.5.5 0 000-1H6zm0 3a.5.5 0 000 1h4a.5.5 0 000-1H6zm0 3a.5.5 0 000 1h.5a.5.5 0 000-1H6zM5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 011 0V2h2v-.5a.5.5 0 011 0V2c.83 0 1.5.67 1.5 1.5v6.59c0 .4-.16.78-.44 1.06l-3.41 3.41a1.5 1.5 0 01-1.06.44H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5zm6.5 2h-7a.5.5 0 00-.5.5v10c0 .28.22.5.5.5H8v-2.5c0-.83.67-1.5 1.5-1.5H12V3.5a.5.5 0 00-.5-.5zM9 13.3l2.3-2.3H9.5a.5.5 0 00-.5.5v1.8z" fill={primaryFill} /></svg>;
}

const Notepad16Regular = wrapIcon(rawSvg({}), 'Notepad16Regular');
export default Notepad16Regular;
      