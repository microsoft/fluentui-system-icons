import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4c.98 0 1.86.4 2.5 1.05A3.49 3.49 0 0116.5 4H24a2 2 0 012 2v16a2 2 0 01-2 2h-7.5c-.98 0-1.86-.4-2.5-1.05A3.49 3.49 0 0111.5 24H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h7.5zM13 20.5v-13c0-.83-.67-1.5-1.5-1.5H4v16h7.5c.83 0 1.5-.67 1.5-1.5zm2-13v13c0 .83.67 1.5 1.5 1.5H24V6h-7.5c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const BookOpen28Filled = wrapIcon(rawSvg({}), 'BookOpen28Filled');
export default BookOpen28Filled;
      