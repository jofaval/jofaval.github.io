import React, { useMemo, useState } from "react";

type SidebarElementType = {
  name: string;
  to: string;
  icon?: string;
};

type SidebarElementPropsType = {} & SidebarElementType;

const SidebarElement = ({
  name,
  to,
  icon = undefined,
}: SidebarElementPropsType) => {
  <div className="sidebar-element__container">
    <div className="sidebar-element">
      {icon && (
        <span className="sidebar-element__icon__container">
          <img
            src={icon}
            alt={`Icon for ${name}`}
            className="sidebar-element__icon"
          />
        </span>
      )}
      <a href={to} className="sidebar-element__link">
        {name}
      </a>
    </div>
  </div>;
};

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
  const selectedSidebarElements = useMemo<Number[]>(
    () =>
      sidebarElements.filter((_, index: number) =>
        selectedSidebarElementsIds.includes(index)
      ),
    [sidebarElements, selectedSidebarElementsIds]
  );
  const onToggleItem = useMemo(
    () => (sidebarIndex: number) => {
      let newSelectedSidebarElementsIds = [...selectedSidebarElementsIds];

      if (sidebarElements.includes(sidebarIndex)) {
        newSelectedSidebarElementsIds = newSelectedSidebarElementsIds.filter(
          (value: number) => value !== sidebarIndex
        );
      } else {
        newSelectedSidebarElementsIds.push(sidebarIndex);
      }

      setSelectedSidebarElementsIds(newSelectedSidebarElementsIds);
    },
    [setSelectedSidebarElementsIds]
  );

  return {
    sidebarElements,
    selectedSidebarElements,
    onToggleItem,
  };
};

const Sidebar = (): React.FC => {
  const { sidebarElements, selectedSidebarElements, onToggleItem } =
    SidebarHook();

  const renderSidebarElement = (sidebar: SidebarElementType, index: number) => (
    <SidebarElement key={index} {...sidebar} />
  );

  return (
    <div className="sidebar__container">
      <div className="sidebar">
        <div className="siderbar__elements--selected">
          {selectedSidebarElements?.map(renderSidebarElement)}
        </div>
        <div className="siderbar__elements">
          {sidebarElements?.map(renderSidebarElement)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
