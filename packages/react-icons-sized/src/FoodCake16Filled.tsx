import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.81 1.67C7.08 1.32 7.48 1 8 1c.52 0 .92.32 1.19.67.26.35.45.81.5 1.26a2 2 0 01-.26 1.38C9.13 4.75 8.64 5 8 5c-.64 0-1.13-.25-1.43-.7a2 2 0 01-.27-1.37c.06-.45.25-.9.51-1.26zM2.03 7.65A2 2 0 014 6h8a2 2 0 011.99 1.8 30.48 30.48 0 01-1.43 1.32c-.43.37-.88.73-1.27 1-.2.13-.38.23-.53.3a.78.78 0 01-.26.08c-.26 0-.43-.17-.82-.59C9.34 9.54 8.84 9 8 9s-1.34.54-1.68.9v.01c-.39.42-.56.59-.82.59l-.06-.01-.18-.07a4.1 4.1 0 01-.51-.3c-.4-.27-.85-.63-1.29-1A32.88 32.88 0 012.01 7.8a2 2 0 01.02-.15zM2 9.15a15.74 15.74 0 002.2 1.79c.21.15.43.29.64.38.2.1.43.18.66.18.73 0 1.2-.51 1.5-.84l.06-.07c.35-.39.58-.59.94-.59s.59.2.94.59l.06.07c.3.33.77.84 1.5.84.24 0 .47-.08.68-.17.21-.1.44-.23.66-.38.45-.3.93-.7 1.38-1.07l.78-.7V13h.5a.5.5 0 010 1h-13a.5.5 0 010-1H2V9.16z" fill={primaryFill} /></svg>;
}

const FoodCake16Filled = wrapIcon(rawSvg({}), 'FoodCake16Filled');
export default FoodCake16Filled;
      