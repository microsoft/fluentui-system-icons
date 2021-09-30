import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 7a.75.75 0 01.11 1.5H7a3.5 3.5 0 00-.2 7h2.45a.75.75 0 01.11 1.5H7a5 5 0 01-.25-10h2.5zM17 7a5 5 0 01.25 10h-2.5a.75.75 0 01-.11-1.5H17a3.5 3.5 0 00.2-7h-2.45a.75.75 0 01-.11-1.5H17zM7 11.25h10a.75.75 0 01.1 1.5H7a.75.75 0 01-.1-1.5H17 7z" fill={primaryFill} /></svg>;
}

const Link24Regular = wrapIcon(rawSvg({}), 'Link24Regular');
export default Link24Regular;
      