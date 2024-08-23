AgentGenesis CLI is a command-line tool that helps you quickly add AI components to your project. It fetches pre-built component templates from a remote repository and integrates them into your project, making it easier to incorporate AI functionalities into your applications.

## Usage

To add a component to your project, navigate to your project directory in the terminal and run:

```bash
npx agentgenesis add <componentName>
```

Replace <componentName> with the name of the component you want to add (e.g., WikipediaTool or SearchApiTool).

## Development

If you encounter any issues running the CLI tool with `npx`, or if you want to contribute to the development of this project, you can clone the repository.

### Steps to Clone and Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/milkiyas-web/cli-template.git
   ```
2. **install the dependecies:**
   ```bash
   npm install
   
3. **Build:**
   ```bash
   npm run build
4. **install component:**
   ```bash
   node ./dist/index.js add WikipediaTool
   ```
You can replace WikipediaTool with any available component names at https://agentgenesis.dev

