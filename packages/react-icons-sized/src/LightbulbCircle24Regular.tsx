import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 1.7a5 5 0 013.11 8.92l.03-.03-.76 3.37a1.73 1.73 0 01-1.38 1.3l-.15.03H11.3c-.74 0-1.39-.45-1.64-1.18l-.05-.16-.76-3.36-.16-.13a5 5 0 01-1.67-3.23L7 10.47 7 10.2a5 5 0 015-5zM13.17 16h-2.34l.24 1.08.02.07c.03.09.12.15.22.15H12.72c.1-.01.17-.09.2-.18l.25-1.12zM12 6.7a3.5 3.5 0 00-3.5 3.48v.23a3.5 3.5 0 001.46 2.64c.15.1.26.26.3.44l.23 1.01h3.02l.23-1c.03-.14.1-.27.2-.37l.08-.07.17-.13A3.5 3.5 0 0012 6.7z" fill={primaryFill} /></svg>;
}

const LightbulbCircle24Regular = wrapIcon(rawSvg({}), 'LightbulbCircle24Regular');
export default LightbulbCircle24Regular;
      