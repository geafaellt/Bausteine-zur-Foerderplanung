'use strict';
/* Explicit, reviewed language for all catalogue goals. These are learning intentions,
   not claims of attainment. Individual goals always remain the teacher's source. */
const STUDENT_GOALS = {
 auftrag: ['Ich sage den Auftrag mit meinen Worten. Dann beginne ich.', 'listen'],
 phonologie: ['Ich zerlege Wörter in Silben. Ich höre den ersten Laut.', 'syllables'],
 grapheme: ['Ich finde den passenden Buchstaben zu einem Laut.', 'letters'],
 synthese: ['Ich ziehe Laute zusammen. So lese ich Silben und Wörter.', 'syllables'],
 sichtwort: ['Ich erkenne meine geübten Wörter auf einen Blick.', 'word'],
 fluss: ['Ich lese meinen geübten Text flüssig und betone passend.', 'book'],
 verstehen: ['Ich finde die gesuchte Antwort im Text. Ich markiere die Stelle.', 'search'],
 zusammenhang: ['Ich ordne, was im Text passiert. Ich erkläre, wie es zusammenhängt.', 'sequence'],
 rechtschreiben: ['Ich höre die Laute im Wort. Ich schreibe sie in der richtigen Reihenfolge.', 'pencil'],
 strategie: ['Ich nutze meinen Rechtschreib-Trick. Ich erkläre, wie er hilft.', 'checktext'],
 satzbau: ['Ich sage einen ganzen Satz: Wer macht was?', 'talk'],
 schreibplan: ['Ich nutze meinen Schreibplan. Mein Text hat einen Anfang, eine Mitte und einen Schluss.', 'sequence'],
 wortschatz: ['Ich benutze neue Wörter in passenden Sätzen.', 'talk'],
 abschreiben: ['Ich schreibe den Text Stück für Stück ab. Ich prüfe, ob alles da ist.', 'copy'],
 textueberarbeitung: ['Ich prüfe meinen Text mit unserer Regel. Ich verbessere die Fehler.', 'checktext'],
 zaehlen: ['Ich zähle vorwärts und rückwärts. Ich übe auch Zählschritte.', 'count'],
 zahlmenge: ['Ich finde die passende Zahl zu einer Menge.', 'quantity'],
 stellenwert: ['Ich lege Zahlen mit Material. Ich zeige die Stellen und lese die Zahl.', 'placevalue'],
 zerlegen: ['Ich finde die Nachbarzahlen. Ich zerlege eine Zahl auf verschiedene Arten.', 'parts'],
 zahlenstrahl: ['Ich finde Zahlen am Zahlenstrahl. Ich zeige, welche größer oder kleiner ist.', 'numberline'],
 gleichheitsverstaendnis: ['Ich ergänze die fehlende Zahl. Auf beiden Seiten ist gleich viel.', 'equal'],
 rechnen: ['Ich nutze meinen Rechenweg. Ich zeige oder erkläre ihn.', 'calculate'],
 grundaufgaben: ['Ich weiß die Ergebnisse meiner geübten Aufgaben ohne zu zählen.', 'calculate'],
 multiplikation: ['Ich lege oder zeichne Malaufgaben. Bekannte Aufgaben helfen mir beim Rechnen.', 'multiply'],
 division: ['Ich teile auf oder verteile gerecht. Ich erkläre, was ich mache.', 'share'],
 schriftlich: ['Ich schreibe die Zahlen richtig untereinander. Ich rechne und prüfe das Ergebnis.', 'written'],
 bruch: ['Ich zeige Brüche oder Kommazahlen auf verschiedene Arten. Ich vergleiche sie.', 'fraction'],
 groessen: ['Ich wähle eine passende Einheit und messe. Ich schreibe Zahl und Einheit auf.', 'ruler'],
 sach: ['Ich finde die wichtigen Angaben in der Sachaufgabe. Ich zeige die Situation und finde die Rechnung.', 'search'],
 geometrie: ['Ich benenne und sortiere Formen. Ich zeige, wo etwas liegt.', 'shapes'],
 kontrolle: ['Ich prüfe mein Rechenergebnis. Ich verbessere Fehler, die ich finde.', 'checktext'],
 daten_entnehmen: ['Ich finde gesuchte Angaben in einer Tabelle oder einem Diagramm.', 'chart'],
 start: ['Ich beginne nach dem Startzeichen mit dem ersten Schritt.', 'start'],
 ausdauer: ['Ich bleibe für unsere vereinbarte Zeit bei meiner Aufgabe.', 'timer'],
 impuls: ['Ich halte kurz an. Ich warte auf das vereinbarte Zeichen.', 'stop'],
 bewegung: ['Ich halte unsere Arbeitsplatzregel ein. Ich nutze die vereinbarte Bewegung.', 'move'],
 frust: ['Wenn es schwierig wird, nutze ich meine Hilfe. Dann arbeite ich weiter.', 'steps'],
 organisation: ['Ich lege mein Material bereit. Nach der Arbeit räume ich auf.', 'desk'],
 uebergang: ['Ich beende meine Tätigkeit. Ich wechsle zur nächsten Aufgabe.', 'sequence'],
 regeln: ['Ich halte unsere zwei vereinbarten Regeln ein.', 'checklist'],
 hilfe: ['Ich probiere zuerst meine zwei Hilfen. Wenn ich noch Hilfe brauche, frage ich genau nach.', 'help'],
 anforderung: ['Ich bearbeite die vereinbarte Aufgabe. Wenn es zu viel wird, gebe ich unser Zeichen.', 'help'],
 regulation: ['Ich merke, wenn ich aufgeregt werde. Ich nutze meine Hilfe zum Ruhigwerden.', 'calm'],
 handlungsplanung: ['Ich ordne meine Bildkarten. Ich arbeite Schritt für Schritt.', 'sequence'],
 transfer: ['Ich nutze meinen bekannten Weg auch bei einer etwas anderen Aufgabe. Meine Merkhilfe hilft mir.', 'steps'],
 abruf: ['Ich erinnere mich an das Gelernte. Ich nutze meine Merkhilfe.', 'memory'],
 selbsteinschaetzung: ['Ich überlege vorher: Welche Hilfe brauche ich? Danach schaue ich, ob es so war.', 'checklist'],
 selbstwirksamkeit: ['Ich zeige, was mir gelungen ist. Ich sage, was mir dabei geholfen hat.', 'success'],
 verstaendnissicherung: ['Ich zeige oder erkläre den ersten Schritt. Wenn ich etwas nicht verstehe, frage ich.', 'listen'],
 gespraech: ['Ich warte, bis ich dran bin. Mein Beitrag passt zum Thema.', 'conversation'],
 grenzen: ['Ich halte den vereinbarten Abstand. Ich frage, bevor ich fremde Sachen nehme.', 'distance'],
 konflikt: ['Ich kläre Streit mit unseren Schritten. Ich bleibe fair mit Worten und Händen.', 'conversation'],
 perspektive: ['Ich überlege: Wie sehen andere die Situation? Ich prüfe meine Vermutung.', 'perspective'],
 kooperation: ['Ich übernehme meine Aufgabe in der Gruppe. Ich spreche mich mit den anderen ab.', 'team'],
 rueckmeldung: ['Ich höre mir einen Tipp an und antworte. Ich probiere den nächsten Schritt.', 'conversation'],
 verantwortung: ['Ich sage, was ich selbst getan habe. Ich überlege, wie ich es wiedergutmachen kann.', 'repair'],
 kontakt: ['Ich spreche eine vertraute Person an oder antworte ihr.', 'conversation'],
 aufmerksamkeit: ['Ich gebe unser vereinbartes Zeichen, wenn ich Aufmerksamkeit brauche.', 'hand'],
 gefuehle: ['Ich sage oder zeige, wie ich mich fühle und was ich brauche.', 'feelings'],
 'soziale-hilfe': ['Ich merke, wenn jemand Hilfe braucht. Ich biete Hilfe an oder bitte darum.', 'help'],
 eigene_grenzen: ['Ich sage oder zeige: Stopp, das möchte ich nicht. Ich weiß, bei wem ich Hilfe bekomme.', 'stop'],
 mitbestimmung: ['Ich wähle aus. Ich sage oder zeige, was ich möchte.', 'choice'],
 kontraste: ['Ich schaue genau hin. Ich zeige oder sage, was unterschiedlich ist.', 'eye'],
 visuell: ['Ich finde die gesuchte Stelle auf meinem Blatt.', 'search'],
 folge: ['Ich lege eine Reihe in der richtigen Reihenfolge nach.', 'sequence'],
 lage: ['Ich zeige, wo etwas liegt. Ich lege es an den genannten Platz.', 'position'],
 merken: ['Ich schaue mir die Bilder genau an. Danach zeige ich sie aus dem Gedächtnis.', 'memory'],
 hoeren: ['Ich höre genau hin. Ich unterscheide ähnliche Laute.', 'listen'],
 auftragsfolge: ['Ich merke mir die Schritte des Auftrags. Ich führe sie der Reihe nach aus.', 'sequence'],
 rhythmus: ['Ich höre mir eine Klangfolge an. Ich gebe sie in der richtigen Reihenfolge wieder.', 'rhythm'],
 koerper: ['Ich benenne meine Körperteile. Ich führe die angesagte Bewegung aus.', 'body'],
 rechtslinks: ['Ich unterscheide rechts und links. Ich sage, von wem aus ich schaue.', 'leftright'],
 motorik: ['Ich nutze bei meiner Arbeit passend viel Kraft.', 'hand'],
 reiz: ['Ich merke, wenn mich etwas stört. Ich nutze meine Hilfe und arbeite danach weiter.', 'headphones']
};

