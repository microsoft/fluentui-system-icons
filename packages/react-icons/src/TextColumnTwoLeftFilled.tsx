import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 013 5.75z" fill={primaryFill} /><path d="M9 5.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 019 5.75z" fill={primaryFill} /><path d="M3 8.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 013 8.75z" fill={primaryFill} /><path d="M9 8.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 019 8.75z" fill={primaryFill} /><path d="M3 11.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9 11.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 14.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9 14.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnTwoLeftFilled = wrapIcon(rawSvg({}), 'TextColumnTwoLeftFilled');
export default TextColumnTwoLeftFilled;
      