class hangman {
    constructor(word) {
        this.words = [["Drenthe",
            "Assen",
            "Coevorden",
            "Emmen",
            "Hoogeveen",
            "Meppel"],

        ["Flevoland",
            "Almere",
            "Biddinghuizen",
            "Emmeloord",
            "Lelystad"],

        ["Friesland",
            "Bolsward",
            "Dokkum",
            "Franeker",
            "Harlingen",
            "Hindeloopen",
            "IJlst",
            "Leeuwarden",
            "Sloten",
            "Sneek",
            "Stavoren",
            "Workum"],

        ["Gelderland",
            "Apeldoorn",
            "Arnhem",
            "Bredevoort",
            "Buren",
            "Culemborg",
            "Dieren",
            "Doetinchem",
            "Ede",
            "Enspijk",
            "Gendt",
            "Groenlo",
            "Harderwijk",
            "Hattem",
            "Heukelum",
            "Huissen",
            "Nijkerk",
            "Nijmegen",
            "Tiel",
            "Wageningen",
            "Wijchen",
            "Winterswijk",
            "Zaltbommel",
            "Zevenaar",
            "Zutphen"],

        ["Groningen",
            "Appingedam",
            "Delfzijl",
            "Groningen",
            "Hoogezand-Sappemeer",
            "Stadskanaal",
            "Veendam",
            "Winschoten"],
        ["Limburg",
            "Echt",
            "Geleen",
            "Gennep",
            "Heerlen",
            "Kerkrade",
            "Kessel",
            "Landgraaf",
            "Maastricht",
            "Montfort",
            "Nieuwstadt",
            "Roermond",
            "Schin op Geul",
            "Sittard",
            "Stein",
            "Susteren",
            "Thorn",
            "Valkenburg",
            "Venlo",
            "Weert"],
        ["Noord Brabant",
            "Den Bosch",
            "Bergen op Zoom",
            "Boxtel",
            "Breda",
            "Eindhoven",
            "Geertruidenberg",
            "Geldrop",
            "Grave",
            "Helmond",
            "Heusden",
            "Klundert",
            "Oosterhout",
            "Oss",
            "Ravenstein",
            "Roosendaal",
            "Sint-Oedenrode",
            "Tilburg",
            "Valkenswaard",
            "Veldhoven",
            "Waalwijk",
            "Willemstad",
            "Woudrichem"],
        ["Noord Holland",
            "Alkmaar",
            "Amstelveen",
            "Amsterdam",
            "Den Helder",
            "Edam",
            "Enkhuizen",
            "Haarlem",
            "Heerhugowaard",
            "Hilversum",
            "Hoofddorp",
            "Hoorn",
            "Laren",
            "Medemblik",
            "Monnickendam",
            "Muiden",
            "Naarden",
            "Purmerend",
            "Schagen",
            "Velsen",
            "Volendam",
            "Weesp",
            "Zaanstad"],
        ["Overijssel",
            "Almelo",
            "Blokzijl",
            "Deventer",
            "Enschede",
            "Genemuiden",
            "Hasselt",
            "Hengelo",
            "Kampen",
            "Oldenzaal",
            "Steenwijk",
            "Vollenhove",
            "Zwolle"],
        ["Zuid Holland",
            "Alphen aan den Rijn",
            "Delft",
            "Dordrecht",
            "Gorinchem",
            "Gouda",
            "Leerdam",
            "Leiden",
            "Rotterdam",
            "Spijkenisse",
            "Den haag",
            "Zoetermeer"],
        ["Utrecht",
            "Amersfoort",
            "Baarn",
            "Bunschoten",
            "Eemnes",
            "Hagestein",
            "Houten",
            "Montfoort",
            "Nieuwegein",
            "Oudewater",
            "Rhenen",
            "Utrecht",
            "Veenendaal",
            "Vianen",
            "Wijk bij Duurstede",
            "Woerden",
            "IJsselstein",
            "Zeist"],
        ["Zeeland",
            "Arnemuiden",
            "Goes",
            "Hulst",
            "Middelburg",
            "Sluis",
            "Terneuzen",
            "Veere",
            "Vlissingen",
            "Zierikzee"],
        ["Weertermen",
            "Aanvriezende mist",
            "Aanvriezende regen",
            "Anemometer",
            "Anticycloon",
            "Atmosfeer",
            "Azorenhoog",
            "Aërosol",
            "Barometer",
            "Beaufortschaal",
            "Bewolkingsgraad",
            "Bliksem",
            "Bliksemdetectie",
            "Broeikaseffect",
            "Buien",
            "Buienlijn",
            "Cirrus",
            "CO",
            "Convectie",
            "Convergentielijn",
            "Corioliseffect",
            "Cumulonimbus",
            "Cumulus",
            "Daggemiddelde",
            "Daggemiddelde voor de stations van het Belgisch thermometrisch netwerk",
            "Dauw",
            "Decade",
            "Depressie",
            "Driftsneeuw",
            "Droge nevel",
            "Droogte",
            "Efemeriden",
            "Fijn stof",
            "Front",
            "Frontale depressie",
            "Gemiddelde",
            "Getijde",
            "Gevoelstemperatuur",
            "Gladheid",
            "Hagel",
            "Heiig",
            "Hittedag",
            "Hittegolf",
            "Hogedrukgebied",
            "Hondsdag",
            "hPa",
            "Hygrometer",
            "IJsdag",
            "IJsplek",
            "IJsplekken",
            "IJsregen",
            "IJzel",
            "Inversie",
            "Isobaren",
            "Katabatische winden",
            "Klimaat",
            "Klimaatverandering",
            "Klimatogram",
            "Klimatologie",
            "Korrelhagel",
            "Korrelsneeuw",
            "Koudegolf",
            "Koufront",
            "Lagedrukgebied",
            "Lichtende nachtwolken",
            "Luchtcirculatie op wereldschaal",
            "Luchtmassa",
            "Luchtsoort",
            "Luchtvochtigheid",
            "Magnetische declinatie",
            "Maximum",
            "Maximumtemperatuur",
            "Meteorologie",
            "Minimum",
            "Minimumtemperatuur",
            "Mist",
            "Motregen",
            "Motsneeuw",
            "Neerslag",
            "Nevel",
            "Nimbostratus",
            "Normale",
            "Occlusiefront",
            "Ochtendgrijs",
            "Onstabiele lucht",
            "Onweer",
            "Onweertypes",
            "Overstroming",
            "Ozon",
            "Ozonepisode",
            "Ozongat",
            "Ozonlaag",
            "Ozonsmog",
            "Radar",
            "Radiosonde",
            "Record",
            "Regen",
            "Relatieve luchtvochtigheid",
            "Rijm",
            "Rijmplek",
            "Rijp",
            "Ruimen of krimpen van de wind",
            "Smog",
            "Sneeuw",
            "Spectrofotometer",
            "Stabiele lucht",
            "Stofhoos",
            "Storm",
            "Stormdepressie",
            "Stormvloed",
            "Straalstroom",
            "Stratosfeer",
            "Stratus",
            "Temperatuur",
            "Tornado",
            "Trog",
            "Tropische cyclonen",
            "Tropopauze",
            "Troposfeer",
            "Universele tijd",
            "UV",
            "Uv-index",
            "Valwind",
            "Vloedgolf",
            "Vorstdag",
            "Waarschuwingen",
            "Warme sector",
            "Warmfront",
            "Weer",
            "Weermodel",
            "Weerradar",
            "Wervelwind",
            "Wind",
            "Windhoos",
            "Windkracht",
            "Wintertijd",
            "Wolkengeslachten",
            "Wolkensamenstelling",
            "Wolkenvorming",
            "Zeebries",
            "Zeegang",
            "Zichtbaarheid",
            "Zomerdag",
            "Zomertijd"]
        ];
        this.categories = [
            "Drenthe",
            "Flevoland",
            "Friesland",
            "Gelderland",
            "Groningen",
            "Limburg",
            "Noord Brabant",
            "Noord Holland",
            "Overijssel",
            "Zuid Holland",
            "Utrecht",
            "Zeeland",
            "Weertermen"
        ];
        this.word = this.getWord(word);
        this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.div = document.getElementById('hangman');
        this.lives = 10;
        this.geusses = [];
        this.counter = 0;
        this.space = 0;
        this.pressed = [];
        this.endGame = false;
        if (document.addEventListener) {
            document.addEventListener('contextmenu', function (e) {
                hang.righClick(e);
            });
            document.addEventListener("keydown", this.verifyKey, false);

        }
        else if (document.attachEvent) {
            document.attachEvent("onkeydown", this.verifyKey);
            document.attachEvent("oncontextmenu", this.rightClick);

        }
        else {
            document.onkeydown = this.verifyKey;
            document.oncontextmenu = this.rightClick;
        }
        this.hangword();
        this.buttons();
        this.canvas();
        this.comments();
    }

