import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.91 7.38A8.5 8.5 0 013.7 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 000 1.52l1.56 1.32a.5.5 0 01.15.54 8.5 8.5 0 01-1.78 3.08.5.5 0 01-.54.13l-1.92-.68a1 1 0 00-1.32.76l-.37 2a.5.5 0 01-.38.4 8.53 8.53 0 01-3.56 0 .5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zM8 10a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /></svg>;
}

const SettingsFilled = wrapIcon(rawSvg({}), 'SettingsFilled');
export default SettingsFilled;
      