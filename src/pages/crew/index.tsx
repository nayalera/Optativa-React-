import { useEffect } from "react";
import "./style.scss";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import classNames from "classnames";
type DataType = typeof data.crew;
type StateData = {
    tab: {
        currentTab: 0;
        data: DataType;
    };
};
const tab = createSlice({
    initialState: {
        currentTab: 0,
        data: data.crew,
    },
    reducers: {
        setTab(state, action: { payload: number }) {
            state.currentTab = action.payload;
        },
    },
    name: "tab",
});
const store = configureStore({
    reducer: {
        tab: tab.reducer,
        data: tab.reducer,
    },
});
function TabsManger() {
    const dispatch = useDispatch();
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <ul className="tabs-controller">
            {data.map(({ name }, i) => {
                return (
                    <li
                        className={classNames({
                            active: i == curTab,
                        })}
                        key={i}
                        onClick={() => dispatch(tab.actions.setTab(i))}
                    ></li>
                );
            })}
        </ul>
    );
}
function ImageCrewViewer(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
) {
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <div {...props}>
            {data.map(({ name, images }, i) => {
                return (
                    <img
                        src={images.png}
                        className={classNames({ active: curTab == i })}
                        alt={name}
                    />
                );
            })}
        </div>
    );
}
function InfoContent() {
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <ul className="info-container lg:tw-m-0 lg:tw-max-w-xl">
            {data.map(({ name, bio, images, role }, i) => {
                return (
                    <li className={classNames({ active: curTab == i })}>
                        <div className="tw-text-center lg:tw-text-start">
                            <h3 className="tw-uppercase tw-my-4 tw-break-words tw-mix-blend-normal tw-opacity-50">
                                {role}
                            </h3>
                            <h2 className="tw-uppercase tw-mb-4 tw-break-words">
                                {name}
                            </h2>
                            <p className="tw-text-white-purple tw-leading-7">
                                {bio}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
export default function Crew() {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "crew";
    }, []);
    return (
        <Provider store={store}>
            <div className="crew container tw-flex-1 sm:tw-text-xl tw-flex lg:tw-items-center">
                <div className="tw-flex-1 tw-relative tw-py-10">
                    <h4 className="tw-uppercase tw-tracking-[0.16rem] tw-text-center sm:tw-text-start tw-text-white tw-mb-10 lg:tw-mb-20">
                        <span className="tw-opacity-50  tw-font-bold tw-mix-blend-normal tw-mr-3">
                            02
                        </span>
                        Meet your crew
                    </h4>
                    <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse tw-justify-between tw-gap-5 lg:tw-gap-16">
                        <div className="tw-self-stretch lg:tw-flex-1 sm:tw-absolute tw-w-full tw-bottom-0 lg:tw-static tw-border-b-4 sm:tw-border-0 tw-border-[#383B4B] tw-border-solid start-anim-top">
                            <ImageCrewViewer className="crew-viewer tw-mx-auto tw-flex tw-justify-center tw-h-[20rem] sm:tw-h-[28rem]" />
                        </div>
                        <div className="sm:tw-flex tw-justify-end tw-flex-col-reverse tw-gap-16 ">
                            <TabsManger />
                            <InfoContent />
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
