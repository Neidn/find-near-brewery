# Find near brewery

## Description

This is a simple web application that allows users to find breweries near a location. The user can enter a location and
the application will display a list of breweries near that location. The user can also click on a brewery to see more
details about it.

## Installation

To install the application, you need to have Node.js installed. You can download it from the official website
[here](https://nodejs.org/).

After installing Node.js, you can clone the repository and install the dependencies by running the following commands:

```bash
git clone
cd find-near-brewery
npm install
```

## Usage

Before run, you should create a `.env` file in the root of the project and add the following environment variables:

```env
REACT_APP_MAPTILER_API_KEY=your-maptiler-api-key
```

To run the application, you can use the following command:

```bash
npm start
```

## Technologies

- React
- Redux
- Axios
- MapTiler
- Material-UI
- Open Brewery DB API
- GeoLocation API
