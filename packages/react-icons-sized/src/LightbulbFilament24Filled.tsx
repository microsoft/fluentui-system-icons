import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.54 19l-.3 1.26a2.25 2.25 0 01-2.01 1.73l-.17.01h-2.12c-.99 0-1.85-.65-2.14-1.58l-.05-.16L8.46 19h7.08z" fill={primaryFill} /><path d="M12 2c4 0 7.25 3.25 7.25 7.25 0 2.14-.94 4.1-2.77 5.84a.25.25 0 00-.07.13l-.52 2.28h-3.14v-6.75a.75.75 0 00-1.5 0v6.75H8.11l-.52-2.28a.25.25 0 00-.07-.13c-1.83-1.75-2.77-3.7-2.77-5.84C4.75 5.25 8 2 12 2zm-.75 4.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-1.5 0zm5.03 1.47a.75.75 0 00-1.06 0l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06c.3-.3.3-.77 0-1.06zm-7.5 0a.75.75 0 00-1.06 1.06l1.06 1.06a.75.75 0 101.06-1.06L8.78 8.22z" fill={primaryFill} /></svg>;
}

const LightbulbFilament24Filled = wrapIcon(rawSvg({}), 'LightbulbFilament24Filled');
export default LightbulbFilament24Filled;
      