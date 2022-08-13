import type { NextApiRequest, NextApiResponse } from "next";

type SocialMediaLink = {
  label: string;
  href: string;
  icon?: string;
};

export default (_: NextApiRequest, res: NextApiResponse<SocialMediaLink[]>) => {
  res.status(200).json([
    {
      label: "github/jofaval",
      href: "https://github.com/jofaval",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
    },
    {
      label: "/in/jofaval",
      href: "https://linkedin.com/in/jofaval",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
  ]);
};
