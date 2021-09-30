import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7.1-2.43l-1.16-2.85H5.88l-1.8 4.45c-.07.2-.18.35-.33.47a.86.86 0 01-.53.16.9.9 0 01-.66-.23.93.93 0 01-.26-.6V19.37c0-.1 0-.2.04-.28v-.02l6.6-16.14c.08-.2.2-.36.36-.47.17-.11.36-.16.57-.16.21 0 .4.06.55.19.16.1.28.25.36.43l6.46 15.78a2.5 2.5 0 00-2.33-.63zm-8.28-4.72h6.36l-3.2-7.82-3.16 7.82z" fill={primaryFill} /></svg>;
}

const TextMore24Filled = wrapIcon(rawSvg({}), 'TextMore24Filled');
export default TextMore24Filled;
      