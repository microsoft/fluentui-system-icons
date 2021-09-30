import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 1C3.78 1 3 1.78 3 2.75v10.5c0 .97.78 1.75 1.75 1.75h2.5a5.5 5.5 0 01-.65-1H4.75a.75.75 0 01-.75-.75V2.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v3.27c.34.03.68.1 1 .19V2.75C13 1.78 12.22 1 11.25 1h-6.5zM7 8a1 1 0 11-2 0 1 1 0 012 0zm9 3.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L10.71 12h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const DoorArrowLeft16Regular = wrapIcon(rawSvg({}), 'DoorArrowLeft16Regular');
export default DoorArrowLeft16Regular;
      