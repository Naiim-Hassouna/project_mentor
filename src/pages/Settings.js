import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function Settings() {
  const themes = [
    {
      name: "light",
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      name: "dark",
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const [settings, setSettings] = useState(themes[0]);

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || themes[0].name;
  });

  useEffect(() => {
    const selectedTheme = themes.find((t) => t.name === theme);
    if (selectedTheme) {
      setSettings(selectedTheme);
      localStorage.setItem("theme", selectedTheme.name);
    }
  }, [theme]);

  function changeTheme(i) {
    const selectedTheme = themes[i].name;
    setTheme(selectedTheme);
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  }

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];
  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "15px",
    },
    {
      title: "Large",
      value: "16px",
    },
  ];

  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);

  return (
    <div>
      <div className="section d-block">
        <h2>Primary Theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Preferred color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              key={index}
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {settings["--primary-color"] === color && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Font size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => changeFontSize(index)}
            >
              {size.title}
              {settings["--font-size"] === size.value && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
