import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6zM3 13a2 2 0 012-2h6.54c-.18.3-.32.65-.41 1H5A1 1 0 004 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17c.91 0 1.76-.1 2.52-.3l.2.99c-.85.2-1.77.31-2.72.31a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm15 0a3 3 0 01-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1118 13zm-4.4 4l.24 1.2c.1.46.5.8.98.8h.36a1 1 0 00.98-.8l.24-1.2h-2.8z" fill={primaryFill} /></svg>;
}

const PersonLightbulb20Regular = wrapIcon(rawSvg({}), 'PersonLightbulb20Regular');
export default PersonLightbulb20Regular;
      