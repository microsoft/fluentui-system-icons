import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.78 9.28a.75.75 0 11-1.06-1.06.75.75 0 011.06 1.06zm2.7-1.81l3.03-3.03c.39-.39.39-1 0-1.39l-.56-.56a.98.98 0 00-1.39 0L8.53 5.52a1.67 1.67 0 00-2.4.66l-.24.5a.3.3 0 01-.32.15h-.04A2.82 2.82 0 002.72 7.9a3.6 3.6 0 00.33 4.7l.35.35a3.6 3.6 0 004.7.33 2.82 2.82 0 001.08-2.8l-.01-.05a.3.3 0 01.16-.33l.48-.24c.91-.45 1.19-1.58.67-2.4zm.4-2.88l.53.53L9.45 7.1a.5.5 0 000 .7l.1.1c.32.32.23.87-.18 1.08l-.5.24c-.51.26-.8.84-.68 1.41v.05c.14.68-.13 1.39-.69 1.81a2.6 2.6 0 01-3.39-.24l-.35-.35a2.6 2.6 0 01-.24-3.4 1.82 1.82 0 011.81-.69l.05.01a1.3 1.3 0 001.4-.69l.25-.49c.2-.4.76-.5 1.08-.17l.1.1c.19.19.5.19.7 0l1.97-1.97zm.7-.71l.67-.67.54.53-.67.68-.54-.54z" fill={primaryFill} /></svg>;
}

const Guitar16Regular = wrapIcon(rawSvg({}), 'Guitar16Regular');
export default Guitar16Regular;
      