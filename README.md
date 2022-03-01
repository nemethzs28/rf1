<h1>WebPincér</h1>

<h5>1. A projekt Node.js alapú, szóval érdemes hozzá feltenni a node.js-t</h5>
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm <br>
(A package.json-file kérni fog nmp installt -> telepíteni kell a működéshez)
aztán terminálba egy npm -i parancsot kell futtatni és megjelen pár mappa, azokkal nem kell foglalkozni.

<h5>2. Hogyan bírd működésre a Sass-t?</h5>
<p>Ahhoz, hogy a style-okat is meg tudjuk jeleníteni kell egy pár dolog hozzá:
<ul>
<li>Az IDE-ben (WebStormot használok): <br>
<b>File -> Settings -> Tools -> File Watchers -> alul + jel és Sass hozzáadása -> Apply és Ok</b></li>
(Ezt amiatt szükséges beállítani, hogy a sass automatikusan forduljon majd (a file watcher generálja bele a beleírt formázásokat a css-be))
<br>
<li>
Szükséges feltelepíteni globálban a sasst, ezt vagy az IDE termináljában vagy parancssorban megtehetjük az alábbi paranccsal:
<br><b>npm install -g sass</b>
</li>
<li>
Ezután bele cd-zve a <b>/style</b> mappába adjuk ki ezt a parancsot az allStyle.sass-ra, ugyanis ebben a Sass-ban van beimportálva az összes többi Sass (gyűjtő): <br>
<b>sass allStyle.sass allStyle.css</b>
<br>
A File Watcher felugró ablakán rá kell nyomni a "Trust project and run"-ra, hogy automatikusan
<br>
forduljon a sass minden változtatás után.
</li><br>
Ezután már csak annyi a dolgunk, hogy localhoston megnyitjuk az oldalt és így már a style-ok is látszódni fognak.
</ul>