/* Local vector pictograms: exact, reusable UI symbols without external requests.
   Each icon has an accessible label; the accompanying sentence carries the meaning. */
for(const t of TEMPLATES){if(t.studentText&&t.studentIcon)STUDENT_GOALS[t.id]=[t.studentText,t.studentIcon]}
const STUDENT_ICONS = {
 listen: ['Zuhören', 'M8 7a5 5 0 0 1 10 0c0 5-6 4-6 9a3 3 0 0 1-6 0M11 8a2 2 0 0 1 4 0c0 2-3 2-3 4M3 6v4M21 5v6'],
 syllables: ['Silben verbinden', 'M2 8h5M10 8h5M18 8h4M2 14c0 7 5 7 5 0M10 14c0 7 5 7 5 0M18 14c0 7 4 7 4 0'],
 letters: ['Buchstabe und Laut', 'M2 18 6 5l4 13M4 13h4M13 10v5h3l4 3V7l-4 3ZM22 10v5'],
 word: ['Wort erkennen', 'M3 4h18v16H3ZM6 8h12M6 12h8M6 16h10'],
 book: ['Lesen', 'M12 5v16M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-2-7-1-10 1Z'],
 search: ['Genau suchen', 'M3 3h11v18H3ZM6 7h5M6 11h3M6 15h3M20 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1 3 4 5'],
 sequence: ['Schritt für Schritt', 'M2 3h5v5H2ZM10 8h5v5h-5ZM18 13h5v5h-5ZM4 12v5h9M10 14l3 3-3 3'],
 pencil: ['Schreiben', 'm15 3 6 6M3 21l6-2L21 7l-4-4L5 15ZM5 15l4 4M3 21h18'],
 checktext: ['Prüfen und verbessern', 'M3 2h14v20H3ZM6 6h7M6 10h7M7 16l3 3 11-11'],
 talk: ['Wörter und Sätze', 'M3 4h18v12H9l-5 4v-4H3ZM6 8h12M6 12h8'],
 copy: ['Abschreiben', 'M3 3h10v14H3ZM11 7h10v14H11M6 7h4M6 11h4M14 11h4M14 15h4'],
 count: ['Zählen', 'M2 6l3-2v16M8 8c0-5 6-5 6 0 0 3-6 6-6 12h6M17 5c7-3 8 7 1 7 7 0 6 11-1 7'],
 quantity: ['Zahl und Menge', 'M3 6a2 2 0 1 1 0 .1ZM3 14a2 2 0 1 1 0 .1ZM10 10a2 2 0 1 1 0 .1ZM15 5h5l-3 6c6-1 6 9-1 8'],
 placevalue: ['Stellenwerte', 'M3 3v18h18M8 4v14M14 4v14M20 4v14M5 8h6v3H5ZM11 12h6v3h-6ZM17 6h6v3h-6Z'],
 parts: ['Zahl zerlegen', 'M9 2h6v6H9ZM2 16h6v6H2ZM16 16h6v6h-6ZM12 8v4M5 16v-4h14v4'],
 numberline: ['Zahlenstrahl', 'M2 14h20M4 11v6M9 11v6M14 11v6M19 11v6M10 3l4 5 4-5M14 8V2'],
 equal: ['Gleich viel', 'M3 8h18M3 16h18'],
 calculate: ['Rechnen', 'M3 3h18v18H3ZM6 8h5M8.5 5.5v5M15 8h3M6 15l4 4M10 15l-4 4M14 15h4M14 18h4'],
 multiply: ['Malaufgaben', 'M4 4h3v3H4ZM11 4h3v3h-3ZM18 4h3v3h-3ZM4 12h3v3H4ZM11 12h3v3h-3ZM18 12h3v3h-3ZM3 21h19'],
 share: ['Aufteilen und verteilen', 'M3 15v6h7v-6M14 15v6h7v-6M9 3h6v4H9ZM12 7v4M6 15v-4h12v4'],
 written: ['Untereinander rechnen', 'M3 3h18v19H3ZM6 6h3M14 6h3M6 10h3M14 10h3M6 14h12M6 18h3M14 18h3'],
 fraction: ['Teile eines Ganzen', 'M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2ZM12 2v20M2 12h20'],
 ruler: ['Messen', 'M2 7h20v10H2ZM6 7v5M10 7v3M14 7v5M18 7v3'],
 shapes: ['Formen', 'M6 2l5 8H1ZM14 3h8v7h-8ZM10 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM14 14h8v8h-8Z'],
 chart: ['Tabelle und Diagramm', 'M3 2v20h19M7 14h3v5H7ZM13 9h3v10h-3ZM19 4h3v15h-3Z'],
 start: ['Beginnen', 'M5 3v18M6 4h14l-4 5 4 5H6M2 22h7'],
 timer: ['Zeit im Blick behalten', 'M8 2h8M12 2v3M21 14a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 8v6l4 2'],
 stop: ['Stopp und warten', 'M7 2h10l5 5v10l-5 5H7l-5-5V7ZM8 8l8 8M16 8l-8 8'],
 move: ['Bewegen', 'M15 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 11l4-3 5 3h5M11 8l-2 7 5 3-1 5M9 15l-4 7M3 5l4 1M2 11h3'],
 steps: ['Weiterkommen', 'M2 21h5v-6h5V9h5V3h5M3 7l7-4M7 1l3 2-1 4'],
 desk: ['Arbeitsplatz ordnen', 'M2 12h20M4 12v10M20 12v10M5 5h7v7H5ZM15 6h5v6h-5ZM16 2v4M19 3v3'],
 checklist: ['Plan und Regeln', 'M4 2h16v20H4ZM7 7l1 1 2-3M13 7h4M7 13l1 1 2-3M13 13h4M7 18h3M13 18h4'],
 help: ['Hilfe holen oder anbieten', 'M4 12V6a1.5 1.5 0 0 1 3 0v4-7a1.5 1.5 0 0 1 3 0v7-6a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v7l2-2c2-2 4 0 2 2l-4 6H7L3 14c-1-2 0-3 1-2Z'],
 calm: ['Zur Ruhe kommen', 'M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 15l3-6h4l3 6M10 13v4l-6 3c-2 2 4 3 8 0 4 3 10 2 8 0l-6-3v-4'],
 memory: ['Sich erinnern', 'M8 20v-4c-7-3-4-14 3-14 6 0 8 5 8 8l3 4h-4v4h-4v4M9 7h5v5H9Z'],
 success: ['Das gelingt mir', 'm12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z'],
 conversation: ['Miteinander sprechen', 'M2 3h13v9H7l-4 3v-3H2ZM18 8h4v11h-3v3l-4-3H9v-4M5 7h7'],
 distance: ['Abstand und Grenzen', 'M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 20v-7c0-4 6-4 6 0v7M21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 20v-7c0-4 6-4 6 0v7M12 3v3M12 10v3M12 17v3'],
 perspective: ['Andere Sichtweisen', 'M8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 21v-4c0-5 6-5 6 0v4M16 21v-4c0-5 6-5 6 0v4M11 7h2M12 6v2M10 16h4'],
 team: ['Zusammenarbeiten', 'M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 10c0-4 8-4 8 0M2 21v-4c0-4 4-4 6-1M22 21v-4c0-4-4-4-6-1M8 15h8v7H8Z'],
 repair: ['Wiedergutmachen', 'M12 21 3 12C-3 5 7-1 12 6 17-1 27 5 21 12ZM7 12l4 4 7-7'],
 hand: ['Hand und Zeichen', 'M4 12V6a1.5 1.5 0 0 1 3 0v4-7a1.5 1.5 0 0 1 3 0v7-6a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v7l2-2c2-2 4 0 2 2l-4 6H7L3 14c-1-2 0-3 1-2Z'],
 feelings: ['Gefühle', 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM7 8v1M17 8v1M7 15c2 4 8 4 10 0'],
 choice: ['Auswählen', 'M2 3h8v8H2ZM14 3h8v8h-8ZM4 6l2 2 4-5M12 22v-8M8 18l4-4 4 4'],
 eye: ['Genau hinschauen', 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'],
 position: ['Lage und Platz', 'M5 8h14v14H5ZM5 8l7-5 7 5M12 3v6M8 15h8M12 11v8M10 13l2-2 2 2'],
 rhythm: ['Klangfolge', 'M9 17V4l11-2v13M9 8l11-2M9 17c-5-3-9 4-4 5 3 0 4-2 4-5ZM20 15c-5-3-9 4-4 5 3 0 4-2 4-5Z'],
 body: ['Körper', 'M15 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 9h18M9 9v6l-3 8M15 9v6l3 8M9 15h6'],
 leftright: ['Rechts und links', 'M2 12h20M7 7l-5 5 5 5M17 7l5 5-5 5M12 3v3M12 18v3'],
 headphones: ['Reize begrenzen', 'M3 14v-3a9 9 0 0 1 18 0v3M3 12h4v9H3ZM17 12h4v9h-4Z']
};

function studentGoal(g) {
 const entry=Object.hasOwn(STUDENT_GOALS,g.templateId||'')?STUDENT_GOALS[g.templateId]:null;
 const template=TEMPLATES.find(t=>t.id===g.templateId);
 const text=typeof g.studentText==='string'?g.studentText:(entry?.[0]||'');
 const key=typeof g.studentIcon==='string'?g.studentIcon:(entry?.[1]||'');
 const source=typeof g.studentSourceText==='string'?g.studentSourceText:(template?.goal||'');
 return {text,icon:Object.hasOwn(STUDENT_ICONS,key)?key:'',help:typeof g.studentHelp==='string'?g.studentHelp:'',needsReview:!source||source!==g.text};
}
function studentIssue(g) {
 const s=studentGoal(g);
 if(!s.text.trim())return 'Bitte eine kindgerechte Ich-Formulierung ergänzen.';
 if(s.text.length>600||s.help.length>300)return 'Bitte den Zielsatz auf höchstens 600 und die Hilfe auf 300 Zeichen kürzen.';
 if(!s.icon)return 'Bitte ein passendes Piktogramm auswählen.';
 if(s.needsReview)return 'Bitte prüfen und bestätigen, dass die Schülerfassung zum individuellen Förderziel passt.';
 return '';
}
function studentIconSVG(key) {
 const spec=Object.hasOwn(STUDENT_ICONS,key)?STUDENT_ICONS[key]:STUDENT_ICONS.success;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="-2 -2 28 28" role="img" aria-label="${esc(spec[0])}"><title>${esc(spec[0])}</title><path d="${spec[1]}" fill="none" stroke="#245747" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function studentCardHTML(g,i) {
 const s=studentGoal(g);
 return `<article class="student-card"><div class="student-pictogram">${studentIconSVG(s.icon)}</div><div><p class="student-number">Mein Ziel ${i+1}</p><p class="student-sentence">${esc(s.text)||'Mein Zielsatz wird noch ergänzt.'}</p>${s.help.trim()?`<p class="student-help"><strong>Das hilft mir:</strong><br>${esc(s.help)}</p>`:''}</div></article>`;
}
function studentPlanHTML(p) {
 return `<div class="student-paper"><h2>Meine Lernziele</h2><p class="student-meta">${esc(p.code)}${p.grade?' · Klasse '+esc(p.grade):''}<br>${date(p.start)} – ${date(p.end)}</p><p class="student-intro">Das übe ich.</p>${p.goals.map(studentCardHTML).join('')}</div>`;
}
function studentEditor(g) {
 const s=studentGoal(g);
 return `<section class="student-editor" aria-labelledby="student-editor-title"><h2 id="student-editor-title">Für die Schülerfassung</h2><p class="help">Kurze Ich-Sätze und ein Bildzeichen helfen beim Besprechen des Ziels. Passe beides an das Kind und dein individuelles Förderziel an.</p><div class="field"><label for="student-text">Mein Zielsatz</label><textarea id="student-text" data-student-field="studentText" maxlength="600">${esc(s.text)}</textarea></div><div class="student-icon-picker"><div id="student-icon-preview" class="student-pictogram">${studentIconSVG(s.icon)}</div><div class="field"><label for="student-icon">Piktogramm</label><select id="student-icon" data-student-field="studentIcon"><option value="">Bitte auswählen</option>${Object.entries(STUDENT_ICONS).map(([key,value])=>`<option value="${key}" ${key===s.icon?'selected':''}>${esc(value[0])}</option>`).join('')}</select></div></div><div class="field"><label for="student-help">Das hilft mir (optional)</label><textarea id="student-help" data-student-field="studentHelp" maxlength="300" placeholder="Zum Beispiel: Ich nutze meine Schrittkarte.">${esc(s.help)}</textarea><small class="help">Trage hier eine passende Hilfe aus den vereinbarten Maßnahmen oder Materialien in einfachen Worten ein.</small></div><label class="student-review"><input id="student-reviewed" type="checkbox" ${s.needsReview?'':'checked'}>Die Ich-Formulierung und das Bild passen zum individuellen Förderziel.</label><p id="student-review-hint" class="help" role="status">${s.needsReview?'Das Förderziel wurde angepasst oder neu angelegt. Bitte die Schülerfassung prüfen.':'Die Schülerfassung passt zum zuletzt geprüften Förderziel.'}</p></section>`;
}
let studentPDFURL='';
function invalidateStudentPDF() {
 if(studentPDFURL){URL.revokeObjectURL(studentPDFURL);studentPDFURL=''}
 const link=$('#student-pdf-link');if(link)link.remove();
}
function checkStudentPlan(p) {
 if(!p.goals.length)return 'Bitte zuerst ein Förderziel auswählen.';
 const i=p.goals.findIndex(g=>studentIssue(g));
 return i<0?'':`Ziel ${i+1}: ${studentIssue(p.goals[i])}`;
}
function studentPreview() {
 const p=plan();
 return `<section class="student-preview-section"><div class="row"><h2>Schülerfassung</h2>${wbutton('Schülerfassung als PDF','student-pdf','primary')}</div><p>Die ausgewählten Ziele werden als persönliche Zielkarten ausgegeben.</p>${p.goals.map((g,i)=>studentIssue(g)?`<div class="student-warning"><p>Ziel ${i+1}: ${esc(studentIssue(g))}</p>${wbutton('Schülerfassung zu Ziel '+(i+1)+' bearbeiten','editgoal:'+i,'small')}</div>`:'').join('')}<div id="student-download" aria-live="polite"></div>${studentPlanHTML(p)}</section>`;
}
async function studentIconPNG(key) {
 const svg=studentIconSVG(key),url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
 try {const img=new Image();await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(Error('Piktogramm konnte nicht geladen werden'));img.src=url});const canvas=document.createElement('canvas');canvas.width=288;canvas.height=288;canvas.getContext('2d').drawImage(img,0,0,288,288);return new Uint8Array(await (await new Promise(resolve=>canvas.toBlob(resolve,'image/png'))).arrayBuffer())}finally{URL.revokeObjectURL(url)}
}
async function createStudentPDF() {
 if(pdfBusy)return;
 for(let i=0;i<5;i++){const err=wizardValidate(i);if(err){wizardStep=i;wizardEditing=i>=2&&i<=4;wizardRemember();wizardShowError(err);return}}
 const p=plan(),issue=checkStudentPlan(p);
 if(issue){wizardItem=p.goals.findIndex(g=>studentIssue(g));if(wizardItem<0)wizardItem=0;wizardStep=2;wizardEditing=true;wizardRemember();wizardShowError(issue);return}
 pdfBusy=true;const snapshot=JSON.parse(JSON.stringify(p)),box=$('#student-download'),button=document.querySelector('[data-w="student-pdf"]');if(button)button.disabled=true;if(box)box.textContent='Schülerfassung wird erstellt …';
 try {
  const responses=await Promise.all(['vendor/DejaVuSans.ttf','vendor/DejaVuSans-Bold.ttf'].map(u=>fetch(u)));
  if(responses.some(r=>!r.ok))throw Error('Schriftdateien nicht verfügbar');
  const [regular,bold]=await Promise.all(responses.map(r=>r.arrayBuffer())),keys=[...new Set(snapshot.goals.map(g=>studentGoal(g).icon))],images={};
  await Promise.all(keys.map(async key=>{images[key]=await studentIconPNG(key)}));
  const bytes=await buildStudentPDF(snapshot,{regular,bold},images);
  if(!box?.isConnected)return;
  invalidateStudentPDF();studentPDFURL=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));
  const filename='Meine_Lernziele_'+snapshot.code.replace(/[^a-zA-Z0-9äöüÄÖÜß_-]/g,'_')+'_'+today()+'.pdf';
  box.innerHTML=`<a id="student-pdf-link" class="download-link" href="${studentPDFURL}" download="${esc(filename)}" target="_blank" rel="noopener">Schülerfassung herunterladen</a>`;
 }catch(e){if(box?.isConnected)box.textContent='Die Schülerfassung konnte nicht erstellt werden. Bitte erneut versuchen.';console.error('Student PDF export failed',e)}finally{pdfBusy=false;if(button?.isConnected)button.disabled=false}
}

