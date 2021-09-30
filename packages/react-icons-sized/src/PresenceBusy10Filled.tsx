import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5A5 5 0 110 5a5 5 0 0110 0z" fill={primaryFill} /></svg>;
}

const PresenceBusy10Filled = wrapIcon(rawSvg({}), 'PresenceBusy10Filled');
export default PresenceBusy10Filled;
      