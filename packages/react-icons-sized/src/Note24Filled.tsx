import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25V13h-4.75A3.25 3.25 0 0013 16.25V21H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm2.81 11.5l-6.06 6.06v-4.31c0-.97.78-1.75 1.75-1.75h4.31z" fill={primaryFill} /></svg>;
}

const Note24Filled = wrapIcon(rawSvg({}), 'Note24Filled');
export default Note24Filled;
      