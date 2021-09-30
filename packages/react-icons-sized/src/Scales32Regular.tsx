import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a1 1 0 011-1h22a1 1 0 110 2h-1.43l3.37 9.15a1 1 0 01.06.35c0 2.58-1.92 4.5-4.5 4.5a4.39 4.39 0 01-4.5-4.5 1 1 0 01.06-.35L23.43 6H17v16h6a3 3 0 110 6H9a3 3 0 010-6h6V6H8.44l3.5 9.14a1 1 0 01.06.36c0 2.58-1.92 4.5-4.5 4.5A4.39 4.39 0 013 15.5a1 1 0 01.07-.36L6.56 6H5a1 1 0 01-1-1zm4 20a1 1 0 001 1h14a1 1 0 100-2H9a1 1 0 00-1 1zM7.5 9.14L5.45 14.5h4.1L7.5 9.14zm2.32 7.36H5.18c.35.92 1.21 1.5 2.32 1.5 1.1 0 1.97-.58 2.32-1.5zM24.5 18c1.1 0 1.97-.58 2.32-1.5h-4.64c.35.92 1.21 1.5 2.32 1.5zm-2.07-3.5h4.14L24.5 8.9l-2.07 5.6z" fill={primaryFill} /></svg>;
}

const Scales32Regular = wrapIcon(rawSvg({}), 'Scales32Regular');
export default Scales32Regular;
      