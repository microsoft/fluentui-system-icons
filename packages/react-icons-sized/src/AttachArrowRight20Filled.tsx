import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.28 10.6l5.3-5.3A2.75 2.75 0 0114.65 9c.56.02 1.1.12 1.6.29a4.25 4.25 0 00-6.73-5.05l-5.3 5.3a.75.75 0 001.06 1.07zm2.83 4.96l.9-.9c.01.63.13 1.22.34 1.78l-.18.18a2.75 2.75 0 01-3.89-3.89l5.66-5.66A.75.75 0 1112 8.13L6.34 13.8a1.25 1.25 0 001.77 1.77zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
}

const AttachArrowRight20Filled = wrapIcon(rawSvg({}), 'AttachArrowRight20Filled');
export default AttachArrowRight20Filled;
      