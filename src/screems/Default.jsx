import Logo from './_components/Logo';
import Description from './_components/Descriptions';
import Content from './_components/Content';
import Github from './_components/Github';

import OpenLink from '../components/OpenLink';

const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url = "https://reactjs.org"
                />
                <OpenLink
                    title="Mi Proyecto (Github)"
                    url = "https://github.com/rflores65/desarrollo-frontend-react"
                />
                
            </header>
        </div>
    );

};

export default Default;