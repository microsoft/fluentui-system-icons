import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodEgg20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.06 9.58a.5.5 0 10.14-1c-.94-.12-1.78.6-1.78 1.64a.5.5 0 001 0c0-.46.32-.68.64-.64z" fill={primaryFill} /><path d="M10.4 14.96a4.5 4.5 0 100-8.99 4.5 4.5 0 000 9zm0-1a3.5 3.5 0 110-6.99 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M11.63 2.07c1.04.07 2.02.38 2.72.83a7.6 7.6 0 012.7 2.83 7.1 7.1 0 011.05 3.82 9.84 9.84 0 01-.21 1.53c-.06.32-.1.66-.04 1.38.07.85-.1 1.78-.46 2.6a4.54 4.54 0 01-1.68 2.06 5.71 5.71 0 01-5.22.49c-.8-.33-1.08-.4-1.38-.42h-.65c-.3.02-.67.03-1.18.03a5.05 5.05 0 01-4.56-2.84C1.59 12.2 1.62 8.9 4.1 6.94c.75-.6.98-.8 1.24-1.22.42-.7.82-1.25 1.3-1.73A7.7 7.7 0 018.4 2.74a5.9 5.9 0 013.23-.67zm-.07 1c-.9-.06-1.85.1-2.68.55A6.7 6.7 0 007.35 4.7c-.4.4-.75.87-1.14 1.53-.37.6-.73.9-1.49 1.5-2 1.59-2.1 4.3-1.11 6.19a4.05 4.05 0 003.67 2.3l1.14-.02h.02c.27-.01.5-.02.73 0 .48.02.89.16 1.7.48 1.46.58 3 .41 4.31-.4.54-.34 1-.92 1.3-1.61.3-.7.43-1.46.38-2.13a5.82 5.82 0 01.08-1.87c.06-.3.12-.63.16-1.19a6.12 6.12 0 00-.91-3.26 6.6 6.6 0 00-2.37-2.48 4.99 4.99 0 00-2.26-.67z" fill={primaryFill} /></svg>;
};

export default FoodEgg20Regular;