import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.66 15.73a1.44 1.44 0 002.16-.61l.62-1.86a2.87 2.87 0 011.82-1.81l1.78-.58a1.44 1.44 0 00-.06-2.74l-1.75-.57a2.88 2.88 0 01-1.82-1.82l-.58-1.78a1.45 1.45 0 00-2.73.02l-.59 1.8a2.88 2.88 0 01-1.77 1.78l-1.77.57a1.44 1.44 0 00.01 2.73l1.76.57a2.89 2.89 0 011.82 1.83l.58 1.77c.1.29.28.53.52.7zm-.37-4.25A4.4 4.4 0 006.21 10l-1.6-.5 1.61-.52A4.4 4.4 0 008.95 6.2l.52-1.58.51 1.59a4.37 4.37 0 002.78 2.77l1.62.52-1.59.52a4.38 4.38 0 00-2.77 2.77l-.51 1.59-.52-1.59c-.16-.47-.4-.91-.7-1.3zm8.04 9.3c-.19-.13-.33-.33-.4-.55l-.34-1a1.31 1.31 0 00-.82-.83l-.99-.32A1.15 1.15 0 0113 17a1.14 1.14 0 01.77-1.08l1-.33a1.3 1.3 0 00.8-.82l.33-.99a1.14 1.14 0 012.16-.02l.33 1.01a1.3 1.3 0 00.82.82l.99.32a1.14 1.14 0 01.04 2.17l-1.02.33a1.32 1.32 0 00-.81.82l-.33.99a1.14 1.14 0 01-1.75.56zM15.3 17a2.79 2.79 0 011.7 1.7 2.8 2.8 0 011.7-1.7 2.81 2.81 0 01-1.72-1.7A2.8 2.8 0 0115.3 17z" fill={primaryFill} /></svg>;
}

const Sparkle24Regular = wrapIcon(rawSvg({}), 'Sparkle24Regular');
export default Sparkle24Regular;
      