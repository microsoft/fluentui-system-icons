import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.31 15.5c.17-.54.41-1.04.7-1.5H6.26C5 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43 1.41 1.65 3.49 2.55 6.19 2.71l.45-1.48c-2.5-.08-4.32-.82-5.5-2.2-.35-.41-.54-.93-.54-1.46v-.58c0-.42.34-.75.75-.75h5.06zM12 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm11 14a5.5 5.5 0 01-8.17 4.81l-2.19.67a.5.5 0 01-.62-.63l.67-2.18A5.5 5.5 0 1123 17.5zM15.5 16a.5.5 0 100 1h4a.5.5 0 100-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 100-1h-2a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PersonChat24Regular = wrapIcon(rawSvg({}), 'PersonChat24Regular');
export default PersonChat24Regular;
      