import React from 'react';

import Header from './Header/index';
import RightBar from './RightBar/index';
import FallingBlock from './FallingBlock/index';

export default function App() {
  return (
      <div style={styles.app}>
        <Header />
        <RightBar />
        <FallingBlock />
      </div>
  );
}

const styles = {
  app: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#999',
  },
};