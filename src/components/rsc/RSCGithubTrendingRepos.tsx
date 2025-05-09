"use client";

import RepositoryCard from "@/components/rsc/Repository";
import styled from "styled-components";

export const RSCGithubTrendingRepos = ({ trendRepos }: { trendRepos: any }) => {
  const repositories = trendRepos?.search.nodes as unknown as Array<
    any | undefined
  >;
  return (
    // TODO Wrap all this into a CSR component because like this  ( use client ) it's not a RSC anymore. need to not have styled-component inside or to change styled-component by css.module
    <div>
      <h3>Github Trending Repositories</h3>

      <RepoContainer>
        {repositories?.map((item) =>
          item ? <RepositoryCard repository={item} key={item.id} /> : null,
        )}
      </RepoContainer>
    </div>
  );
};

const RepoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;
