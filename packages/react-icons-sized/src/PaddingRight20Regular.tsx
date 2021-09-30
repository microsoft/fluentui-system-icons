import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.85 9.85a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7.7L14.29 9H4.5a.5.5 0 000 1h9.8l-3.65 3.65a.5.5 0 00.7.7l4.5-4.5zM3 3.5a.5.5 0 00-1 0v12a.5.5 0 001 0v-12zm15 0a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm0 3a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm0 4a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm0 4a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" fill={primaryFill} /></svg>;
}

const PaddingRight20Regular = wrapIcon(rawSvg({}), 'PaddingRight20Regular');
export default PaddingRight20Regular;
      