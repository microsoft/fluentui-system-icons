import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8A8 8 0 110 8a8 8 0 0116 0z" fill={primaryFill} /></svg>;
}

const PresenceBusy16Filled = wrapIcon(rawSvg({}), 'PresenceBusy16Filled');
export default PresenceBusy16Filled;
      