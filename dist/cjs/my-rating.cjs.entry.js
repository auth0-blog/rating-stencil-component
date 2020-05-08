'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9dd1e1d9.js');

const myRatingComponentCss = ".rating{color:orange}";

const MyRatingComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.maxValue = 5;
        this.value = 0;
        this.starList = [];
        this.ratingUpdated = index.createEvent(this, "ratingUpdated", 7);
    }
    componentWillLoad() {
        this.createStarList(this.value);
    }
    setValue(newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.ratingUpdated.emit({ value: this.value });
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(index.h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2605"));
            }
            else {
                starList.push(index.h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (index.h("div", null, this.starList));
    }
};
MyRatingComponent.style = myRatingComponentCss;

exports.my_rating = MyRatingComponent;
