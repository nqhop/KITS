import { Button } from 'components/Button';
import { Card } from 'components/Card/Card';
import { PrimaryLayout } from 'components/Layout';
import styled from 'styled-components';
import discoverImg from 'assets/images/discover1.svg'

const AppWrapper = styled.div `
    /* background-color: #0cdaf5; */
    
    .row {
        margin-left: -10px;
        margin-right: -10px;
    }
    .row::after{
        content: '';
        clear: both;
        display: block;
    }
    .col {
        float: left;
        margin-left: 10px;
        margin-right: 10px;
    }
    .col-third {
        background-color: yellow;
        width: 33.33333%;
        width: calc(33.33333% - 20px);
    }
    .col-2-third {
        width: calc(66.66666% - 20px);
    }
    .card-wrapper {
        width: 372px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .discover{
        width: 716px;
        height: 354px;
        background: linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%), url(${discoverImg});
        border-radius: 12px;
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
                    <Card title="Spending" amount="2.00" percent={8.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                </div>

                <div className="row">
                    <div className="col col-2-third discover">
                        <p className="title"></p>
                    </div>
                    <div className="col col-third">
                        B
                    </div>
                </div>
            </AppWrapper>
        </PrimaryLayout>
    );
}