import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path fill="#745125" d="M12 10h24v2H12z" /><path fill="#E62C46" d="M12 12h24v2H12z" /><path fill="#F36D38" d="M12 14h24v3H12z" /><path fill="#FFD23E" d="M12 17h24v3H12z" /><path fill="#61BC51" d="M12 20h24v3H12z" /><path fill="#1793E8" d="M12 23h24v2H12z" /><path fill="#B73FBB" d="M12 25h24v3H12z" /><path d="M11.25 8C10.56 8 10 8.56 10 9.25v29.5a1.25 1.25 0 102.5 0V29h24.25c.69 0 1.25-.56 1.25-1.25V9.25C38 8.56 37.44 8 36.75 8h-25.5zM35.5 26.5h-23v-16h23v16z" fill={primaryFill} /></svg>;
}

const FlagPride48Filled = wrapIcon(rawSvg({}), 'FlagPride48Filled');
export default FlagPride48Filled;
      