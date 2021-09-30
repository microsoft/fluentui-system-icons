import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 7a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11.13 2a2 2 0 00-1.43.58L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.83 0l6.63-6.63A2 2 0 0018 8.98V4.03a2 2 0 00-1.99-2L11.12 2zm-.72 1.3a1 1 0 01.71-.3l4.9.03a1 1 0 01.99 1v4.95a1 1 0 01-.29.7l-6.63 6.64a1 1 0 01-1.41 0l-4.95-4.95a1 1 0 010-1.41l6.68-6.67z" fill={primaryFill} /></svg>;
}

const TagRegular = wrapIcon(rawSvg({}), 'TagRegular');
export default TagRegular;
      