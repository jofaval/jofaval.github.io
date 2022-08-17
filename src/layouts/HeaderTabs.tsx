// Vendors
import React from "react";
// Hooks
import { useRouter } from "next/router";

type HeaderTabType = {
  name: string;
  to: string;
};

const HEADER_TABS: HeaderTabType[] = [
  {
    name: "Home",
    to: "/home",
  },
];

type HeaderTabPropsType = {
  name: string;
};

const HeaderTab = ({
  name,
  active,
}: HeaderTabPropsType & { active: boolean }) => (
  <div
    className={`header-tab__container p-1 ${
      active && "bg-white"
    } cursor-pointer`}
  >
    <div className="header-tab">{name}</div>
  </div>
);

type HeaderTabsListPropType = {};

const HeaderTabsList = ({}: HeaderTabsListPropType) => {
  const router = useRouter();

  return (
    <div className="header-tabs__container container bg-zinc-200 p-2 pb-0">
      {/* <p className="header-tabs__title">Header</p> */}
      <div className="header-tabs flex">
        {HEADER_TABS.map((props: HeaderTabType, index: number) => (
          <HeaderTab
            key={index}
            {...props}
            active={router.pathname.endsWith(props.to)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderTabsList;
