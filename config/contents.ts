import { subtitle } from "@/components/primitives";

export type ContentsConfig = typeof contentsConfig;

export const contentsConfig = {
  items: [
    {
      title: "从神经网络到 Hugging Face",
      subtitle: "神经网络和深度学习简史",
      abstract:
        "从去年开始，我读了十余本人工智能方面入门的书籍（参见文末附2），酝酿了两个月，花了两周时间写作此文。本文简要回顾了从感知机到深度学习及Hugging Face的历史，并试图以通俗的语言来介绍神经网络和深度学习的原理。",
      image: "https://cdn.hutusi.com/images/people/geoffery-hinton.jpg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-history-of-neural-networks",
      website: "hutusi.com",
      source: "胡涂说 hutusi.com",
      category: "AI",
    },
    {
      title: "从零到百亿美金之路",
      subtitle: "GitHub 和 GitLab 的故事",
      abstract: "GitHub 和 GitLab 的故事",
      image:
        "https://cdn.hutusi.com/images/posts/github-founders-and-first-employee.jpeg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-story-of-github-and-gitlab",
      website: "hutusi.com",
      source: "胡涂说 hutusi.com",
      category: "Git",
    },
    {
      title: "改变世界的一次代码提交",
      subtitle: "Git 第一次提交的源代码分析及带来的启示",
      abstract: "Git 第一次提交的源代码分析及带来的启示",
      image: "https://cdn.hutusi.com/images/people/linus-torvalds.jpg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-greatest-git-commit",
      website: "hutusi.com",
      source: "胡涂说 hutusi.com",
      category: "Git",
    },
  ],
};
