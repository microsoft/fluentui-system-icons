import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2c.48 0 .82.44.74.89l-.03.1L11.8 8h4.46c.62 0 .96.7.61 1.19l-.07.08-12 12.5c-.5.53-1.37.09-1.28-.6l.02-.1L5.29 14H2.75a.75.75 0 01-.74-.86l.02-.1 3-10.5c.08-.28.32-.49.61-.53L5.75 2h7zm5.4 9.37l.04.1 3.75 9.5a.75.75 0 01-1.35.64l-.04-.09-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.75-9.5a.75.75 0 011.34-.1zM11.7 3.5h-5.4l-2.57 9h2.52c.45 0 .8.4.74.84l-.02.1-1.31 5.26 8.82-9.2h-3.74a.75.75 0 01-.74-.89l.03-.1L11.7 3.5zm5.79 10.3l-1.47 3.7h2.93l-1.46-3.7z" fill={primaryFill} /></svg>;
}

const FlashAuto24Regular = wrapIcon(rawSvg({}), 'FlashAuto24Regular');
export default FlashAuto24Regular;
      