    getWord(word) {
        function sortStuff(a, b) {
            return a - b;
        }
        if (localStorage.getItem('Disabled')) {
            var disabled = localStorage.getItem('Disabled').split(',');
            disabled.sort();
            var i;
            for (i = 0; i < this.categories.length; i++) {
                if (disabled.includes(disabled[1])) this.words.splice(disabled[i], 1, 'disabled');
            }
        }
        var randWords = [];
        for (i = 0; i < this.words.length; i++) {
            if (Array.isArray(this.words[i])) {
                randWords.push(this.words[i]);
            }
        }
        if (randWords.length < 1) { var newWord = word; } else {
            var state = randWords[Math.floor(Math.random() * randWords.length)];
            var newWord = state[Math.floor(Math.random() * state.length)];
        }

        return newWord.toLowerCase();

    }
    buttons() {
        var buttondiv = document.createElement("div");
        buttondiv.id = "buttons";
        this.div.appendChild(buttondiv);
        var myButtons = document.getElementById('buttons');
        var letters = document.createElement('ul');

        for (var i = 0; i < this.alphabet.length; i++) {
            letters.id = 'alphabet';
            var list = document.createElement('button');
            list.id = `letter${this.alphabet[i]}`;
            list.className = "letter";
            list.innerHTML = this.alphabet[i];
            list.setAttribute('onclick', `hang.check('${this.alphabet[i]}')`);
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    verifyKey(e) {
        if (e.key === 'F12') {
            return hang.righClick(e);
        }
        if (!hang.pressed.includes(e.key) && hang.endGame === false) {

            hang.pressed.push(e.key);
            hang.check(e.key.toLowerCase());
        }
    }
    check(button) {
        var word = this.word;
        var geuss = button;
        var click = document.getElementById(`letter${button}`);
        click.classList.add('active');
        click.disabled = true;
        click.classList.add('wrong');
        for (var i = 0; i < word.length; i++) {
            if (word[i] == geuss) {
                this.geusses[i].innerHTML = geuss;
                this.geusses[i].classList.add('guessed');
                var but = document.getElementById(`letter${button}`);
                if (but !== null) {
                    but.classList.add('correct');
                    but.classList.remove('wrong');
                }
                this.counter += 1;
            }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
            this.lives -= 1;
            this.comments();
            this.wrong();
        } else {
            this.comments();
        }
    }
    hangword() {
        var word = this.word;
        var worddiv = document.createElement("div");
        worddiv.id = "hold";
        this.div.appendChild(worddiv);
        var wordHolder = document.getElementById('hold');
        var correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            var guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-" || word[i] === " ") {
                guess.innerHTML = "-";
                this.space += 1;
            } else {
                guess.innerHTML = "_";
            }
            guess.style.float = 'left';
            guess.style.marginRight = '1%';
            guess.style.fontSize = '3em';
            this.geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    comments() {
        if(document.getElementById("mylives") === undefined || document.getElementById("mylives") === null){
        var showLivesDiv = document.createElement("div");
        showLivesDiv.id = "mylives";
        showLivesDiv.className = "save";
        showLivesDiv.style.backgroundColor = "#000000";
        this.div.appendChild(showLivesDiv);
        }
        var showLives = document.getElementById("mylives");
        if(this.lives < 10){
        var counter = 0;
        setInterval(() => {
                if(counter < 3){
            showLives.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            counter++;
            console.log(counter);
            setTimeout(() => {
                showLives.style.backgroundColor = "#000000";
            }, 100)
                }
                
        }, 300);
        }
        
        showLives.innerHTML = "You have " + this.lives + " lives";
        if (this.lives == 4) {
            showLives.classList.add('danger');
            showLives.classList.remove('save');
        }
        if (this.lives < 1) {
            showLives.innerHTML = `Game Over! the word was: ${this.word}<br />Too hard? try removing some categories by pressing the right mouse button<br />and disable a few categories`;
            this.stop();
            this.gameOver();
            this.endGame = true;
        }
        for (var i = 0; i < this.geusses.length; i++) {
            if (this.counter + this.space === this.geusses.length) {
                showLives.innerHTML = "You Win!<br />";
                this.stop();
                this.win();
                this.endGame = true;
            }
        }
    }

    stop() {
        var showLives = document.getElementById("mylives");
        var filled = showLives.innerHTML;
        showLives.innerHTML = filled + "<br /><button onclick='location.reload();'>New game</button>"
        var wrong = document.getElementsByClassName('wrong');
        for (var w = 0; w < wrong.length; w++) {
            wrong[w].classList.remove('wrong');
        }
        var buttons = document.getElementsByClassName('letter');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        
    }
    gameOver() {
        var buttons = document.getElementsByClassName('correct');
        var context = this.context;
        var myStickman = this.myStickman;
        var draw = this.draw();
}

    win() {
        var buttons = document.getElementsByClassName('correct');
        var context = this.context;
        var myStickman = this.myStickman;
        var draw = this.draw();
            context.clearRect(0, 0, myStickman.width, myStickman.height);
            hang.draw(60, 120, 80, 150);
            hang.draw(60, 120, 40, 150);
            hang.draw(60, 101, 40, 70);
            hang.draw(60, 101, 80, 70);
            hang.draw(60, 91, 60, 120);
            context = myStickman.getContext('2d');
            context.beginPath();
            context.arc(60, 80, 10, 0, Math.PI * 2, true);
            context.stroke();
            hang.draw(0, 5, 70, 5);
            hang.draw(10, 0, 10, 600);
            hang.draw(0, 150, 150, 150);
        setInterval(function () {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var c = 0; c < 6; c++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                buttons[i].style.backgroundColor = color;
                buttons[i].style.color = 'black';
                buttons[i].disabled = true;
            }
        }, 100);


    }

    draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
        this.context.moveTo($pathFromx, $pathFromy);
        this.context.lineTo($pathTox, $pathToy);
        this.context.stroke();
    }
    canvas() {
        var canvasDiv = document.createElement("canvas");
        canvasDiv.id = "stickman";
        this.div.appendChild(canvasDiv);
        this.myStickman = document.getElementById("stickman");
        this.context = this.myStickman.getContext('2d');
        this.context.beginPath();
        this.context.strokeStyle = "#fff";
        this.context.lineWidth = 2;
    }
    wrong() {
        var lives = this.lives;
        switch (lives) {
            case 0:
                this.draw(60, 70, 80, 100);
                break;
            case 1:
                this.draw(60, 70, 40, 100);
                break;
            case 2:
                this.draw(60, 46, 40, 20);
                break;
            case 3:
                this.draw(60, 46, 80, 20);
                break;
            case 4:
                this.draw(60, 36, 60, 70);
                break;
            case 5:
                this.context = this.myStickman.getContext('2d');
                this.context.beginPath();
                this.context.arc(60, 25, 10, 0, Math.PI * 2, true);
                this.context.stroke();
                break;
            case 6:
                this.draw(60, 5, 60, 15);
                break;
            case 7:
                this.draw(0, 5, 70, 5);
                break;
            case 8:
                this.draw(10, 0, 10, 600);
                break;
            case 9:
                this.draw(0, 150, 150, 150);
                break;
        }
    }
    righClick(e) {
        var options = document.getElementById('options');
        if (!options) {
            var optionDiv = document.createElement('div');
            optionDiv.id = 'options';
            optionDiv.style.width = "100%";
            optionDiv.style.height = "100%";
            optionDiv.style.position = "fixed";
            optionDiv.style.backgroundColor = "lightGray";
            optionDiv.style.top = "0px";
            optionDiv.style.left = "0px";

            var enabledDiv = document.createElement('div');
            enabledDiv.id = 'Enabled_options';
            enabledDiv.style.width = "49%";
            enabledDiv.style.float = "left";
            this.div.appendChild(optionDiv);
            optionDiv.appendChild(enabledDiv);

            var disabledDiv = document.createElement('div');
            disabledDiv.id = 'Disabled_options';
            disabledDiv.style.width = "49%";
            disabledDiv.style.float = "right";
            optionDiv.appendChild(disabledDiv);
            for (var i = 0; i < this.categories.length; i++) {
                var enableState = document.createElement('button');
                enableState.setAttribute('onclick', `hang.enableState('${i}')`);
                enableState.innerHTML = `Enable ${this.categories[i]}`;
                enableState.id = `enable_${this.categories[i]}`;
                enabledDiv.appendChild(enableState);
                if (i !== 12) {
                    enableState.style.display = 'block';
                    enableState.style.width = '33.3%';
                    enableState.style.height = '100px';
                    enableState.style.float = 'left';
                    enabledDiv.appendChild(enableState);
                } else {
                    enableState.style.display = 'block';
                    enableState.style.width = '100%';
                    enableState.style.height = '100px';
                    enableState.style.float = 'left';
                    enabledDiv.appendChild(enableState);
                }
            }

            for (var j = 0; j < this.categories.length; j++) {
                var disableState = document.createElement('button');
                disableState.setAttribute('onclick', `hang.disableState('${j}')`);
                disableState.innerHTML = `Disable ${this.categories[j]}`;
                disableState.id = `disable_${this.categories[j]}`;
                if (j !== 12) {
                    disableState.style.display = 'block';
                    disableState.style.width = '33.3%';
                    disableState.style.height = '100px';
                    disableState.style.float = 'left';
                    disabledDiv.appendChild(disableState);
                } else {
                    disableState.style.display = 'block';
                    disableState.style.width = '100%';
                    disableState.style.height = '100px';
                    disableState.style.float = 'left';
                    disabledDiv.appendChild(disableState);
                }
            }
            var saveButton = document.createElement('button');
            saveButton.setAttribute('onclick', `location.reload();`);
            saveButton.innerHTML = "Opslaan";
            saveButton.style.clear = "both";
            saveButton.style.width = "100%";
            saveButton.style.height = "100px";
            optionDiv.appendChild(saveButton);
            var saveDiv = document.createElement('div');
            saveDiv.id = 'save';
            optionDiv.appendChild(saveDiv);
            this.overview();
        } else {
            options.remove();
        }
        e.preventDefault();
    }
    overview(){
        var optionDiv = document.getElementById("options");
        if(document.getElementById('enabledOverview')){
            var enabledDiv = document.getElementById('enabledOverview');
            var disabledDiv = document.getElementById('disabledOverview');
            enabledDiv.remove();
            disabledDiv.remove();
        }
                    var overViewDiv = document.createElement('div');
            var enableOverDiv = document.createElement('div');
            enableOverDiv.style.width = "48%";
            enableOverDiv.style.float = "left";
            enableOverDiv.id = "enabledOverview";
            var disableOverDiv = document.createElement('div');
            disableOverDiv.style.width = "48%";
            disableOverDiv.style.float = "right";
            disableOverDiv.id = "disabledOverview";
            var disableOverHead = document.createElement('h4');
            var enableOverHead = document.createElement('h4');
            enableOverHead.innerHTML = 'Enabled: ';
            disableOverHead.innerHTML = 'Disabled: ';
            optionDiv.appendChild(overViewDiv);
            overViewDiv.appendChild(enableOverDiv);
            enableOverDiv.appendChild(enableOverHead);
            overViewDiv.appendChild(disableOverDiv);
            disableOverDiv.appendChild(disableOverHead);
            var localStorage = window.localStorage;

            if(localStorage.getItem('Disabled')){
            var disabled = localStorage.getItem('Disabled').split(',');

disabled.sort((a, b) => {
            return a - b;
        });
            console.log(disabled);
            for(var c = 0; c < this.categories.length; c++){
                console.log(c);
                if(disabled.includes(`${c}`)){
                    console.log('true');
                    var disabledChild = document.createElement('p');
                    disabledChild.innerHTML = this.categories[c];
                    disabledChild.style.float = "left";
                    disabledChild.style.marginRight = "1%";
                    disableOverDiv.appendChild(disabledChild);
                } else {
                    console.log('false');
                    var enabledChild = document.createElement('p');
                    enabledChild.innerHTML = this.categories[c];
                    enabledChild.style.float = "left";
                    enabledChild.style.marginRight = "1%";
                    enableOverDiv.appendChild(enabledChild);
                }
            }
            } else {
            for(var c = 0; c < this.categories.length; c++){
                    var enabledChild = document.createElement('p');
                    enabledChild.innerHTML = this.categories[c];
                    enabledChild.style.float = "left";
                    enabledChild.style.marginRight = "1%";
                    enableOverDiv.appendChild(enabledChild);
            }
            }
    }
    enableState(button) {
        String.prototype.replaceArray = function (find, replace) {
            var replaceString = this;
            for (var i = 0; i < find.length; i++) {
                replaceString = replaceString.replace(find[i], replace[i]);
            }
            return replaceString;
        };
        var localStorage = window.localStorage;
        if (localStorage.getItem('Disabled')) {
            var disabled = localStorage.getItem('Disabled').split(',');
            for (var i = 0; i < disabled.length; i++) {
                if (disabled[i] === button) disabled.splice(i, 1);
            }
            var newString = disabled.toString();
            var find = ["[", "]"];
            var replace = ["", ""];
            var finalString = newString.replaceArray(find, replace);
            localStorage.setItem('Disabled', finalString);
        }
        this.overview();
    }
    disableState(button) {
        var localStorage = window.localStorage;
        if (!localStorage.getItem('Disabled')) {
            var data = `${button}`;
            localStorage.setItem('Disabled', data);
        } else {
            var storage = localStorage.getItem('Disabled');
            var array = storage.split(',');
            if (!array.includes(button)) {
                var data = `${storage},${button}`;
                localStorage.setItem('Disabled', data);
            }
        }
        this.overview();
    }

}