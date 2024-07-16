# Getting Started with Next.js

## Introduction

Next.js is a popular open-source React framework that enables developers to build server-side rendered (SSR) and statically generated React applications with ease. It provides features like:

- **Server-Side Rendering (SSR)**: Automatically renders pages on the server before sending them to the client, improving performance and SEO.
- **Static Site Generation (SSG)**: Pre-renders pages at build time, delivering them as static HTML files, which is great for performance and scalability.
- **API Routes**: Allows the creation of API endpoints within the same application, simplifying backend integration.
- **Automatic Code Splitting**: Loads only the necessary JavaScript for the page, reducing load times.
- **File-based Routing**: Simplifies routing by using the filesystem to define routes.
- **CSS and Sass Support**: Built-in support for CSS and Sass, including CSS-in-JS solutions.
- **TypeScript Support**: Provides excellent TypeScript integration for type-safe development.
- **Optimized Images**: Automatically optimizes images for faster loading.

## Prerequisites

Before starting with Next.js, you should be familiar with:

- HTML, CSS, and JavaScript
- React (components, hooks, state management)
- Node.js and npm/yarn
- Basic command line usage

## Creating a New Next.js Application

Follow these steps to create a new Next.js application.

### Step 1: Install Node.js

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Step 2: Create a New Next.js Project

Open your terminal and run the following command to create a new Next.js project:

```bash
npx create-next-app my-nextjs-website
```

### Step 3: Navigate to Your Project Directory

After creating the project, change to the project directory by running the following command:

```bash
cd my-nextjs-website
```

### step 4: Run the Development Server
Start the development server by running the following command:

```bash
npm run dev
```
#  1: Routing in Next.js
## 1=> Simple Routing:

Next.js simplifies the process of setting up routes for different pages in your application. By organizing your components in the `pages` or `app` directory, you can create a straightforward routing structure that Next.js will automatically recognize.

## Project Structure

To implement simple routing in Next.js, follow these steps:

1. Create a `src` folder in your project root.
2. Inside the `src` folder, create an `app` folder.

Your folder structure should look like this:

```bash
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ └── page.jsx
```

## Creating Pages

### Home Page

Create a file named `page.jsx` inside the `src/app` directory. This file will serve as the Home page.

```jsx
// src/app/page.jsx
export default function Home() {
    return (
        <h1>This is the Home page</h1>
    );
}
```

### About Page
Create a folder named about inside the src/app directory. Inside the about folder, create a file named page.jsx.

```jsx
// src/app/about/page.jsx
export default function About() {
    return (
        <h1>This is the About page</h1>
    );
}
```
### Profile Page
Similarly, create a folder named profile inside the src/app directory. Inside the profile folder, create a file named page.jsx.

```jsx
// src/app/profile/page.jsx
export default function Profile() {
    return (
        <h1>This is the Profile page</h1>
    );
}
```

### Running the application 
start development server then
Open your browser and navigate to the following URLs to see the different pages:

- Home Page: http://localhost:3000
- About Page: http://localhost:3000/about
- Profile Page: http://localhost:3000/profile


## 2=> Nested Routing
To implement nested routing in Next.js, follow these steps:

- Inside the `src/app` folder, create a `blog` folder.

Your folder structure should look like this:
```
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ ├── blog/
│ │ │ ├── first/
│ │ │ │ └── page.jsx
│ │ │ ├── second/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ └── page.jsx
```

### Blog Page
Create a folder named blog inside the src/app directory. Inside the blog folder, create a file named page.jsx.

```jsx
// src/app/blog/page.jsx
export default function Blog() {
    return (
        <h1>This is the Blog page</h1>
    );
}

```
### First Blog Page
Inside the blog folder, create a folder named first. Inside the first folder, create a file named page.jsx.

```jsx
// src/app/blog/first/page.jsx
export default function FirstBlog() {
    return (
        <h1>This is the First Blog</h1>
    );
}
```
### Second Blog Page
Inside the blog folder, create a folder named second. Inside the second folder, create a file named page.jsx

