import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.81 1.67C7.08 1.32 7.48 1 8 1c.52 0 .92.32 1.19.67.26.35.45.81.5 1.26a2 2 0 01-.26 1.38C9.13 4.75 8.64 5 8 5c-.64 0-1.13-.25-1.43-.7a2 2 0 01-.27-1.37c.06-.45.25-.9.51-1.26zm.6 2.08c.07.12.23.25.59.25s.52-.13.6-.25c.1-.14.14-.38.1-.68-.04-.3-.15-.6-.31-.8C8.23 2.05 8.09 2 8 2c-.08 0-.23.05-.39.27-.16.2-.27.5-.31.8-.04.3 0 .54.1.68zM2 8c0-1.1.9-2 2-2h8a2 2 0 012 2v5h.5a.5.5 0 010 1h-13a.5.5 0 010-1H2V8zm1 5h10v-2.98l-.28.25a8.2 8.2 0 01-1.05.81c-.34.22-.76.42-1.17.42-.73 0-1.2-.51-1.5-.84l-.06-.07C8.6 10.2 8.36 10 8 10s-.59.2-.94.59l-.06.07c-.3.33-.77.84-1.5.84-.4 0-.8-.21-1.14-.42A8.9 8.9 0 013 10v3zm0-4.4a16.64 16.64 0 00.97.92c.3.27.63.53.92.71.32.2.52.27.61.27.26 0 .43-.17.82-.59C6.66 9.54 7.16 9 8 9s1.34.54 1.68.9v.01c.39.42.56.59.82.59.11 0 .33-.07.64-.27.3-.18.62-.44.92-.7A14.38 14.38 0 0013 8.6V8a1 1 0 00-1-1H4a1 1 0 00-1 1v.6z" fill={primaryFill} /></svg>;
}

const FoodCake16Regular = wrapIcon(rawSvg({}), 'FoodCake16Regular');
export default FoodCake16Regular;
      