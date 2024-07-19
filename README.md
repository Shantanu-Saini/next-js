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

## 7=> Grouping Routes

Next.js allows you to group routes without including the group name in the URL. This is useful for organizing your directory structure while keeping the URLs clean and user-friendly.

### Grouping Routes

To group routes, follow these steps:

- Create a folder named `auth`.
- Inside the `auth` folder, create two folders: `login` and `register`.
- Each folder should contain a `page.jsx` file.

Your folder structure should look like this:

```
├── src/
│ ├── app/
│ │ ├── (auth)/
│ │ │ ├── login/
│ │ │ │ └── page.jsx
│ │ │ ├── register/
│ │ │ │ └── page.jsx
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

### Login Page

Create a file named `page.jsx` inside the `src/app/(auth)/login` directory.

```jsx
// src/app/(auth)/login/page.jsx
export default function Login() {
  return (
    <h1>Login</h1>
  );
}
```

### Register Page
Create a file named `page.jsx` inside the `src/app/(auth)/register` directory.

```jsx
// src/app/(auth)/register/page.jsx
export default function Register() {
  return (
    <h1>Register</h1>
  );
}
```

### Running the Application
Start the development server and Open your browser and navigate to the following URLs to see the different pages:

- Login Page: http://localhost:3000/login
Shows: Login
- Register Page: http://localhost:3000/register
Shows: Register

By using parentheses around the folder name, Next.js creates a group of routes without including the group name in the URL. This helps keep your URLs clean and your directory structure organized.

# 2: Layout in Next.js
## 1=> Global Layout
Next.js provides a powerful way to manage layout components that should appear across multiple pages. By defining a layout, you can include common components such as headers and footers that persist across your application.

### Creating a Layout with Header and Footer

Follow these steps to implement a global layout with a header and footer.

### Step 1: Create Components for Header and Footer

First, create a `components` folder outside the `app` folder. Inside this `components` folder, create `Header` and `Footer` components.

#### Header Component

Create a file named `Header.jsx` inside the `components` folder.

```jsx
// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <div>
        <header className='grid place-content-center bg-orange-300 py-6'>
            <h1 className='text-4xl font-bold'>My Blog</h1>
        </header>
    </div>
  );
}
export default Header;
```


### Footer Component
Create a file named Footer.jsx inside the components folder.

```jsx
// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <div>
        <footer className="grid place-content-center bg-slate-500 py-6">
            <div className="text-center text-black text-2xl font-bold">Copyright © 2024
            </div>
        </footer>
    </div>
  );
}

export default Footer;
```

### Step 2: Define the Layout
Next, create or update the layout.jsx file inside the app folder to include the Header and Footer components.

```jsx
// app/layout.jsx
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Step 3: Applying the Layout
With the layout defined, the Header and Footer components will now appear on every page within your Next.js application. The RootLayout component wraps around all your pages, ensuring that the header and footer are consistently rendered.

### Running the Application
Start the development server. Open your browser and navigate to any URL within your application. You will see the Header and Footer components rendered on each page.

By following these steps, you have successfully created a global layout in Next.js, ensuring that common components like headers and footers are consistently displayed across your application.

## 2 => Nested Layout

Next.js also supports nested layouts, allowing you to create layouts specific to certain sections of your application. This can be particularly useful for displaying additional information or components on specific pages.

### Creating a Nested Layout for Product Details

Follow these steps to implement a nested layout for product details:

### Step 1: Create a Layout for Product Details

Inside the `[productId]` folder, create a file named `layout.jsx`.

```jsx
// app/products/[productId]/layout.jsx
export default function ProductDetailsLayout({ children }) {
    return (
        <>
            {children}
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Product Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</p>
            </div>
        </>
    );
}
```

### Step 2: Using the Nested Layout
The nested layout will automatically be applied to any routes under the [productId] directory. For example, when navigating to `http://localhost:3000/products/laptop/reviews/4`, the ProductDetailsLayout will wrap around the content for that route.

### Running the Application
Start the development server. Open your browser and navigate to 
- `http://localhost:3000/products/laptop/reviews/4`
- You will see the ProductDetailsLayout applied, displaying the additional information below the main content.

By following these steps, you have successfully created a nested layout in Next.js, ensuring that specific components like product details are displayed on relevant pages within your application.

# 3 => Links in Next.js
## 1=> Simple Links
Next.js provides a built-in `<Link>` component that allows for client-side navigation between pages. This component optimizes the navigation process and improves performance by preloading linked pages.

### Step 1: Import the Link Component

To use the `<Link>` component, you need to import it from `next/link`.

### Step 2: Using Link in a Header Component

Here's an example of how to use the `<Link>` component in a `Header` component to navigate to different pages:

