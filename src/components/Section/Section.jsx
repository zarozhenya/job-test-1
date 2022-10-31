import { Heading, StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && (
        <>
          <Heading>{title}</Heading>
          <hr />
        </>
      )}
      {children}
    </StyledSection>
  );
};
