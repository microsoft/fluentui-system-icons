import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 1c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V1.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const DividerTall20Filled = wrapIcon(rawSvg({}), 'DividerTall20Filled');
export default DividerTall20Filled;
      