import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import classNames from "classnames";
import { useEffect, useRef } from "react";
export default function Header() {
    const ref = useRef<HTMLButtonElement>(null);

    const Close = () => {
        if (ref && ref.current) {
            ref.current.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-md tw-bg-[transparent] tw-p-6 tw-overflow-hidden">
            <div className="container-fluid sm:tw-px-10">
                <div
                    className="tw-shrink-0 tw-block tw-w-12 tw-p-1 tw-h-12 tw-bg-white tw-rounded-[50%]"
                >
                    <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="tw-w-full"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 0C20 0 20 20 40 20C20.352 20.1428 20 40 20 40C20 40 20 20 5.34058e-05 20C20 20 20 0 20 0Z"
                            fill="#0B0D17"
                        />
                    </svg>
                </div>
                <button
                    className="tw-text-white-purple md:tw-hidden"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <i className="fa-solid fa-bars tw-font-bold tw-text-[2.5rem]"></i>
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    data-tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="tw-text-white-purple tw-text-4xl tw-ml-auto tw-mr-7 tw-my-5"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            ref={ref}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    onClick={Close}
                                    className={({ isActive }) =>
                                        classNames(`nav-link`, {
                                            active: isActive,
                                        })
                                    }
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={Close}
                                    className={({ isActive }) =>
                                        classNames(`nav-link`, {
                                            active: isActive,
                                        })
                                    }
                                    to="/destination"
                                >
                                    destination
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={Close}
                                    className={({ isActive }) =>
                                        classNames(`nav-link`, {
                                            active: isActive,
                                        })
                                    }
                                    to="/crew"
                                >
                                    Crew
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={Close}
                                    className={({ isActive }) =>
                                        classNames(`nav-link`, {
                                            active: isActive,
                                        })
                                    }
                                    to="/technologies"
                                >
                                    technologies
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
