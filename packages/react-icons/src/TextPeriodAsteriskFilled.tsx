import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 4.75a.75.75 0 00-1.5 0v1.86l-1.77-.58a.75.75 0 10-.46 1.43l1.77.58-1.1 1.5a.75.75 0 001.22.88l1.09-1.5 1.09 1.5a.75.75 0 101.21-.88l-1.09-1.5 1.77-.58a.75.75 0 10-.46-1.43l-1.77.58V4.75zM6.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const TextPeriodAsteriskFilled = wrapIcon(rawSvg({}), 'TextPeriodAsteriskFilled');
export default TextPeriodAsteriskFilled;
      