import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 1c.28 0 .5.22.5.5v13a.5.5 0 01-1 0v-13c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const DividerTall16Regular = wrapIcon(rawSvg({}), 'DividerTall16Regular');
export default DividerTall16Regular;
      