import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8A6 6 0 114 8a6 6 0 0112 0zM9.85 5.1l-.72 1.55a.18.18 0 01-.14.1l-1.7.2c-.14.02-.2.2-.1.3l1.26 1.17c.05.04.07.1.05.16l-.33 1.68c-.03.15.13.26.26.19l1.49-.84a.18.18 0 01.17 0l1.5.84c.12.07.28-.04.25-.19l-.33-1.68a.17.17 0 01.05-.16l1.26-1.16a.18.18 0 00-.1-.3l-1.7-.2a.17.17 0 01-.14-.1l-.72-1.56a.17.17 0 00-.31 0z" fill={primaryFill} /><path d="M10 15c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 01-.8.4L10 16l-3.2 1.9a.5.5 0 01-.8-.4v-3.75A6.97 6.97 0 0010 15z" fill={primaryFill} /></svg>;
}

const RibbonStarFilled = wrapIcon(rawSvg({}), 'RibbonStarFilled');
export default RibbonStarFilled;
      