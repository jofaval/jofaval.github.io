// Vendors
import React, { useMemo, useState } from "react";
// Components
import Image from "next/image";
import Link from "next/link";

type SidebarElementType = {
  name: string;
  to: string;
  icon?: string;
};

type SidebarElementPropsType = {} & SidebarElementType;

const SidebarElement: React.FC<SidebarElementPropsType> = ({
  name,
  to,
  icon = undefined,
}) => (
  <div className="sidebar-element__container">
    <div className="sidebar-element">
      <Link href={to}>
        <a className="sidebar-element__link">
          {icon && (
            <span className="sidebar-element__icon__container">
              <Image
                src={icon}
                alt={`Icon for ${name}`}
                className="sidebar-element__icon"
              />
            </span>
          )}

          {name}
        </a>
      </Link>
    </div>
  </div>
);

const initialSidebarElements: SidebarElementType[] = [
  {
    name: "Home",
    to: "/home",
  },
];

type SidebarHookType = {
  sidebarElements: SidebarElementType[];
  selectedSidebarElements: SidebarElementType[];
  onToggleItem: (sidebarIndex: number) => void;
};

const SidebarHook = (): SidebarHookType => {
  const [sidebarElements] = useState<SidebarElementType[]>(
    initialSidebarElements
  );
  const [selectedSidebarElementsIds, setSelectedSidebarElementsIds] = useState<
    Number[]
  >([]);
  const selectedSidebarElements = useMemo<SidebarElementType[]>(
    () =>
      sidebarElements.filter((_, index: number) =>
        selectedSidebarElementsIds.includes(index)
      ),
    [sidebarElements, selectedSidebarElementsIds]
  );
  const onToggleItem = useMemo(
    () => (sidebarIndex: number) => {
      let newSelectedSidebarElementsIds = [...selectedSidebarElementsIds];

      if (sidebarElements?.[sidebarIndex]) {
        newSelectedSidebarElementsIds = newSelectedSidebarElementsIds.filter(
          (_, index: number) => index !== sidebarIndex
        );
      } else {
        newSelectedSidebarElementsIds.push(sidebarIndex);
      }

      setSelectedSidebarElementsIds(newSelectedSidebarElementsIds);
    },
    [selectedSidebarElementsIds, sidebarElements]
  );

  return {
    sidebarElements,
    selectedSidebarElements,
    onToggleItem,
  };
};

const Sidebar: React.FC = () => {
  const { sidebarElements, selectedSidebarElements, onToggleItem } =
    SidebarHook();

  const renderSidebarElement = (sidebar: SidebarElementType, index: number) => (
    <SidebarElement key={index} {...sidebar} />
  );

  return (
    <div className="sidebar__container w-1/3 md:w-1/5 hidden md:block h-full bg-zinc-900 text-white">
      <div className="sidebar__title__container dark:bg-zinc-900 dark:text-white p-1">
        <p className="sidebar__title text-xs ml-2 my-1 font-thin uppercase">
          Sidebar
        </p>
      </div>

      <div className="sidebar px-1">
        <div className="sidebar__content dark:bg-zinc-800 h-100">
          {selectedSidebarElements && (
            <div className="siderbar__elements--selected">
              {selectedSidebarElements?.map(renderSidebarElement)}
            </div>
          )}

          <div className="siderbar__elements">
            {sidebarElements?.map(renderSidebarElement)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
