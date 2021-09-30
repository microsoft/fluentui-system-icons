import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5a3.5 3.5 0 114.49 3.36 5.5 5.5 0 005.26 3.89h.33a3.5 3.5 0 110 1.5h-.33a6.99 6.99 0 01-5.5-2.67v3.5a3.5 3.5 0 11-1.5 0V8.92A3.5 3.5 0 014 5.5zm3.5-2a2 2 0 100 4 2 2 0 000-4zm0 13a2 2 0 100 4 2 2 0 000-4zm8-3a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /></svg>;
}

const Branch24Regular = wrapIcon(rawSvg({}), 'Branch24Regular');
export default Branch24Regular;
      