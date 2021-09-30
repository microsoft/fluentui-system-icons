import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v4c-.17 0-.34.02-.5.08a1.5 1.5 0 00-2.94-.5l-.33 1.17H8.3a1.5 1.5 0 00-2.44-.23l-1.5 1.75a1.5 1.5 0 000 1.95l1.5 1.75a1.5 1.5 0 001.77.39l-.07.23c-.09.31-.07.63.03.91H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M6.16 10.75l1.22 1.42a.5.5 0 01-.76.65l-1.5-1.75a.5.5 0 010-.65l1.5-1.75a.5.5 0 01.76.65l-1.22 1.43z" fill={primaryFill} /><path d="M11.49 7.64v-.05a.5.5 0 00-.97-.23l-2 7a.5.5 0 00.97.28l2-7z" fill={primaryFill} /><path d="M12.67 12.88a.5.5 0 01-.05-.71l1.22-1.42-1.22-1.43a.5.5 0 11.76-.65l1.5 1.75a.5.5 0 010 .65l-1.5 1.75a.5.5 0 01-.7.06z" fill={primaryFill} /></svg>;
}

const ClipboardCode16Filled = wrapIcon(rawSvg({}), 'ClipboardCode16Filled');
export default ClipboardCode16Filled;
      