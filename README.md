# react-native-starter-kit-expo

Help you quickly set up your React Native mobile app with best practices.

## Intro

[Expo](https://docs.expo.dev/) based project. It's a better way to build a React Native application, you don't need to
care about native stuff. And you can convert it into a bare React Native application any time by one command: "npx expo
prebuild".

Expo: 49.0.10

React Native: 0.72.4

React: 18.2.0

## Features

-   TypeScript
-   Navigation: [React Navigation](https://reactnavigation.org/)
-   Material Design library: [React Native Paper](https://reactnativepaper.com/)
-   Code Linting: Eslint + prettier + react-native-community/eslint-config
-   Testing:

    -   Unit Test: Jest
    -   Component Test: React Native Testing Library (RNTL)
    -   E2E Test: E2E test is not included in this starter kit because it cannot be directly run on an Expo project.
        However, you can easily integrate E2E tests by converting the Expo project into a bare React Native project
        using the 'npx expo prebuild' command. You can follow this
        [guide](https://docs.expo.dev/build-reference/e2e-tests/)

-   Pre-commit: [husky](https://github.com/typicode/husky)
-   Network client: [Axios](https://github.com/axios/axios)
-   State Management: React Context API and React Hooks

## Getting started

1.  Clone the repository
2.  Install dependencies
    ```
    cd react-native-starter-kit-expo
    yarn
    ```
3.  Run project on simulator/emulator

    iOS simulator:

    ```
    yarn ios
    ```

    Android simulator:

    ```
    yarn android
    ```

    or

    ```
    // The Expo CLI will provide options to open in [web, android or iOS]

    yarn start
    ```

## License

MIT licensed.
