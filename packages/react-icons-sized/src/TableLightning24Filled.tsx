import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.52a6.47 6.47 0 01-.85-5H9.5v5zM21 9.5v2.52a6.47 6.47 0 00-5-.85V9.5h5zm-6.5 0v2.23a6.53 6.53 0 00-2.77 2.77H9.5v-5h5zM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5zm-6.5-5h-5v5h5V3zM8 3H6.25A3.25 3.25 0 003 6.25V8h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3zm20 1.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM18.53 14H17.1a.5.5 0 00-.47.32l-1.13 3a.5.5 0 00.47.68h.78l-.77 2.32a.52.52 0 00.92.44l2.63-4.03a.47.47 0 00-.4-.73h-.63l.5-1.32a.5.5 0 00-.47-.68z" fill={primaryFill} /></svg>;
}

const TableLightning24Filled = wrapIcon(rawSvg({}), 'TableLightning24Filled');
export default TableLightning24Filled;
      