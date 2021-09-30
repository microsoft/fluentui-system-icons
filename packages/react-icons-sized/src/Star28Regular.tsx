import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.7 3.9a1.45 1.45 0 012.6 0L18 9.37l6.01.88a1.45 1.45 0 01.8 2.47l-4.35 4.24 1.03 6a1.45 1.45 0 01-2.1 1.52L14 21.64l-5.38 2.83a1.45 1.45 0 01-2.1-1.52l1.02-6-4.35-4.24c-.86-.84-.39-2.3.8-2.47l6.02-.88 2.7-5.45zm1.3.76l-2.66 5.39c-.2.43-.62.72-1.09.8l-5.94.86 4.3 4.19c.34.33.5.81.42 1.28L8 23.1l5.32-2.8c.42-.22.92-.22 1.35 0l5.31 2.8-1.01-5.92c-.08-.47.07-.95.41-1.28l4.3-4.2-5.94-.86a1.45 1.45 0 01-1.1-.8L14 4.67z" fill={primaryFill} /></svg>;
}

const Star28Regular = wrapIcon(rawSvg({}), 'Star28Regular');
export default Star28Regular;
      