```jsx
// components/Header.jsx
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div>
      <header className='grid place-content-center bg-orange-300 py-6'>
        <h1 className='text-4xl font-bold'>My Header</h1>
        <div className='flex items-center justify-center'>
          <Link href='/' className="text-2xl mx-4">Home</Link>
          <Link href='/about' className="text-2xl mx-4">About</Link>
          <Link href='/profile' className="text-2xl mx-4">Profile</Link>
          <Link href='/products' className="text-2xl mx-4">Products</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
```

### Using Link in a Page Component
You can also use the <Link> component within any page to navigate to other pages. Here's an example in the Home page:

```jsx
// src/app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center my-10">
        <h1>Hello World</h1>
        <p>This is Home page</p>
        <Link href="/about" className="text-2xl mx-4">About</Link>
        <Link href="/profile" className="text-2xl mx-4">Profile</Link>
        <Link href="/products" className="text-2xl mx-4">Products</Link>
      </div>
    </main>
  );
}
```

### Step 3: Running the Application
Start the development server and navigate to the different URLs to see the links in action. For example:

- Navigate to http://localhost:3000 to see the Home page with links to About, Profile, and Products pages.
- Navigate to http://localhost:3000/about to see the About page.
- Navigate to http://localhost:3000/profile to see the Profile page.
- Navigate to http://localhost:3000/products to see the Products page.

By following these steps, you have successfully integrated client-side navigation in your Next.js application using the <Link> component.

## 2=> Dynamic Links in Next.js

Next.js makes it simple to create dynamic links that lead to various routes within your application. This allows for a highly navigable and user-friendly interface. Let's walk through how to implement dynamic links in a Next.js application.

### Step 1: Creating Dynamic Links in the Products Page

First, we need to set up dynamic links on the Products page to navigate to specific product details.

**`Products` Component**

```jsx
// app/products/page.jsx
import Link from "next/link";

export default function Products() {
    return (
        <>
            <Link href="/" className="text-2xl mx-4">Home</Link>
            <h1 className="text-3xl">This is Products page</h1>
            <Link href="/products/laptop" className="text-2xl mx-4">Laptop</Link>
            <Link href="/products/bag" className="text-2xl mx-4">Bag</Link>
            <Link href="/products/shirt" className="text-2xl mx-4">Shirt</Link>
        </>
    );
}
```

### Step 2: Creating the Product Details Page
Next, we create a dynamic link in the Product Details page to navigate to the reviews for a specific product.

`ProductDetails` Component
```jsx
// app/products/[productId]/page.jsx
import Link from "next/link";

export default function ProductDetails({ params }) {
    return (
        <>
            <h1 className="text-3xl">
                This is product detail page of product <b>{params.productId}</b>
            </h1>
            <h1 className="my-4 text-xl">
                <Link href={`/products/${params.productId}/reviews`}>
                    Reviews for {params.productId}
                </Link>
            </h1>
        </>
    );
}
```

### Step 3: Creating the Reviews Page
Now, let's create dynamic links in the Reviews page to navigate to specific review details.

`Reviews` Component

```jsx
// app/products/[productId]/reviews/page.jsx
import Link from "next/link";

export default function Reviews({ params }) {
    return (
        <>
            <h1 className="text-3xl">Reviews Of Products</h1>
            <Link href={`/products/${params.productId}/reviews/Rohan`} className="text-2xl mx-4">Rohan</Link>
            <Link href={`/products/${params.productId}/reviews/Amit`} className="text-2xl mx-4">Amit</Link>
            <Link href={`/products/${params.productId}/reviews/Shyam`} className="text-2xl mx-4">Shyam</Link>
        </>
    );
}
```

### Step 4: Creating the Review Details Page
Lastly, create a component to handle the detailed view of a review, with a custom error message for non-existing reviews.

`ReviewDetails` Component
```jsx
// app/products/[productId]/reviews/[reviewDetail]/page.jsx
import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
    if (parseInt(params.reviewDetail) > 400) {
        notFound();
    }
    return (
        <>
            <h1>This is the review of product <em>{params.productId}</em> and review no. is <b>{params.reviewDetail}</b></h1>
        </>
    );
}
```

### Running the Application
To test your application, start the development server and navigate to the following URLs:

- Products Page: http://localhost:3000/products
- Product Details Page: http://localhost:3000/products/laptop
- Reviews Page: http://localhost:3000/products/laptop/reviews
- Review Details Page: http://localhost:3000/products/laptop/reviews/Rohan

You should see the dynamic links in action, navigating to the respective pages.

By following these steps, you have successfully created dynamic links in Next.js, allowing for seamless navigation across various pages within your application.