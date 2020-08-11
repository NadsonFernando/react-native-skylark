import React from 'react';

import Title from './src/Title';

const App: React.FC = () => {
  return (
    <>
      <Title level={1} text="Texto skylark" />
      <Title level={2} text="Texto skylark" />
      <Title level={3} text="Texto skylark" />
      <Title level={4} text="Texto skylark" />
    </>
  );
};

export default App;
