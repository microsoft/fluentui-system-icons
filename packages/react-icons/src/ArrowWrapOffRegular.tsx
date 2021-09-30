import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.17 1.18A.5.5 0 003.5 5h.8l4 4H6a3 3 0 100 6h8.3l1.35 1.35 1.5 1.5a.5.5 0 00.7-.7l-15-15zM13.3 14H6a2 2 0 110-4h3.3l4 4zM14 9h-2.88l1 1H14a3 3 0 100-6H6.12l1 1H14a2 2 0 110 4zm3.41 6.3L16.12 14h.17l-.64-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-.44.44z" fill={primaryFill} /></svg>;
}

const ArrowWrapOffRegular = wrapIcon(rawSvg({}), 'ArrowWrapOffRegular');
export default ArrowWrapOffRegular;
      