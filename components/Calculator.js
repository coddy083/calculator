import { View, Text } from "react-native";
import { useCalculator } from "../useCalculator";
import { Styles } from "../Styles";

const {
  COLOR,
  Container,
  ButtonContainer,
  PadContainer,
  ResultContainerStyle,
  TouchButton,
} = Styles();

const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor = COLOR[type] || COLOR.NUM;

  return (
    <TouchButton
      onPress={onPress}
      flex={flex}
      backgroundColor={backgroundColor}
    >
      <Text style={{ color: "#fff", fontSize: 25 }}>{text}</Text>
    </TouchButton>
  );
};

const CalculatorShape = () => {
  const { input, hasInput, onPressNumber, onPressOperator, onPressReset } =
    useCalculator();

  return (
    <Container>
      <ResultContainerStyle>
        <Text style={{ color: "#fff", fontSize: 50 }}>{input}</Text>
      </ResultContainerStyle>
      <PadContainer>
        <ButtonContainer>
          <Button
            type="RESET"
            text={hasInput ? "C" : "AC"}
            onPress={onPressReset}
            flex={3}
          />
          <Button
            type="OPERATOR"
            text="/"
            onPress={() => {
              onPressOperator("/");
            }}
            flex={1}
          />
        </ButtonContainer>
        <ButtonContainer>
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              text={num}
              onPress={() => {
                onPressNumber(num);
              }}
              flex={1}
            />
          ))}
          <Button
            type="OPERATOR"
            text="x"
            onPress={() => {
              onPressOperator("*");
            }}
            flex={1}
          />
        </ButtonContainer>
        <ButtonContainer>
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              text={num}
              onPress={() => {
                onPressNumber(num);
              }}
              flex={1}
            />
          ))}
          <Button
            type="OPERATOR"
            text="-"
            onPress={() => {
              onPressOperator("-");
            }}
            flex={1}
          />
        </ButtonContainer>
        <ButtonContainer>
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              text={num}
              onPress={() => {
                onPressNumber(num);
              }}
              flex={1}
            />
          ))}
          <Button
            type="OPERATOR"
            text="+"
            onPress={() => {
              onPressOperator("+");
            }}
            flex={1}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            text="0"
            onPress={() => {
              onPressNumber(0);
            }}
            flex={2}
          />
          <Button
            text="."
            onPress={() => {
              onPressNumber(".");
            }}
            flex={1}
          />
          <Button
            type="RESULT"
            text="="
            onPress={() => {
              onPressOperator("=");
            }}
            flex={1}
          />
        </ButtonContainer>
      </PadContainer>
    </Container>
  );
};

export default () => {
  return (
    <View style={{}}>
      <CalculatorShape />
    </View>
  );
};
