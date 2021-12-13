import React, { useCallback, useRef, useState } from 'react';
import { css } from '@emotion/react';
import writePostApi from '../../types/api/post/writePostApi';

const style = css`
  display: flex;
`;

const formStyle = css`
  display: block;
`;

const QnA = () => {
  const [post, setPost] = useState<Post>({
    title: '',
    content: '',
  });

  const onChange = (e: any) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const writePost = useCallback(() => {
    writePostApi(post)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  return (
    <section css={style}>
      <div>post test</div>
      <form css={formStyle}>
        <input type="text" name="title" onChange={onChange} />
        <input type="text" name="content" onChange={onChange} />
        <button
          onClick={(e) => {
            e.preventDefault();
            writePost();
          }}
        >
          post
        </button>
      </form>
    </section>
  );
};

export default QnA;
