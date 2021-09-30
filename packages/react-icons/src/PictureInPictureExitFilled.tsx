import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4A1.5 1.5 0 002.5 9h6zm0 1h-6c-.17 0-.34-.02-.5-.05v4.3A2.75 2.75 0 004.75 17h10.5A2.75 2.75 0 0018 14.25v-6.5A2.75 2.75 0 0015.25 5H11v2.5A2.5 2.5 0 018.5 10zm3.85.65L15 13.29V11.5a.5.5 0 011 0v3a.5.5 0 01-.5.5h-3a.5.5 0 010-1h1.8l-2.65-2.65a.5.5 0 01.7-.7z" fill={primaryFill} /></svg>;
}

const PictureInPictureExitFilled = wrapIcon(rawSvg({}), 'PictureInPictureExitFilled');
export default PictureInPictureExitFilled;
      