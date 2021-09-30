import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3.75 8a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3 11.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.75 14a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
}

const TextColumnOneWideFilled = wrapIcon(rawSvg({}), 'TextColumnOneWideFilled');
export default TextColumnOneWideFilled;
      