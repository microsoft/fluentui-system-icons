import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 9h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11zm0-3h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11z" fill={primaryFill} /></svg>;
}

const ReOrder16Regular = wrapIcon(rawSvg({}), 'ReOrder16Regular');
export default ReOrder16Regular;
      