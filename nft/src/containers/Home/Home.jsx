import { Button } from 'components/Button';
import { Card } from 'components/Card/Card';
import { PrimaryLayout } from 'components/Layout';
import styled from 'styled-components';

const AppWrapper = styled.div `
    /* background-color: #0cdaf5; */
    
    .card-wrapper {
        width: 360px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
`

export const Home = () => {
    return (
        <PrimaryLayout>
            <AppWrapper>
                <Button percent={10}>8.1%</Button>
                <Button textColor="red" percent={-10}>3.2%</Button>
                <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
                <Button width={77} height={32}  bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>

                <div className='card-wrapper'>
                    <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                    {/* <Card title="Spending" amount="2.00" percent={8.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card> */}
                </div>
            </AppWrapper>
        </PrimaryLayout>
    );
}