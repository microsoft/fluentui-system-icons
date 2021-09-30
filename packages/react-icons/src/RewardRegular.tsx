import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.53 3c.83 0 1.5.67 1.5 1.5v1.4c0 .94-.53 1.8-1.37 2.22l-4.18 2.14a3.54 3.54 0 11-2.93 0L4.36 8.12a2.5 2.5 0 01-1.35-2.04V4.5C3 3.67 3.66 3 4.5 3h11.02zM10 10.95a2.54 2.54 0 100 5.08 2.54 2.54 0 000-5.08zM12.55 4H7.47V8.6L9.8 9.77a.5.5 0 00.45 0l2.31-1.18V4zM6.47 4H4.5a.5.5 0 00-.5.5v1.54c.06.5.36.96.82 1.2l1.65.84V4zm9.06 0h-1.98v4.08l1.66-.85c.5-.25.82-.77.82-1.33V4.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const RewardRegular = wrapIcon(rawSvg({}), 'RewardRegular');
export default RewardRegular;
      