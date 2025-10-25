# BrandPeek 📱

BrandPeek is a small, polished React Native app built with Expo as part of an internship assignment. It simulates a "Brand Discovery" experience, fetching data from a mock backend and displaying it in a clean, visually appealing UI.

## ✨ Features

* **Home Screen:** Displays a list of 10 brands fetched from a live API, rendered in a "frosted glass" (glassmorphism) UI.
* **Custom Gradients:**
    * **Home:** A precise recreation of the assignment's dark, "bluish" radial gradient using `react-native-svg`.
    * **Detail:** A subtle, dark purple-to-black linear gradient.
* **Navigation:** Tap on a brand to navigate to its dedicated detail screen.
* **API Integration:** Connects to a mock backend (MockAPI) to fetch a list of brands and individual brand details by ID.
* **Polished UI:** Focus on clean spacing, modern UI, and user-friendly interactions (e.g., clickable links, pressable effects).
* **Error & Loading States:** Includes loading spinners while fetching data and user-friendly error screens if the API fails.

## 🚀 Live Demo (ExpoGo)

Scan the QR code below with the **Expo Go** app on your phone (Android or iOS) to run the app instantly.

**[[YOUR_EXPO_GO_LINK_HERE](https://expo.dev/accounts/shruuuu16/projects/BrandPeek)]**

## 🛠️ Tech Stack

* **React Native**
* **Expo** (SDK 50)
* **React Navigation** (Native Stack)
* **MockAPI** (for the REST backend)
* **Axios** (for API requests)
* **`react-native-svg`** (for the custom radial gradients)
* **`expo-blur`** (for the "frosted glass" UI)
* **`expo-linear-gradient`**
* **`@expo/vector-icons`**

## 📂 Project Structure

The folder structure is organized for scalability and separation of concerns:
BrandPeek/ ├── /assets/ # Static assets (fonts, icons) ├── /components/ # Reusable UI components (BrandListItem, RadialGradient, etc.) ├── /navigation/ # Navigation stack configuration (AppNavigator.js) ├── /screens/ # Top-level screen components (HomeScreen.js, BrandDetailScreen.js) ├── /services/ # API logic (api.js) └── App.js # Root entry point
Here is a complete, polished `README.md` file you can use for your GitHub repository. It includes all the sections required by the assignment and is formatted professionally.

Just copy, paste, and **replace the placeholder** with your live ExpoGo link.

-----

```markdown
# BrandPeek 📱

BrandPeek is a small, polished React Native app built with Expo as part of an internship assignment. It simulates a "Brand Discovery" experience, fetching data from a mock backend and displaying it in a clean, visually appealing UI.

## ✨ Features

* **Home Screen:** Displays a list of 10 brands fetched from a live API, rendered in a "frosted glass" (glassmorphism) UI.
* **Custom Gradients:**
    * **Home:** A precise recreation of the assignment's dark, "bluish" radial gradient using `react-native-svg`.
    * **Detail:** A subtle, dark purple-to-black linear gradient.
* **Navigation:** Tap on a brand to navigate to its dedicated detail screen.
* **API Integration:** Connects to a mock backend (MockAPI) to fetch a list of brands and individual brand details by ID.
* **Polished UI:** Focus on clean spacing, modern UI, and user-friendly interactions (e.g., clickable links, pressable effects).
* **Error & Loading States:** Includes loading spinners while fetching data and user-friendly error screens if the API fails.

## 🚀 Live Demo (ExpoGo)

Scan the QR code below with the **Expo Go** app on your phone (Android or iOS) to run the app instantly.

**[YOUR_EXPO_GO_LINK_HERE]**
*(e.g., `https://expo.dev/@shruuuu16/BrandPeek`)*

## 🛠️ Tech Stack

* **React Native**
* **Expo** (SDK 50)
* **React Navigation** (Native Stack)
* **MockAPI** (for the REST backend)
* **Axios** (for API requests)
* **`react-native-svg`** (for the custom radial gradients)
* **`expo-blur`** (for the "frosted glass" UI)
* **`expo-linear-gradient`**
* **`@expo/vector-icons`**

## 📂 Project Structure

The folder structure is organized for scalability and separation of concerns:

```

BrandPeek/
├── /assets/          \# Static assets (fonts, icons)
├── /components/      \# Reusable UI components (BrandListItem, RadialGradient, etc.)
├── /navigation/      \# Navigation stack configuration (AppNavigator.js)
├── /screens/         \# Top-level screen components (HomeScreen.js, BrandDetailScreen.js)
├── /services/        \# API logic (api.js)
└── App.js            \# Root entry point

````

This structure is clean, modular, and easy to maintain. Components are decoupled from screens, and all API logic is centralized in the `services` folder.

## 🔗 API Choice (MockAPI)

I chose **MockAPI** (mockapi.io) for this project for two main reasons:

1.  **Speed:** It allowed me to build a realistic, schema-based REST API endpoint in under 60 seconds without any backend coding.
2.  **Simplicity:** It's free and perfect for a frontend assignment, providing endpoints for both fetching a list (`/brands`) and fetching by ID (`/brands/:id`) right out of the box.

## ⚙️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *or*
    ```bash
    npx expo install
    ```

3.  **Run the app:**
    ```bash
    npx expo start
    ```
    * Press `w` to open in your web browser.
    * Scan the QR code with the Expo Go app on your phone.
````