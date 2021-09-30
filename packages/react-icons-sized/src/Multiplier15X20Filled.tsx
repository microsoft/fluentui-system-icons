import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 01-1.5 0V8.81c-.24.19-.52.38-.86.58a.75.75 0 01-.78-1.28c.58-.35.9-.62 1.13-.87.22-.24.36-.47.58-.81l.04-.08a.75.75 0 01.85-.32zM9 6c-.39 0-.71.3-.75.68L8 9.43a.75.75 0 00.85.81l1.37-.18a1.35 1.35 0 11.16 2.69c-.36 0-.72-.15-.97-.4l-.38-.38a.75.75 0 00-1.06 1.06l.38.38a2.86 2.86 0 004.9-2.01 2.85 2.85 0 00-3.23-2.83l-.44.06.1-1.13h2.57a.75.75 0 000-1.5H9zm-2.5 8a.5.5 0 100-1 .5.5 0 000 1zm7.72-3.78c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 111.06 1.06l-.72.72.72.72a.75.75 0 11-1.06 1.06l-.72-.72-.72.72a.75.75 0 11-1.06-1.06l.72-.72-.72-.72a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const Multiplier15X20Filled = wrapIcon(rawSvg({}), 'Multiplier15X20Filled');
export default Multiplier15X20Filled;
      