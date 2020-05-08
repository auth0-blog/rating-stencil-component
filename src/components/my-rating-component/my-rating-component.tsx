import  { Component, Prop, State, EventEmitter, Event, h } from  '@stencil/core';

@Component({
   tag: 'my-rating',
   styleUrl: 'my-rating-component.css',
   shadow: true
})
export  class  MyRatingComponent  {
  @Prop() maxValue: number = 5;
  @Prop({ mutable: true }) value: number = 0;

  @State() starList: Array<object> = [];

  @Event() ratingUpdated: EventEmitter;

  componentWillLoad() {
    this.createStarList(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
    this.ratingUpdated.emit({ value: this.value });
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

   render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
   }
}