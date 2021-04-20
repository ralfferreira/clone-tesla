import React, { useCallback, useState } from 'react';
import { CarModel } from '../ModelsContext';
import { Container } from './styles';
import useWrapperScroll from '../useWrapperScroll'

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
  const { scrollY } = useWrapperScroll()

  // const getSectionDimensions = useCallback(() => {})

  const [dimensions, setDimensions] = useState<SectionDimensions>()

  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
