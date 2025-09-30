# 🍔 YelpFoodAPI Project

This repository contains a modern JavaScript application designed to integrate with the **Yelp Fusion API** to search for and display local food and restaurant data. It serves as a practical example of fetching, structuring, and displaying data from a third-party API in a front-end application.

---

## 🛠️ Tech Stack

Based on the file structure (JavaScript files, `package.json`, `app.json`), this project is likely built using **React Native** (or standard React) for the UI and leverages core JavaScript features for API interaction.

* **Primary Language:** JavaScript
* **API:** Yelp Fusion API (for fetching restaurant data, reviews, and images).
* **Front-end Framework:** Likely React or React Native (given `App.js` and configuration files).
* **Networking:** Likely uses `axios` or native `fetch` for API calls.

## ✨ Features

* **Restaurant Search:** Allows users to search for food businesses based on keywords (e.g., "pizza," "sushi").
* **Location-Based Results:** Fetches results relevant to a specific location (or device location).
* **Detailed Views:** Displays essential information for each business, such as name, rating, address, price range, and image.
* **API Key Management:** Includes best practices for securely handling the Yelp API Key.

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

1.  **Node.js** (LTS recommended)
2.  **npm** or **yarn**
3.  **Yelp Fusion API Key:** You must register for an account and obtain an API key from the [Yelp Developers website](https://www.yelp.com/developers).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rayancmorais/YelpFoodAPI.git](https://github.com/rayancmorais/YelpFoodAPI.git)
    cd YelpFoodAPI
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or 
    # yarn install
    ```

3.  **Configure API Key:**

    To secure your sensitive API key, you should use environment variables (e.g., via a `.env` file or similar mechanism).

    a. Create a file named `.env` in the root directory.
    b. Add your Yelp API key to the file:

    ```
    # .env
    YELP_API_KEY="Bearer <YOUR_YELP_FUSION_API_KEY_HERE>"
    ```

    > **Note:** The API key must be prefixed with `Bearer ` for proper authentication. Ensure you update your API configuration file (likely in the `src` folder) to correctly import and use this environment variable.

### Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    # yarn start
    ```

2.  Follow the instructions in your terminal to view the application:
    * **React:** Open the provided `localhost` URL in your web browser.
    * **React Native/Expo:** Use the Expo Go app on your mobile device to scan the QR code.

---

## 📂 Project Structure

The key files and directories are organized as follows:

## Root Directory
YelpFoodAPI/
* `├── assets/`
    * Images, fonts, and other static assets.
* `├── src/`
    * Contains the core application source code.
* `├── .env`
    * **Environment variables** (like the API key).
* `├── App.js`
    * **Main application entry point**.
* `├── package.json`
    * Project dependencies and scripts.
* `└── ...`
    * (Other standard files like `.gitignore`, `README.md`, etc.).

---

## Source (`src/`) Directory

The `src/` directory is organized into the following subdirectories:

* `├── src/components/`
    * **Reusable UI components** (e.g., `SearchBar`, `BusinessCard`).
* `├── src/screens/`
    * **Main application screens** (e.g., `SearchScreen`, `DetailScreen`).
* `└── src/api/`
    * **Logic for API communication** and setup (e.g., Yelp API).


