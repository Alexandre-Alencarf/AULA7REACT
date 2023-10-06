import { Link } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

export const Titulo = styled.h1`
color: blue;
background-color: yellow;
font-size: 36px;
text-align: center;
margin: 20px 0;
`
export const Navegacao = styled.nav`
width: 100%;
background-color: yellow;
`
export const Lista = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
list-style: none;
text-decoration: none;
`
export const ItemLista = styled(Link)`
text-decoration: none;
color: #2215d6;
`
export const TituloCard = styled.h2`
color: blue;
font-size: 24px;
`
export const SubtituloCard = styled.h3`
color: #3513f3;
font-size: 18px;
font-style: italic;
`
export const ImagemCard = styled.img`
max-width: 300px;
border-radius: 50%;
`
export const DescricaoCard = styled.p`
font-size: 16px;
line-height: 1.3;
`

export const DuracaoCard = styled.span`
    color: blue;
    font-size: 16px;
`
export const SobreCard = styled.p`
font-size: 14px;
line-height: 1.5;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    background-color: #d7f1ea;
    max-width: 75vw;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
`