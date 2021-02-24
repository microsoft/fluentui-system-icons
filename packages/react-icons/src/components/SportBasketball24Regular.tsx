import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportBasketball24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.94 21.96a10 10 0 10-1.88-19.91 10 10 0 001.88 19.9zm-9.36-11.1c.2-1.55.84-3.05 1.9-4.32L10.94 12l-1.09 1.09a8.81 8.81 0 00-3.34-1.61c-.65-.17-1.3-.3-1.89-.41h-.01c-.37-.08-.71-.14-1.03-.22zm-.07 1.51l.8.16h.01c.6.12 1.2.24 1.8.4.95.26 1.86.61 2.66 1.23l-3.3 3.3a8.47 8.47 0 01-1.97-5.09zm6.34 2.84c.67.87 1.04 1.81 1.3 2.78a26.2 26.2 0 01.4 1.78l.16.73a8.47 8.47 0 01-5.17-1.98l3.3-3.3zm3.39 5.2l-.23-.95-.07-.37c-.1-.47-.21-.98-.35-1.49a8.86 8.86 0 00-1.68-3.45L12 13.06l5.46 5.46a8.46 8.46 0 01-4.22 1.89zM13.06 12l1.21-1.21a10 10 0 003.37 1.83c.44.15.9.28 1.3.4l.47.13c.35.1.67.21.96.32a8.45 8.45 0 01-1.85 3.99L13.06 12zm6.78-.28l-.5-.15-1.22-.38a8.6 8.6 0 01-2.78-1.47l3.18-3.18a8.47 8.47 0 011.98 5.38l-.66-.2zm-2.38-6.24l-3.18 3.18a8.6 8.6 0 01-1.47-2.78c-.15-.41-.26-.81-.38-1.22l-.15-.5-.2-.66c1.91.02 3.82.68 5.38 1.98zm-6.08.88a10 10 0 001.83 3.37L12 10.93 6.54 5.49a8.45 8.45 0 013.99-1.85 13.21 13.21 0 01.45 1.42c.12.42.25.86.4 1.31z" fill={primaryFill} /></svg>;
};

export default SportBasketball24Regular;