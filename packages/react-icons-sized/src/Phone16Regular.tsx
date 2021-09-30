import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12a.5.5 0 000 1h2a.5.5 0 000-1H7zM5.75 1C4.78 1 4 1.78 4 2.75v10.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75V2.75C12 1.78 11.22 1 10.25 1h-4.5zM5 2.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75h-4.5a.75.75 0 01-.75-.75V2.75z" fill={primaryFill} /></svg>;
}

const Phone16Regular = wrapIcon(rawSvg({}), 'Phone16Regular');
export default Phone16Regular;
      