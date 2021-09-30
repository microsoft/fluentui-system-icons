import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h2a.5.5 0 000-1h-2zm4 0a.5.5 0 000 1h2a.5.5 0 000-1h-2zm4 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9.85 4.15a.5.5 0 00-.7 0l-4.5 4.5a.5.5 0 10.7.7L9 5.71v9.79a.5.5 0 001 0V5.7l3.65 3.65a.5.5 0 00.7-.7l-4.5-4.5zM3.5 17a.5.5 0 000 1h12a.5.5 0 000-1h-12z" fill={primaryFill} /></svg>;
}

const PaddingTop20Regular = wrapIcon(rawSvg({}), 'PaddingTop20Regular');
export default PaddingTop20Regular;
      