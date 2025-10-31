import React from 'react';
import { icons } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

function App() {
  const allIconNames = Object.keys(icons); 
  
  return (
    <div>
      <h1>Lucide Icon Gallery ({allIconNames.length} Icons)</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
        gap: '30px', 
        padding: '20px' 
      }}>
        {allIconNames.map((iconName) => (
          <div key={iconName} style={{ textAlign: 'center' }}>
            <DynamicIcon name={iconName} size={36} color="#333" /> 
            <p style={{ 
                  fontSize: '10px', 
                  marginTop: '5px',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  wordBreak: 'break-word'
              }}>
                  {iconName}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
