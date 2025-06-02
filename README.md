# Deno API and Frontend Example

![Project Demo GIF](placeholder.gif) 

## Description
This project demonstrates a full-stack application setup involving a backend API built with Deno, a separate backend API built with Node.js (possibly for comparison or auxiliary services), and a frontend application that interacts with these APIs. The main goal is to showcase how to structure and run such a multi-component project, providing a learning example for Deno and its integration with frontend technologies.

This application is built using:
*   **Deno API:** [Deno](https://deno.land/) (with TypeScript) for a modern backend API.
*   **Node API:** [Node.js](https://nodejs.org/) (with JavaScript, potentially using Express.js or similar) for another backend API component.
*   **Frontend App:** HTML, CSS, and JavaScript (details of framework/libraries to be added based on `frontend-app/` contents).
*   **Database/Storage:** (Details to be added if a specific database like MongoDB, PostgreSQL, etc., is used. Configuration for connection strings would be needed in `.env` files).

## Installation & Setup
To get this project up and running on your local machine, follow these steps:

1.  **Prerequisites:**
    *   Ensure you have [Deno](https://deno.land/#installation) installed.
    *   Ensure you have [Node.js](https://nodejs.org/) (which includes npm or yarn) installed.

2.  **Clone the repository:**
    ```bash
    git clone https://github.com/JNDEV0/denojs-course.git
    cd denojs-course
    ```

3.  **Setup & Run the Deno API:**
    *   **Configuration:**
        *   The Deno API (driven by `app.ts`) might require environment variables. If so, create a `.env` file in the project root (e.g., `deno-course/.env`).
        *   Add any necessary variables, for example:
            ```env
            DENO_API_PORT=8000
            # Add other Deno API specific variables like database URLs, API keys, etc.
            ```
    *   **Run the Deno API:**
        Open a terminal in the project root directory (`deno-course`) and run:
        ```bash
        # Adjust permissions (--allow-net, --allow-read, --allow-env, etc.) as needed by app.ts
        deno run --allow-net --allow-read --allow-env app.ts
        ```
        The Deno API should typically be running on the port specified in its configuration (e.g., `http://localhost:8000`).

4.  **Setup & Run the Node API:**
    *   **Installation (if `node-api/` or root `app.js` has dependencies):**
        If the Node API part (driven by `app.js` and using modules from `node-api/`) has a `package.json` either in the root or within `node-api/` defining dependencies:
        ```bash
        # If package.json is in the root:
        npm install
        # OR if package.json is in node-api/:
        # cd node-api
        # npm install
        # cd ..
        ```
    *   **Configuration:**
        *   The Node API might require its own environment variables. These could also be placed in the root `.env` file or a specific one if preferred.
        *   Example variables:
            ```env
            NODE_API_PORT=8001
            # Add other Node API specific variables
            ```
    *   **Run the Node API:**
        Open a terminal in the project root directory (`deno-course`) and run:
        ```bash
        node app.js
        ```
        Or, if it has a start script in a `package.json`:
        ```bash
        npm start
        ```
        The Node API should typically be running on the port specified in its configuration (e.g., `http://localhost:8001`).

5.  **Setup & Run the Frontend Application:**
    *   **Installation:**
        Navigate to the frontend application's directory and install dependencies:
        ```bash
        cd frontend-app
        npm install  # or yarn install
        ```
    *   **Configuration:**
        *   The frontend app might require a `.env` or `.env.local` file within the `frontend-app/` directory to specify API endpoints (e.g., the Deno API URL).
        *   Example for `frontend-app/.env.local`:
            ```env
            REACT_APP_API_URL=http://localhost:8000/api # Or your Deno API endpoint
            # Add other frontend specific variables
            ```
    *   **Run the Frontend App:**
        In the `frontend-app/` directory, start the development server:
        ```bash
        npm run dev # or npm start, or yarn dev, etc. (check frontend-app/package.json)
        ```
        The frontend application will typically be accessible at `http://localhost:3000` (or another port specified by its development server).

## Usage
Once all components are set up and running:

*   Access the **Frontend Application** in your web browser (e.g., `http://localhost:3000`).
*   The frontend will interact with the **Deno API** (e.g., `http://localhost:8000`) for its primary data operations.
*   The **Node API** (e.g., `http://localhost:8001`) can be accessed directly or via the frontend if it's designed for auxiliary tasks or comparison.
*   Explore the different parts of the application to see how Deno, Node.js, and the frontend work together.
