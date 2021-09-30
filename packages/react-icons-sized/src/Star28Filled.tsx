import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.7 3.9a1.45 1.45 0 012.6 0L18 9.37l6.01.88a1.45 1.45 0 01.8 2.47l-4.35 4.24 1.03 6a1.45 1.45 0 01-2.1 1.52L14 21.64l-5.38 2.83a1.45 1.45 0 01-2.1-1.52l1.02-6-4.35-4.24c-.86-.84-.39-2.3.8-2.47l6.02-.88 2.7-5.45z" fill={primaryFill} /></svg>;
}

const Star28Filled = wrapIcon(rawSvg({}), 'Star28Filled');
export default Star28Filled;
      