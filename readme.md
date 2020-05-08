![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# A rating Web component

This is an example project showing how to build a rating Web component by using [Stencil](https://stenciljs.com/), a Web component compiler created by the [Ionic Team](https://github.com/ionic-team).

The project defines a star rating component like the following:

![](https://raw.githubusercontent.com/andychiare/rating-stencil-component/master/img/starRating.png)

It allows you to set your rating value, to capture the event of assigning a new rating value, and to programmatically access the current rating value.

To know more about the component and how it works, check out the article [Creating Web Components with Stencil](https://auth0.com/blog/creating-web-components-with-stencil).

# Using the component

Copy the content of `dist/rating-stencil-component` folder into a local folder named `my-rating`.

Create an HTML page in a local folder and put the script tags shown below in its head section:

```html
<script type="module" src="my-rating/rating-stencil-component.esm.js"></script>
<script nomodule src="my-rating/rating-stencil-component.js"></script><script>
```

Now you can use the component in your HTML by inserting the tag `<my-rating></my-rating>`

The following are the attributes of `my-rating` element:

| Attribute | Description                                   | Default value |
| --------- | --------------------------------------------- | ------------- |
| max-value | The maximum number of stars for the component | 5             |
| value     | The rating value currently shown              | 0             |

You can also handle the `ratingUpdated` [custom event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events), that is an event fired when the value of the component changes.

## Exploring the project

To explore the component project, download it into your local folder and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

Check out our [Stencil docs](https://stenciljs.com/docs/introduction) for more details.
