import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Roberto Esposito</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a research engineer</HighlightAlt> at <HighlightAlt>Weaviate</HighlightAlt>.
      </p>
      <p>
        I am passionate about everything related to <HighlightSpan>AI</HighlightSpan> and <HighlightSpan>Information Retrieval</HighlightSpan>.
      </p>
    </AboutWrapper>
  );
};

export default About;
