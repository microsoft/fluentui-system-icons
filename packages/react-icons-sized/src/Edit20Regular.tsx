import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.24 2.82a2.78 2.78 0 014.07 3.8l-.13.13-9.6 9.6a2 2 0 01-.73.47l-.16.05-4.06 1.11a.5.5 0 01-.63-.53l.02-.08 1.1-4.06a2 2 0 01.4-.76l.12-.13 9.6-9.6zm-.86 2.27l-8.03 8.04a1 1 0 00-.22.32l-.04.12-.88 3.21 3.21-.87a1 1 0 00.24-.1l.11-.07.1-.09 8.04-8.04-2.53-2.52zm4.1-1.57c-.66-.65-1.7-.69-2.4-.1l-.13.1-.86.86 2.52 2.53.86-.86c.66-.66.7-1.7.11-2.4l-.1-.13z" fill={primaryFill} /></svg>;
}

const Edit20Regular = wrapIcon(rawSvg({}), 'Edit20Regular');
export default Edit20Regular;
      