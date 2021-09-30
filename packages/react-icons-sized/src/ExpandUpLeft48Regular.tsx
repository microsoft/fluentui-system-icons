import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.5 12.25a3.75 3.75 0 00-3.75-3.75h-7.88a1.25 1.25 0 110-2.5h7.88C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 016 35.75v-7.88a1.25 1.25 0 112.5 0v7.88a3.75 3.75 0 003.75 3.75H24V29.25c0-2.9 2.35-5.25 5.25-5.25H39.5V12.25zm0 14.25H29.25a2.75 2.75 0 00-2.75 2.75V39.5h9.25a3.75 3.75 0 003.75-3.75V26.5zM21 7.25C21 6.56 20.44 6 19.75 6H7.25C6.56 6 6 6.56 6 7.25v12.5a1.25 1.25 0 102.5 0v-9.48l10.37 10.36a1.25 1.25 0 001.76-1.76L10.27 8.5h9.48c.69 0 1.25-.56 1.25-1.25z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft48Regular = wrapIcon(rawSvg({}), 'ExpandUpLeft48Regular');
export default ExpandUpLeft48Regular;
      