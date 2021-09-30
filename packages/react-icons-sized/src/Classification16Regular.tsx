import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 4.1c.21.02.45.13.69.36.23.24.34.48.36.69.02.19-.04.4-.27.63-.53.53-1.43 1.12-2.51 1.82l-.06.04-.7-.7.04-.06c.7-1.08 1.29-1.98 1.82-2.51.22-.23.44-.29.63-.27zM9.78 8.37a17.1 17.1 0 002.56-1.88c.42-.42.6-.92.56-1.43-.05-.5-.3-.95-.66-1.3-.35-.36-.8-.61-1.3-.66a1.77 1.77 0 00-1.43.56c-.59.6-1.22 1.55-1.88 2.56L6.6 5.17a2 2 0 00-2.83 0l-.71.7a1 1 0 000 1.42l-.53.53a1.25 1.25 0 000 1.77l3.89 3.89c.49.49 1.28.49 1.77 0l.53-.53a1 1 0 001.41 0l.7-.7a2 2 0 000-2.84L9.79 8.37zm-.86.55l1.2 1.2a1 1 0 010 1.42l-.7.7L3.75 6.6l.7-.71a1 1 0 011.42 0l1.2 1.2 1.56 1.56.28.28zM3.76 8L8 12.24l-.53.53c-.1.1-.26.1-.35 0l-3.9-3.89a.25.25 0 010-.35L3.77 8z" fill={primaryFill} /></svg>;
}

const Classification16Regular = wrapIcon(rawSvg({}), 'Classification16Regular');
export default Classification16Regular;
      