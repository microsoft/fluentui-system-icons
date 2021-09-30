import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" fill={primaryFill} /></svg>;
}

const RadioButton24Regular = wrapIcon(rawSvg({}), 'RadioButton24Regular');
export default RadioButton24Regular;
      