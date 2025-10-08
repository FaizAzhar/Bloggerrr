  const quotes = [
      { text: "The sun and the moon move by precise calculation."},
      { text: "O people, knowledge only comes by learning and understanding only comes by seeking understanding. For whomever Allah intends good, he gives him understanding of the religion. Verily, only those with knowledge fear Allah among his servants."},
      { text: "Allah it is Who made the sun radiate a brilliant light and the moon reflect a luster, and ordained for it stages, that you might know the number of years, reckoning of time and mathematics. Allah has not created this but in truth. He details the Signs for a people who have knowledge. Indeed, in the alternation of night and day, and in all that Allah has created in the heavens and the earth there are Signs for a God-fearing people."}
,
      { text: "There are two blessings which many people lose: (They are) health and free time for doing good."},
            { text: "O Allah! I seek refuge with You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by (other) men."},
            { text: "Indeed, Allah will not change the condition of a people until they change what is in themselves."},
            { text: "And that there is not for man except that [good] for which he strives"},
            { text: "So whoever does an atom’s weight of good will see it."},
            { text: "Do good deeds properly, sincerely and moderately and know that your deeds will not make you enter Paradise, and that the most beloved deed to Allah is the most regular and constant even if it were little."},
            { text: "O you who have believed, persevere and endure and remain stationed and fear Allah that you may be successful."},
      // Add more quotes here
    ];

    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      document.getElementById("random-quote").innerHTML = `"${selectedQuote.text}"`;
    }

    // Call this function when the page loads
    window.onload = displayRandomQuote;
