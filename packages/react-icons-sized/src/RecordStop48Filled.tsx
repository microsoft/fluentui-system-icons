import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44 24a20 20 0 11-40 0 20 20 0 0140 0zm-27-9a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V17a2 2 0 00-2-2H17z" fill={primaryFill} /></svg>;
}

const RecordStop48Filled = wrapIcon(rawSvg({}), 'RecordStop48Filled');
export default RecordStop48Filled;
      