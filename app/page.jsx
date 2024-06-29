import React from 'react';
import HomeContainer from '@/containers/home';

export const runtime = "edge"; 

function HomePage() {
  return (
    <div>
      <HomeContainer />
    </div>
  );
}

export default HomePage;