document.addEventListener('input',e=>{
 const el=e.target;if(!el.dataset.studentField&&!el.dataset.wField)return;const g=typeof wizardCurrentGoal==='function'&&plan()?.goals.length?wizardCurrentGoal():null;
 if(!g)return;
 if(el.dataset.studentField&&['studentText','studentIcon','studentHelp'].includes(el.dataset.studentField)){
  g[el.dataset.studentField]=el.value;wizardSave();
  if(el.dataset.studentField==='studentIcon')$('#student-icon-preview').innerHTML=studentIconSVG(el.value);
 }
 if(el.dataset.wField===`g.${g.id}.text`){const c=$('#student-reviewed');if(c)c.checked=false;const hint=$('#student-review-hint');if(hint)hint.textContent='Das Förderziel wurde geändert. Bitte die Schülerfassung erneut prüfen.'}
});
document.addEventListener('change',e=>{
 if(e.target.id!=='student-reviewed')return;
 const g=wizardCurrentGoal(),s=studentGoal(g);
 if(e.target.checked){if(!s.text.trim()||!s.icon){e.target.checked=false;toast('Bitte zuerst Zielsatz und Piktogramm ergänzen.');return}g.studentSourceText=g.text;g.studentText=s.text;g.studentIcon=s.icon}else g.studentSourceText='';
 wizardSave();$('#student-review-hint').textContent=e.target.checked?'Die Schülerfassung passt zum zuletzt geprüften Förderziel.':'Bitte die Schülerfassung prüfen und bestätigen.';
});

