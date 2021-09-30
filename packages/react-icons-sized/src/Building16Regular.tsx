import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5a.5.5 0 100-1 .5.5 0 000 1zM7 7a.5.5 0 11-1 0 .5.5 0 011 0zm-.5 3a.5.5 0 100-1 .5.5 0 000 1zM9 4.5a.5.5 0 11-1 0 .5.5 0 011 0zm-.5 3a.5.5 0 100-1 .5.5 0 000 1zm.5 2a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm-5-8C4.67 2 4 2.67 4 3.5v10c0 .28.22.5.5.5h8a.5.5 0 00.5-.5v-5c0-.83-.67-1.5-1.5-1.5H11V3.5c0-.83-.67-1.5-1.5-1.5h-4zM5 3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4c0 .28.22.5.5.5h1c.28 0 .5.22.5.5V13h-1v-1.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V13H5V3.5zm5 8.5v1H9v-1h1zm-2 0v1H7v-1h1z" fill={primaryFill} /></svg>;
}

const Building16Regular = wrapIcon(rawSvg({}), 'Building16Regular');
export default Building16Regular;
      