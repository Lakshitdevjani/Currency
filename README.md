# Currency Converter App

## Overview
This is a simple React Native currency converter app that fetches live exchange rates from a public API and allows users to convert between different currencies.

## Features
- Enter an amount to convert.
- Select source and target currencies.
- Fetch live exchange rates.
- Display the converted amount with appropriate currency symbols.
- Error handling for invalid input and API failures.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- React Native CLI or Expo CLI
- Android Studio or an iOS Simulator

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the app:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios     # For iOS (Mac only)
   ```

## API Used
This app fetches exchange rates from [ExchangeRate-API](https://www.exchangerate-api.com/).

## Challenges Faced
- Handling API errors and network failures.
- Implementing a smooth user interface with a dropdown selector.
- Formatting currency conversion results accurately.

## License
This project is open-source and available under the MIT License.

## Author
Developed by Lakshit Devjani.

