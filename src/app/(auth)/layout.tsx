import React from 'react';
import Inject from './Inject';
type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full [cl-rootBox] [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
      {children}
      <Inject />
    </div>
  );
};

export default Layout;
