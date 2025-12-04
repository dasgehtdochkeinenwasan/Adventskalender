function action(){// Inhalte für jedes Türchen
    const inhalte = {
        1: "<p>A Plätzchen a day keeps the Weihnachts-stress away</p>",
        2: "<img src='Bilder/rentier-weihnachtsmeme.jpg'>",
        3: "<p> Mini-Challenge: Leg für 10 Minuten das Handy weg und mache gar nichts.</p>",
        4: "<p>Weihnachten ist die Zeit der Liebe – und der Frage, warum die Lichterkette schon wieder nicht geht!</p>",
        5: "<img src='Bilder/frosch-weihnachtsmeme.jpg'>",
        6: "<p>Besinnlichkeit ist aus, aber Glühwein ist noch da.</p>",
        7: "<p>Butterplätzchen: 250g Dinkelmehl 120g braunen Zucker 175g Butter</p>",
        8: "<a href='https://www.youtube.com/watch?v=b-NCLrj9XNo' target='_blank'>Carols of the Bells</a>",
        9: "<p>Wenn's draußen kalt wird, brauch ich nur drei Dinge:\neine Decke, Ruhe und jemanden, der mir den Glühwein reicht.</p>",
        10: "<img src='Bilder/meme-grinch.jpg' style='width:100%'>",
        11: "<p>Mini-Challenge: Schreibe dir 3 Ziele auf, die du dieses Jahr noch erreichen möchtest.</p>",
        12: "<p>Weihnachten ist toll,aber warum fühlt sich jeder Dezember an wie ein Endgegner?</p>",
        13: "<p>Ich bin dankbar, dass du in meinem Leben bist ❤️</p>",
        14: "<a href='https://www.youtube.com/watch?v=sJCJ8dx5bJE' target='_blank'>Snowman</a>",
        15: "<img src='Bilder/cat-tree-meme.jpg'>",
        16: "<p>Gibt es etwas Schöneres als Plätzchen? Meeeeehr PLÄTZCHEN!“</p>",
        17: "<img src='Bilder/dog-christmas-meme.jpg'>",
        18: "<p>Mini-Challenge:Notiere 5 Dinge die du an dir magst</p>",
        19: "<p>Frohes Fest! Oder wie ich es nenne: Warmes Chaos mit Snacks.</p>",
        20: "<img src='Bilder/kugel-katze.jpg' style='width:100%'>",
        21: "<p>Ich mag Weihnachten wirklich…aber können wir den Stress bitte zurückgeben?</p>",
        22: "<p>Weihnachten ohne Stress wäre wie Plätzchen ohne Zucker – theoretisch möglich, aber unrealistisch.</p>",
        23: "<img src='Bilder/dog-christmas-meme.jpg'>",
        24: "<p>Verrückt, wie vertraut sich alles mit dir anfühlt. Frohe Weihnachten ❤️</p>",

    };



    const heute = new Date();
    const aktuellerTag = heute.getDate(); // Zahl 1–31

    document.querySelectorAll(".Tuerchen").forEach(elem => {
        elem.addEventListener("click", function() {
            const id = parseInt(this.id); // Türchen-Nummer als Zahl

            
            if (id > aktuellerTag) {
                alert("Dieses Türchen darfst du erst am " + id + ". Dezember öffnen 🎄");
                return;
            }

            const istOffen =this.classList.contains("offen");

            if(!istOffen){
                this.classList.add("offen");
                this.dataset.original = this.innerHTML
                this.innerHTML = inhalte[id];  // Inhalt ersetzen
                this.style.backgroundColor = "white";  // Hintergrund ändern
                this.style.color = "black"; // Textfarbe anpassen

                let fontSize = 30;
                this.style.fontSize = fontSize + "px";

                while(this.scrollHeight > this.clientHeight && fontSize > 8){
                    fontSize--;
                    this.style.fontSize = fontSize + "px";
                }
            
            }else {
                this.classList.remove("offen");
                this.innerHTML=this.dataset.original;
                this.style.backgroundColor = "#354938";
                this.style.color = "white";
                this.sytle.fontSize = "";
            }
        });
    });

}action();
