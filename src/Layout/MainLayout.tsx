import React from 'react';
import Navigation from './components/Navigation';

interface MainLayoutProps {
  content: JSX.Element | JSX.Element[] | Element | Element[];
}

const MainLayout = ({ content }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Navigation />
      {content}
    </div>
  );
};

export default MainLayout;