```jsx
// src/app/blog/second/page.jsx
export default function SecondBlog() {
    return (
        <h1>This is the Second Blog</h1>
    );
}
```

### Running the application 
start development server then
Open your browser and navigate to the following URLs to see the different pages:

- Blog Page: http://localhost:3000/blog
- First Blog Page: http://localhost:3000/blog/first
- Second Blog Page: http://localhost:3000/blog/second

## 3=> Dynamic Routing
To implement dynamic routing in Next.js, follow these steps:

- Inside the `src/app` folder, create a `products` folder.

Your folder structure should look like this:

```
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ ├── blog/
│ │ │ ├── first/
│ │ │ │ └── page.jsx
│ │ │ ├── second/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── products/
│ │ │ ├── [productId]/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ └── page.jsx
```


### Products Page
Create a folder named `products` inside the `src/app` directory. Inside the `products` folder, create a file named `page.jsx`.

```jsx
// src/app/products/page.jsx
export default function Products() {
    return (
        <h1>This is the Products page</h1>
    );
}
```

### Product Details Page
Inside the products folder, create a folder named `[productId]`. Inside the [productId] folder, create a file named `page.jsx`.

```jsx
// src/app/products/[productId]/page.jsx
export default function ProductDetails({ params }) {
    return (
        <h1>This is the detail of product {params.productId}</h1>
    );
}
```

### Running the Application
Start the development server and Open your browser and navigate to the following URLs to see the different pages:

- Products Page: http://localhost:3000/products
- Product Details Page: http://localhost:3000/products/[productId] (e.g., http://localhost:3000/products/1)

## 4=> Nested Dynamic Routing
To implement nested dynamic routing in Next.js, follow these steps:

- Inside the `src/app/products/[productId]` folder, create a `reviews` folder.

Your folder structure should look like this:

```
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ ├── blog/
│ │ │ ├── first/
│ │ │ │ └── page.jsx
│ │ │ ├── second/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── products/
│ │ │ ├── [productId]/
│ │ │ │ ├── reviews/
│ │ │ │ │ ├── [reviewDetail]/
│ │ │ │ │ │ └── page.jsx
│ │ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ └── page.jsx
```


### Reviews Page
Create a folder named `reviews` inside the `src/app/products/[productId]` directory. Inside the `reviews` folder, create a file named `page.jsx`.

```jsx
// src/app/products/[productId]/reviews/page.jsx
export default function Reviews() {
    return (
        <h1>Reviews Of Products</h1>
    );
}
```

### Review Details Page
Inside the reviews folder, create a folder named [reviewDetail]. Inside the [reviewDetail] folder, create a file named page.jsx.

```jsx
// src/app/products/[productId]/reviews/[reviewDetail]/page.jsx
export default function ReviewDetails({ params }) {
    return (
        <>
            <h1>This is the review of product {params.productId} and review no. is {params.reviewDetail}</h1>
        </>
    );
}
```

### Running the Application
Start the development server and Open your browser and navigate to the following URLs to see the different pages:

- Products Page: http://localhost:3000/products
- Product Details Page: http://localhost:3000/products/[productId] (e.g., http://localhost:3000/products/1)
- Reviews Page: http://localhost:3000/products/[productId]/reviews (e.g., http://localhost:3000/products/1/reviews)
- Review Details Page: http://localhost:3000/products/[productId]/reviews/[reviewDetail] (e.g., http://localhost:3000/products/1/reviews/john)

## 5=> Catch-All Segments
Next.js allows you to create catch-all routes that can match multiple segments. This is useful for dynamic URLs where the number of segments can vary.

To implement catch-all segments in Next.js, follow these steps:

- Inside the `src/app` folder, create a `books` folder. Inside the `books` folder, create a folder named `[[...slug]]`.

Your folder structure should look like this:

```
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ ├── blog/
│ │ │ ├── first/
│ │ │ │ └── page.jsx
│ │ │ ├── second/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── products/
│ │ │ ├── [productId]/
│ │ │ │ ├── reviews/
│ │ │ │ │ ├── [reviewDetail]/
│ │ │ │ │ │ └── page.jsx
│ │ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── books/
│ │ │ ├── [[...slug]]/
│ │ │ │ └── page.jsx
│ └── page.jsx
```


