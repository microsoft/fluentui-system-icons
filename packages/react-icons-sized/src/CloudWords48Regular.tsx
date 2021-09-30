import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 18a1.25 1.25 0 100 2.5h7.5a1.25 1.25 0 100-2.5h-7.5zM11 27.25c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 110 2.5h-8.5c-.69 0-1.25-.56-1.25-1.25zM27.25 26a1.25 1.25 0 100 2.5h8.5a1.25 1.25 0 100-2.5h-8.5zM24 10a11 11 0 00-10.96 10h-.29a7.75 7.75 0 000 15.5h22.5a7.75 7.75 0 000-15.5h-.3A11 11 0 0024 10zm-8.5 11a8.5 8.5 0 0117 0v.25c0 .69.56 1.25 1.25 1.25h1.5a5.25 5.25 0 110 10.5h-22.5a5.25 5.25 0 110-10.5h1.5c.69 0 1.25-.56 1.25-1.25V21z" fill={primaryFill} /></svg>;
}

const CloudWords48Regular = wrapIcon(rawSvg({}), 'CloudWords48Regular');
export default CloudWords48Regular;
      