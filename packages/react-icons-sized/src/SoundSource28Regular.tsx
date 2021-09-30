import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 15.73l.09.08 7.74 8.52a1 1 0 01-.62 1.66l-.12.01H6.26a1 1 0 01-.82-1.57l.08-.1 7.74-8.52.07-.06a1 1 0 011.32-.02zm-.65 1.5L7.4 24.5h13.2L14 17.23zM14 2a13 13 0 019.78 21.56l-.09-.12-.1-.12-.81-.9a11.5 11.5 0 10-17.56 0l-.8.9c-.08.07-.14.16-.2.25A13 13 0 0114 2zm0 4a9 9 0 017.08 14.56l-1.03-1.13a7.5 7.5 0 10-12.1 0l-1.03 1.13A9 9 0 0114 6zm0 4a5 5 0 014.32 7.52l-1.08-1.19A3.5 3.5 0 0014 11.5a3.5 3.5 0 00-3.24 4.83l-1.08 1.2A5 5 0 0114 10z" fill={primaryFill} /></svg>;
}

const SoundSource28Regular = wrapIcon(rawSvg({}), 'SoundSource28Regular');
export default SoundSource28Regular;
      