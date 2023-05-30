import styled from 'styled-components';
import { MyLayout } from '../MyLayout/MyLayout';
import React,  { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

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

const DemoPie = () => {
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

export const DashboardUser = () => {
    return <MyLayout title='DashboardUser'>
        DashboardUser
        <DemoPie/>
    </MyLayout>
}

export const DashboardProduct = () => {
    return <MyLayout title='DashboardProduct'>
        DashboardProduct
    </MyLayout>
}