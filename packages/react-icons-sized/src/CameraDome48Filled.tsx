import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.25C4 5.45 5.46 4 7.25 4h33.5a3.25 3.25 0 010 6.5H7.25A3.25 3.25 0 014 7.25zM24 18.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 2.5a6 6 0 110 12 6 6 0 010-12zm18-8H6v13a18 18 0 0036 0V13zM13 27a11 11 0 1122 0 11 11 0 01-22 0z" fill={primaryFill} /></svg>;
}

const CameraDome48Filled = wrapIcon(rawSvg({}), 'CameraDome48Filled');
export default CameraDome48Filled;
      