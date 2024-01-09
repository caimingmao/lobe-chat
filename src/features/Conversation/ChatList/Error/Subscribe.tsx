import { RenderErrorMessage } from '@lobehub/ui';
import { memo } from 'react';

import SubscribeForm from './SubscribeForm';
import { ErrorActionContainer } from './style';

const Subscribe: RenderErrorMessage['Render'] = memo(({ id }) => (
    <ErrorActionContainer>
        <SubscribeForm id={id} />
    </ErrorActionContainer>
));

export default Subscribe;
