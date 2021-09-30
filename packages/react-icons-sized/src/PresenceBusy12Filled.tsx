import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6A6 6 0 110 6a6 6 0 0112 0z" fill={primaryFill} /></svg>;
}

const PresenceBusy12Filled = wrapIcon(rawSvg({}), 'PresenceBusy12Filled');
export default PresenceBusy12Filled;
      