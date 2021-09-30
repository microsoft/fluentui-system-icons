import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18a6 6 0 100-12 6 6 0 000 12z" fill={primaryFill} /><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
}

const Record24Regular = wrapIcon(rawSvg({}), 'Record24Regular');
export default Record24Regular;
      