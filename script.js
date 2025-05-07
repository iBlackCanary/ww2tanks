function showRandomFact() {
    const facts = {
      "T-34": [
        "Is slanted armor a revolution? Yes, he had sloping frontal armor, and it was considered an innovation, but he did not invent it. The French have already tried this on their Char B1. It just worked better for the Soviets.",
        "The engine is almost like a tractor. His V-2 diesel was derived from tractor engines, but it was damn reliable and powerful. The Germans suffered from overheating in their Panthers, but this diesel engine worked stably in the mud. It was as simple as a felt boot, and it was his weapon.",
        "Optics is the Achilles' heel. Despite its cool appearance, it had poor visibility. The Germans with their Zeiss sights saw further and shot more accurately. So in the tank duel, the T-34 was not always the king."
      ],
      "Tiger I": [
        "The tank is show-off, but moody. Scary and powerful, but it broke down more often than it worked. 54 tons was no joke, even the bridges couldn't stand it.",
        "The 88 mm cannon is a scary beast. It punched almost everything at a distance of a kilometer or more. But... if you got to the fight.",
        "Expensive, long, difficult. Only about 1,350 units were built, which is a drop compared to tens of thousands of T-34s and Shermans."
      ],
      "Sherman": [
        "Burning torch is no joke. In early versions, the gas tank exploded like a lighter. For this, he was even nicknamed Ronson - ignites the first time.",
        "Easy to produce, like a burger. They stamped quickly and a lot: more than 49,000 pieces! It's better to have 5 Shermans than one Tiger.",
        "A hybrid for all occasions. The Sherman was versatile: artillery, flamethrower, even engineering versions. A real transformer. "
      ]
    };
  
    const tank = document.getElementById("tankSelect").value;
    const tankFacts = facts[tank] || ["No facts found for this tank."];
    const fact = tankFacts[Math.floor(Math.random() * tankFacts.length)];
  
    document.getElementById("factOutput").innerText = `Fact about ${tank}: ${fact}`;
  }
  