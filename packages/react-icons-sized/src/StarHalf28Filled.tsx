import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.7 3.9c.27-.53.78-.8 1.3-.8s1.04.27 1.3.8L18 9.37l6.01.88a1.45 1.45 0 01.8 2.47l-4.35 4.24 1.03 6a1.45 1.45 0 01-2.1 1.52L14 21.64l-5.38 2.83a1.45 1.45 0 01-2.1-1.52l1.02-6-4.35-4.24c-.86-.84-.39-2.3.8-2.47l6.02-.88 2.7-5.45zM14 20.15c.23 0 .47.05.68.16l5.31 2.8-1.01-5.92c-.08-.47.07-.95.41-1.28l4.3-4.2-5.94-.86a1.45 1.45 0 01-1.1-.8L14 4.67v15.48z" fill={primaryFill} /></svg>;
}

const StarHalf28Filled = wrapIcon(rawSvg({}), 'StarHalf28Filled');
export default StarHalf28Filled;
      