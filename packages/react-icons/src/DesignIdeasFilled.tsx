import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5c-.75 0-1.44.24-2.01.64a3.59 3.59 0 00-.41-1.52A5 5 0 0114 8h2.25c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5C9.78 17 9 16.22 9 15.25V13c-.72 0-1.4-.15-2.02-.42L7 11.5v-.06-.57c.56.4 1.26.63 2 .63V9.75C9 8.78 9.78 8 10.75 8h1.75A3.5 3.5 0 009 4.5zm4.77 5a5.01 5.01 0 01-3.27 3.27v2.48c0 .14.11.25.25.25h5.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 00-.25-.25h-2.48zm-1.6 0h-1.42a.25.25 0 00-.25.25v1.41a3.51 3.51 0 001.66-1.66z" fill={primaryFill} /><path d="M4.58 2.13a.5.5 0 01.12.6l-.01.08c0 .07.01.19.16.34l.2.18.16.16c.13.12.27.27.4.45.25.38.39.86.39 1.56 0 .85-.32 1.58-.8 2.03l.05.07c.29.34.45.79.55 1.23.2.87.2 1.92.2 2.64v.03c0 2.79-.38 4.37-.8 5.27-.2.46-.43.75-.62.93a1.48 1.48 0 01-.4.26S4.09 18 4 18c-.07 0-.19-.04-.19-.04a.75.75 0 01-.13-.06c-.07-.05-.16-.1-.26-.2-.2-.18-.41-.47-.62-.93-.42-.9-.8-2.48-.8-5.27v-.03c0-.72 0-1.77.2-2.64a3.02 3.02 0 01.6-1.3C2.33 7.08 2 6.35 2 5.5a4.73 4.73 0 01.69-2.1A4.07 4.07 0 013.93 2.1l.04-.03a.5.5 0 01.61.05z" fill={primaryFill} /></svg>;
}

const DesignIdeasFilled = wrapIcon(rawSvg({}), 'DesignIdeasFilled');
export default DesignIdeasFilled;
      