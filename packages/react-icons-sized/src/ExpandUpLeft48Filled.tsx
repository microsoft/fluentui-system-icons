import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M35.75 8.5a3.75 3.75 0 013.75 3.75V24H29.25A5.25 5.25 0 0024 29.25V39.5H12.25a3.75 3.75 0 01-3.75-3.75v-7.88a1.25 1.25 0 10-2.5 0v7.88C6 39.2 8.8 42 12.25 42h23.5A6.25 6.25 0 0042 35.75v-23.5C42 8.8 39.2 6 35.75 6h-7.88a1.25 1.25 0 100 2.5h7.88zM21 7.25C21 6.56 20.44 6 19.75 6H7.25C6.56 6 6 6.56 6 7.25v12.5a1.25 1.25 0 102.5 0v-9.48l10.37 10.36a1.25 1.25 0 001.76-1.76L10.27 8.5h9.48c.69 0 1.25-.56 1.25-1.25z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft48Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft48Filled');
export default ExpandUpLeft48Filled;
      