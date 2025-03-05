# Endpointizer

**Endpointizer** is a dynamic API generator that allows you to create backend tasks with a single endpoint. By defining tasks in a configuration, **Endpointizer** will generate the necessary routes on the fly, making it easier to scale and manage your APIs. No need to define each endpoint manually—let the magic of **Endpointizer** handle it for you!

---

## Table of Contents

- [Why Endpointizer?](#why-endpointizer)
- [Features](#features)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Why Endpointizer?

In traditional backend development, adding endpoints can quickly become repetitive. **Endpointizer** simplifies this by allowing you to define your API routes dynamically, creating them as needed. This is perfect for projects with constantly changing requirements, quick prototypes, or just if you want to save time on boilerplate code.

### Key Benefits:

- **Dynamic Endpoint Generation**: One endpoint to create many.
- **Modular**: Add or modify endpoints easily without touching multiple files.
- **Scalable**: Build APIs that can grow with your application.
- **Clean and Elegant**: No more repetitive route definitions. Just create and configure.

---

## Features

- **Dynamic Endpoint Creation**: Generate GET, POST, PUT, DELETE endpoints at runtime.
- **Task-based API**: Each endpoint is treated as a task for easier management and scaling.
- **NestJS Integration**: Built on top of NestJS, leveraging its powerful routing and modular system.
- **Open Source**: Free for anyone to use and contribute to.

---

## Getting Started

To get started with **Endpointizer**, you'll need **Node.js** and **NestJS**. If you haven’t already, install the NestJS CLI:

### 1. Install NestJS CLI

```bash
npm install -g @nestjs/cli
```

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/endpointizer.git
cd endpointizer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run start
```

Your API should now be running at `http://localhost:3000`.

---

## How It Works

### Creating Dynamic Endpoints

Instead of manually defining each route, **Endpointizer** dynamically registers endpoints based on a set of predefined tasks. Each task defines:

- **Task Name**: A human-readable identifier for your endpoint.
- **HTTP Method**: The method (GET, POST, etc.).
- **Route**: The path of your endpoint.
- **Params**: The params that your endpoint should receive. Model TBD.

For example, imagine you have a task to create a user. Instead of defining the route yourself, you simply define a task:

```ts
{
  name: 'createUser',
  method: 'POST',
  route: '/user',
  params: {},
}
```

This will automatically create the `/user` endpoint and map the `POST` method to the `createUserHandler` function.

### API Endpoints

**Endpointizer** provides the following routes:

- `GET /task`: List all the dynamic tasks (endpoints).
- `POST /task/:taskName`: Trigger the creation of an endpoint based on the task configuration.

---

## Usage

After setting up the project and running the server, you can start creating your dynamic endpoints.

1. **List Available Tasks**  
   Make a `GET` request to `/task` to see all the tasks (endpoints) defined in your system.

2. **Create a Task (Endpoint)**  
   Make a `POST` request to `/task/:taskName`, where `:taskName` is the task you want to create. This will trigger the creation of that task’s endpoint.

---

## Contributing

We welcome contributions to **Endpointizer**! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

### How to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a new pull request!

---

## License

**Endpointizer** is open-source and released under the [MIT License](LICENSE).

---

## Acknowledgments

- Built on top of **NestJS**, which provides a powerful framework for building scalable and maintainable server-side applications.
- Special thanks to the open-source community for their ongoing contributions to making web development easier and faster!

---

That's it! With **Endpointizer**, creating scalable, dynamic APIs has never been easier. Have fun building! 😊

---
