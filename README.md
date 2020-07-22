# Wind Speeds - https://windspeed.netlify.app/

## Introduction

This app is a minimalist site for tracking windspeed and forecasts across the UK.

The app was bootstrapped with the CRA typescript template and at it's core uses localStorage through a persisted state hook to save the user's favourite locations and [SWR](https://github.com/vercel/swr) for data fetching in a very clean way.


## Choices

### Typescript

Brings a slightly larger overhead with the need of typing but makes up for its time in code suggestions/completions and debugging by providing a much more concise way of writing code to avoid the inevitable `Cannot read propery * of undefined`

### Hooks & Context

Hooks and Context have become a huge part of React as of late and have created an incredibly light way for managing app state.

### Styled Components

CSS-in-JS is another approach that has taken off in recent years with its ease in tying into React to provide props to a component like you would anywhere else in the app and using those values to toggle styles appropriately.

### SWR

This has become my favourite package due to its simplicity and range of built in features that makes a world of difference to fetching data by providing a nice little hook which gives you your data, isFetching and error so that you can handle each case appropriately.


## Considerations

### Using an API

An API could have been used for a more permanant solution instead of just using localStorage however for the size and nature of the app I don't think it would have provided any real benefit and would have required some sort of user login to save the data to the user, for this reason localStorage was adopted.

An api like https://github.com/DanBillson/ExpenseApi would have fit in quite well if there was the need for it.

### Redux

Redux is of course a very popular method for managing state however the traditional ways of using redux can introduce a huge amount of bloat often needing 4-5 different files just to handle one action. More recently there are some very interesting new ways that redux have suggested doing things with their [toolkit](https://redux-toolkit.js.org/) which I have tested out https://github.com/DanBillson/porkchop/tree/master/chops/brisket and can be seen at https://brisket.netlify.app/ however, for this use case hooks wins again as the entire state for managing user's favourite cities was writen in less than 20 lines of code, can be used from anywhere in the app and provides all of the needed functionaility.

