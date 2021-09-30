import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-4.25 7.75h8.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6-8.5z" fill={primaryFill} /></svg>;
}

const Block24Regular = wrapIcon(rawSvg({}), 'Block24Regular');
export default Block24Regular;
      