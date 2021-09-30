import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 1c.41 0 .75.34.75.75v12.5a.75.75 0 01-1.5 0V1.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const DividerTall16Filled = wrapIcon(rawSvg({}), 'DividerTall16Filled');
export default DividerTall16Filled;
      