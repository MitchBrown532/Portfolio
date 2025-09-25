const { spawn } = require("child_process");
const path = require("path");

// Paths to venv Python and backend
const backendPython = path.join(
  __dirname,
  "../backend/venv/Scripts/python.exe"
);
const backendDir = path.join(__dirname, "../backend");

// Run Flask with auto-reload
const flaskProcess = spawn(backendPython, ["-m", "flask", "run", "--reload"], {
  cwd: backendDir,
  stdio: "inherit",
});

// Error handling
flaskProcess.on("error", (err) => {
  console.error("Failed to start Flask backend:", err);
});
