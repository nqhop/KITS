import styled from 'styled-components';
import { MyLayout } from '../MyLayout/MyLayout';
import React from 'react';

const StyledUser = styled.div`
    
`
const StyledProduct = styled.div`
    
`

const User = () => {
    return <StyledUser>
        analysis of user
    </StyledUser>
}

const Product = () => {
    return <StyledProduct>
        analysis of product
    </StyledProduct>
}
export const Dashboard = ({ children }) => {
    return (
        <MyLayout title='Dashboard'>
            {children}
        </MyLayout>
    )
}

export const DashboardUser = () => {
    return <MyLayout title='DashboardUser'>
        DashboardUser
    </MyLayout>
}

export const DashboardProduct = () => {
    return <MyLayout title='DashboardProduct'>
        DashboardProduct
    </MyLayout>
}