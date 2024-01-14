import { memo } from 'react';

import SubscribeForm from './SubscribeForm';
import { ErrorActionContainer } from './style';
import { RenderErrorMessage } from '../types';

const Subscribe: RenderErrorMessage['Render'] = memo(({ id }) => (
    <ErrorActionContainer>
        <SubscribeForm id={id} />
    </ErrorActionContainer>
));

export default Subscribe;
