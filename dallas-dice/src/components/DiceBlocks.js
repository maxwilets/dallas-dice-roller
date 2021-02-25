import React from 'react';
import styled from 'styled-components';

const DieStyles = styled.div``

export default function Dice (dice) {
  dice.map(die => {
    return (
      <DieStyles>
        <Die die={die} value={die.value} />
      </DieStyles>
    );
  });
}
