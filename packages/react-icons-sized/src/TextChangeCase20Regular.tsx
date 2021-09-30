import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3.5c.2 0 .39.14.46.34l3.65 10.5a.5.5 0 01-.95.32L15.74 12h-4.76l-1.01 2.68a.5.5 0 01-.93.01l.24-1.03 1-2.6V11h.01l2.73-7.18a.5.5 0 01.47-.32zm-.04 1.96L11.36 11h4.03l-1.93-5.54zM4.9 8.7c-.48.02-.9.13-1.17.26a.5.5 0 01-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C8 8.7 8 9.96 8 10.46v4.04a.5.5 0 01-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 01-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26zM7 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46z" fill={primaryFill} /></svg>;
}

const TextChangeCase20Regular = wrapIcon(rawSvg({}), 'TextChangeCase20Regular');
export default TextChangeCase20Regular;
      