import React from "react";

const Blog = () => {
  return (
    <div>

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-10 mb-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Nov 9, 2022</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-sky-400 dark:text-gray-900"
            >
              Database
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Difference between SQL and NoSQL ?
            </a>
            <p className="mt-2">
            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-10 mb-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Nov 9, 2022</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-sky-400 dark:text-gray-900"
            >
              JWT
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is JWT, and how does it work?
            </a>
            <p className="mt-2">
            JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-10 mb-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Nov 9, 2022</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-sky-400 dark:text-gray-900"
            >
              JS / NODE JS
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is the difference between javascript and Node JS?
            </a>
            <p className="mt-2">
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-10 mb-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Nov 9, 2022</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-sky-400 dark:text-gray-900"
            >
              NODE JS
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              How does Node JS handle multiple requests at the same time?
            </a>
            <p className="mt-2">
            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;
