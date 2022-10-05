import styled from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 4.18rem;
  letter-spacing: 0.013rem;
`;

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 2.25rem;
  letter-spacing: 0.006rem;
  text-align: center;
`;

const BodyText = styled.p`
  color: #737373;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.875rem;
  letter-spacing: 0.013rem;
`;

const Btn = styled.button``;

export { Heading, SubHeading, BodyText, Btn };