### Books Page
Create a folder named `[[...slug]]` inside the `src/app/books` directory. Inside the `[[...slug]]` folder, create a file named `page.jsx`.

```jsx
// src/app/books/[[...slug]]/page.jsx
export default function Books({ params }) {
    if (params.slug?.length === 2) {
        return (
            <h1>This book's name is {params.slug[0]} and the writer of this book is {params.slug[1]}.</h1>
        );
    } else if (params.slug?.length === 1) {
        return (
            <h1>This book's name is {params.slug[0]}.</h1>
        );
    }
    return <h1>This is the books display page</h1>;
}
```

### Running the Application
Start the development server and Open your browser and navigate to the following URLs to see the different pages:

- Books Page: http://localhost:3000/books
    #### Shows: `This is the books display page`
- Book Name Page: http://localhost:3000/books/[bookName] (e.g., http://localhost:3000/books/letUsC)
    #### Shows: `This book's name is letUsC.`
- Book Name and Writer Page: http://localhost:3000/books/[bookName]/[writerName] (e.g., http://localhost:3000/books/letUsC/yashwantkanetkar)
    #### Shows: `This book's name is letUsC and the writer of this book is yashwantkanetkar.`

### Special Note
If the URL is http://localhost:3000/books, it will show "Page Not Found" if you use `[...slug]`. To handle this special case and display a default message, change the folder name to `[[...slug]]`.

By using `[[...slug]]`, Next.js will match the root route `/books` and display `"This is the books display page"`.

## 6=> Handling Page Not Found

Next.js allows you to create custom "Page Not Found" pages. This is useful when you want to display a custom message when a user navigates to a non-existent page.

### Global Page Not Found

To create a global "Page Not Found" page, follow these steps:

- Create a file named `not-found.jsx` in the `src` directory.

Your folder structure should look like this:

```
├── src/
│ ├── app/
│ │ ├── about/
│ │ │ └── page.jsx
│ │ ├── profile/
│ │ │ └── page.jsx
│ │ ├── blog/
│ │ │ ├── first/
│ │ │ │ └── page.jsx
│ │ │ ├── second/
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── products/
│ │ │ ├── [productId]/
│ │ │ │ ├── reviews/
│ │ │ │ │ ├── [reviewDetail]/
│ │ │ │ │ │ └── page.jsx
│ │ │ │ │ └── not-found.jsx
│ │ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ ├── books/
│ │ │ ├── [[...slug]]/
│ │ │ │ └── page.jsx
│ │ └── not-found.jsx
│ └── page.jsx
```


### Global NotFound Component

Create a file named `not-found.jsx` in the `src` directory.

```jsx
// src/not-found.jsx
export default function NotFound() {
  return (
    <h1>Error: Page not found</h1>
  );
}
```

### Specific Page Not Found for Reviews
To create a specific "Page Not Found" message for a certain route, follow these steps:


#### Review NotFound Component
1. Create a file named not-found.jsx inside the `src/app/products/[productId]/reviews/[reviewDetail]` directory.
```jsx
// src/app/products/[productId]/reviews/[reviewDetail]/not-found.jsx
export default function NotFound() {
    return (
        <div><h1>This review not found.</h1></div>
    );
}
```
2. Updating the ReviewDetails Component: 
Update the page.jsx file inside the `src/app/products/[productId]/reviews/[reviewDetail]` directory to handle "not found" cases.
```jsx
// src/app/products/[productId]/reviews/[reviewDetail]/page.jsx
import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
    if (parseInt(params.reviewDetail) > 400) {
        notFound();
        return null; // You should return null after calling notFound()
    }
    return (
        <>
            <h1>This is the review of product {params.productId} and review no. is {params.reviewDetail}</h1>
        </>
    );
}
```

### Running the Application
Start the development server and Open your browser and navigate to the following URLs to see the different pages:
- For any non-existent page, the global "Page Not Found" message will be shown.
- For specific review pages where reviewDetail is greater than 400, the custom "This review not found." message will be shown.