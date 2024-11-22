import styled from "styled-components";

export const CardCustom = styled.div`
  padding-bottom: 24px;

  background-color: #fff;
`;

export const ImageCon = styled.div`
  margin-bottom: 24px;

  & img {
    width: 343px;
    height: 240px;
  }
`;

export const CardContent = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  text-align: left;

  & > p {
    font-family: "Montserrat";
  }

  & > h3 {
    margin-bottom: 16px;

    font-family: "Fraunces";
    font-size: 32px;
    color: #1c232b;
  }

  & > p:first-child {
    margin-bottom: 12px;

    text-transform: uppercase;

    font-size: 12px;

    color: #6c7289;
  }
`;

export const CardContentText = styled.p`
  margin-bottom: 16px;

  font-size: 14px;
  line-height: 1.64;

  color: #6c7289;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  font-family: "Fraunces";

  & > p:first-child {
    margin-right: 20px;
    margin-bottom: 20px;

    font-size: 32px;

    color: #3d8168;
  }

  & > p:last-child {


    font-family: "Montserrat";
    font-size: 23px;
    line-height: 1.77;
    text-decoration: line-through;

    color: #6c7289;
  }
`;

export const ButtonCustom = styled.button`
  font-family: "Montserrat";
`;
