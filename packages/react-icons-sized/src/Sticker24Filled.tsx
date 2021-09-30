import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25V13h-4.96c-1.2.08-2.22.81-2.72 1.84a5.05 5.05 0 01-4.14-.7.75.75 0 10-.86 1.23 6.33 6.33 0 004.35 1.1l.33-.03V21H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm2.6 11.72l-5.63 5.62-.22.2V16.1c.08-.85.75-1.53 1.6-1.6l.15-.01h4.28l-.19.22zM9 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const Sticker24Filled = wrapIcon(rawSvg({}), 'Sticker24Filled');
export default Sticker24Filled;
      