import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.5a.5.5 0 00-1 0v2.46L8.65 6.2a.5.5 0 10-.3.95l2.34.76-1.45 2a.5.5 0 10.8.59l1.46-2 1.45 2a.5.5 0 00.8-.59l-1.44-2 2.34-.76a.5.5 0 00-.3-.95L12 6.96V4.5zM6 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const TextPeriodAsterisk20Regular = wrapIcon(rawSvg({}), 'TextPeriodAsterisk20Regular');
export default TextPeriodAsterisk20Regular;
      