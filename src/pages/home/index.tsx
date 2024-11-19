import { useEffect } from "react";
import "./style.scss";
export default function Home() {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "home";
    }, []);
    return (
        <div className="home container tw-py-20 tw-flex-1 tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between">
            <div className="tw-text-white-purple tw-text-center lg:tw-text-start lg:tw-max-w-md start-anim-left">
                <p className="tw-text-xl lg:tw-text-3xl">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className="tw-break-words">SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <a
                className="explore-button start-anim-top"
                href="#"
            >
                Explore
            </a>
        </div>
    );
}
