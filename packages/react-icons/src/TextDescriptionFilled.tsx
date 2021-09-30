import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2.75 7.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2 11.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 13.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z" fill={primaryFill} /></svg>;
}

const TextDescriptionFilled = wrapIcon(rawSvg({}), 'TextDescriptionFilled');
export default TextDescriptionFilled;
      