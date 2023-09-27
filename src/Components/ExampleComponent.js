// ExampleComponent.js

import React, { useEffect } from "react";
import { initFacebookPixel } from "./facebookPixel";

const ExampleComponent = () => {
  useEffect(() => {
    initFacebookPixel(); // Initialize and track the PageView event
  }, []);

  return (
    // Your component content
    <div>{/* Your component content here */}</div>
  );
};

export default ExampleComponent;
