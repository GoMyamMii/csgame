import styled from "styled-components";

const ButtonBox = ({ width, height, children, type, onClick, fontSize }) => {
  return (
    <Button
      width={width}
      height={height}
      type={`${type}`}
      onClick={onClick}
      fontSize={fontSize}
    >
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: ${({ width }) => (width ? width : "504px")};
  height: ${({ height }) => (height ? height : "50px")};
  border-radius: 8px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};

  color: #fff;
  background-color: #666;
  border: none;
  cursor: pointer;
`;

export default ButtonBox;
