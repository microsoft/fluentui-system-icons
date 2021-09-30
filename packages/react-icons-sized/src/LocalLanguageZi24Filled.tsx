import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2a1 1 0 10-2 0v1h-4a1 1 0 00-1 1v1.25a1 1 0 102 0V5h8v.25a1 1 0 102 0V4a1 1 0 00-1-1h-4V2zM8.56 7.5l.06.12 5.3 13a1 1 0 01-1.8.87l-.05-.1-1.38-3.4H4.41l-1.5 3.42a1 1 0 01-1.2.55l-.11-.04a1 1 0 01-.56-1.2l.04-.12 5.7-13a1 1 0 011.78-.1zm-.9 3.07L5.28 16h4.6l-2.22-5.43zM13.5 7a1 1 0 011-1h5a1 1 0 01.7 1.7l-1.79 1.8H22a1 1 0 110 2h-4v2.98a2.5 2.5 0 01-3.22 2.4l-.57-.17a1 1 0 11.58-1.92l.57.17a.5.5 0 00.64-.48V11.5h-4a1 1 0 110-2h4a1 1 0 01.3-.7l.79-.8h-2.6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const LocalLanguageZi24Filled = wrapIcon(rawSvg({}), 'LocalLanguageZi24Filled');
export default LocalLanguageZi24Filled;
      