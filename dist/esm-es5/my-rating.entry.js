import { r as registerInstance, c as createEvent, h } from './index-bc59fff3.js';
var myRatingComponentCss = ".rating{color:orange}";
var MyRatingComponent = /** @class */ (function () {
    function MyRatingComponent(hostRef) {
        registerInstance(this, hostRef);
        this.maxValue = 5;
        this.value = 0;
        this.starList = [];
        this.ratingUpdated = createEvent(this, "ratingUpdated", 7);
    }
    MyRatingComponent.prototype.componentWillLoad = function () {
        this.createStarList(this.value);
    };
    MyRatingComponent.prototype.setValue = function (newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.ratingUpdated.emit({ value: this.value });
    };
    MyRatingComponent.prototype.createStarList = function (numberOfStars) {
        var _this = this;
        var starList = [];
        var _loop_1 = function (i) {
            if (i <= numberOfStars) {
                starList.push(h("span", { class: "rating", onMouseOver: function () { return _this.createStarList(i); }, onMouseOut: function () { return _this.createStarList(_this.value); }, onClick: function () { return _this.setValue(i); } }, "\u2605"));
            }
            else {
                starList.push(h("span", { class: "rating", onMouseOver: function () { return _this.createStarList(i); }, onMouseOut: function () { return _this.createStarList(_this.value); }, onClick: function () { return _this.setValue(i); } }, "\u2606"));
            }
        };
        for (var i = 1; i <= this.maxValue; i++) {
            _loop_1(i);
        }
        this.starList = starList;
    };
    MyRatingComponent.prototype.render = function () {
        return (h("div", null, this.starList));
    };
    return MyRatingComponent;
}());
MyRatingComponent.style = myRatingComponentCss;
export { MyRatingComponent as my_rating };
