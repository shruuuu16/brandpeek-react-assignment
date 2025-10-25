### Project Structure

[cite_start]The folder structure is organized for scalability and separation of concerns:

* `/assets`: Static assets like icon and splash screen.
* `/components`: Reusable UI components (e.g., `BrandListItem`, `LoadingSpinner`, `RadialGradient`).
* `/navigation`: Navigation stack configuration (`AppNavigator.js`).
* `/screens`: Top-level screen components (`HomeScreen.js`, `BrandDetailScreen.js`).
* `/services`: API logic, hooks, or any external data handling (`api.js`).
* `App.js`: The root entry point of the application.

### API Choice: MockAPI

[cite_start]I chose **MockAPI** (mockapi.io) for this project because[cite: 32]:
1.  **Speed:** It allows for creating a realistic REST API endpoint in under 60 seconds without any backend coding.
2.  [cite_start]**Simplicity:** It's free and perfect for a frontend assignment, providing endpoints for both fetching a list (`/brands`) [cite: 27] [cite_start]and fetching by ID (`/brands/:id`)[cite: 28].

### Gradient Implementation

* [cite_start]**Home Screen (Radial Gradient):** The assignment requires an *exact* match of the provided radial gradient[cite: 13, 23]. [cite_start]Since `expo-linear-gradient` does not support radial gradients, I used `react-native-svg`[cite: 23]. The `components/RadialGradient.js` file creates an SVG `<Rect>` that fills the screen, which is itself filled by a `<RadialGradient>` definition matching the preview image (dark purple/blue at the top, fading to black).
* [cite_start]**Brand Detail Screen (Subtle Gradient):** For this screen, a "subtle gradient" was required[cite: 21]. `expo-linear-gradient` is the simplest and most performant tool for this, so it was used.