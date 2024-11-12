import styled from "styled-components";

export const WorkIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const WorkList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
    white-space: pre-wrap;
  }
`;
