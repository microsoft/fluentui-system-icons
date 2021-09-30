import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4c.28 0 .5.22.5.5V9H8V4.5c0-.28.22-.5.5-.5zM6.87 9c.1-.5.13-1.02.13-1.5a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h3.49c-.02.34-.07.67-.14 1h1.02zm4.39 0l.24-3.53a.5.5 0 111 .06L12.26 9h-1zM17 9V4.5a.5.5 0 011 0V9h-1zm1.5 1h-17a.5.5 0 000 1h3.26c-.53.47-1.27.84-2.34 1a.5.5 0 00.16 1c1.7-.27 2.82-1.01 3.5-2H8v5.5a.5.5 0 001 0V11h2.12L11 12.72a.5.5 0 00.53.53l4.25-.25a.5.5 0 00-.06-1l-3.68.22.08-1.22H17v5.5a.5.5 0 001 0V11h.5a.5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const StrikethroughGaNaRegular = wrapIcon(rawSvg({}), 'StrikethroughGaNaRegular');
export default StrikethroughGaNaRegular;
      