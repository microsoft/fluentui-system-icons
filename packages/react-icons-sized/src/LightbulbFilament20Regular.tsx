import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 6.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1z" fill={primaryFill} /><path d="M12.85 7.44a.5.5 0 00-.7 0l-.71.71a.5.5 0 00.7.7l.71-.7a.5.5 0 000-.7z" fill={primaryFill} /><path d="M7.85 7.44a.5.5 0 10-.7.71l.7.7a.5.5 0 10.71-.7l-.7-.7z" fill={primaryFill} /><path d="M10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 00-.15.2l-.02.09-.94 3.92a1.84 1.84 0 01-1.67 1.38l-.15.01H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.93-3.91a.6.6 0 00-.17-.3A6.32 6.32 0 014 8.04L4 7.8v-.2A5.91 5.91 0 0110 2zM7.96 15l.31 1.33.03.1c.1.3.38.52.71.56l.12.01h1.81a.86.86 0 00.75-.53l.03-.1.32-1.37H7.96zM10 3a4.92 4.92 0 00-4.98 4.41L5 7.63V8c.06 1.3.68 2.52 1.9 3.67.18.17.32.4.4.64l.05.15.37 1.54H9.5V9.5a.5.5 0 111 0V14h1.79l.38-1.61.05-.16c.09-.21.22-.4.39-.56C14.38 10.47 15 9.18 15 7.8A4.9 4.9 0 0010 3z" fill={primaryFill} /></svg>;
}

const LightbulbFilament20Regular = wrapIcon(rawSvg({}), 'LightbulbFilament20Regular');
export default LightbulbFilament20Regular;
      