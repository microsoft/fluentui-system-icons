import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 8.75a.75.75 0 00.8-.7l.02-.1c.02-.08.06-.19.13-.3.1-.16.34-.4.95-.4.58 0 .86.19 1 .38.16.22.27.61.16 1.24a.78.78 0 01-.4.6c-.2.13-.42.2-.72.31l-.43.17c-.47.18-1.06.45-1.5 1-.47.55-.71 1.3-.71 2.3a.75.75 0 00.75.75h3.75a.75.75 0 000-1.5H9.58c.07-.28.17-.47.28-.6.2-.24.48-.4.9-.56l.27-.1c.34-.12.77-.28 1.12-.5.52-.32.95-.82 1.09-1.61.15-.87.06-1.73-.43-2.38-.5-.69-1.29-1-2.21-1-1.14 0-1.83.5-2.21 1.1A2.53 2.53 0 008 7.92v.01c0 .01-.02.36 0 .01-.03.41.29.77.7.8zm6.58 1.47a.75.75 0 10-1.06 1.06l.72.72-.72.72a.75.75 0 101.06 1.06l.72-.72.72.72a.75.75 0 101.06-1.06l-.72-.72.72-.72a.75.75 0 10-1.06-1.06l-.72.72-.72-.72zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 01-1.5 0V8.8c-.24.2-.52.39-.86.6a.75.75 0 01-.78-1.3c.58-.34.9-.61 1.13-.86.22-.24.36-.47.58-.81l.04-.08a.75.75 0 01.85-.32z" fill={primaryFill} /></svg>;
}

const Multiplier12X20Filled = wrapIcon(rawSvg({}), 'Multiplier12X20Filled');
export default Multiplier12X20Filled;
      