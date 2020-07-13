import { ReactGridProps, State } from '../Model';
export declare function getDerivedStateFromProps(props: ReactGridProps, state: State): State;
export declare const areFocusesDiff: (props: ReactGridProps, state: State) => boolean;
export declare const stateDeriver: (props: ReactGridProps) => (state: State) => (fn: (props: ReactGridProps, state: State) => State) => State<import("../Model").CellMatrix<import("../Model").StickyRanges, import("../Model").CellMatrixProps>, import("../Model").Behavior>;
export declare const dataHasChanged: (props: ReactGridProps, state: State) => boolean;
export declare const highlightsHasChanged: (props: ReactGridProps, state: State) => boolean;
export declare function updateStateProps(props: ReactGridProps, state: State): State;
export declare function updateFocusedLocation(props: ReactGridProps, state: State): State;
export declare function appendCellTemplates(props: ReactGridProps, state: State): {
    cellTemplates: {};
    update: import("../Model").StateUpdater;
    props?: ReactGridProps | undefined;
    legacyBrowserMode: boolean;
    cellMatrix: import("../Model").CellMatrix<import("../Model").StickyRanges, import("../Model").CellMatrixProps>;
    currentBehavior: import("../Model").Behavior;
    focusedLocation?: import("../Model").Location | undefined;
    hiddenFocusElement?: HTMLDivElement | undefined;
    reactGridElement?: HTMLDivElement | undefined;
    scrollableElement?: HTMLElement | (Window & typeof globalThis) | undefined;
    queuedCellChanges: (import("../Model").Change<import("..").CheckboxCell & import("../Model").Cell> | import("../Model").Change<import("..").DateCell & import("../Model").Cell> | import("../Model").Change<import("..").EmailCell & import("../Model").Cell> | import("../Model").Change<import("..").GroupCell & import("../Model").Cell> | import("../Model").Change<import("..").HeaderCell & import("../Model").Cell> | import("../Model").Change<import("..").NumberCell & import("../Model").Cell> | import("../Model").Change<import("..").TextCell & import("../Model").Cell> | import("../Model").Change<import("..").TimeCell & import("../Model").Cell>)[];
    currentlyEditedCell?: import("../Model").Compatible<import("../Model").Cell> | undefined;
    highlightLocations: import("../Model").Highlight[];
    visibleRange?: import("../Model").Range | undefined;
    topScrollBoudary: number;
    bottomScrollBoudary: number;
    leftScrollBoudary: number;
    rightScrollBoudary: number;
};
export declare function appendHighlights(props: ReactGridProps, state: State): {
    highlightLocations: import("../Model").Highlight[];
    update: import("../Model").StateUpdater;
    props?: ReactGridProps | undefined;
    legacyBrowserMode: boolean;
    cellMatrix: import("../Model").CellMatrix<import("../Model").StickyRanges, import("../Model").CellMatrixProps>;
    currentBehavior: import("../Model").Behavior;
    focusedLocation?: import("../Model").Location | undefined;
    cellTemplates?: import("../Model").CellTemplates | undefined;
    hiddenFocusElement?: HTMLDivElement | undefined;
    reactGridElement?: HTMLDivElement | undefined;
    scrollableElement?: HTMLElement | (Window & typeof globalThis) | undefined;
    queuedCellChanges: (import("../Model").Change<import("..").CheckboxCell & import("../Model").Cell> | import("../Model").Change<import("..").DateCell & import("../Model").Cell> | import("../Model").Change<import("..").EmailCell & import("../Model").Cell> | import("../Model").Change<import("..").GroupCell & import("../Model").Cell> | import("../Model").Change<import("..").HeaderCell & import("../Model").Cell> | import("../Model").Change<import("..").NumberCell & import("../Model").Cell> | import("../Model").Change<import("..").TextCell & import("../Model").Cell> | import("../Model").Change<import("..").TimeCell & import("../Model").Cell>)[];
    currentlyEditedCell?: import("../Model").Compatible<import("../Model").Cell> | undefined;
    visibleRange?: import("../Model").Range | undefined;
    topScrollBoudary: number;
    bottomScrollBoudary: number;
    leftScrollBoudary: number;
    rightScrollBoudary: number;
};
export declare function setInitialFocusLocation(props: ReactGridProps, state: State): State;
export declare function setFocusLocation(props: ReactGridProps, state: State): State;