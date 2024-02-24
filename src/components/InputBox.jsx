import styled from "styled-components";

const InputBox = ({
  width,
  height,
  placeholder,
  borderRadius,
  value,
  onChange,
  fontSize,
  padding,
}) => {
  return (
    <Input
      width={width}
      height={height}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      borderRadius={borderRadius}
      fontSize={fontSize}
      padding={padding}
    />
  );
};

const Input = styled.input`
  width: ${({ width, padding }) =>
    padding ? width : width ? `calc(${width} - 24px)` : "456px"};
  height: ${({ height, padding }) =>
    padding ? height : height ? `calc(${height} - 4px)` : "36px"};
  padding: ${({ padding }) => (padding ? padding : "2px 12px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "8px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};

  color: #fff;
  background-color: #999;
  outline: none;
  border: none;
  &::placeholder {
    color: #ccc;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InputBox;
