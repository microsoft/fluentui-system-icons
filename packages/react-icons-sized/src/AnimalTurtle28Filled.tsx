import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.72 5c-2.16 0-3.7.66-4.82 1.76a9.15 9.15 0 00-2.1 3.93L5.1 13H2.75a.75.75 0 00-.75.75c0 1.35.77 2.49 1.87 3.1l-.58 1.43A1.97 1.97 0 005.1 21h2.2c.76 0 1.45-.44 1.78-1.13l.7-1.5c1.97.27 3.97.27 5.94 0l.7 1.5A1.97 1.97 0 0018.2 21h2.17a1.96 1.96 0 001.82-2.72L21.66 17H24c1.01 0 2-.78 2-1.89V14c0-1.7-1.48-3-3.18-3h-2.95l-.1-.3a8.92 8.92 0 00-2.17-3.95C16.46 5.65 14.89 5 12.72 5zm8.51 10.5l-.9-3h2.49c.98 0 1.68.73 1.68 1.5v1.11c0 .14-.17.39-.5.39h-2.77zm-3.97 2.61c.98-.2 1.95-.47 2.9-.82l.64 1.56a.47.47 0 01-.43.65H18.2a.47.47 0 01-.42-.27l-.52-1.12zm-11.73-.77c.9.31 1.8.56 2.72.76l-.53 1.13a.47.47 0 01-.42.27H5.1a.47.47 0 01-.43-.65l.64-1.53.22.02zm-.88-2.84l-.27.9a2.14 2.14 0 01-.72-.9h.99z" fill={primaryFill} /></svg>;
}

const AnimalTurtle28Filled = wrapIcon(rawSvg({}), 'AnimalTurtle28Filled');
export default AnimalTurtle28Filled;
      