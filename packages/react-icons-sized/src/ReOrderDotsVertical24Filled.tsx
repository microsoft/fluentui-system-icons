import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 17a2 2 0 110 4 2 2 0 010-4zm-8 0a2 2 0 110 4 2 2 0 010-4zm8-7a2 2 0 110 4 2 2 0 010-4zm-8 0a2 2 0 110 4 2 2 0 010-4zm8-7a2 2 0 110 4 2 2 0 010-4zM8 3a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
}

const ReOrderDotsVertical24Filled = wrapIcon(rawSvg({}), 'ReOrderDotsVertical24Filled');
export default ReOrderDotsVertical24Filled;
      