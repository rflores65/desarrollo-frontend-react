import Logo from '../components/Logo';
import Description from '../components/Descriptions';
import Content from '../components/Content';
import Github from '../components/Github';

const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <Content />
                <Github/>
            </header>
        </div>
    );

};

export default Default;