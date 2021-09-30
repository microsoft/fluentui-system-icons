import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 19.5a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M12.5 33.5a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M11.25 6A5.25 5.25 0 006 11.25v25.5C6 39.65 8.35 42 11.25 42h12.8A13 13 0 0142 24.04V11.25C41.99 8.35 39.64 6 36.74 6h-25.5zM10 21.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6.5-9.25c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 010 2.5h-14.5c-.69 0-1.25-.56-1.25-1.25zm-9.74-8.65h25.47a1.25 1.25 0 010 2.5H11.26a1.25 1.25 0 110-2.5z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
}

const FormNew48Filled = wrapIcon(rawSvg({}), 'FormNew48Filled');
export default FormNew48Filled;
      