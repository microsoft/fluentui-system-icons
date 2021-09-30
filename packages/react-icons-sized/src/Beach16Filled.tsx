import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.91 1.56a4.18 4.18 0 00-5.69 1.52l-.15.26a.5.5 0 00.18.68L8.9 5.54 7.27 8.4a4.9 4.9 0 00-3.46 2.4 1.5 1.5 0 011.75.99c.06.17.14.25.2.29.06.04.14.07.23.07a.4.4 0 00.23-.06c.05-.04.12-.1.17-.25a1.5 1.5 0 012.84 0c.05.14.11.21.17.25a.4.4 0 00.23.06c.08 0 .17-.03.23-.07a.55.55 0 00.2-.3 1.5 1.5 0 011.75-.98A4.91 4.91 0 008.4 8.4l1.36-2.36 2.84 1.63a.5.5 0 00.68-.18l.15-.26a4.14 4.14 0 00-1.53-5.67zm-7.3 10.53a.5.5 0 00-.96.04c-.12.51-.35.78-.6.94A2 2 0 012 13.3a.5.5 0 100 1c.5 0 1.07-.08 1.56-.38.24-.15.46-.34.63-.58a2.41 2.41 0 003.62-.02 2.41 2.41 0 003.67-.04 2.8 2.8 0 002.14 1.02.5.5 0 000-1c-.72 0-1.43-.47-1.67-1.2a.5.5 0 00-.95 0 1.42 1.42 0 01-2.72.05.5.5 0 00-.94 0 1.42 1.42 0 01-2.73-.06z" fill={primaryFill} /></svg>;
}

const Beach16Filled = wrapIcon(rawSvg({}), 'Beach16Filled');
export default Beach16Filled;
      