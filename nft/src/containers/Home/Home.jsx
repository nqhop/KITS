import { Button } from 'components/Button';
import { Card } from 'components/Card/Card';
import { PrimaryLayout } from 'components/Layout';
import styled from 'styled-components';
import discoverImg from 'assets/images/discover1.svg'

const AppWrapper = styled.div`
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
        padding-left: 10px;
        padding-right: 10px;
    }
    .col-third {
        background-color: yellow;
        width: 33.33333%;
        /* width: calc(33.33333% - 20px); */
        width: 33.33333%;
    }
    .col-2-third {
        background-color: red;
        /* width: calc(66.66666% - 20px); */
        width: 66.66666%;
    }
    .col-haft {
        width: 50%;
    }
    .card-wrapper {
        width: 372px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .mb-16{
        margin-bottom: 16px;
    }
    .mr-8{
        margin-right: 8px;
    }
    .discover{
        padding: 60px;
        /* width: 716px; */
        height: 354px;
        /* background: linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%), url(${discoverImg}); */
        background: url(${discoverImg});
        border-radius: 12px;
        .title {
            font-weight: 700;
            font-size: 54px;
            line-height: 120%;
            /* or 65px */
            color: #fff;
            letter-spacing: -0.02em;
            margin-top :0px;
        }
        Button {
            font-weight: 700;
        }
    }

    /* .t1{
        background-color: red;
    }
    .t2{
        background-color: blue;
    } */
`

export const Home = () => {
    return (
        <PrimaryLayout>
            <AppWrapper>
                <Button percent={10}>8.1%</Button>
                <Button textColor="red" percent={-10}>3.2%</Button>
                <Button width="77px" height="32px" textColor="white" bgColor="#5429FF">Following</Button>
                <Button width="77px" height="32px" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>

                <div className='card-wrapper'>
                    <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                    <Card title="Spending" amount="2.00" percent={8.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                    <Card title="ROI" content="+14.02" percent={-5.1}></Card>
                </div>

                <div className="row mb-16">
                    <div className="col col-2-third discover">
                        <p className="title">Discover, Create and Sell Your Own NFT.</p>
                        <Button className="mr-8" width='128px' height='46px'>Discover</Button>
                        <Button width='128px' height='46px' bgColor='transparent' textColor='#fff' boderColor='#fff'>Create</Button>
                    </div>

                    <div className="col col-third four-card">
                        <div className="row mb-16">
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                            <div className="col col-haft">
                                <Card title="Revenue" amount="5.00" percent={12.3}></Card>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-2-third">
                        A
                    </div>
                    <div className="col col-third">
                        B
                    </div>
                </div>
            </AppWrapper>
        </PrimaryLayout>
    );
}