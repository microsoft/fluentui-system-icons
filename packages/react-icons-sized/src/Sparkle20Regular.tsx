import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.4 12.8a1.04 1.04 0 001.59-.51l.45-1.38a2.34 2.34 0 011.47-1.47l1.4-.46A1.04 1.04 0 0012.25 7l-1.37-.44A2.34 2.34 0 019.4 5.08L8.95 3.7a1.03 1.03 0 00-.82-.68 1.04 1.04 0 00-1.15.7l-.46 1.4a2.34 2.34 0 01-1.44 1.45L3.7 7a1.04 1.04 0 00.02 1.97l1.37.45a2.33 2.33 0 011.48 1.48l.46 1.4c.07.2.2.37.38.5zm.08-7.4l.53-1.38.44 1.37a3.33 3.33 0 002.12 2.12l1.4.53-1.38.44a3.34 3.34 0 00-2.11 2.12l-.53 1.38-.45-1.38a3.34 3.34 0 00-2.1-2.12L4 7.96 5.4 7.5a3.36 3.36 0 002.08-2.12zm6.06 11.45a.8.8 0 001.22-.4l.25-.76a1.09 1.09 0 01.68-.68l.77-.25a.8.8 0 00-.02-1.52l-.77-.25a1.08 1.08 0 01-.68-.68l-.25-.77a.8.8 0 00-1.52.01l-.24.76a1.1 1.1 0 01-.67.68l-.77.25a.8.8 0 000 1.52l.77.25a1.09 1.09 0 01.68.68l.25.77c.06.16.16.3.3.4zm-.92-2.8l-.18-.05.19-.06a2.09 2.09 0 001.3-1.32l.06-.18.05.18a2.08 2.08 0 001.32 1.32l.2.06-.18.06a2.08 2.08 0 00-1.32 1.32l-.06.18-.06-.18a2.07 2.07 0 00-1.32-1.32z" fill={primaryFill} /></svg>;
}

const Sparkle20Regular = wrapIcon(rawSvg({}), 'Sparkle20Regular');
export default Sparkle20Regular;
      