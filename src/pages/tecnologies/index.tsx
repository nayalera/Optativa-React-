import { useEffect } from "react";
import "./style.scss";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import classNames from "classnames";
type DataType = typeof data.technology;
type StateData = {
    tab: {
        currentTab: 0;
        data: DataType;
    };
};
const tab = createSlice({
    initialState: {
        currentTab: 0,
        data: data.technology,
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
function ImageTecViewerLandScape(
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
                        src={images.landscape}
                        className={classNames({ active: curTab == i })}
                        alt={name}
                    />
                );
            })}
        </div>
    );
}
function ImageTecViewerPortScape(
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
                        src={images.portrait}
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
        <ul className="info-container">
            {data.map(({ name, description, images }, i) => {
                return (
                    <li className={classNames({ active: curTab == i })}>
                        <div className="tw-text-center lg:tw-text-start">
                            <h2 className="tw-uppercase tw-mb-4 tw-break-words">
                                {name}
                            </h2>
                            <p className="tw-text-white-purple tw-leading-7">
                                {description}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
export default function Technology() {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "technology";
    }, []);
    return (
        <Provider store={store}>
            <div className="technology container tw-py-10 tw-flex-1 sm:tw-text-xl tw-flex tw-items-stretch lg:tw-items-center">
                <div className="tw-flex-1">
                    <h4 className="tw-px-4 tw-uppercase tw-tracking-[0.16rem] tw-text-center sm:tw-text-start tw-text-white tw-mb-10 lg:tw-mb-20">
                        <span className="tw-opacity-50  tw-font-bold tw-mix-blend-normal tw-mr-3">
                            03
                        </span>
                        space lunch 101
                    </h4>
                    <div className="tw-flex tw-flex-col xl:tw-flex-row-reverse tw-justify-between tw-flex-1 tw-gap-10 lg:tw-gap-16">
                        <div className="lg:tw-hidden start-anim-top">
                            <ImageTecViewerLandScape className="land-viewer tw-mx-auto tw-flex tw-justify-center" />
                        </div>
                        <div className="tw-hidden lg:tw-block tw-absolute tw-right-0 lg:tw-translate-y-[-25%] lg:tw-w-[22rem] xl:tw-w-[30rem] xl:tw-static start-anim-top">
                            <ImageTecViewerPortScape className="land-viewer tw-mx-auto tw-flex tw-justify-center " />
                        </div>
                        <div className="tw-flex tw-flex-col  tw-gap-3 lg:tw-flex-row lg:tw-gap-16 lg:tw-max-w-xl start-anim-left">
                            <TabsManger />
                            <InfoContent />
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
