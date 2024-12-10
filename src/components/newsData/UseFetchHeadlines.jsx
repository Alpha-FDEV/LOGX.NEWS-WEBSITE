function UseFetchHeadlines() {
  const headlines = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "William Lewis",
      title: "Opinion | On political endorsement - The Washington Post",
      description: "A note from the publisher:",
      url: "https://www.washingtonpost.com/opinions/2024/10/25/washington-post-endorsement/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4XZEO5PP4ZG2VKS73CVZQ6IQHU.jpg&w=1440",
      publishedAt: "2024-10-25T20:38:49Z",
      content:
        "William Lewis is publisher and chief executive officer of The Washington Post.\r\nThe Washington Post will not be making an endorsement of a presidential candidate in this election. Nor in any future p… [+131 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Amber Ferguson, Drea Cornejo",
      title:
        "She threw a 70s-themed ‘cancerversary’ to ‘dance in death’s face’ - The Washington Post",
      description:
        "Deltra James was 33 when she was diagnosed with Stage 4 triple-negative metastatic breast cancer. Five years later, this is how she’s celebrating life.",
      url: "https://www.washingtonpost.com/lifestyle/2024/10/25/breast-cancer-survivor-cancerversary/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SNT7D3UREZB5PLY7M3INCORT64.JPG&w=1440",
      publishedAt: "2024-10-25T20:35:24Z",
      content:
        "NAUGATUCK, Conn. Deltra James remembers spendingthe summer of 2019 being shuffled room to room through a New England hospital after beingtold she had a 12 percent chance of living five more years.\r\nB… [+193 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Christopher Null",
      title:
        "Apple AirPods Pro 2 With Hearing Aid Feature Review: A Promising Step",
      description:
        "Apple takes on hearing loss, and its first product is a big step in the right direction.",
      url: "https://www.wired.com/review/apple-airpods-pro-2-with-hearing-aid-feature/",
      urlToImage:
        "https://media.wired.com/photos/671577232009d044328f83e0/191:100/w_1280,c_limit/AirPods%20Pro%202%20Abstract%20Background%20102024%20SOURCE%20Apple.jpg",
      publishedAt: "2024-10-21T11:00:00Z",
      content:
        "You can make some of these adjustments by manipulating the stems of the earbuds, which now have even more functions to master. These hardware operations can be finicky, and in almost every situation,… [+1764 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Christopher Null",
      title:
        "Apple AirPods Pro 2 With Hearing Aid Feature Review: A Promising Step",
      description:
        "Apple takes on hearing loss, and its first product is a big step in the right direction.",
      url: "https://www.wired.com/review/apple-airpods-pro-2-with-hearing-aid-feature/",
      urlToImage:
        "https://media.wired.com/photos/671577232009d044328f83e0/191:100/w_1280,c_limit/AirPods%20Pro%202%20Abstract%20Background%20102024%20SOURCE%20Apple.jpg",
      publishedAt: "2024-10-21T11:00:00Z",
      content:
        "You can make some of these adjustments by manipulating the stems of the earbuds, which now have even more functions to master. These hardware operations can be finicky, and in almost every situation,… [+1764 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ILLIA NOVIKOV, EFREM LUKATSKY",
      title:
        "Ukraine's Zelenskyy says North Korean troops are poised to join the war, cancels UN chief's visit - The Associated Press",
      description:
        "Ukrainian President Volodymyr Zelenskyy claims North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend. Western officials have warned that North Korean units joining the fight would stoke the almost three…",
      url: "https://apnews.com/article/russia-ukraine-war-north-korea-troops-9d83c419ef741259d09860b576b8a27d",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b",
      publishedAt: "2024-10-25T20:22:00Z",
      content:
        "KYIV, Ukraine (AP) North Korean troops are poised to be deployed by Russia on the battlefield in Ukraine as early as this weekend, Ukrainian President Volodymyr Zelenskyy claimed Friday.\r\nWestern off… [+4533 chars]",
    },
  ];

  return headlines;
}

export default UseFetchHeadlines;
