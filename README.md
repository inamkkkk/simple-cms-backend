# Simple CMS Backend

A basic content management system backend built with Node.js.

## Features

*   Manage articles, pages, and categories.
*   Authentication with JWT.
*   MongoDB integration.

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and set the following variables:

    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/cms
    JWT_SECRET=your_secret_key
    

4.  Start the server:

    
    npm start
    

## API Endpoints

### Authentication

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Login and get a JWT token.

### Articles

*   `GET /api/articles`: Get all articles.
*   `GET /api/articles/:id`: Get a single article by ID.
*   `POST /api/articles`: Create a new article.
*   `PUT /api/articles/:id`: Update an existing article.
*   `DELETE /api/articles/:id`: Delete an article.

### Pages

*   `GET /api/pages`: Get all pages.
*   `GET /api/pages/:id`: Get a single page by ID.
*   `POST /api/pages`: Create a new page.
*   `PUT /api/pages/:id`: Update an existing page.
*   `DELETE /api/pages/:id`: Delete a page.

### Categories

*   `GET /api/categories`: Get all categories.
*   `GET /api/categories/:id`: Get a single category by ID.
*   `POST /api/categories`: Create a new category.
*   `PUT /api/categories/:id`: Update an existing category.
*   `DELETE /api/categories/:id`: Delete a category.
