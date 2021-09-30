import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.03a2 2 0 00-1.98-2L11.12 2a2 2 0 00-1.42.59L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.83 0l6.63-6.63A2 2 0 0018 8.98V4.03zM14 7a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const TagFilled = wrapIcon(rawSvg({}), 'TagFilled');
export default TagFilled;
      