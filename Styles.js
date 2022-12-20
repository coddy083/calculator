import styled from "styled-components/native";

export const Styles = () => {

    const COLOR = {
      RESULT: "#4e4c51",
      RESET: "#5f5e62",
      OPERATOR: "#f39c29",
      NUM: "#5c5674",
    };
    
    const Container = styled.View`
      height: 100%;
      background-color: #fff;
    `;
    
    const ButtonContainer = styled.View`
      flex-direction: row;
    `;
    
    const PadContainer = styled.View`
      height: 50%;
    `;
    
    const ResultContainerStyle = styled.View`
      height: 50%;
      background-color: #000;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 10px 10px;
    `;
    
    const TouchButton = styled.TouchableOpacity`
        flex: ${props => props.flex};
        background-color: ${props => props.backgroundColor};
        justify-content: center;
        align-items: center;
        height: 50px;
    `;
    return { COLOR, Container, ButtonContainer, PadContainer, ResultContainerStyle, TouchButton };
    };