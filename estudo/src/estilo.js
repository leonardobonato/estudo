import styled from 'styled-components'
import Background from './assets/bg image1.svg'

//criar um componente aqui dentro, componente sempre com inicial maiúscula
//no styled.div, estou dizendo que meu componente é styled e vai ser uma div
//depois, estilizo tudo dentro da crase
//export é para exportar o meu componente


export const Container = styled.div`
background: url('${Background}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 4em;


`
export const Imagem = styled.img`
margin-top: 3em;
`

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 4.5em 3em;
display: flex;
flex-direction: column;

`

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
margin-bottom: 80px;
text-align: center;
color: #FFFFFF;
`

export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left: 25px;



`

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 345px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;

color: #FFFFFF;
margin-bottom: 34px;

`

export const Botao = styled.button`
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
width: 342px;
height: 74px;
border: none;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&:hover{

    opacity: 0.8;
}
&:active{

    opacity: 0.5;
}

`

export const User = styled.li`
display: flex;
justify-content: space-around;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 345px;
height: 58px;
border: none;
outline: none;
margin-top: 20px;

p{
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #ffffff;
display: flex;
align-items: center;

}

button{

    background: none;
    border: none;
    cursor: pointer;
}
`