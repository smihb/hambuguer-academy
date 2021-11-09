import React from 'react';
import styled from 'styled-components';

const OT = ({ children }) =>{
    return(
        <B>{children}</B>
    );
}
const B = styled.b`
    color: #f1911c;
`;
export default OT;