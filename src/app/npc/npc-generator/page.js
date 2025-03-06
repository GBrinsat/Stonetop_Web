"use client";

export default function Page() {
  function getRandomName() {
    fetch("/public/name_resources/stonetop.txt").then(convertData); //Does not find resourse?
    console.log("clicked");
  }

  function convertData(rawData) {
    console.log(rawData);
  }

  return (
    <div>
      <p>NPC Generator</p>
      <button onClick={getRandomName}>Create NPC Name</button>
    </div>
  );
}
