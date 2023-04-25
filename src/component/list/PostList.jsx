import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// 아래에 return으로 출력될 Wrapper 컴포넌트에 백틱 안에 css속성이 적용됨
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-contet: center;

    & > * {                        // & 부모, > 선택, * 전체, 전부다
        :not(:last-child) {        // not() = () 제외
            margin-bottom: 16px;
        }
    }

    // 해당 부모의 last-child를 제외한 모든 자식에게 margin-bottom:16px 적용
    // & 는 Sass에서 제공하는 parent selector를 의미, 부모 자신을 선택하는 selector
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;