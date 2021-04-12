import React from 'react'
import styled from "styled-components"



function Main(props) {
    console.log(props.user.name)
    const Con = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-size:1.5rem;
        .picture{
        background-image:url(https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-white-background-profile-107327860.jpg});
        background-size:cover;
        background-positon:center;
        width:15rem;
        height:15rem;
       
        }
        transition:.200ms;
        &:hover{
            opacity:.8;
            cursor:pointer;
        }
       


`
    return (
        <Con>
            <div className="picture"></div>
            <span>{props.user.name}</span>
        </Con>
    )
}

export default Main
