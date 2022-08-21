import App from "./App";

const root = document.getElementById("root");
root.innerHTML = `
<h1>Learning webPack tool</h1>
${App({ name: "Mohit" })}
`;
