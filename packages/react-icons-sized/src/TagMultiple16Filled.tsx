import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 1.6L2.53 6.33a2 2 0 000 2.83l3.3 3.28c.8.78 2.07.78 2.85 0l4.7-4.65a2 2 0 00.58-1.4L14 3A2 2 0 0011.97 1l-3.26.01c-.53 0-1.04.22-1.42.59zm4.05 3.06c-.3.3-.79.3-1.09 0a.76.76 0 010-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08zM2 9.75a2 2 0 00.46 2.11l1.96 1.97a4 4 0 005.66 0l3.48-3.48c.28-.28.44-.67.44-1.06V8.5l-3.92 3.92-.21.2-.5.5a3 3 0 01-4.24 0l-.5-.5a4.08 4.08 0 01-.2-.2l-1.97-1.97A2 2 0 012 9.75z" fill={primaryFill} /></svg>;
}

const TagMultiple16Filled = wrapIcon(rawSvg({}), 'TagMultiple16Filled');
export default TagMultiple16Filled;
      