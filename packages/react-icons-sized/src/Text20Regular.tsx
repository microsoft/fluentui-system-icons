import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v2a.5.5 0 01-1 0V4h-4v12h1.5a.5.5 0 010 1h-4a.5.5 0 010-1H9V4H5v1.5a.5.5 0 01-1 0v-2z" fill={primaryFill} /></svg>;
}

const Text20Regular = wrapIcon(rawSvg({}), 'Text20Regular');
export default Text20Regular;
      