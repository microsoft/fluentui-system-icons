import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4.03c0-.82-.66-1.49-1.48-1.5l-4.9-.03c-.4 0-.78.16-1.06.44L3.38 9.61a1.5 1.5 0 000 2.12l4.94 4.95a1.5 1.5 0 001.68.3V14a2 2 0 011.5-1.94V12a3 3 0 015.4-1.79l.17-.16c.29-.29.44-.67.44-1.07V4.03z" fill={primaryFill} /></svg>;
}

const TagLockAccentFilled = wrapIcon(rawSvg({}), 'TagLockAccentFilled');
export default TagLockAccentFilled;
      