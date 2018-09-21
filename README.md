
# Artwork Randomizer - Gruppe 8
Vi er 3 studenter på NTNU som i september 2018 har gjennomført et prosjekt i emnet IT2810 Webutvikling. Prosjektet gikk ut på å lage en online utstilling med brukerstyrte kombinasjoner av lyd, svg-grafikk og tekst. Applikasjonen er implementert som en *Single Page Application (SPA)* med React. Les mer om React [her](https://reactjs.org/).

<br>

  - [Innhold og funksjonalitet](#innhold-og-funksjonalitet)
    - [Generelt](#generelt)
    - [Filer](#filer)
    - [Rettigheter](#rettigheter)
  - [Teknologi](#teknologi)
    - [React](#react)
    - [AJAX](#ajax)
    - [Responsive Web Design](#responsive-web-design)
  - [Testing](#testing)


## Innhold og funksjonalitet 
### Generelt
Brukeren kan velge blant 3 kategorier av bilder, 3 kategorier av lyd og 3 kategorier av tekst. Basert på disse valgene genereres en utstilling med 4 kombinasjoner av ett bilde, én tekst og én lyd. Hver kombinasjon vises i et eget tab-display som gjør det enkelt for brukeren å bla mellom de 4 kombinasjonene. Ved endring av kategorivalg genereres en ny utstilling. 
Et utklipp som viser hvordan vi har valgt at layouten skal være ser dere under:

![](https://i.imgur.com/tkhbhIp.png)

<br>

### Filer
Bildene er svg-filer (xml-data), lydene er mp3-filer, og tekstene er lagret i json-objekter. Hvert lydspor er lagret i en egen mp3-fil, hvert bilde er lagret i en egen svg-fil, mens tekstene er lagret i json-filer der hver json-fil hører til én kategori og består av 4 tekster. Det gir tilsammen *12 + 12 + 3 = 27* kildefiler. 

<br>

### Rettigheter
SVG-filene er hentet fra [publicdomainvectors.org](https://publicdomainvectors.org/).
<br>
Lydene er hentet fra Youtube fra følgende kilder:


Sang | Youtube-bruker | Link til video
:--- | :---: | :---
*Black Sabbath - Paranoid* | Music Lyrics | [Klikk her](https://www.youtube.com/watch?v=FSGyXeRFLyE)
*Dire Straits - Sultan of Swings* | Diablo4643 | [Klikk her](https://www.youtube.com/watch?v=0fAQhSRLQnM)
*Chuck Berry - Johhny B. Goode* | osiris1822 | [Klikk her](https://www.youtube.com/watch?v=ZFo8-JqzSCM)
*David Bowie - Rebel Rebel* | Alluurpo | [Klikk her](https://www.youtube.com/watch?v=U16Xg_rQZkA)
*Ray Charled - Hit the road Jack* | martinchus78 | [Klikk her](https://www.youtube.com/watch?v=i8DRen60X10)
*Condon Eddie - Love is just around the corner* | 2018 Chinatown | [Klikk her](https://www.youtube.com/watch?v=GYQkz0qQrg0)
*Chu Berry and his Stompy Stevedores - Indiana* | Will Adams | [Klikk her](https://www.youtube.com/watch?v=7T9_vzkpfTo)
*Frank Sinatra - Fly me to the moon* | RAYLOWESWINGS | [Klikk her](https://www.youtube.com/watch?v=mQR0bXO_yI8)
*Savant - Sledgehammer* | SAVANT | [Klikk her](https://www.youtube.com/watch?v=h78kJFXbiUI)
*Skrillex - Scary Monsters and Nice Sprites* | Skrillex | [Klikk her](https://www.youtube.com/watch?v=WSeNSzJ2-Jw)
*Deadmau5 - Ghosts N stuff (Nero Remix)* | UKF Dubstep | [Klikk her](https://www.youtube.com/watch?v=3Gb3faOzvBk)
*Savant - Ride like the wind* | SAVANT | [Klikk her](https://www.youtube.com/watch?v=uanrvY80DSM)


<br>

## Teknologi

### React
Applikasjonen er basert på React og JSX. VI har brukt ES6 (Javascript) som du kan lese mer om [her](https://www.w3schools.com/js/js_es6.asp). *App.js* er hovedklassen i applikasjonen. Den holder styr på hvilket tab-vindu som er valgt, hvilke kategorier som er valgt, og hvilke bilder, tekster og lyder som skal vises. Utifra oppgaveteksten synes vi følgende inndeling av komponenter er et naturlig og fornuftig valg:

 - *header.js* - overskrift og den øverste delen av applikasjonen
 - *tabs.js* - de 4 tab-ene
 - *home.js* - bilde, tekst og lyd
 - *menu.js* - kategoriene
 - *footer.js* - nederste del av applikasjonen

Alle disse komponentene, foruten om *header.js* og *footer.js*, kommuniserer fram og tilbake med *App.js*.

<br>

### AJAX
Vi har brukt Javascript-biblioteket **axios** for lasting av data. Vi har valgt axios fordi det er en forbedring av en løsning som bruker *.fetch()*-metoden. Fetch bruker en to-stegs prosess når det håndterer JSON-objekter. Etter den initielle forespørselen må man kalle *.json()*-metoden for å motta det faktiske objektet. Axios derimot tilbyr automatisk transformering av JSON-data. Man slipper dermed mellomleddene med å sende resultatene fra http-forespørselen til en *json()*-metode, og får istedet json-objektet/ene returnert direkte. I kodesnutten under, dersom filen man laster inneholder en liste med json-objekter, vil ```response.data``` være listen, og man kan hente ut tekst fra det første JSON-objektet med ``` response.data[0].text ```, der ```text``` er en nøkkel i JSON-objektet. 

```js
import axios from 'axios';
axios.get(url)
.then((response) => {
    list_of_json_objects = response.data
    first_json_object = response.data[0]
    text_from_first_json_object = response.data[0].text
  })
```


Filene lastes(hentes) kun når de benyttes. Når et bilde er hentet inn lagres bilde-filen i en liste i App.js sin *state* på en indeks som korresponderer til tab-vinduet som bildet vises i. Bytter man til neste tab vil et nytt bilde hentes inn og lagres på samme måte. Dersom man så blar tilbake til en tab der et bilde allerede er lastet inn, vil App.js merke dette ved at liste-elementet ikke er tomt og unngår dermed å hente et bilde på nytt. Det samme gjelder for tekst. Slik sikrer vi at innholdet lagres på klienten og ikke lastes flere ganger hvis en bruker blar frem og tilbake i utstillingen. Skulle man derimot endre kategori for en medietype, vil listen med allerede innhentede elementer av den medietypen tømmes, mens listen over de andre medietypene forblir den samme. Dette gjør at man kan toggle mellom ulike kategorier for f. eks bilde, uten at teksten eller lydsporet endres. Lyd-filer håndteres med HTML5 audio-tag, der url-en (path-en) til lydfilene lagres i en liste på samme måte som for bilde- og tekst-filene. Audio-tagen tar seg av selve lastingen av lydfilene for oss.

<br>

### Responsive Web Design
Applikasjonen er implementer med responsive design, som betyr at applikasjonen tilpasser seg skjermens størrelse, orientering, samt plattform. I [test-delen](#testing) kan du se resultatet. Under kommer en beskrivelse av hvordan vi har brukt ulike "Responsive design"-elementer og teknikker for å oppnå et responsivt web design.

#### Viewport
 Vi har brukt **Viewport** for å sikre at bredden er dynamisk og tilpasser seg enhetens størrelse. Med HTML5 kan man egendefinere viewport-en ved hjelp av ``` <meta> ```-tagen. Vi har lagt til følgende linje i *index.html*-filen: 

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
```
``` content="width=device-width ``` sørger for at bredden til websiden følger skjerm-bredden til enheten. Legg merke til at man ikke inkluderer noe lignende for høyden til websiden. Dette er fordi brukere er veldig vant med å scrolle vertikalt på både desktop- og mobil-enheter, men ikke horisontalt. 

<br>

#### Media-queries
Vi har brukt **media-queries** for å tillate at innholdet på skjermen kan endre/tilpasse seg etter skjermoppløsningen. I *style.css*-filen har vi lagt til følgende: 

```css 
@media screen and (max-width: 775px) {
    ...
    ...
}
```

Her spesifiseres det at når bredden på skjermen kommer under 775px skal websiden endre layout. Når dette skjer har vi valgt å endre fra at bildet står ved siden av tekst og lydspor, og at kategoriene står side om side, til at bilde havnet øverst, deretter tekst, deretter lydsporet, deretter hver kategori. Akkurat 775px har vi valgt fordi det er omtrent ved denne bredden at teksten begynner å overlappe bilde. Figuren under illustrerer denne endringen: 

Bredde over 775px | Bredde under 775px 
:--- | :---
![](https://i.imgur.com/vJoUuh4m.png) | ![](https://i.imgur.com/ELa4DrMm.png) ![](https://i.imgur.com/RKAmMaIm.png)

<br>

#### Bilder som skalerer
Vi har lagt inn følgende kode i *style.css*-filen for at svg-bildene ikke skal ha en fast størrelse, men skalere opp og ned ettersom vinduet blir større og mindre: 

```css
.home_container .picture svg {
  width: 500pt;
  height: 300pt;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
```
<br>

#### Flytende/fleksibelt layout
For å få et flytende design har vi tatt i bruk våde **CSS grid** og **flexbox**. Med disse to layout-systemene får websiden et flytende og fleksibelt design. Med flexbox og CSS grid spesifiseres ikke størrelser i piksler, men i prosentdeler. Dette gjør at ettersom skjermstørrelsen endres, vil andelen som hvert element utgjør på skjermen forbli lik.
For side-elementene *Header*, *Tabs* og *Menu* har vi valgt å bruke flexbox. Dette fordi de ikke har andre elementer ved siden av seg, og derfor kan konsentrere seg om vertikal endring i skjermstørrelse, noe som flexbox egner seg bra til.  I *home*-sideelementet derimot, som viser bilde, tekst og lydspor bruker vi et CSS grid som er delt inn i rader og kolonner. Dette fordi vi ville ha bilde ved siden av tekst og lydspor, samtidig som vi ville ha lydspor under tekst. Da egner CSS grid seg perfekt, da det er et to-dimensjonalt system, som kan håndtere både rader og kolonner. Dette ønsket fikk vi så oppfylt gjennom et CSS grid med 2 kolonner og 2 rader. Bilde-elementet utgjør første kolonne og begge to radene, tekst utgjør andre kolonne og første rad, og lydsporet utgjør andre kolonne og andre rad.


<br>

## Testing



