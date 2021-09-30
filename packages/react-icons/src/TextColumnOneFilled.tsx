import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M15 8.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M15 11.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M15 14.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnOneFilled = wrapIcon(rawSvg({}), 'TextColumnOneFilled');
export default TextColumnOneFilled;
      