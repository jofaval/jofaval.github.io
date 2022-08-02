// Vendors
import React from 'react';

type HeaderTabType = {
    name: string;
    key?: number;
}

const HEADER_TABS: HeaderTabType[] = [
    {
        name: 'Home',
    }
]

type HeaderTabPropsType = {
    name: string
}

const HeaderTab = ({ name }: HeaderTabPropsType): React.FC => <div className="header-tab__container">
    <div className="header-tab">
        {name}
    </div>
</div>

type HeaderTabsListPropType = {

}

const HeaderTabsList = (): React.FC<HeaderTabsListPropType> => {
    
    return <div className="header-tabs__container">
        <div className="header-tabs">
            {HEADER_TABS.map((props: HeaderTabType, index: number) => <HeaderTab key={index} {...props} />)}
        </div>
    </div>
};

export default HeaderTabsList