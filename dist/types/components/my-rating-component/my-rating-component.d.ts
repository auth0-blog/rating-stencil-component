import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyRatingComponent {
    maxValue: number;
    value: number;
    starList: Array<object>;
    ratingUpdated: EventEmitter;
    componentWillLoad(): void;
    setValue(newValue: any): void;
    createStarList(numberOfStars: number): void;
    render(): any;
}
