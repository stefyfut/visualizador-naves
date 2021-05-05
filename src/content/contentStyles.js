import styled from 'styled-components';

const media={
    desktop:'@media(min-width:1000px)'
}

export const Content =styled.div`
    width: 100%;
    norder: 1px solid red;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;

    select{
        width: 90%;
        margin-top: 20px;
        padding-left: 20px;
        font-size: 17px;
    }

    select option{
        margin-left:20px;
    }

    .boxSelect{
        height:30px;
        background-color:#000;
        color:#fff;
        border: 1px solid #fff;
    }

`;

export const ContentBox =styled.div`
    width: 90%;
    border: 1px solid #fff;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    background-color:rgba(255, 255, 255, 0.5);
    margin-top:20px;
    padding-bottom:20px;

    select{
        width: 90%;
        margin-top: 20px;
    }
    hr{
        width:50%;
        border:1px solid #000;
    }

    .boxSelect{
        height:30px;
        background-color:#000;
        color:#fff;
        border: 1px solid #fff;
    }

`;