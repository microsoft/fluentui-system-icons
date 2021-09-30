import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 13h9a.5.5 0 01.09 1H3.5a.5.5 0 01-.09-1h9.09-9zM7.91 1H8a.5.5 0 01.5.41v8.89l2.68-2.69a.5.5 0 01.64-.06l.07.06c.17.17.2.44.06.64l-.06.07-3.54 3.53a.5.5 0 01-.63.06l-.07-.06L4.1 8.32a.5.5 0 01.64-.77l.07.06L7.5 10.3V1.5a.5.5 0 01.41-.5H8h-.09z" fill={primaryFill} /></svg>;
}

const ArrowDownload16Regular = wrapIcon(rawSvg({}), 'ArrowDownload16Regular');
export default ArrowDownload16Regular;
      