import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 12a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8zm-3 4a3 3 0 116 0 3 3 0 01-6 0zM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v1c0 .65-.42 1.2-1 1.41V11a7 7 0 11-14 0V6.91c-.58-.2-1-.76-1-1.41v-1zM4 7v4a6 6 0 1012 0V7H4zm-.5-3a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-13z" fill={primaryFill} /></svg>;
}

const CameraDome20Regular = wrapIcon(rawSvg({}), 'CameraDome20Regular');
export default CameraDome20Regular;
      