import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm-3 7a2 2 0 012-2h6.54a3.98 3.98 0 00.85 5.03l.33 1.66c-.85.2-1.77.31-2.72.31a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm15 0a3 3 0 01-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1118 13zm-4.4 4l.24 1.2c.1.46.5.8.98.8h.36a1 1 0 00.98-.8l.24-1.2h-2.8z" fill={primaryFill} /></svg>;
}

const PersonLightbulb20Filled = wrapIcon(rawSvg({}), 'PersonLightbulb20Filled');
export default PersonLightbulb20Filled;
      