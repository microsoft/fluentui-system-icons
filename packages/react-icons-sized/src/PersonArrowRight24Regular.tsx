import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.31 15.5c.18-.53.42-1.04.71-1.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24a6.51 6.51 0 01-.92-1.36c-.52.07-1.08.1-1.68.1-2.74 0-4.7-.74-5.96-2.21-.35-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h7.06z" fill={primaryFill} /><path d="M10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.65-2.85a.5.5 0 00-.7.7L19.29 17H15a.5.5 0 100 1h4.3l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 00.15-.34v-.01a.5.5 0 00-.15-.36l-2.5-2.5z" fill={primaryFill} /></svg>;
}

const PersonArrowRight24Regular = wrapIcon(rawSvg({}), 'PersonArrowRight24Regular');
export default PersonArrowRight24Regular;
      