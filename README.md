# Messages CLI

A simple CLI tool to interact with the [Messages-CRUD-RestAPI](https://github.com/GalBitton/Messages-CRUD-RestAPI) for managing messages.

## 🔧 Setup

1. Clone the repository:

```bash
git clone https://github.com/your-org/messages-cli.git
cd messages-cli
```
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your API URL:

```bash
API_URL=https://messages-crud.up.railway.app/api/v1
```

## 💻 Usage
### List all messages
1. Run the CLI using **Make sure you have Node.js and npm installed, and you are in the project directory**:
```bash
node start <command> [options]
```
2. Available commands:<br>
    1. `create`: Create a new message
   ```bash
   npm start create
   # You will be prompted to enter the message details interactively.
    ```
   2. `list`: List all messages
   ```bash
    npm start list
    ```
    3. `get <id>`: Get a message by ID
     ```bash
    npm start get <messageId>
    ```
   4. `update <id>`: Update an existing message
    ```bash
    npm start update <messageId>
    # You will be prompted to enter the new message details interactively.
    ```
   5. `delete <id>`: Delete a message
    ```bash
    npm start delete <messageId>
    ```
   
## Test the API
Make sure the API is running before testing the CLI commands. You can test it by running the following command:
```bash
curl -X GET https://messages-crud.up.railway.app/api/v1/messages
```

## Project Structure
```
messages-cli/
├── cli/
│   ├── commands/
│   ├── utils/
│   └── index.js
├── .env
└── package.json
```