import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Nunito', sans-serif;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style:none;
    }
`

export default GlobalStyles