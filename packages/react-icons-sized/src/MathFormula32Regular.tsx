import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.09 4.4a2.53 2.53 0 00-4.1 1.8L12.8 9H17a1 1 0 110 2h-4.36L11.49 26.3a4.53 4.53 0 01-7.67 2.9l-.52-.5a1 1 0 011.4-1.43l.51.5a2.53 2.53 0 004.28-1.62L10.63 11H8a1 1 0 110-2h2.78L11 6.04a4.53 4.53 0 017.33-3.2l.8.62a1 1 0 11-1.25 1.57l-.8-.63zm-.88 11.87c.56-.49 1.44-.3 1.75.38l1.86 4.11-5.53 5.53a1 1 0 001.42 1.41l4.99-4.99 1.57 3.48c.9 2 3.54 2.46 5.07.89l.38-.39a1 1 0 10-1.44-1.4l-.37.4c-.55.55-1.5.39-1.81-.33L22.2 21.2l5.5-5.5a1 1 0 00-1.42-1.41l-4.96 4.96-1.55-3.42a3.12 3.12 0 00-4.89-1.07l-.55.48a1 1 0 001.32 1.51l.55-.48z" fill={primaryFill} /></svg>;
}

const MathFormula32Regular = wrapIcon(rawSvg({}), 'MathFormula32Regular');
export default MathFormula32Regular;
      