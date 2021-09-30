import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.73 3.69a1 1 0 10-1.46-1.38l-8.5 9a1 1 0 000 1.38l8.5 9a1 1 0 101.46-1.38L4.88 12l7.85-8.31z" fill={primaryFill} /></svg>;
}

const IosArrowLeft24Filled = wrapIcon(rawSvg({}), 'IosArrowLeft24Filled');
export default IosArrowLeft24Filled;
      