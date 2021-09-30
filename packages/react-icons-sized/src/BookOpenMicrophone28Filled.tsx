import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4c.98 0 1.86.4 2.5 1.05A3.49 3.49 0 0116.5 4H24a2 2 0 012 2v10.5a4 4 0 00-2-3.46V6h-7.5c-.83 0-1.5.67-1.5 1.5v13c0 .56.3 1.04.75 1.3.24.81.62 1.55 1.13 2.2h-.38c-.98 0-1.86-.4-2.5-1.05A3.49 3.49 0 0111.5 24H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h7.5zM13 20.5v-13c0-.83-.67-1.5-1.5-1.5H4v16h7.5c.83 0 1.5-.67 1.5-1.5zm4.42 1.5a4.98 4.98 0 01-.42-2 .5.5 0 011 0 3.98 3.98 0 003.59 3.98 4.05 4.05 0 00.81 0h.01l.19-.02A4 4 0 0026 20a.5.5 0 011 0 5 5 0 01-4.5 5v1.5a.5.5 0 01-1 0V25v-.02A4.97 4.97 0 0117.42 22zm4.58.5a2.49 2.49 0 002.5-2.5v-3.5A2.49 2.49 0 0022 14a2.5 2.5 0 00-2.5 2.5V20a2.5 2.5 0 002.5 2.5z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone28Filled = wrapIcon(rawSvg({}), 'BookOpenMicrophone28Filled');
export default BookOpenMicrophone28Filled;
      