import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 2.5a.25.25 0 11.5 0c0 .1-.02.17-.03.2a.36.36 0 01-.09.12 7.96 7.96 0 01-.35.26h-.01l-.2.13a2.76 2.76 0 00-1.32 2.29c0 .41.34.75.75.75h2a.75.75 0 000-1.5h-.93a1.98 1.98 0 01.45-.37c.18-.1.46-.29.67-.5.33-.32.56-.77.56-1.38a1.75 1.75 0 10-3.5 0 .75.75 0 001.5 0zm-2.01 1.21a3.5 3.5 0 00-.49 1.76L7.5 8l3.56 4a.75.75 0 01-1.12 1L6.5 9.13 3.06 13a.75.75 0 11-1.12-1L5.5 8 1.94 4a.75.75 0 111.12-1L6.5 6.87 9.85 3.1c.09.23.22.44.39.61z" fill={primaryFill} /></svg>;
}

const TextSuperscript16Filled = wrapIcon(rawSvg({}), 'TextSuperscript16Filled');
export default TextSuperscript16Filled;
      