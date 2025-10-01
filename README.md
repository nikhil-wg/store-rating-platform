# 🏪 Store Rating Platform

The Store Rating Platform is a full-stack web application that allows users to rate stores on a scale of 1 to 5 stars. It implements role-based access to provide different functionalities for Normal Users, Store Owners, and System Administrators.

## 🌟 Features

The platform offers a comprehensive set of features tailored for each user role:

### Normal Users
* **Authentication:** Sign up and log in.
* **Browsing:** View all listed stores.
* **Rating:** Submit or update ratings (1–5 stars) for stores.
* **Search:** Search stores by name or address.

### Store Owners
* **Rating Visibility:** View users who have rated their specific store.
* **Analytics:** See the **average rating** of their store.

### System Administrators
* **Management:** Add new users and stores.
* **Statistics:** View the total count of users, stores, and ratings.
* **Filtering:** Filter users and stores by name, email, address, or role.

---

## 🛠 Technology Stack

This project is built using a modern MERN-like stack with a slight variation, using PostgreSQL instead of MongoDB.

| Layer | Technology | Notes |
| :--- | :--- | :--- |
| **Frontend** | **React.js** | Library for building the user interface. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for rapid UI development. |
| **Backend** | **Express.js** | Node.js framework for building the REST API. |
| **Database** | **PostgreSQL (Neon)** | Relational database, hosted on Neon for serverless scaling. |
| **ORM** | **Sequelize** | Promise-based Node.js ORM for PostgreSQL. |
| **Authentication** | **JWT (JSON Web Tokens)** | Used for secure, role-based authentication. |

---

## 💻 How to Use

Follow these steps to set up and run the application locally.

### 1️⃣ Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` folder and add your configuration variables. You'll need credentials for your Neon PostgreSQL database.

    ```dotenv
    PORT=5000
    DATABASE_URL=postgres://<username>:<password>@<host>/<dbname>?sslmode=require
    JWT_SECRET=your_strong_secret_key_here
    ```

4.  Start the Express server:
    ```bash
    node server.js
    ```
    The backend API will be running at `http://localhost:5000`.

### 2️⃣ Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the React application:
    ```bash
    npm start
    ```
    The frontend application will open in your browser at `http://localhost:3000`.

---

## 🧩 How to Test

To explore the platform's features, try the following scenarios:

1.  **Normal User Flow:**
    * Sign up as a normal user.
    * Log in and view the list of stores.
    * Submit a rating for a store by clicking on the stars.
2.  **Store Owner Flow:**
    * Use an existing store owner account (or create one via the admin panel).
    * Log in and view the ratings and average score for their store.
3.  **Administrator Flow:**
    * Log in as an admin user.
    * Add new stores or users.
    * View the dashboard for system statistics (total users, stores, and ratings).

---

## 🎨 Screenshots

*(Add screenshots or GIFs here to visually demonstrate the application's UI)*

---

## 🚀 Future Improvements

The following enhancements are planned for future versions of the platform:

* **Security & Usability:** Add a forgot password feature and email verification for user accounts.
* **Analytics:** Enhance the admin dashboard with charts and visual analytics to better represent statistics.
* **User Experience:** Implement more advanced filtering and sorting options for the store list.
* **UI/UX:** Continuous improvement of the overall user interface and experience.

---

## 🤝 Contribution

Contributions are welcome! If you have suggestions or want to fix a bug, please follow these steps:

1.  Fork the repository.
2.  Create a new feature branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  Commit your changes with a clear message:
    ```bash
    git commit -m "feat: Add a new feature or fix a bug"
    ```
4.  Push to your branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5.  Open a Pull Request to the `main` branch.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](link-to-license-file) file for details.
