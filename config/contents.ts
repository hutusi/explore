import { subtitle } from "@/components/primitives";

export type ContentsConfig = typeof contentsConfig;
export type ContentsItemsConfig = typeof contentsConfig.items;

export const contentsConfig = {
  paginate: 6,
  categories: { article: "文章", video: "视频", podcast: "播客" },
  items: [
    {
      title: "改变世界的一次代码提交",
      subtitle: "Git 第一次提交的源代码分析及带来的启示",
      abstract: "Git 第一次提交的源代码分析及带来的启示",
      image: "https://cdn.hutusi.com/images/people/linus-torvalds.jpg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-greatest-git-commit",
      website: "https://hutusi.com/",
      source: "胡涂说 hutusi.com",
      category: "article",
      tags: "Git",
      date: "2024-03-25 22:43:00 +0800",
    },
    {
      title: "从零到百亿美金之路",
      subtitle: "GitHub 和 GitLab 的故事",
      abstract: "GitHub 和 GitLab 的故事",
      image:
        "https://cdn.hutusi.com/images/posts/github-founders-and-first-employee.jpeg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-story-of-github-and-gitlab",
      website: "https://hutusi.com/",
      source: "胡涂说 hutusi.com",
      category: "article",
      tags: "Git,Startup",
      date: "2024-03-25 22:43:00 +0800",
    },
    {
      title: "从神经网络到 Hugging Face",
      subtitle: "神经网络和深度学习简史",
      abstract:
        "从去年开始，我读了十余本人工智能方面入门的书籍（参见文末附2），酝酿了两个月，花了两周时间写作此文。本文简要回顾了从感知机到深度学习及Hugging Face的历史，并试图以通俗的语言来介绍神经网络和深度学习的原理。",
      image: "https://cdn.hutusi.com/images/people/geoffery-hinton.jpg",
      author: "hutusi",
      url: "https://hutusi.com/articles/the-history-of-neural-networks",
      website: "https://hutusi.com/",
      source: "胡涂说 hutusi.com",
      category: "article",
      tags: "Git,Startup",
      date: "2024-03-25 22:43:00 +0800",
    },
    {
      title: "向量数据库",
      subtitle: "",
      abstract:
        "笔者最近因为开发 ChatFiles 和 VectorHub 两款开源项目的需要从而对向量数据库（Vector Database）进行了学习，在对主流的向量数据库和搜索算法有了大概的了解后，笔者决定将这些知识整理成一篇文章，希望能够帮助到大家。",
      image: "https://storage.guangzhengli.com/images/5dAeV5.jpg",
      author: "Guangzheng Li",
      url: "https://guangzhengli.com/blog/zh/vector-database/",
      website: "https://guangzhengli.com/",
      source: "Guangzheng Li",
      category: "article",
      tags: "Git,Startup",
      date: "2024-03-26 21:10:00 +0800",
    },
    {
      title: "代码搜索引擎：基础篇",
      subtitle: "",
      abstract:
        "我们将和大家分享代码搜索引擎的调研报告，期望能帮助读者了解代码搜索引擎如何工作。",
      image:
        "https://zhenghe-md.github.io/blog/2021/05/09/search-engine-for-codes-fundamentals/sourcegraph-architecture.png",
      author: "郑鹤",
      url: "https://zhenghe-md.github.io/blog/2021/05/09/search-engine-for-codes-fundamentals/",
      website: "https://zhenghe-md.github.io/blog/",
      source: "ZhengHe",
      category: "article",
      tags: "Git,创业",
      date: "2024-03-26 21:38:00 +0800",
    },
    {
      title: "走进比尔：解码比尔·盖茨 Inside Bill's Brain",
      subtitle: "Decoding Bill Gates",
      abstract: "Netflix 纪录片",
      image: "https://videoimg.ws.126.net/cover/20220610/1QrFwPW6I_cover.jpg",
      author: "Netflix",
      url: "https://www.bilibili.com/video/BV143411J7tR/?spm_id_from=333.337.search-card.all.click&vd_source=27213f94fd39dee49ec6951f0dcd863f",
      website: "https://www.bilibili.com/",
      source: "BiliBili",
      category: "video",
      tags: "纪录片",
      date: "2024-03-28 20:38:00 +0800",
    },
    {
      title: "The greatest designs of modern times",
      subtitle: "",
      abstract:
        "What does it take to become a design icon? There‘s more to it than good looks. These 100 products have made our lives simpler, better, and yes, more stylish.",
      image:
        "https://fortune.com/img-assets/wp-content/uploads/2020/03/DES04.20.icons-animated.gif",
      author: "Daniel Bentley",
      url: "https://fortune.com/longform/100-best-designs/",
      website: "https://fortune.com/",
      source: "Fortune",
      category: "article",
      tags: "设计",
      date: "2024-03-28 21:45:00 +0800",
    },
    {
      title: "Learning to Learn",
      subtitle: "A Critical Skill For Every Software Engineer",
      abstract: "",
      image:
        "https://www.simplethread.com/wp-content/uploads/2020/09/blooms-taxonomy_upside_down_pyramid.png",
      author: "Nick Agliano",
      url: "https://www.simplethread.com/learning-to-learn/",
      website: "https://www.simplethread.com",
      source: "simplethread",
      category: "article",
      tags: "学习",
      date: "2024-03-28 21:45:00 +0800",
    },
    {
      title:
        "Sam Altman: OpenAI, GPT-5, Sora, Board Saga, Elon Musk, Ilya, Power & AGI Audio Player",
      subtitle: "",
      abstract: "",
      image:
        "https://lexfridman.com/wordpress/wp-content/uploads/2019/03/lex_fridman_deep_learning_course.jpg",
      author: "Lex Fridman",
      url: "https://lexfridman.com/sam-altman-2",
      website: "https://lexfridman.com",
      source: "lexfridman.com",
      category: "podcast",
      tags: "OpenAI,AI,创业",
      date: "2024-03-29 20:36:00 +0800",
    },
  ],
};
