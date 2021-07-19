import React from 'react';
import { ModelSection, ModelsWrapper } from '../Model'
import DefaultOverlayComponent from '../DefaultOverlayComponent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model S',
            'Cybertruck',
            'Model 3',
            'Model Y',
            'Model X',
            'Semi',
            'Roadster',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayComponent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page
