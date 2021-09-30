import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.49 19.82c.12-.47.36-.9.7-1.25l5.9-5.9a2.27 2.27 0 013.24 0c.9.9.9 2.34 0 3.23l-5.9 5.9c-.35.35-.78.6-1.25.7l-1.83.47c-.8.2-1.52-.53-1.32-1.32l.46-1.83zm-3 1.18h1.67l.36-1.42c.16-.65.5-1.24.97-1.72L14.35 16H9.5v5zM16 9.5v4.85l2.4-2.39a3.28 3.28 0 012.6-.95V9.5h-5zM21 8V6.25C21 4.45 19.55 3 17.76 3H16v5h5zm-6.5-5h-5v5h5V3zM8 3H6.25A3.25 3.25 0 003 6.25V8h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.45 21 6.25 21H8v-5H3zm11.5-6.5v5h-5v-5h5z" fill={primaryFill} /></svg>;
}

const TableEdit24Filled = wrapIcon(rawSvg({}), 'TableEdit24Filled');
export default TableEdit24Filled;
      