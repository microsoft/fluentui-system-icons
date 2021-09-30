import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v14.5A2.75 2.75 0 0117.25 22H6.75A2.75 2.75 0 014 19.25V4.75c0-1.26.85-2.32 2-2.65v1.65c-.3.23-.5.6-.5 1v14.5c0 .69.56 1.25 1.25 1.25h10.5c.7 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H15V2h2.25zM14 2v8.14c0 .75-.8 1.03-1.29.76l-.08-.05-2.13-1.28-2.08 1.25c-.5.36-1.33.14-1.41-.56L7 10.14V2h7zm-1.5 1.5h-4v5.52l1.57-.95a.92.92 0 01.82-.02l1.61.97V3.5z" fill={primaryFill} /></svg>;
}

const Class24Regular = wrapIcon(rawSvg({}), 'Class24Regular');
export default Class24Regular;
      