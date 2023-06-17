import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      Home Page
      <a className="text-red-200 font-bold bo0rder-2 shadow-md">CLICK ME</a>
    </div>
  );
}

export default App;
