import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 3.31a4.55 4.55 0 016.35-.03c.81.8 1.32 1.9 1.32 3.1 0 1.3-.58 2.45-1.62 3.44l-.3 1.18H8.5V7.5a.5.5 0 00-1 0V11H5.47l-.23-.96C4.15 8.9 3.56 7.82 3.5 6.58v-.04c.04-1.3.53-2.42 1.33-3.23zM7.5 4.5v1a.5.5 0 001 0v-1a.5.5 0 00-1 0zm3.08.8a.5.5 0 00-.7 0l-.72.7a.5.5 0 00.71.7l.7-.7a.5.5 0 000-.7zm-4.48 0a.5.5 0 00-.7.7l.7.7a.5.5 0 00.7-.7l-.7-.7z" fill={primaryFill} /><path d="M5.7 12l.24.98V13a1.52 1.52 0 001.42 1h1.41c.31-.03.6-.16.84-.35.23-.2.4-.46.48-.78l.23-.87H5.7z" fill={primaryFill} /></svg>;
}

const LightbulbFilament16Filled = wrapIcon(rawSvg({}), 'LightbulbFilament16Filled');
export default LightbulbFilament16Filled;
      