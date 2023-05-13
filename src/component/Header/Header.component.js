import { createRef, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import CSS from '../../util/CSS';
import { RouteType } from '../../type/Route';

import './Header.style.scss';

class Header extends PureComponent {

    static propTypes = {
        currentRoute: RouteType,
        setRoute: PropTypes.func,
    }

    static defaultProps = {
        currentRoute: {},
        setRoute: () => {},
    }

    navIconRef=createRef();

    state = {
        isOpen: false,
        activeItem: '',
    }

    menuList = [
        {
            id: "home",
            name: "home",
            url: "/",
            type: "text",
        },
        {
            id: "about",
            name: "about",
            url: "/about",
            type: "text",
        },
        {
            id: "contact",
            name: "contact",
            url: "/contact",
            type: "text",
        },
        {
            id: "movies",
            name: "browse movies",
            url: "/movies",
            type: "button",
        },
    ];

    setComponentItems() {
        const { navIconRef } = this;
        const { menuList } = this;
        const { id } = menuList[0];

        this.setState({ activeItem: id });
        CSS.setVariable(navIconRef, 'transform-header', `${100}%`);
    }

    componentDidMount() {
        this.setComponentItems();
    }

    setIsOpenValues(isOpenState, transformValue) {
        const { navIconRef } = this;

        this.setState({ isOpen: isOpenState });
        CSS.setVariable(navIconRef, 'transform-header', `${transformValue}%`);
    }

    toggleMenu() {
        const { isOpen } = this.state;
        
        if (isOpen) {
            this.setIsOpenValues(false, 100);
        } 
        else {
            this.setIsOpenValues(true, 0);
        }
    }

    renderLogo() {
        return (
            <Link className='Link Header-Logo' to='/'>
                <Logo />
            </Link>
        );
    }

    renderCloseIcon() {
        const close = `${process.env.PUBLIC_URL}/assets/icons/menu/red-cross.png`;

        return (
            <div className='Header-MenuContainer'>
                <img 
                    className='Header-MenuIcon' 
                    src={close} 
                    alt='menu close icon'
                />
            </div>
        );
    }

    renderMenuIcon() {
        const menu = `${process.env.PUBLIC_URL}/assets/icons/menu/red-menu.png`;

        return (
            <div className='Header-MenuContainer'>
                <img 
                    className='Header-MenuIcon' 
                    src={menu} 
                    alt='menu menu icon'
                />
            </div>
        );
    }

    renderMenuMobileIcon() {
        const { isOpen } = this.state;

        return isOpen 
                ? this.renderCloseIcon()
                : this.renderMenuIcon();
    }

    renderToggleButton() {
        return (
            <button
                className="Header-ToggleButton"
                onClick={() => this.toggleMenu() }
            >
                { this.renderMenuMobileIcon() }
            </button>
        );
    }

    setActiveLink({ name, url }) {
        const { setRoute } = this.props;
        
        const currentRoute = {
            name,
            path: url,
        };

        setRoute(currentRoute);
    }

    renderItemText(item) {
        const { id, name, url } = item;
        const { currentRoute: { path } } = this.props;

        const isActiveItem = path === url && 'Header-MenuItem_Active';
        const isActiveAnchor = path === url && 'Header-Anchor_Active';

        return (
            <Link 
                className={`Header-MenuItem ${isActiveItem }`}
                to={url}
            >
                <li
                    key={id}
                    className={`Header-Anchor ${isActiveAnchor}`} 
                    onClick={() => this.setActiveLink(item)}
                >
                    { name }
                </li>
            </Link>
        );
    }

    renderItemButton(item) {
        const { id, name, url } = item;

        return (
            <Link to={url} className='Link'>
                <button
                    key={id}
                    className={`Header-MenuItemButton`}
                    onClick={() => this.setActiveLink(item)}
                >
                    { name } 
                </button>
            </Link>
        );
    }

    renderMenuItem({ type, ...others }) {

        return type === 'text' ? 
            this.renderItemText(others)
            : this.renderItemButton(others);
    }

    renderNavigation() {
        const { navIconRef } = this;
        const { menuList } = this;

        return (
            <nav>
                <ul
                    ref={navIconRef}
                    id="Header-Navigation"
                    className="Header-Navigation"
                >
                    { menuList.map(this.renderMenuItem.bind(this)) }
                </ul>
            </nav>
        );
    }

    renderHeader() {
        return (
            <header className="Header">
                <div className='ContainerWrapper'>
                    <div className="Header-Container">
                        { this.renderLogo() }
                        { this.renderToggleButton() }
                        { this.renderNavigation() }
                    </div>
                </div>
            </header>
        );
    }

    renderOverlayClose() {
        const { toggleCartOverlay } = this.props;

        return (
            <div
                key='overlay'
                className='Header-OverlayWrapper'
                onClick={() => toggleCartOverlay()}
            >
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                { this.renderHeader() }
                {/* { this.renderUnderblock() } */}
            </div>
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default Header;
