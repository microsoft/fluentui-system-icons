import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 6.75a.75.75 0 00-1.39-.4l-.04.08a5.3 5.3 0 01-.58.8 4.8 4.8 0 01-1.13.88.75.75 0 10.78 1.28c.34-.2.62-.4.86-.58v4.44a.75.75 0 001.5 0v-6.5zm2.78 3.47a.75.75 0 10-1.06 1.06l.72.72-.72.72a.75.75 0 101.06 1.06l.72-.72.72.72a.75.75 0 101.06-1.06l-.72-.72.72-.72a.75.75 0 00-1.06-1.06l-.72.72-.72-.72z" fill={primaryFill} /></svg>;
}

const Multiplier1XFilled = wrapIcon(rawSvg({}), 'Multiplier1XFilled');
export default Multiplier1XFilled;
      