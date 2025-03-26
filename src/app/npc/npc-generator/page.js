"use client";
import { useState, useEffect } from "react";

export default function Page() {
  //state variables
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [trait, setTrait] = useState("");

  const [traitArray, setTraitArray] = useState([
    "all thumbs",
    "ambitious",
    "beloved by everyone",
    "beautiful singing voice",
    "best cook",
    "best weaver",
    "blind",
    "braved the Ruined Tower",
    "cautious",
    "cheery",
    "chronic cough",
    "complains too much",
    "cowardly",
    "craves recognition",
    "curious",
    "dallied with the fae years ago",
    "deaf",
    "desperately wants a child",
    "distills the best whisky",
    "doesn’t pull their weight",
    "drunkard",
    "eagle-eye",
    "fearless",
    "foundling",
    "gathers herbs from the Wood",
    "gets the best deals",
    "gifted storyteller",
    "gods-fearing",
    "good with children",
    "happy-go-lucky",
    "has a beef with Marshedge",
    "has a good heart",
    "has a lot of backbone",
    "has a wandering eye",
    "has a way with animals",
    "has fae blood in their veins",
    "has just terrible luck",
    "has lost their nerve",
    "has no respect for their elders",
    "has terrible nightmares",
    "has the most children",
    "has their head in the clouds",
    "hates the Hillfolk",
    "hears voices",
    "humorless",
    "immaculate appearance",
    "jealous",
    "just got married",
    "keeps to themselves",
    "knows all the gossip",
    "lame",
    "likes to hurt things",
    "lived among the Forest Folk",
    "lost all their children",
    "lovesick",
    "loves their dogs",
    "loyal friend",
    "most handsome",
    "moved here recently",
    "must approve any marriages",
    "mute",
    "not afraid of deep water",
    "not too bright",
    "oldest",
    "orphan",
    "overprotective",
    "prettiest",
    "prideful",
    "reckless",
    "refuses to marry",
    "resents their lot in life",
    "runs everywhere",
    "sensitive",
    "simpleton",
    "slew many crinwin",
    "stoic",
    "stubborn",
    "suffers from fits",
    "swears they met the Pale Hunter",
    "tells the best jokes",
    "tender-hearted",
    "tends the Gods’ Pavilion",
    "tends to the sick & injured",
    "touched",
    "very strong",
    "wants to have kids",
    "well-read",
    "well-traveled",
    "widowed",
    "will eat anything",
  ]);

  function getRandomName() {
    console.log("fetching names");
    let nameArray = [
      "Aderyn",
      "Aeronwen",
      "Afanen",
      "Afon",
      "Alun",
      "Andras",
      "Aneirin",
      "Awstin",
      "Bedwyr",
      "Berwyn",
      "Betrys",
      "Braith",
      "Briallen",
      "Bronwen",
      "Bryn",
      "Cadi",
      "Cadoc",
      "Cadwygan",
      "Caron",
      "Cefin",
      "Ceinwen",
      "Ceridwyn",
      "Cerys",
      "Colwyn",
      "Deiniol",
      "Dilwen",
      "Dylis",
      "Eifion",
      "Eirlys",
      "Eluned",
      "Emrys",
      "Enfys",
      "Eurwen",
      "Gaenor",
      "Garet",
      "Gethin",
      "Glyndir",
      "Heledd",
      "Hywel",
      "Ifan",
      "Iorwerth",
      "Iwan",
      "Lewela",
      "Leuca",
      "Linos",
      "Mado",
      "Maldwyn",
      "Malon",
      "Mared",
      "Marged",
      "Martyn",
      "Meirion",
      "Menwen",
      "Mererid",
      "Neirin",
      "Nia",
      "Ofydd",
      "Olwyn",
      "Owain",
      "Padrig",
      "Parry",
      "Pryce",
      "Pryder",
      "Rheinal",
      "Rhisiart",
      "Rhosyn",
      "Rydderch",
      "Sawyl",
      "Siana",
      "Sioned",
      "Talfryn",
      "Tegid",
      "Tiwlip",
      "Tomos",
      "Tudyr",
      "Winifred",
      "Yorath",
    ];

    setName(nameArray[Math.floor(Math.random() * nameArray.length)]);
    console.log(name);
  }

  function getRandomTrait() {
    let random = Math.floor(Math.random() * traitArray.length);
    let newTraitArray = traitArray;

    setTrait(traitArray[random]);
    // console.log(random);
    // console.log(newTraitArray[random]);
    // console.log(newTraitArray.splice(random, 1));
    // console.log(newTraitArray);
    newTraitArray.splice(random, 1);
    setTraitArray(newTraitArray);
  }

  return (
    <div>
      <p>NPC Generator</p>
      <button onClick={getRandomTrait}>Create NPC Name</button>
      <hr />
      <form action="">
        <label>
          Gender:
          <select
            name="genderSelect"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Diverse">Divers</option>
          </select>
        </label>
        <label>
          Where is the NSC from?
          <select
            name="regionSelect"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="Stonetop">Stonetop</option>
            <option value="Gordins Delve">Gordins Delve</option>
            <option value="Barrier Pass">Barrier Pass</option>
            <option value="Hillfolk">Hillfolk</option>
            <option value="Marshedge">Marshedge</option>
            <option value="Manmarcher">Manmarcher</option>
            <option value="Lygos">Lygos</option>
          </select>
        </label>
      </form>
      <hr />
      <span>{region}</span>
    </div>
  );
}
