import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  BlogContainer,
  BlogIntro,
  BlogTitle,
} from "../styles/Blog.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Blog: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "blog")) {
      blog.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
      <Usage cmd="blog" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="blog">
      <BlogIntro>
        “Wanna know what I think about what's happening in the AI world?” <br />
        Here are my thoughts on the topic.
      </BlogIntro>
      {blog.map(({ id, title }) => (
        <BlogContainer key={id}>
          <BlogTitle>{`${id}. ${title}`}</BlogTitle>
        </BlogContainer>
      ))}
      <Usage cmd="blog" marginY />
    </div>
  );
};

const blog = [
  {
    id: 1,
    title: "The Hidden Power of RAG: Why Long-Context Models Aren’t Enough",
    url: "https://medium.com/@robbespo/the-hidden-power-of-rag-why-long-context-models-arent-enough-e322b90cadb0",
  },
  {
    id: 2,
    title: "Notes on Intelligent Systems for Pattern Recognition",
    url: "https://drive.google.com/file/d/1KGtf286NtRRk_u_uSGKDcLLh6FMNIyex/view?usp=sharing",
  },
  {
    id: 3,
    title: "Notes on Information Retrieval",
    url: "https://drive.google.com/file/d/1w2C1IiM-2YhHoFQRI7nLzv8TRP4HWEWq/view?usp=sharing",
  },
  // when adding a new project, make sure to check the line 33 isArgInvalid(...)
];

export default Blog;
