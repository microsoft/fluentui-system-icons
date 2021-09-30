import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 7.45a.5.5 0 00-.5.5v4.1c0 .27.22.5.5.5h4.34a.5.5 0 00.5-.5v-4.1a.5.5 0 00-.5-.5H6.78zm.5 1h3.34v3.1H7.28v-3.1z" fill={primaryFill} /><path d="M5.45 2.5c-1.63 0-3 1.1-3.6 2.48-.6 1.33-.49 3 .81 4.22v5.98c0 .3-.01.87.28 1.36.36.6 1.08.96 2.26.96h10.18c.41 0 .78-.02 1.1-.07.3-.06.6-.17.85-.39.5-.43.59-1.13.59-1.95 0-.88-.04-1.92-.07-2.93a66.88 66.88 0 01-.07-2.97 4.68 4.68 0 001.28-3 3.73 3.73 0 00-3.68-3.69H5.45zm7.38 1c.63 0 1.39.3 2 .82.6.51.99 1.18 1 1.85-.05.75-.21 1.24-.41 1.58-.16.27-.35.48-.56.69l-.16.15a13.81 13.81 0 00-.31.3l-.14.13v.2c-.04 1-.03 2.44-.02 3.84v.01l.01 2.02c0 .4-.02.7-.06.9-.04.2-.1.28-.14.32-.04.04-.12.1-.32.13a9.84 9.84 0 01-.89.06H5.2c-1 0-1.29-.29-1.4-.47-.14-.23-.14-.51-.14-.84V8.99a.5.5 0 00-.18-.39 2.65 2.65 0 01-.72-3.22 3.05 3.05 0 012.7-1.88h7.37z" fill={primaryFill} /></svg>;
}

const FoodToast20Filled = wrapIcon(rawSvg({}), 'FoodToast20Filled');
export default FoodToast20Filled;
      