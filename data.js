const AREAS=['Deutsch','Mathematik','Lern- und Arbeitsverhalten','Sozialverhalten','Wahrnehmung'];
const SOURCES={
lesen:{short:'IES / WWC · 2022',title:'Providing Reading Interventions for Students in Grades 4–9',author:'Vaughn et al. · Institute of Education Sciences / What Works Clearinghouse (2022)',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/29',evidence:'Forschungssynthese; starke Evidenz für Dekodieren, Leseflüssigkeit und Verstehensstrategien.',population:'Lernende mit Leseschwierigkeiten, Klassen 4–9; überwiegend englischsprachiger Unterricht.',limit:'Kein pauschaler Wirksamkeitsnachweis für den deutschen FSP Lernen. Sprache, Lesestand und Intensität individuell anpassen.'},
basis:{short:'IES / WWC · 2016/2019',title:'Foundational Skills to Support Reading for Understanding in Kindergarten Through 3rd Grade',author:'Foorman et al. · IES / WWC (2016, überarbeitet 2019)',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/21',evidence:'Starke Evidenz für Laut-Buchstaben-Verknüpfung und Dekodieren; moderate Evidenz für tägliches Lesen zusammenhängender Texte.',population:'Kindergarten bis Klasse 3, englischsprachiger Schriftspracherwerb.',limit:'Übertragung auf ältere Lernende und deutsche Orthografie gesondert prüfen. Materialien altersangemessen auswählen.'},
tandem:{short:'Rosebrock et al. · 2010',title:'Förderung der Leseflüssigkeit bei leseschwachen Zwölfjährigen',author:'Rosebrock, C.; Rieckmann, C.; Nix, D.; Gold, A. (2010). Didaktik Deutsch, 15 (28), 33–58. DOI: 10.25656/01:21312.',url:'https://www.pedocs.de/frontdoor.php?source_opus=21312',evidence:'Empirische Untersuchung: Lautlese-Tandems verbesserten die Leseflüssigkeit bei leseschwachen Zwölfjährigen.',population:'Deutschsprachige Hauptschülerinnen und Hauptschüler, etwa 12 Jahre.',limit:'Keine spezifische Stichprobe ausschließlich mit diagnostiziertem FSP Lernen. Hinreichende Dekodierfähigkeit und unterstützende Tandemführung sind Voraussetzung.'},
mathe:{short:'IES / WWC · 2021',title:'Assisting Students Struggling with Mathematics: Intervention in the Elementary Grades',author:'Fuchs et al. · IES / WWC (2021)',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/26',evidence:'Starke Evidenz für systematische Instruktion, mathematische Sprache, Darstellungen, Zahlenstrahl und gezielte Sachaufgabenförderung.',population:'Mathematische Lernschwierigkeiten, Kindergarten bis Klasse 6.',limit:'Ansätze unterstützen die Auswahl; kein Nachweis für jede einzelne Aufgabe oder jedes Hilfsmittel. Bei älteren Lernenden Passung am Lernstand prüfen.'},
verhalten:{short:'IES / WWC · 2024',title:'Teacher-Delivered Behavioral Interventions in Grades K–5',author:'Lane et al. · IES / WWC (2024)',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/31',evidence:'Starke Evidenz: Erwartungen vermitteln, erinnern, positives Verhalten anerkennen und verhaltensbezogen rückmelden. Moderate Evidenz: Wahlmöglichkeiten, aktive Beteiligung und Selbstbeobachtung.',population:'Klassen K–5; niedrigschwellige unterrichtliche Verhaltensförderung.',limit:'Für ältere Lernende und komplexe Konflikte ist dies eine begründete Übertragung. Keine automatische Erklärung der Funktion eines Verhaltens.'},
selbst:{short:'Lesperance et al. · 2023',title:'Selbstreguliertes Lernen fördern. Lernstrategien im Unterricht erfolgreich vermitteln',author:'Lesperance, K.; Holzmeier, Y.; Munk, S.; Holzberger, D. (2023). Waxmann. Wissenschaft macht Schule, 6. DOI: 10.25656/01:28190.',url:'https://www.pedocs.de/frontdoor.php?source_opus=28190',evidence:'Forschungssynthese zur Vermittlung von Lernstrategien und selbstreguliertem Lernen.',population:'Schulische Lernende über verschiedene Fächer und Schulstufen.',limit:'Keine spezifische Validierung dieser App oder ihrer Karten. Selbststeuerung explizit vormachen, begleiten und am Lernstand ausrichten.'},
schreiben:{short:'IES / WWC · 2016/2019',title:'Teaching Secondary Students to Write Effectively',author:'Graham et al. · IES / WWC (2016, überarbeitet 2019)',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/22',evidence:'Starke Evidenz für explizite Schreibstrategievermittlung im Zyklus Vormachen – Üben – Reflektieren.',population:'Klassen 6–12, überwiegend englischsprachige Schreibförderung.',limit:'Sprachliche Anforderungen und Textumfang reduzieren; kein Wirksamkeitsnachweis für isolierte Satzstarter oder einzelne Schreibpläne.'},
praxis:{short:'Eigener Auswahlkatalog · 2026',title:'Auswahlkatalog für Förderziele, Maßnahmen und Materialien',author:'Vorhandene Arbeitsfassung „Auswahlkatalog_Foerderplanung.docx“, 18 Seiten, ergänzt am 19.11.2026.',url:'',evidence:'Pädagogische Arbeitsgrundlage, keine wissenschaftliche Evaluationsstudie.',population:'Individuelle schulische Förderplanung.',limit:'Für diese Anpassung bzw. dieses Hilfsmittel wurde kein spezifischer Wirksamkeitsbeleg verifiziert. Funktionsnah erproben und Wirkung dokumentieren.'}
};
// Vollständige 74 Zeilen des Auswahlkatalogs; Formulierungen unverändert übernommen.
const TEMPLATES=[
  {
    "id": "auftrag",
    "area": "Deutsch",
    "title": "Arbeitsaufträge verstehen",
    "observation": "Versteht mündliche Arbeitsaufträge nur teilweise; beginnt unpassend oder fragt wiederholt nach.",
    "goal": "Die Schülerin/der Schüler gibt einen ein- bis zweischrittigen Arbeitsauftrag in eigenen Worten wieder und beginnt in 4 von 5 Situationen passend.",
    "measures": "Aufträge kurz und eindeutig formulieren\nNur einen Handlungsschritt pro Satz\nAuftrag von der lernenden Person wiederholen lassen\nSchlüsselwörter markieren und Visualisierung schrittweise abbauen",
    "materials": "Piktogramme für Operatoren\nAblaufkarte „Hören – Wiederholen – Beginnen“\nMarkierstreifen / Textmarker\nBeispielaufgabe",
    "measureOptions": [
      "Aufträge kurz und eindeutig formulieren",
      "Nur einen Handlungsschritt pro Satz",
      "Auftrag von der lernenden Person wiederholen lassen",
      "Schlüsselwörter markieren und Visualisierung schrittweise abbauen"
    ],
    "materialOptions": [
      "Piktogramme für Operatoren",
      "Ablaufkarte „Hören – Wiederholen – Beginnen“",
      "Markierstreifen / Textmarker",
      "Beispielaufgabe"
    ],
    "source": "praxis",
    "research": "selbst",
    "material": "rueckmeldung",
    "catalogPage": 3,
    "sourceRow": 1
  },
  {
    "id": "phonologie",
    "area": "Deutsch",
    "title": "Reime, Silben und Anlaute erkennen",
    "observation": "Reime, Silben oder Anlaute werden unsicher erkannt bzw. gebildet.",
    "goal": "Die Schülerin/der Schüler zerlegt 8 von 10 vertrauten Wörtern in Silben und bestimmt bei 8 von 10 Wörtern den Anlaut korrekt.",
    "measures": "Täglich 5 Minuten phonologische Übungen\nWörter klatschen, schwingen und sortieren\nAnlaut hören, vergleichen und begründen\nVom Mündlichen zum Schriftlichen übergehen",
    "materials": "Bildkarten\nSilbenbögen / Silbensteine\nAnlauttabelle\nReim- und Sortierspiele",
    "measureOptions": [
      "Täglich 5 Minuten phonologische Übungen",
      "Wörter klatschen, schwingen und sortieren",
      "Anlaut hören, vergleichen und begründen",
      "Vom Mündlichen zum Schriftlichen übergehen"
    ],
    "materialOptions": [
      "Bildkarten",
      "Silbenbögen / Silbensteine",
      "Anlauttabelle",
      "Reim- und Sortierspiele"
    ],
    "source": "praxis",
    "research": "basis",
    "material": "silben",
    "catalogPage": 3,
    "sourceRow": 2
  },
  {
    "id": "grapheme",
    "area": "Deutsch",
    "title": "Laute und Buchstaben zuordnen",
    "observation": "Buchstaben und Laute werden verwechselt oder nicht sicher zugeordnet.",
    "goal": "Die Schülerin/der Schüler ordnet die vereinbarten Grapheme und Phoneme in 9 von 10 Durchgängen sicher zu.",
    "measures": "Kleine Buchstabengruppe gezielt üben\nLaut, Mundbild, Bewegung und Schriftzeichen verknüpfen\nKontrastpaare üben\nFehlerkarten regelmäßig wiederholen",
    "materials": "Buchstaben-/Lautkarten\nSpiegel für Mundstellung\nFühlbuchstaben\nLautgebärden\npersönliche Lernkartei",
    "measureOptions": [
      "Kleine Buchstabengruppe gezielt üben",
      "Laut, Mundbild, Bewegung und Schriftzeichen verknüpfen",
      "Kontrastpaare üben",
      "Fehlerkarten regelmäßig wiederholen"
    ],
    "materialOptions": [
      "Buchstaben-/Lautkarten",
      "Spiegel für Mundstellung",
      "Fühlbuchstaben",
      "Lautgebärden",
      "persönliche Lernkartei"
    ],
    "source": "praxis",
    "research": "basis",
    "material": "silben",
    "catalogPage": 3,
    "sourceRow": 3
  },
  {
    "id": "synthese",
    "area": "Deutsch",
    "title": "Laute zu Silben verbinden",
    "observation": "Einzellaute können benannt werden, die Lautsynthese zum Wort gelingt jedoch kaum.",
    "goal": "Die Schülerin/der Schüler verbindet lauttreue Silben und liest 8 von 10 geübten ein- bis zweisilbigen Wörtern synthetisierend.",
    "measures": "Laute gedehnt verbinden, nicht einzeln abbrechen\nMit offenen Silben beginnen\nSilbe vor Wort, Wort vor Satz\nkurze tägliche Wiederholungen mit sofortiger Rückmeldung",
    "materials": "Leseschieber / Lesefenster\nSilbenteppich\nSilbenkarten\nLautgetreue Wortlisten\nWort-Bild-Karten",
    "measureOptions": [
      "Laute gedehnt verbinden, nicht einzeln abbrechen",
      "Mit offenen Silben beginnen",
      "Silbe vor Wort, Wort vor Satz",
      "kurze tägliche Wiederholungen mit sofortiger Rückmeldung"
    ],
    "materialOptions": [
      "Leseschieber / Lesefenster",
      "Silbenteppich",
      "Silbenkarten",
      "Lautgetreue Wortlisten",
      "Wort-Bild-Karten"
    ],
    "source": "praxis",
    "research": "basis",
    "material": "silben",
    "catalogPage": 3,
    "sourceRow": 4
  },
  {
    "id": "sichtwort",
    "area": "Deutsch",
    "title": "Häufige Wörter erkennen",
    "observation": "Wörter werden langsam buchstabierend gelesen; häufige Wörter werden nicht automatisiert erkannt.",
    "goal": "Die Schülerin/der Schüler erkennt einen vereinbarten Sichtwortschatz von 20 Wörtern in mindestens 80 % der Darbietungen unmittelbar.",
    "measures": "Sichtwortschatz begrenzen und systematisch wiederholen\nBlitzlesen in sehr kurzen Sequenzen\nWörter in Sätzen wiederverwenden\nLernfortschritt sichtbar dokumentieren",
    "materials": "Blitzwortkarten\nWortfächer\nLeselineal\npersönlicher Sichtwortschatz\nPartnerkarten",
    "measureOptions": [
      "Sichtwortschatz begrenzen und systematisch wiederholen",
      "Blitzlesen in sehr kurzen Sequenzen",
      "Wörter in Sätzen wiederverwenden",
      "Lernfortschritt sichtbar dokumentieren"
    ],
    "materialOptions": [
      "Blitzwortkarten",
      "Wortfächer",
      "Leselineal",
      "persönlicher Sichtwortschatz",
      "Partnerkarten"
    ],
    "source": "praxis",
    "research": "basis",
    "material": "lesen",
    "catalogPage": 3,
    "sourceRow": 5
  },
  {
    "id": "fluss",
    "area": "Deutsch",
    "title": "Leseflüssigkeit entwickeln",
    "observation": "Liest stockend, ohne sinnvolle Betonung oder verliert häufig die Zeile.",
    "goal": "Die Schülerin/der Schüler liest einen geübten Text von angemessener Länge flüssig, zeilensicher und mit überwiegend sinngemäßer Betonung.",
    "measures": "Wiederholtes Lautlesen\nTandemlesen mit klaren Rollen\nSinnabschnitte markieren\nLesetempo am individuellen Ausgangswert orientiert steigern",
    "materials": "Kurze Lesetexte in Niveaustufen\nLeselineal\nStoppuhr nur zur Verlaufsbeobachtung\nAudioaufnahme / Vorlesemodell",
    "measureOptions": [
      "Wiederholtes Lautlesen",
      "Tandemlesen mit klaren Rollen",
      "Sinnabschnitte markieren",
      "Lesetempo am individuellen Ausgangswert orientiert steigern"
    ],
    "materialOptions": [
      "Kurze Lesetexte in Niveaustufen",
      "Leselineal",
      "Stoppuhr nur zur Verlaufsbeobachtung",
      "Audioaufnahme / Vorlesemodell"
    ],
    "source": "praxis",
    "research": "tandem",
    "material": "lesen",
    "catalogPage": 4,
    "sourceRow": 1
  },
  {
    "id": "verstehen",
    "area": "Deutsch",
    "title": "Informationen im Text finden",
    "observation": "Kann ausdrücklich genannte Informationen in kurzen Texten nicht sicher entnehmen.",
    "goal": "Die Schülerin/der Schüler findet in einem kurzen, sprachlich passenden Text 4 von 5 ausdrücklich genannten Informationen und markiert die Textstelle.",
    "measures": "Frage vor dem Lesen klären\nSchlüsselwörter in Frage und Text markieren\nAbschnittsweise lesen\nAntwort stets mit Textstelle belegen lassen",
    "materials": "Lesefenster\nW-Fragen-Karten\nMarkierfarben\nkurze Sachtexte\nAntwortsatzstarter",
    "measureOptions": [
      "Frage vor dem Lesen klären",
      "Schlüsselwörter in Frage und Text markieren",
      "Abschnittsweise lesen",
      "Antwort stets mit Textstelle belegen lassen"
    ],
    "materialOptions": [
      "Lesefenster",
      "W-Fragen-Karten",
      "Markierfarben",
      "kurze Sachtexte",
      "Antwortsatzstarter"
    ],
    "source": "praxis",
    "research": "lesen",
    "material": "lesen",
    "catalogPage": 4,
    "sourceRow": 2
  },
  {
    "id": "zusammenhang",
    "area": "Deutsch",
    "title": "Textzusammenhänge erschließen",
    "observation": "Kann Zusammenhänge, Reihenfolgen oder einfache Schlussfolgerungen aus Texten kaum ableiten.",
    "goal": "Die Schülerin/der Schüler ordnet zentrale Ereignisse eines kurzen Textes und beantwortet 3 von 4 einfachen Zusammenhangsfragen nachvollziehbar.",
    "measures": "Text in Sinnabschnitte gliedern\nVorwissen aktivieren\n„Was weiß ich? Was schließe ich daraus?“ modellieren\nAussagen mit Textbelegen prüfen",
    "materials": "Bildfolgen\nSatzstreifen\nLesespur / Ablaufleiste\nUrsache-Folge-Karten\ngrafischer Organizer",
    "measureOptions": [
      "Text in Sinnabschnitte gliedern",
      "Vorwissen aktivieren",
      "„Was weiß ich? Was schließe ich daraus?“ modellieren",
      "Aussagen mit Textbelegen prüfen"
    ],
    "materialOptions": [
      "Bildfolgen",
      "Satzstreifen",
      "Lesespur / Ablaufleiste",
      "Ursache-Folge-Karten",
      "grafischer Organizer"
    ],
    "source": "praxis",
    "research": "lesen",
    "material": "lesen",
    "catalogPage": 4,
    "sourceRow": 3
  },
  {
    "id": "rechtschreiben",
    "area": "Deutsch",
    "title": "Lautgetreu schreiben",
    "observation": "Schreibt lautgetreue Wörter mit Auslassungen, Vertauschungen oder zusätzlichen Buchstaben.",
    "goal": "Die Schülerin/der Schüler schreibt 8 von 10 geübten lautgetreuen Wörtern vollständig und in korrekter Lautfolge.",
    "measures": "Wort deutlich sprechen und segmentieren\nMitsprechstrategie vormachen\nSilbenweise schreiben und kontrollieren\nindividuelle Fehlerschwerpunkte in kleinen Wortgruppen üben",
    "materials": "Silbenbögen\nLaut-/Buchstabenschieber\nWörterbox\nKontrollkarte „Sprechen – Schreiben – Prüfen“",
    "measureOptions": [
      "Wort deutlich sprechen und segmentieren",
      "Mitsprechstrategie vormachen",
      "Silbenweise schreiben und kontrollieren",
      "individuelle Fehlerschwerpunkte in kleinen Wortgruppen üben"
    ],
    "materialOptions": [
      "Silbenbögen",
      "Laut-/Buchstabenschieber",
      "Wörterbox",
      "Kontrollkarte „Sprechen – Schreiben – Prüfen“"
    ],
    "source": "praxis",
    "research": "basis",
    "material": "schreiben",
    "catalogPage": 4,
    "sourceRow": 4
  },
  {
    "id": "strategie",
    "area": "Deutsch",
    "title": "Rechtschreibstrategien anwenden",
    "observation": "Rechtschreibmuster und Regeln werden trotz Übung nicht angewendet.",
    "goal": "Die Schülerin/der Schüler wendet eine ausgewählte Rechtschreibstrategie bei 8 von 10 passenden Wörtern korrekt an und benennt die Strategie.",
    "measures": "Je Förderzeitraum nur eine Strategie fokussieren\nStrategie gemeinsam entdecken und versprachlichen\nSortier-, Begründungs- und Transferaufgaben einsetzen\nFehlerrückmeldung auf den Schwerpunkt begrenzen",
    "materials": "Strategiekarte\nWortfamilienkarten\nWörterlisten zum Sortieren\nLernkartei\nFehlerlupe",
    "measureOptions": [
      "Je Förderzeitraum nur eine Strategie fokussieren",
      "Strategie gemeinsam entdecken und versprachlichen",
      "Sortier-, Begründungs- und Transferaufgaben einsetzen",
      "Fehlerrückmeldung auf den Schwerpunkt begrenzen"
    ],
    "materialOptions": [
      "Strategiekarte",
      "Wortfamilienkarten",
      "Wörterlisten zum Sortieren",
      "Lernkartei",
      "Fehlerlupe"
    ],
    "source": "praxis",
    "research": "",
    "material": "schreiben",
    "catalogPage": 5,
    "sourceRow": 1
  },
  {
    "id": "satzbau",
    "area": "Deutsch",
    "title": "Vollständige Sätze bilden",
    "observation": "Bildet überwiegend unvollständige oder grammatisch unsichere Sätze.",
    "goal": "Die Schülerin/der Schüler bildet zu Bild- oder Handlungssituationen in 4 von 5 Fällen vollständige Sätze mit Subjekt und Prädikat.",
    "measures": "Satzbau mündlich vorbereiten\nSatzglieder farblich kennzeichnen\nSätze legen, sprechen, schreiben, prüfen\nSatzmuster schrittweise variieren",
    "materials": "Satzstreifen\nWortarten-/Satzgliedkarten\nBildimpulse\nSatzanfänge\nSatzbauplan",
    "measureOptions": [
      "Satzbau mündlich vorbereiten",
      "Satzglieder farblich kennzeichnen",
      "Sätze legen, sprechen, schreiben, prüfen",
      "Satzmuster schrittweise variieren"
    ],
    "materialOptions": [
      "Satzstreifen",
      "Wortarten-/Satzgliedkarten",
      "Bildimpulse",
      "Satzanfänge",
      "Satzbauplan"
    ],
    "source": "praxis",
    "research": "",
    "material": "schreiben",
    "catalogPage": 5,
    "sourceRow": 2
  },
  {
    "id": "schreibplan",
    "area": "Deutsch",
    "title": "Texte geordnet verfassen",
    "observation": "Texte bleiben sehr kurz, ungeordnet oder ohne erkennbaren Zusammenhang.",
    "goal": "Die Schülerin/der Schüler plant und verfasst mit einer Strukturhilfe einen zusammenhängenden Text mit Einleitung, geordneter Mitte und Abschluss.",
    "measures": "Mündlich erzählen vor dem Schreiben\nIdeen sammeln und ordnen\nText in kleine Schreibschritte zerlegen\nÜberarbeitung auf 1–2 Kriterien begrenzen",
    "materials": "Schreibplan\nBildfolge\nWortbank\nSatzstarter\nCheckliste für Textaufbau",
    "measureOptions": [
      "Mündlich erzählen vor dem Schreiben",
      "Ideen sammeln und ordnen",
      "Text in kleine Schreibschritte zerlegen",
      "Überarbeitung auf 1–2 Kriterien begrenzen"
    ],
    "materialOptions": [
      "Schreibplan",
      "Bildfolge",
      "Wortbank",
      "Satzstarter",
      "Checkliste für Textaufbau"
    ],
    "source": "praxis",
    "research": "schreiben",
    "material": "schreiben",
    "catalogPage": 5,
    "sourceRow": 3
  },
  {
    "id": "wortschatz",
    "area": "Deutsch",
    "title": "Wortschatz erweitern",
    "observation": "Begrenzter Wortschatz; ungenaue Begriffe und häufige Wiederholungen erschweren das Verstehen und Erzählen.",
    "goal": "Die Schülerin/der Schüler verwendet 8 von 10 neu eingeführten Fach- oder Themenwörtern in passenden mündlichen bzw. schriftlichen Sätzen.",
    "measures": "Neue Wörter mit Bild, Handlung und Beispiel verknüpfen\nBegriffe mehrfach in verschiedenen Kontexten verwenden\nOber- und Unterbegriffe ordnen\naktiven Gebrauch gezielt einfordern",
    "materials": "Wort-Bild-Karten\nWortfeld / Wortnetz\nBegriffekiste\nSatzstarter\npersönliches Wörterheft",
    "measureOptions": [
      "Neue Wörter mit Bild, Handlung und Beispiel verknüpfen",
      "Begriffe mehrfach in verschiedenen Kontexten verwenden",
      "Ober- und Unterbegriffe ordnen",
      "aktiven Gebrauch gezielt einfordern"
    ],
    "materialOptions": [
      "Wort-Bild-Karten",
      "Wortfeld / Wortnetz",
      "Begriffekiste",
      "Satzstarter",
      "persönliches Wörterheft"
    ],
    "source": "praxis",
    "research": "lesen",
    "material": "rueckmeldung",
    "catalogPage": 5,
    "sourceRow": 4
  },
  {
    "id": "abschreiben",
    "area": "Deutsch",
    "title": "Abschreiben",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Abschreiben: Lässt beim Übertragen von der Vorlage Wörter aus, verliert die Stelle oder übernimmt Schreibfehler.",
    "goal": "Die Schülerin/der Schüler überträgt einen individuell passenden Textumfang in sinnvollen Abschnitten und prüft ihn mithilfe einer Kontrollkarte auf Vollständigkeit.",
    "measures": "„Lesen – Merken – Schreiben – Vergleichen“ vormachen\nVorlage zunächst unmittelbar danebenlegen\nUmfang schrittweise steigern",
    "materials": "Abdeckstreifen\nAbschreibkarte\nkurze altersangemessene Texte",
    "measureOptions": [
      "„Lesen – Merken – Schreiben – Vergleichen“ vormachen",
      "Vorlage zunächst unmittelbar danebenlegen",
      "Umfang schrittweise steigern"
    ],
    "materialOptions": [
      "Abdeckstreifen",
      "Abschreibkarte",
      "kurze altersangemessene Texte"
    ],
    "catalogPage": 5,
    "sourceRow": 5
  },
  {
    "id": "textueberarbeitung",
    "area": "Deutsch",
    "title": "Textüberarbeitung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Textüberarbeitung: Gibt Texte unmittelbar ab; erkennt vereinbarte Fehlerschwerpunkte trotz Hinweis kaum.",
    "goal": "Die Schülerin/der Schüler prüft einen eigenen kurzen Text auf ein vereinbartes Merkmal und verbessert mindestens 3 von 4 entsprechenden Fehlerstellen, gegebenenfalls nach Markierung der Zeile.",
    "measures": "Je Durchgang nur ein Prüfkriterium\nZunächst an fremden Beispielen üben\nHilfen vom konkreten Hinweis zur selbstständigen Prüfung abbauen",
    "materials": "Prüfkarte\nWortliste\nZeilenmarkierung",
    "measureOptions": [
      "Je Durchgang nur ein Prüfkriterium",
      "Zunächst an fremden Beispielen üben",
      "Hilfen vom konkreten Hinweis zur selbstständigen Prüfung abbauen"
    ],
    "materialOptions": [
      "Prüfkarte",
      "Wortliste",
      "Zeilenmarkierung"
    ],
    "catalogPage": 5,
    "sourceRow": 6
  },
  {
    "id": "zaehlen",
    "area": "Mathematik",
    "title": "Sicher vorwärts und rückwärts zählen",
    "observation": "Zählt unsicher, überspringt Zahlen oder kann von einer vorgegebenen Zahl nicht weiter- bzw. rückwärtszählen.",
    "goal": "Die Schülerin/der Schüler zählt im vereinbarten Zahlenraum vorwärts und rückwärts sowie in vorgegebenen Schritten in 4 von 5 Durchgängen korrekt.",
    "measures": "Zählhandlungen mit sichtbaren Mengen verbinden\nStartzahl variieren\nVorwärts- und Rückwärtsfolgen ritualisieren\nZahlwortreihe nicht nur auswendig aufsagen lassen",
    "materials": "Zahlenband\nRechenkette\nBoden-Zahlenstrahl\nZahlenkarten\nHundertertafel",
    "measureOptions": [
      "Zählhandlungen mit sichtbaren Mengen verbinden",
      "Startzahl variieren",
      "Vorwärts- und Rückwärtsfolgen ritualisieren",
      "Zahlwortreihe nicht nur auswendig aufsagen lassen"
    ],
    "materialOptions": [
      "Zahlenband",
      "Rechenkette",
      "Boden-Zahlenstrahl",
      "Zahlenkarten",
      "Hundertertafel"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 6,
    "sourceRow": 1
  },
  {
    "id": "zahlmenge",
    "area": "Mathematik",
    "title": "Zahl und Menge verknüpfen",
    "observation": "Zahlzeichen und Mengen werden nicht sicher zugeordnet; Mengen müssen stets neu ausgezählt werden.",
    "goal": "Die Schülerin/der Schüler ordnet im vereinbarten Zahlenraum 9 von 10 Zahlen den passenden Mengen strukturiert zu und erfasst kleine Mengen zunehmend ohne Zählen.",
    "measures": "Mengen strukturiert statt ungeordnet anbieten\nZahl – Menge – Zahlwort verknüpfen\nverschiedene Darstellungen vergleichen\nsimultanes und quasi-simultanes Erfassen üben",
    "materials": "Würfelbilder\nZehner-/Zwanzigerfeld\nWendeplättchen\nZahlenkarten\nFingerbilder",
    "measureOptions": [
      "Mengen strukturiert statt ungeordnet anbieten",
      "Zahl – Menge – Zahlwort verknüpfen",
      "verschiedene Darstellungen vergleichen",
      "simultanes und quasi-simultanes Erfassen üben"
    ],
    "materialOptions": [
      "Würfelbilder",
      "Zehner-/Zwanzigerfeld",
      "Wendeplättchen",
      "Zahlenkarten",
      "Fingerbilder"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 6,
    "sourceRow": 2
  },
  {
    "id": "stellenwert",
    "area": "Mathematik",
    "title": "Stellenwerte verstehen",
    "observation": "Stellenwerte werden verwechselt; Zahlen werden falsch gelesen, geschrieben oder zerlegt.",
    "goal": "Die Schülerin/der Schüler stellt 8 von 10 Zahlen im vereinbarten Zahlenraum korrekt dar, liest sie und zerlegt sie nach Stellenwerten.",
    "measures": "Bündeln und Entbündeln handelnd durchführen\nDarstellungen konsequent verknüpfen\nStellenwertsprache nutzen\nZahlendiktat mit anschließender Materialkontrolle",
    "materials": "Dienes-Material / Mehrsystemblöcke\nStellenwerttafel\nBündelmaterial\nZiffernkarten\nZahlkarten",
    "measureOptions": [
      "Bündeln und Entbündeln handelnd durchführen",
      "Darstellungen konsequent verknüpfen",
      "Stellenwertsprache nutzen",
      "Zahlendiktat mit anschließender Materialkontrolle"
    ],
    "materialOptions": [
      "Dienes-Material / Mehrsystemblöcke",
      "Stellenwerttafel",
      "Bündelmaterial",
      "Ziffernkarten",
      "Zahlkarten"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 6,
    "sourceRow": 3
  },
  {
    "id": "zerlegen",
    "area": "Mathematik",
    "title": "Zahlbeziehungen nutzen",
    "observation": "Nachbarzahlen, Zahlzerlegungen und Teil-Ganzes-Beziehungen sind nicht verfügbar.",
    "goal": "Die Schülerin/der Schüler nennt zu 8 von 10 Zahlen passende Nachbarzahlen und mindestens zwei korrekte Zerlegungen.",
    "measures": "Zahlbeziehungen täglich kurz thematisieren\nZerlegungen handelnd legen und versprachlichen\nTausch- und Umkehraufgaben nutzen\nMuster statt Einzelaufgaben fokussieren",
    "materials": "Schüttelbox\nZahlenhäuser\nPlättchen\nRechendreiecke\nAufgabenfamilienkarten",
    "measureOptions": [
      "Zahlbeziehungen täglich kurz thematisieren",
      "Zerlegungen handelnd legen und versprachlichen",
      "Tausch- und Umkehraufgaben nutzen",
      "Muster statt Einzelaufgaben fokussieren"
    ],
    "materialOptions": [
      "Schüttelbox",
      "Zahlenhäuser",
      "Plättchen",
      "Rechendreiecke",
      "Aufgabenfamilienkarten"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 6,
    "sourceRow": 4
  },
  {
    "id": "zahlenstrahl",
    "area": "Mathematik",
    "title": "Zahlen am Zahlenstrahl einordnen",
    "observation": "Zahlen werden am Zahlenstrahl nicht sicher verortet; Größenvergleiche gelingen nur ratend.",
    "goal": "Die Schülerin/der Schüler ordnet 8 von 10 Zahlen auf einem skalierten Zahlenstrahl passend ein und begründet größer/kleiner mit der Lage.",
    "measures": "Orientierungspunkte zuerst markieren\nAbstände und Skalierung ausdrücklich besprechen\nSchätzen vor genauem Eintragen\nreale und gezeichnete Zahlenstrahlen verbinden",
    "materials": "Boden-Zahlenstrahl\nleere Zahlenstrahle\nZahlenkarten\nKlammern / Klebepunkte\nSkalierungsstreifen",
    "measureOptions": [
      "Orientierungspunkte zuerst markieren",
      "Abstände und Skalierung ausdrücklich besprechen",
      "Schätzen vor genauem Eintragen",
      "reale und gezeichnete Zahlenstrahlen verbinden"
    ],
    "materialOptions": [
      "Boden-Zahlenstrahl",
      "leere Zahlenstrahle",
      "Zahlenkarten",
      "Klammern / Klebepunkte",
      "Skalierungsstreifen"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 6,
    "sourceRow": 5
  },
  {
    "id": "gleichheitsverstaendnis",
    "area": "Mathematik",
    "title": "Gleichheitsverständnis",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Gleichheitsverständnis: Versteht das Gleichheitszeichen ausschließlich als Aufforderung, ein Ergebnis aufzuschreiben.",
    "goal": "Die Schülerin/der Schüler ergänzt 8 von 10 Gleichungen unterschiedlicher Form im gesicherten Zahlenraum so, dass beide Seiten denselben Wert haben.",
    "measures": "Gleich große Mengen vergleichen\nBeide Seiten berechnen oder legen\nGleichungen wie „7 = □ + 3“ und „4 + 3 = 5 + □“ besprechen",
    "materials": "Plättchen\nzwei Legefelder\nGleichungskarten",
    "measureOptions": [
      "Gleich große Mengen vergleichen",
      "Beide Seiten berechnen oder legen",
      "Gleichungen wie „7 = □ + 3“ und „4 + 3 = 5 + □“ besprechen"
    ],
    "materialOptions": [
      "Plättchen",
      "zwei Legefelder",
      "Gleichungskarten"
    ],
    "catalogPage": 6,
    "sourceRow": 6
  },
  {
    "id": "rechnen",
    "area": "Mathematik",
    "title": "Rechenstrategien nutzen",
    "observation": "Addition und Subtraktion werden zählend gelöst; Rechenstrategien fehlen oder wechseln zufällig.",
    "goal": "Die Schülerin/der Schüler löst 8 von 10 Aufgaben mit einer vereinbarten Strategie und erklärt den Rechenweg mit Material oder Sprache.",
    "measures": "Eine Strategie nach der anderen aufbauen\nRechenwege handelnd, bildlich und symbolisch darstellen\nAufgabenbeziehungen nutzen\nungeeignete Strategien gemeinsam vergleichen",
    "materials": "Rechenrahmen\nZwanziger-/Hunderterfeld\nZahlenstrahl\nStrategiekarten\nRechenstrich",
    "measureOptions": [
      "Eine Strategie nach der anderen aufbauen",
      "Rechenwege handelnd, bildlich und symbolisch darstellen",
      "Aufgabenbeziehungen nutzen",
      "ungeeignete Strategien gemeinsam vergleichen"
    ],
    "materialOptions": [
      "Rechenrahmen",
      "Zwanziger-/Hunderterfeld",
      "Zahlenstrahl",
      "Strategiekarten",
      "Rechenstrich"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 7,
    "sourceRow": 1
  },
  {
    "id": "grundaufgaben",
    "area": "Mathematik",
    "title": "Grundaufgaben automatisieren",
    "observation": "Grundaufgaben sind nicht automatisiert; einfache Rechnungen benötigen viel Zeit und Arbeitsgedächtnis.",
    "goal": "Die Schülerin/der Schüler ruft einen festgelegten Satz von Grundaufgaben mit mindestens 80 % Sicherheit ohne Zählen ab.",
    "measures": "Kleines Aufgabenpaket auswählen\nAbleitungsstrategien nutzen\nkurz, häufig und gemischt üben\nTempo erst nach Verständnis steigern",
    "materials": "Blitzkarten\nAufgabenkartei mit Lernfächern\nRechendreiecke\nPartnerabfrage\nLernfortschrittskurve",
    "measureOptions": [
      "Kleines Aufgabenpaket auswählen",
      "Ableitungsstrategien nutzen",
      "kurz, häufig und gemischt üben",
      "Tempo erst nach Verständnis steigern"
    ],
    "materialOptions": [
      "Blitzkarten",
      "Aufgabenkartei mit Lernfächern",
      "Rechendreiecke",
      "Partnerabfrage",
      "Lernfortschrittskurve"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 7,
    "sourceRow": 2
  },
  {
    "id": "multiplikation",
    "area": "Mathematik",
    "title": "Multiplikation verstehen",
    "observation": "Multiplikation wird nur als Ziffernfolge gelernt; Tausch-, Kern- und Nachbaraufgaben werden nicht genutzt.",
    "goal": "Die Schülerin/der Schüler stellt Multiplikationsaufgaben handelnd oder bildlich dar und leitet 8 von 10 Aufgaben aus Kernaufgaben ab.",
    "measures": "Malnehmen als gleich große Gruppen aufbauen\nPunktefelder beschreiben lassen\nKern-, Tausch- und Nachbaraufgaben verknüpfen\nAutomatisierung erst nach Verständnis",
    "materials": "Punktefelder\nEierkartons / Steckwürfel\nEinmaleins-Tafel\nKernaufgabenkarten\nMalwinkel",
    "measureOptions": [
      "Malnehmen als gleich große Gruppen aufbauen",
      "Punktefelder beschreiben lassen",
      "Kern-, Tausch- und Nachbaraufgaben verknüpfen",
      "Automatisierung erst nach Verständnis"
    ],
    "materialOptions": [
      "Punktefelder",
      "Eierkartons / Steckwürfel",
      "Einmaleins-Tafel",
      "Kernaufgabenkarten",
      "Malwinkel"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 7,
    "sourceRow": 3
  },
  {
    "id": "division",
    "area": "Mathematik",
    "title": "Aufteilen und Verteilen",
    "observation": "Division wird mit Multiplikation nicht verknüpft; Aufteilen und Verteilen werden verwechselt.",
    "goal": "Die Schülerin/der Schüler löst 8 von 10 Divisionsaufgaben handelnd oder über die passende Umkehraufgabe und erklärt die Handlung.",
    "measures": "Aufteilen und Verteilen real durchführen\nMultiplikation und Division als Aufgabenfamilie darstellen\nRestmengen sichtbar lassen\nSprache der Rechenhandlung einüben",
    "materials": "Plättchen / Muggelsteine\nSchalen\nAufgabenfamilienkarten\nPunktefelder\nRechengeschichten",
    "measureOptions": [
      "Aufteilen und Verteilen real durchführen",
      "Multiplikation und Division als Aufgabenfamilie darstellen",
      "Restmengen sichtbar lassen",
      "Sprache der Rechenhandlung einüben"
    ],
    "materialOptions": [
      "Plättchen / Muggelsteine",
      "Schalen",
      "Aufgabenfamilienkarten",
      "Punktefelder",
      "Rechengeschichten"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 7,
    "sourceRow": 4
  },
  {
    "id": "schriftlich",
    "area": "Mathematik",
    "title": "Schriftliche Rechenverfahren",
    "observation": "Schriftliche Verfahren werden schematisch fehlerhaft ausgeführt; Stellenwerte oder Überträge gehen verloren.",
    "goal": "Die Schülerin/der Schüler führt das ausgewählte schriftliche Verfahren bei 4 von 5 Aufgaben stellengerecht aus und kontrolliert das Ergebnis.",
    "measures": "Verfahren aus Materialhandlung ableiten\nSprechweise und Reihenfolge vereinheitlichen\nKästchenstruktur nutzen\nnur einen Fehlertyp gleichzeitig bearbeiten",
    "materials": "Stellenwertraster\nMehrsystemblöcke\nVerfahrenskarte\nkariertes Papier mit Markierungen\nKontrollschema",
    "measureOptions": [
      "Verfahren aus Materialhandlung ableiten",
      "Sprechweise und Reihenfolge vereinheitlichen",
      "Kästchenstruktur nutzen",
      "nur einen Fehlertyp gleichzeitig bearbeiten"
    ],
    "materialOptions": [
      "Stellenwertraster",
      "Mehrsystemblöcke",
      "Verfahrenskarte",
      "kariertes Papier mit Markierungen",
      "Kontrollschema"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 7,
    "sourceRow": 5
  },
  {
    "id": "bruch",
    "area": "Mathematik",
    "title": "Brüche und Dezimalzahlen verstehen",
    "observation": "Brüche oder Dezimalzahlen werden nur als Schreibweise behandelt; Größenbeziehungen fehlen.",
    "goal": "Die Schülerin/der Schüler stellt 8 von 10 ausgewählte Brüche bzw. Dezimalzahlen in mindestens zwei Darstellungen korrekt dar und vergleicht sie.",
    "measures": "Vom konkreten Teilen und Messen ausgehen\nmehrere Darstellungen verknüpfen\nReferenzwerte nutzen\ntypische Fehlvorstellungen besprechen",
    "materials": "Bruchkreise / Bruchstreifen\nMessbecher\nZahlenstrahl\nStellenwerttafel für Dezimalzahlen\nGeld",
    "measureOptions": [
      "Vom konkreten Teilen und Messen ausgehen",
      "mehrere Darstellungen verknüpfen",
      "Referenzwerte nutzen",
      "typische Fehlvorstellungen besprechen"
    ],
    "materialOptions": [
      "Bruchkreise / Bruchstreifen",
      "Messbecher",
      "Zahlenstrahl",
      "Stellenwerttafel für Dezimalzahlen",
      "Geld"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 8,
    "sourceRow": 1
  },
  {
    "id": "groessen",
    "area": "Mathematik",
    "title": "Größen und Einheiten verwenden",
    "observation": "Einheiten werden verwechselt; Größen werden unrealistisch eingeschätzt oder ohne Einheit notiert.",
    "goal": "Die Schülerin/der Schüler wählt in 4 von 5 Alltagssituationen eine passende Einheit, misst sachgerecht und notiert Wert und Einheit vollständig.",
    "measures": "Reale Bezugsgrößen aufbauen\nSchätzen – Messen – Vergleichen ritualisieren\nEinheiten handelnd umwandeln\nErgebnisse auf Plausibilität prüfen",
    "materials": "Maßband / Lineal\nWaage\nMessbecher\nUhr / Lernuhr\nGeldmodelle\nBezugsgrößen-Plakat",
    "measureOptions": [
      "Reale Bezugsgrößen aufbauen",
      "Schätzen – Messen – Vergleichen ritualisieren",
      "Einheiten handelnd umwandeln",
      "Ergebnisse auf Plausibilität prüfen"
    ],
    "materialOptions": [
      "Maßband / Lineal",
      "Waage",
      "Messbecher",
      "Uhr / Lernuhr",
      "Geldmodelle",
      "Bezugsgrößen-Plakat"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 8,
    "sourceRow": 2
  },
  {
    "id": "sach",
    "area": "Mathematik",
    "title": "Sachaufgaben erschließen",
    "observation": "Sachaufgaben werden nach einzelnen Zahlen „blind“ berechnet; die Handlungssituation wird nicht verstanden.",
    "goal": "Die Schülerin/der Schüler entnimmt einer kurzen Sachaufgabe die relevanten Angaben, stellt die Situation dar und wählt in 4 von 5 Fällen die passende Rechenoperation.",
    "measures": "Situation nachspielen oder skizzieren\nFrage und Angaben getrennt markieren\nRechenoperation begründen lassen\nAntwortsatz und Plausibilitätsprüfung einfordern",
    "materials": "Handlungsmaterial\nRechengeschichten\nSkizzenrahmen\nMarkierhilfe\nSchema „Verstehen – Planen – Rechnen – Prüfen“",
    "measureOptions": [
      "Situation nachspielen oder skizzieren",
      "Frage und Angaben getrennt markieren",
      "Rechenoperation begründen lassen",
      "Antwortsatz und Plausibilitätsprüfung einfordern"
    ],
    "materialOptions": [
      "Handlungsmaterial",
      "Rechengeschichten",
      "Skizzenrahmen",
      "Markierhilfe",
      "Schema „Verstehen – Planen – Rechnen – Prüfen“"
    ],
    "source": "praxis",
    "research": "mathe",
    "material": "zahlen",
    "catalogPage": 8,
    "sourceRow": 3
  },
  {
    "id": "geometrie",
    "area": "Mathematik",
    "title": "Formen und Lagebeziehungen erkennen",
    "observation": "Geometrische Formen, Lagebeziehungen oder räumliche Ansichten werden unsicher erkannt.",
    "goal": "Die Schülerin/der Schüler benennt und sortiert vereinbarte Formen/Körper nach Merkmalen und setzt Lagebegriffe in 4 von 5 Situationen korrekt ein.",
    "measures": "Formen und Körper handelnd untersuchen\nMerkmale ertasten, beschreiben und vergleichen\nbauen, legen, drehen und zeichnen\nLagebegriffe in Handlungen verwenden",
    "materials": "Formenkarten\ngeometrische Körper\nTangram / Geobrett\nSteckwürfel\nSpiegel\nLagepläne",
    "measureOptions": [
      "Formen und Körper handelnd untersuchen",
      "Merkmale ertasten, beschreiben und vergleichen",
      "bauen, legen, drehen und zeichnen",
      "Lagebegriffe in Handlungen verwenden"
    ],
    "materialOptions": [
      "Formenkarten",
      "geometrische Körper",
      "Tangram / Geobrett",
      "Steckwürfel",
      "Spiegel",
      "Lagepläne"
    ],
    "source": "praxis",
    "research": "",
    "material": "zahlen",
    "catalogPage": 8,
    "sourceRow": 4
  },
  {
    "id": "kontrolle",
    "area": "Mathematik",
    "title": "Rechenergebnisse kontrollieren",
    "observation": "Ergebnisse werden selten überprüft; offensichtliche Fehler bleiben unbemerkt.",
    "goal": "Die Schülerin/der Schüler nutzt bei 4 von 5 Aufgaben eine vereinbarte Kontrollstrategie und korrigiert erkennbare Fehler selbstständig.",
    "measures": "Kontrollstrategie sichtbar vormachen\nnur 1–2 Prüffragen verwenden\nSelbstkontrolle vor Fremdkontrolle\nFehler als Lernanlass besprechen",
    "materials": "Kontrollkarte\nLösungsstreifen zur zeitversetzten Kontrolle\nUmkehraufgaben\nSchätzrahmen\nFehlerdetektiv-Karte",
    "measureOptions": [
      "Kontrollstrategie sichtbar vormachen",
      "nur 1–2 Prüffragen verwenden",
      "Selbstkontrolle vor Fremdkontrolle",
      "Fehler als Lernanlass besprechen"
    ],
    "materialOptions": [
      "Kontrollkarte",
      "Lösungsstreifen zur zeitversetzten Kontrolle",
      "Umkehraufgaben",
      "Schätzrahmen",
      "Fehlerdetektiv-Karte"
    ],
    "source": "praxis",
    "research": "selbst",
    "material": "zahlen",
    "catalogPage": 8,
    "sourceRow": 5
  },
  {
    "id": "daten_entnehmen",
    "area": "Mathematik",
    "title": "Daten entnehmen",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Daten entnehmen: Verwechselt in Tabellen und einfachen Diagrammen Kategorien und Werte.",
    "goal": "Die Schülerin/der Schüler entnimmt einer übersichtlichen Tabelle oder einem einfachen Säulendiagramm 4 von 5 gesuchten Angaben korrekt.",
    "measures": "Daten aus der Klasse sammeln und darstellen\nÜberschrift, Beschriftung und Skala gemeinsam erschließen\nSuchweg vormachen",
    "materials": "Klassendaten\nmarkierte Tabellen\nSäulendiagramme",
    "measureOptions": [
      "Daten aus der Klasse sammeln und darstellen",
      "Überschrift, Beschriftung und Skala gemeinsam erschließen",
      "Suchweg vormachen"
    ],
    "materialOptions": [
      "Klassendaten",
      "markierte Tabellen",
      "Säulendiagramme"
    ],
    "catalogPage": 8,
    "sourceRow": 6
  },
  {
    "id": "start",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbstständig beginnen",
    "observation": "Beginnt nach dem Arbeitsauftrag nicht oder erst nach mehrfacher persönlicher Aufforderung.",
    "goal": "Die Schülerin/der Schüler beginnt innerhalb von zwei Minuten nach dem vereinbarten Startsignal in 4 von 5 Situationen mit dem ersten Arbeitsschritt.",
    "measures": "Auftrag und Startsignal vereinheitlichen\nersten Schritt sichtbar machen\nMaterial vor Beginn bereitstellen\nunmittelbare, sachliche Rückmeldung zum Arbeitsbeginn",
    "materials": "Startkarte\nvisueller Timer\nMini-Ablaufplan\nMaterialschale\nArbeitsplatzfoto",
    "measureOptions": [
      "Auftrag und Startsignal vereinheitlichen",
      "ersten Schritt sichtbar machen",
      "Material vor Beginn bereitstellen",
      "unmittelbare, sachliche Rückmeldung zum Arbeitsbeginn"
    ],
    "materialOptions": [
      "Startkarte",
      "visueller Timer",
      "Mini-Ablaufplan",
      "Materialschale",
      "Arbeitsplatzfoto"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 1
  },
  {
    "id": "ausdauer",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bei der Aufgabe bleiben",
    "observation": "Aufmerksamkeit bricht rasch ab; Aufgaben bleiben trotz angemessenen Niveaus unvollständig.",
    "goal": "Die Schülerin/der Schüler arbeitet über den individuell festgelegten Zeitraum (Ausgangswert plus kleine Steigerung) in 4 von 5 Phasen aufgabenbezogen.",
    "measures": "Arbeitszeit kleinschrittig steigern\nkurze Arbeitsblöcke mit klarer Pause\nAblenkungen reduzieren\nFortschritt nicht nur Endergebnis rückmelden",
    "materials": "Time-Timer / Sanduhr\nArbeits-Pausen-Karte\nAbhakplan\nSichtschutz bei Bedarf\nVerstärkerübersicht",
    "measureOptions": [
      "Arbeitszeit kleinschrittig steigern",
      "kurze Arbeitsblöcke mit klarer Pause",
      "Ablenkungen reduzieren",
      "Fortschritt nicht nur Endergebnis rückmelden"
    ],
    "materialOptions": [
      "Time-Timer / Sanduhr",
      "Arbeits-Pausen-Karte",
      "Abhakplan",
      "Sichtschutz bei Bedarf",
      "Verstärkerübersicht"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 2
  },
  {
    "id": "impuls",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Ein Signal abwarten",
    "observation": "Ruft impulsiv hinein, handelt vor dem Ende der Erklärung oder startet ohne Materialprüfung.",
    "goal": "Die Schülerin/der Schüler wartet in 4 von 5 vereinbarten Situationen das Signal ab und nutzt vor dem Handeln die Stopp-Regel.",
    "measures": "Stopp-Signal explizit trainieren\nkurze Wartezeiten schrittweise erhöhen\ngewünschtes Verhalten vorab erinnern\ndiskrete nonverbale Rückmeldung nutzen",
    "materials": "Stopp-Karte\nAmpelkarte\nRedestein\nnonverbales Lehrkraftsignal\nSelbstbeobachtungsbogen",
    "measureOptions": [
      "Stopp-Signal explizit trainieren",
      "kurze Wartezeiten schrittweise erhöhen",
      "gewünschtes Verhalten vorab erinnern",
      "diskrete nonverbale Rückmeldung nutzen"
    ],
    "materialOptions": [
      "Stopp-Karte",
      "Ampelkarte",
      "Redestein",
      "nonverbales Lehrkraftsignal",
      "Selbstbeobachtungsbogen"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 3
  },
  {
    "id": "bewegung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bewegung passend nutzen",
    "observation": "Starke motorische Unruhe; verlässt den Platz oder nutzt Materialien zweckfremd.",
    "goal": "Die Schülerin/der Schüler hält die vereinbarte Arbeitsplatzregel während einer festgelegten Arbeitsphase in 4 von 5 Durchgängen ein und nutzt Bewegungsoptionen passend.",
    "measures": "Legitime Bewegung einplanen\nSitz- und Stehphasen wechseln\nMaterialmenge begrenzen\nBewegungsauftrag statt pauschalem Sitzgebot",
    "materials": "Steharbeitsplatz\nBewegungs-/Botengangkarte\nSitzkissen nach Erprobung\nMaterialbox\nTimer",
    "measureOptions": [
      "Legitime Bewegung einplanen",
      "Sitz- und Stehphasen wechseln",
      "Materialmenge begrenzen",
      "Bewegungsauftrag statt pauschalem Sitzgebot"
    ],
    "materialOptions": [
      "Steharbeitsplatz",
      "Bewegungs-/Botengangkarte",
      "Sitzkissen nach Erprobung",
      "Materialbox",
      "Timer"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 4
  },
  {
    "id": "frust",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bei Schwierigkeiten weiterarbeiten",
    "observation": "Bricht bei Fehlern oder Schwierigkeiten ab, verweigert oder zerstört Arbeitsergebnisse.",
    "goal": "Die Schülerin/der Schüler nutzt bei erlebter Schwierigkeit eine vereinbarte Bewältigungsstrategie und setzt die Arbeit in 4 von 5 Fällen fort.",
    "measures": "Schwierigkeit vorhersehbar ankündigen\nkleine erreichbare Teilschritte anbieten\nStrategie in ruhiger Situation üben\nAnstrengung und Strategieeinsatz konkret rückmelden",
    "materials": "Hilfe-/Pausenkarte\nMut-Satzkarte\nFehlerfreundlichkeits-Symbol\nTeilschrittplan\nErfolgssammlung",
    "measureOptions": [
      "Schwierigkeit vorhersehbar ankündigen",
      "kleine erreichbare Teilschritte anbieten",
      "Strategie in ruhiger Situation üben",
      "Anstrengung und Strategieeinsatz konkret rückmelden"
    ],
    "materialOptions": [
      "Hilfe-/Pausenkarte",
      "Mut-Satzkarte",
      "Fehlerfreundlichkeits-Symbol",
      "Teilschrittplan",
      "Erfolgssammlung"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 5
  },
  {
    "id": "organisation",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Arbeitsplatz und Material organisieren",
    "observation": "Materialien fehlen, Arbeitsplatz ist ungeordnet oder Aufgaben werden nicht abgegeben.",
    "goal": "Die Schülerin/der Schüler richtet den Arbeitsplatz mithilfe einer Checkliste vollständig ein und räumt ihn in 4 von 5 Situationen geordnet auf.",
    "measures": "Feste Materialplätze einführen\nRoutinen vormachen und gemeinsam üben\nCheckliste zunächst begleitet nutzen\nUnterstützung schrittweise reduzieren",
    "materials": "Materialcheckliste\nfarblich markierte Fächer\nArbeitsplatzfoto\nAblagekorb\nHausaufgaben-/Abgabemappe",
    "measureOptions": [
      "Feste Materialplätze einführen",
      "Routinen vormachen und gemeinsam üben",
      "Checkliste zunächst begleitet nutzen",
      "Unterstützung schrittweise reduzieren"
    ],
    "materialOptions": [
      "Materialcheckliste",
      "farblich markierte Fächer",
      "Arbeitsplatzfoto",
      "Ablagekorb",
      "Hausaufgaben-/Abgabemappe"
    ],
    "source": "praxis",
    "research": "selbst",
    "material": "start",
    "catalogPage": 9,
    "sourceRow": 6
  },
  {
    "id": "uebergang",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Übergänge bewältigen",
    "observation": "Wechsel zwischen Aufgaben, Räumen oder Personen lösen Unruhe, Verzögerung oder Widerstand aus.",
    "goal": "Die Schülerin/der Schüler bewältigt angekündigte Übergänge mit höchstens einem zusätzlichen Hinweis in 4 von 5 Situationen.",
    "measures": "Übergang frühzeitig ankündigen\ngleichbleibende Signale nutzen\nletzte und nächste Handlung sichtbar machen\nkurze Übergangsrolle vergeben",
    "materials": "Tages-/Stundenplan\nCountdown-Karte\nErst-dann-Karte\nÜbergangsgegenstand\nTimer",
    "measureOptions": [
      "Übergang frühzeitig ankündigen",
      "gleichbleibende Signale nutzen",
      "letzte und nächste Handlung sichtbar machen",
      "kurze Übergangsrolle vergeben"
    ],
    "materialOptions": [
      "Tages-/Stundenplan",
      "Countdown-Karte",
      "Erst-dann-Karte",
      "Übergangsgegenstand",
      "Timer"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 10,
    "sourceRow": 1
  },
  {
    "id": "regeln",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Vereinbarte Regeln einhalten",
    "observation": "Regeln werden situationsabhängig oder nur bei unmittelbarer Kontrolle eingehalten.",
    "goal": "Die Schülerin/der Schüler hält zwei konkret vereinbarte Regeln in 4 von 5 beobachteten Situationen auch bei reduzierter Erinnerung ein.",
    "measures": "Wenige positiv formulierte Regeln auswählen\nVerhalten konkret vormachen\nRegel vor Risikosituation aktivieren\nlogisch passende Konsequenzen verlässlich umsetzen",
    "materials": "individuelle Regelkarte\nKlassenregel-Visualisierung\nBeobachtungsstrichliste\nkurze Reflexionskarte",
    "measureOptions": [
      "Wenige positiv formulierte Regeln auswählen",
      "Verhalten konkret vormachen",
      "Regel vor Risikosituation aktivieren",
      "logisch passende Konsequenzen verlässlich umsetzen"
    ],
    "materialOptions": [
      "individuelle Regelkarte",
      "Klassenregel-Visualisierung",
      "Beobachtungsstrichliste",
      "kurze Reflexionskarte"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 10,
    "sourceRow": 2
  },
  {
    "id": "hilfe",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Gezielt Hilfe holen",
    "observation": "Fordert Hilfe sofort ein oder bleibt passiv, obwohl ein nächster Schritt möglich wäre.",
    "goal": "Die Schülerin/der Schüler nutzt vor einer Hilfeanfrage zwei vereinbarte Selbsthilfeschritte und stellt anschließend eine konkrete Frage.",
    "measures": "Selbsthilfekette einführen\nkonkrete Hilfefragen modellieren\nWartezeit vereinbaren\nerfolgreiche Selbsthilfe rückmelden",
    "materials": "„Erst selbst – dann Hilfe“-Karte\nHilfekarte\nBeispielsammlung für Fragen\nLösungsbeispiel / Merkkarte",
    "measureOptions": [
      "Selbsthilfekette einführen",
      "konkrete Hilfefragen modellieren",
      "Wartezeit vereinbaren",
      "erfolgreiche Selbsthilfe rückmelden"
    ],
    "materialOptions": [
      "„Erst selbst – dann Hilfe“-Karte",
      "Hilfekarte",
      "Beispielsammlung für Fragen",
      "Lösungsbeispiel / Merkkarte"
    ],
    "source": "praxis",
    "research": "selbst",
    "material": "start",
    "catalogPage": 10,
    "sourceRow": 3
  },
  {
    "id": "anforderung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Anforderungen bewältigen",
    "observation": "Vermeidet Leistungsanforderungen durch Ablenkung, Rückzug, Clownerie oder häufige Nebentätigkeiten.",
    "goal": "Die Schülerin/der Schüler bearbeitet den vereinbarten Mindestumfang und signalisiert Überforderung mit der abgesprochenen Form in 4 von 5 Phasen.",
    "measures": "Anforderungsniveau und Menge prüfen\nPflicht- und Wahlanteil kennzeichnen\nWahlmöglichkeiten begrenzen\nLeistungsrückmeldung privat und konkret geben",
    "materials": "Muss-Kann-Plan\nWahlkarte\nHilfe-/Pausensignal\nLernfortschrittsblatt\nAufgabenportionen",
    "measureOptions": [
      "Anforderungsniveau und Menge prüfen",
      "Pflicht- und Wahlanteil kennzeichnen",
      "Wahlmöglichkeiten begrenzen",
      "Leistungsrückmeldung privat und konkret geben"
    ],
    "materialOptions": [
      "Muss-Kann-Plan",
      "Wahlkarte",
      "Hilfe-/Pausensignal",
      "Lernfortschrittsblatt",
      "Aufgabenportionen"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "start",
    "catalogPage": 10,
    "sourceRow": 4
  },
  {
    "id": "regulation",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Nach Aufregung zur Ruhe finden",
    "observation": "Kann nach Aufregung nur schwer in einen lernbereiten Zustand zurückkehren.",
    "goal": "Die Schülerin/der Schüler erkennt ein persönliches Anzeichen von Anspannung und nutzt in 4 von 5 Fällen eine vereinbarte Beruhigungsstrategie.",
    "measures": "Körpersignale in ruhigen Situationen besprechen\nhöchstens zwei Strategien einüben\nRückzugsort und Rückkehr klar regeln\nNachbesprechung zeitversetzt durchführen",
    "materials": "Emotionsskala\nAtemkarte\nkurzer Bewegungsplan\nRuheplatz-Regel\nRückkehrkarte",
    "measureOptions": [
      "Körpersignale in ruhigen Situationen besprechen",
      "höchstens zwei Strategien einüben",
      "Rückzugsort und Rückkehr klar regeln",
      "Nachbesprechung zeitversetzt durchführen"
    ],
    "materialOptions": [
      "Emotionsskala",
      "Atemkarte",
      "kurzer Bewegungsplan",
      "Ruheplatz-Regel",
      "Rückkehrkarte"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 10,
    "sourceRow": 5
  },
  {
    "id": "handlungsplanung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Handlungsplanung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Handlungsplanung: Beginnt bei mehrschrittigen praktischen Aufgaben ungeordnet; wesentliche Schritte fehlen.",
    "goal": "Die Schülerin/der Schüler plant eine vertraute Tätigkeit mithilfe von drei bis vier Bildkarten und führt die Schritte in 4 von 5 Situationen in der passenden Reihenfolge aus.",
    "measures": "Planen laut denkend vormachen\nReihenfolge gemeinsam legen\nVor jedem Schritt auf den Plan verweisen\nUnterstützung schrittweise reduzieren",
    "materials": "Fotoplan\nSchrittkarten\nAbhakleiste",
    "measureOptions": [
      "Planen laut denkend vormachen",
      "Reihenfolge gemeinsam legen",
      "Vor jedem Schritt auf den Plan verweisen",
      "Unterstützung schrittweise reduzieren"
    ],
    "materialOptions": [
      "Fotoplan",
      "Schrittkarten",
      "Abhakleiste"
    ],
    "catalogPage": 11,
    "sourceRow": 1
  },
  {
    "id": "transfer",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Transfer",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Transfer: Bewältigt eine geübte Aufgabe, erkennt dieselbe Anforderung bei verändertem Material jedoch nicht wieder.",
    "goal": "Die Schülerin/der Schüler wendet eine bekannte Vorgehensweise bei 3 von 4 leicht veränderten Aufgaben mit einer vertrauten Merkhilfe an.",
    "measures": "Zunächst nur ein Merkmal verändern\nAlte und neue Aufgabe vergleichen\nGemeinsamkeiten benennen lassen\nAnschließend zunehmend variieren",
    "materials": "Aufgabenpaare\nbekanntes Lösungsbeispiel\nStrategiekarte",
    "measureOptions": [
      "Zunächst nur ein Merkmal verändern",
      "Alte und neue Aufgabe vergleichen",
      "Gemeinsamkeiten benennen lassen",
      "Anschließend zunehmend variieren"
    ],
    "materialOptions": [
      "Aufgabenpaare",
      "bekanntes Lösungsbeispiel",
      "Strategiekarte"
    ],
    "catalogPage": 11,
    "sourceRow": 2
  },
  {
    "id": "abruf",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Abruf von Gelerntem",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Abruf von Gelerntem: Kann Inhalte unmittelbar wiedergeben, benötigt am Folgetag erneut eine vollständige Erklärung.",
    "goal": "Die Schülerin/der Schüler ruft drei vereinbarte Kerninhalte nach einem Tag und nach einer Woche mithilfe einer selbst gewählten Gedächtnisstütze ab.",
    "measures": "Kurze verteilte Wiederholungen einplanen\nZunächst aus dem Gedächtnis antworten lassen\nAnschließend abgleichen\nHilfreiche Merkhilfe gemeinsam auswählen",
    "materials": "Bildmerkkarte\nLernkartei\npersönliche Merksätze",
    "measureOptions": [
      "Kurze verteilte Wiederholungen einplanen",
      "Zunächst aus dem Gedächtnis antworten lassen",
      "Anschließend abgleichen",
      "Hilfreiche Merkhilfe gemeinsam auswählen"
    ],
    "materialOptions": [
      "Bildmerkkarte",
      "Lernkartei",
      "persönliche Merksätze"
    ],
    "catalogPage": 11,
    "sourceRow": 3
  },
  {
    "id": "selbsteinschaetzung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbsteinschätzung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Selbsteinschätzung: Schätzt Aufgaben wiederholt als zu leicht oder zu schwer ein und kann die Einschätzung kaum begründen.",
    "goal": "Die Schülerin/der Schüler schätzt vor einer Aufgabe den benötigten Unterstützungsumfang ein und vergleicht die Einschätzung anschließend anhand eines konkreten Merkmals mit dem Verlauf.",
    "measures": "Einschätzungen modellieren\nDrei verständliche Kategorien nutzen\nEinschätzung und tatsächliche Erfahrung wertfrei vergleichen",
    "materials": "Karten „allein – mit Hilfe – gemeinsam“\nkurze Reflexionsleiste",
    "measureOptions": [
      "Einschätzungen modellieren",
      "Drei verständliche Kategorien nutzen",
      "Einschätzung und tatsächliche Erfahrung wertfrei vergleichen"
    ],
    "materialOptions": [
      "Karten „allein – mit Hilfe – gemeinsam“",
      "kurze Reflexionsleiste"
    ],
    "catalogPage": 11,
    "sourceRow": 4
  },
  {
    "id": "selbstwirksamkeit",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbstwirksamkeit",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Selbstwirksamkeit: Äußert vor bewältigbaren Aufgaben „Das kann ich nicht“ und benennt eigene Fortschritte kaum.",
    "goal": "Die Schülerin/der Schüler benennt am Ende von 4 von 5 Fördersequenzen einen gelungenen Arbeitsschritt und die dabei genutzte Hilfe oder Strategie.",
    "measures": "Erreichbare Teilziele vereinbaren\nFrühere und aktuelle Arbeiten vergleichen\nRückmeldung auf konkrete Handlungen beziehen",
    "materials": "Lernmappe\nVorher-nachher-Beispiele\nSatzstarter „Mir ist gelungen …“",
    "measureOptions": [
      "Erreichbare Teilziele vereinbaren",
      "Frühere und aktuelle Arbeiten vergleichen",
      "Rückmeldung auf konkrete Handlungen beziehen"
    ],
    "materialOptions": [
      "Lernmappe",
      "Vorher-nachher-Beispiele",
      "Satzstarter „Mir ist gelungen …“"
    ],
    "catalogPage": 11,
    "sourceRow": 5
  },
  {
    "id": "verstaendnissicherung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Verständnissicherung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Verständnissicherung: Bestätigt, einen Auftrag verstanden zu haben, kann aber den ersten Schritt nicht zeigen.",
    "goal": "Die Schülerin/der Schüler zeigt oder erklärt nach einem Auftrag den ersten Handlungsschritt und signalisiert Unklarheiten in 4 von 5 Situationen.",
    "measures": "Statt „Alles verstanden?“ den ersten Schritt zeigen lassen\nNachfragen ausdrücklich ermöglichen\nEine passende Rückfrage einüben",
    "materials": "Symbol „Bitte zeigen“\nFragekarte\nBeispielmaterial",
    "measureOptions": [
      "Statt „Alles verstanden?“ den ersten Schritt zeigen lassen",
      "Nachfragen ausdrücklich ermöglichen",
      "Eine passende Rückfrage einüben"
    ],
    "materialOptions": [
      "Symbol „Bitte zeigen“",
      "Fragekarte",
      "Beispielmaterial"
    ],
    "catalogPage": 11,
    "sourceRow": 6
  },
  {
    "id": "gespraech",
    "area": "Sozialverhalten",
    "title": "Gesprächsbeiträge abwarten",
    "observation": "Fällt anderen ins Wort oder hält Gesprächsregeln nicht ein.",
    "goal": "Die Schülerin/der Schüler wartet in 4 von 5 Gesprächssituationen den eigenen Redebeitrag ab und bezieht sich auf das Thema.",
    "measures": "Gesprächsregel explizit vormachen\nkurze Runden mit sichtbarer Reihenfolge\nnonverbales Erinnerungssignal\nSelbstreflexion direkt nach der Situation",
    "materials": "Redestein\nGesprächskarten\nReihenfolge-Symbole\nReflexionsampel",
    "measureOptions": [
      "Gesprächsregel explizit vormachen",
      "kurze Runden mit sichtbarer Reihenfolge",
      "nonverbales Erinnerungssignal",
      "Selbstreflexion direkt nach der Situation"
    ],
    "materialOptions": [
      "Redestein",
      "Gesprächskarten",
      "Reihenfolge-Symbole",
      "Reflexionsampel"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 1
  },
  {
    "id": "grenzen",
    "area": "Sozialverhalten",
    "title": "Grenzen anderer beachten",
    "observation": "Hält körperliche oder materielle Grenzen anderer nicht zuverlässig ein.",
    "goal": "Die Schülerin/der Schüler wahrt in 4 von 5 beobachteten Situationen den vereinbarten Abstand und fragt vor der Nutzung fremder Gegenstände.",
    "measures": "Grenzen konkret und positiv formulieren\npassende Alternativen im Rollenspiel üben\nBoden-/Raummarkierungen nutzen\nsofortige ruhige Rückmeldung",
    "materials": "Abstandssymbol\nBodenmarkierung\nSatzkarte „Darf ich …?“\nsoziale Bildgeschichte",
    "measureOptions": [
      "Grenzen konkret und positiv formulieren",
      "passende Alternativen im Rollenspiel üben",
      "Boden-/Raummarkierungen nutzen",
      "sofortige ruhige Rückmeldung"
    ],
    "materialOptions": [
      "Abstandssymbol",
      "Bodenmarkierung",
      "Satzkarte „Darf ich …?“",
      "soziale Bildgeschichte"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 2
  },
  {
    "id": "konflikt",
    "area": "Sozialverhalten",
    "title": "Konflikte angemessen klären",
    "observation": "Reagiert in Konflikten mit Beleidigung, Drohung, körperlichem Verhalten oder Rückzug.",
    "goal": "Die Schülerin/der Schüler nutzt in 4 von 5 begleiteten Konflikten die vereinbarte Konfliktschrittfolge ohne Beleidigung oder körperlichen Übergriff.",
    "measures": "Konfliktfolge außerhalb akuter Situationen trainieren\nStopp und Distanz zuerst sichern\nIch-Botschaften und Lösungsvorschläge üben\nWiedergutmachung konkret planen",
    "materials": "Konfliktkarten\nStopp-Regel\nSatzstarter\nLösungsrad\nWiedergutmachungsplan",
    "measureOptions": [
      "Konfliktfolge außerhalb akuter Situationen trainieren",
      "Stopp und Distanz zuerst sichern",
      "Ich-Botschaften und Lösungsvorschläge üben",
      "Wiedergutmachung konkret planen"
    ],
    "materialOptions": [
      "Konfliktkarten",
      "Stopp-Regel",
      "Satzstarter",
      "Lösungsrad",
      "Wiedergutmachungsplan"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 3
  },
  {
    "id": "perspektive",
    "area": "Sozialverhalten",
    "title": "Andere Sichtweisen verstehen",
    "observation": "Kann Absichten und Gefühle anderer schwer einschätzen; deutet neutrale Situationen als Angriff.",
    "goal": "Die Schülerin/der Schüler benennt zu 4 von 5 sozialen Situationen mindestens zwei mögliche Sichtweisen und prüft die eigene Vermutung.",
    "measures": "Beobachtung und Interpretation trennen\nmehrere Deutungen sammeln\nPerspektivwechsel im Rollenspiel\nRückfrage als Alternative einüben",
    "materials": "Gefühlskarten\nComic-Strips\nDenk-/Sprechblasen\nSatzkarte „Meinst du …?“\nsoziale Geschichten",
    "measureOptions": [
      "Beobachtung und Interpretation trennen",
      "mehrere Deutungen sammeln",
      "Perspektivwechsel im Rollenspiel",
      "Rückfrage als Alternative einüben"
    ],
    "materialOptions": [
      "Gefühlskarten",
      "Comic-Strips",
      "Denk-/Sprechblasen",
      "Satzkarte „Meinst du …?“",
      "soziale Geschichten"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 4
  },
  {
    "id": "kooperation",
    "area": "Sozialverhalten",
    "title": "Eine Gruppenrolle übernehmen",
    "observation": "Beteiligt sich in Partner- oder Gruppenarbeit kaum oder dominiert die Aufgabe.",
    "goal": "Die Schülerin/der Schüler übernimmt eine vereinbarte Gruppenrolle, erfüllt den Teilauftrag und stimmt sich mindestens zweimal angemessen ab.",
    "measures": "Gruppenrollen klar begrenzen\ngemeinsames Produkt mit Einzelbeiträgen planen\nKooperation kurz und konkret auswerten\nGruppengröße zunächst klein halten",
    "materials": "Rollenkarten\nGruppenarbeitsplan\nGesprächsmarker\nKooperations-Checkliste\nTeilergebnis-Karten",
    "measureOptions": [
      "Gruppenrollen klar begrenzen",
      "gemeinsames Produkt mit Einzelbeiträgen planen",
      "Kooperation kurz und konkret auswerten",
      "Gruppengröße zunächst klein halten"
    ],
    "materialOptions": [
      "Rollenkarten",
      "Gruppenarbeitsplan",
      "Gesprächsmarker",
      "Kooperations-Checkliste",
      "Teilergebnis-Karten"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 5
  },
  {
    "id": "rueckmeldung",
    "area": "Sozialverhalten",
    "title": "Rückmeldungen annehmen",
    "observation": "Kann Hinweise, Korrekturen oder ein Nein nur schwer annehmen.",
    "goal": "Die Schülerin/der Schüler nimmt in 4 von 5 Situationen eine sachliche Rückmeldung an, antwortet mit einem vereinbarten Satz und setzt einen nächsten Schritt um.",
    "measures": "Rückmeldung kurz und privat geben\nVerhalten statt Person benennen\nReaktionssatz vorab üben\nZeit zum Regulieren anbieten",
    "materials": "Satzkarte „Okay, ich versuche …“\nRückmeldeampel\nnächster-Schritt-Karte\nkurze Reflexionsskala",
    "measureOptions": [
      "Rückmeldung kurz und privat geben",
      "Verhalten statt Person benennen",
      "Reaktionssatz vorab üben",
      "Zeit zum Regulieren anbieten"
    ],
    "materialOptions": [
      "Satzkarte „Okay, ich versuche …“",
      "Rückmeldeampel",
      "nächster-Schritt-Karte",
      "kurze Reflexionsskala"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "rueckmeldung",
    "catalogPage": 12,
    "sourceRow": 6
  },
  {
    "id": "verantwortung",
    "area": "Sozialverhalten",
    "title": "Verantwortung übernehmen",
    "observation": "Gibt anderen die Schuld oder übernimmt keine Verantwortung für eigene Anteile.",
    "goal": "Die Schülerin/der Schüler benennt nach einem Vorfall einen eigenen beobachtbaren Anteil und wählt eine passende Wiedergutmachung.",
    "measures": "Sachverhalt ohne Bewertung rekonstruieren\n„Was war mein Anteil?“ konkret fragen\nWiedergutmachung statt pauschaler Entschuldigung\nReflexion erst nach Beruhigung",
    "materials": "Reflexionsbogen in Kurzform\nEreignis-Abfolge-Karten\nWiedergutmachungsoptionen\nSatzstarter",
    "measureOptions": [
      "Sachverhalt ohne Bewertung rekonstruieren",
      "„Was war mein Anteil?“ konkret fragen",
      "Wiedergutmachung statt pauschaler Entschuldigung",
      "Reflexion erst nach Beruhigung"
    ],
    "materialOptions": [
      "Reflexionsbogen in Kurzform",
      "Ereignis-Abfolge-Karten",
      "Wiedergutmachungsoptionen",
      "Satzstarter"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 13,
    "sourceRow": 1
  },
  {
    "id": "kontakt",
    "area": "Sozialverhalten",
    "title": "Kontakt aufnehmen",
    "observation": "Nimmt selten Kontakt auf, zieht sich zurück oder beteiligt sich nicht an gemeinsamen Aktivitäten.",
    "goal": "Die Schülerin/der Schüler initiiert oder beantwortet in 4 von 5 passenden Situationen einen kurzen sozialen Kontakt zu einer vertrauten Person.",
    "measures": "sicheren Partner festlegen\nKontaktaufnahme in kleinen Schritten üben\ninteressengeleitete Aufgaben nutzen\nöffentliche Aufforderung vermeiden",
    "materials": "Kontakt-Satzstarter\nPartnerkarte\nkooperative Miniaufgaben\nInteressenkarte\nErfolgsskala",
    "measureOptions": [
      "sicheren Partner festlegen",
      "Kontaktaufnahme in kleinen Schritten üben",
      "interessengeleitete Aufgaben nutzen",
      "öffentliche Aufforderung vermeiden"
    ],
    "materialOptions": [
      "Kontakt-Satzstarter",
      "Partnerkarte",
      "kooperative Miniaufgaben",
      "Interessenkarte",
      "Erfolgsskala"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 13,
    "sourceRow": 2
  },
  {
    "id": "aufmerksamkeit",
    "area": "Sozialverhalten",
    "title": "Aufmerksamkeit angemessen erhalten",
    "observation": "Sucht Aufmerksamkeit durch Stören, Provokation oder übermäßiges Einmischen.",
    "goal": "Die Schülerin/der Schüler nutzt in 4 von 5 Situationen eine vereinbarte angemessene Form der Kontakt- oder Aufmerksamkeitsaufnahme.",
    "measures": "Positive Aufmerksamkeit verlässlich und planbar geben\ngewünschte Kontaktform ausdrücklich üben\nstörendes Verhalten knapp und neutral beantworten\nsinnvolle Verantwortung übertragen",
    "materials": "Kontaktkarte\nvereinbartes Handzeichen\nRückmeldekarte\nVerantwortungsdienst\nVerstärkerplan",
    "measureOptions": [
      "Positive Aufmerksamkeit verlässlich und planbar geben",
      "gewünschte Kontaktform ausdrücklich üben",
      "störendes Verhalten knapp und neutral beantworten",
      "sinnvolle Verantwortung übertragen"
    ],
    "materialOptions": [
      "Kontaktkarte",
      "vereinbartes Handzeichen",
      "Rückmeldekarte",
      "Verantwortungsdienst",
      "Verstärkerplan"
    ],
    "source": "praxis",
    "research": "verhalten",
    "material": "rueckmeldung",
    "catalogPage": 13,
    "sourceRow": 3
  },
  {
    "id": "gefuehle",
    "area": "Sozialverhalten",
    "title": "Gefühle und Bedürfnisse benennen",
    "observation": "Erkennt Gefühle bei sich oder anderen nur unsicher und kann Bedürfnisse kaum benennen.",
    "goal": "Die Schülerin/der Schüler benennt in 4 von 5 Alltagssituationen ein passendes Gefühl und ein dazugehöriges Bedürfnis.",
    "measures": "Gefühlswortschatz systematisch aufbauen\nIntensitäten unterscheiden\nKörpersignale zuordnen\nBedürfnis und Handlungswunsch trennen",
    "materials": "Gefühlskarten\nEmotionsskala\nKörperschema\nBedürfnisbilder\nSatzstarter „Ich fühle …, weil …“",
    "measureOptions": [
      "Gefühlswortschatz systematisch aufbauen",
      "Intensitäten unterscheiden",
      "Körpersignale zuordnen",
      "Bedürfnis und Handlungswunsch trennen"
    ],
    "materialOptions": [
      "Gefühlskarten",
      "Emotionsskala",
      "Körperschema",
      "Bedürfnisbilder",
      "Satzstarter „Ich fühle …, weil …“"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 13,
    "sourceRow": 4
  },
  {
    "id": "soziale-hilfe",
    "area": "Sozialverhalten",
    "title": "Hilfe anbieten und erbitten",
    "observation": "Bietet oder erbittet Hilfe unangemessen, zu spät oder gar nicht.",
    "goal": "Die Schülerin/der Schüler erkennt in 4 von 5 kooperativen Situationen einen Hilfebedarf und bietet bzw. erbittet Hilfe in vereinbarter Form.",
    "measures": "Hilfeformen modellieren\nPartneraufgaben mit echtem Informationsbedarf\nHilfe nicht mit vollständiger Übernahme verwechseln\nAbschlussfrage zur Wirksamkeit stellen",
    "materials": "Hilfe-Satzstarter\nPartnerpuzzle\nHilfekarten\nRollenkarte „Fragen / Erklären“",
    "measureOptions": [
      "Hilfeformen modellieren",
      "Partneraufgaben mit echtem Informationsbedarf",
      "Hilfe nicht mit vollständiger Übernahme verwechseln",
      "Abschlussfrage zur Wirksamkeit stellen"
    ],
    "materialOptions": [
      "Hilfe-Satzstarter",
      "Partnerpuzzle",
      "Hilfekarten",
      "Rollenkarte „Fragen / Erklären“"
    ],
    "source": "praxis",
    "research": "",
    "material": "rueckmeldung",
    "catalogPage": 13,
    "sourceRow": 5
  },
  {
    "id": "eigene_grenzen",
    "area": "Sozialverhalten",
    "title": "Eigene Grenzen vertreten",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Eigene Grenzen vertreten: Stimmt unerwünschten Handlungen zu oder zeigt Unbehagen, ohne Unterstützung einzufordern.",
    "goal": "Die Schülerin/der Schüler äußert in begleiteten Übungssituationen eine eigene Grenze mit einem vereinbarten Satz oder Signal und benennt eine erreichbare Unterstützungsperson.",
    "measures": "Freiwillige Rollenspiele mit Alltagssituationen\nNein-Sagen modellieren\nGrenzen konsequent respektieren\nHilfeholen üben",
    "materials": "Stoppkarte\nSatzstarter\nÜbersicht vertrauter Ansprechpersonen",
    "measureOptions": [
      "Freiwillige Rollenspiele mit Alltagssituationen",
      "Nein-Sagen modellieren",
      "Grenzen konsequent respektieren",
      "Hilfeholen üben"
    ],
    "materialOptions": [
      "Stoppkarte",
      "Satzstarter",
      "Übersicht vertrauter Ansprechpersonen"
    ],
    "catalogPage": 14,
    "sourceRow": 1
  },
  {
    "id": "mitbestimmung",
    "area": "Sozialverhalten",
    "title": "Mitbestimmung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Mitbestimmung: Überlässt Entscheidungen regelmäßig anderen oder kann eigene Wünsche schwer ausdrücken.",
    "goal": "Die Schülerin/der Schüler trifft bei 4 von 5 Gelegenheiten eine Wahl zwischen zwei bis drei verständlichen Möglichkeiten und äußert die eigene Präferenz verbal oder durch Zeigen.",
    "measures": "Echte, überschaubare Wahlmöglichkeiten anbieten\nBedenkzeit geben\nEntscheidungen aufgreifen und anschließend kurz reflektieren",
    "materials": "Wahlkarten\nFotos\nSatzstarter „Ich möchte …“",
    "measureOptions": [
      "Echte, überschaubare Wahlmöglichkeiten anbieten",
      "Bedenkzeit geben",
      "Entscheidungen aufgreifen und anschließend kurz reflektieren"
    ],
    "materialOptions": [
      "Wahlkarten",
      "Fotos",
      "Satzstarter „Ich möchte …“"
    ],
    "catalogPage": 14,
    "sourceRow": 2
  },
  {
    "id": "kontraste",
    "area": "Wahrnehmung",
    "title": "Visuelle Merkmale unterscheiden",
    "observation": "Verwechselt ähnlich aussehende Buchstaben, Ziffern, Formen oder Symbole.",
    "goal": "Die Schülerin/der Schüler unterscheidet 9 von 10 vereinbarten visuellen Kontrastpaaren sicher und benennt das entscheidende Merkmal.",
    "measures": "Nur wenige Kontrastpaare gleichzeitig\nMerkmale ertasten, nachfahren und versprachlichen\nvom großen zum kleinen Format\nTransfer in Lese-/Rechenmaterial prüfen",
    "materials": "Kontrastkarten\nBuchstaben-/Ziffernformen\nFühlbuchstaben\nSpiegel\nSortierfelder",
    "measureOptions": [
      "Nur wenige Kontrastpaare gleichzeitig",
      "Merkmale ertasten, nachfahren und versprachlichen",
      "vom großen zum kleinen Format",
      "Transfer in Lese-/Rechenmaterial prüfen"
    ],
    "materialOptions": [
      "Kontrastkarten",
      "Buchstaben-/Ziffernformen",
      "Fühlbuchstaben",
      "Spiegel",
      "Sortierfelder"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 15,
    "sourceRow": 1
  },
  {
    "id": "visuell",
    "area": "Wahrnehmung",
    "title": "Auf dem Blatt orientieren",
    "observation": "Findet relevante Zeichen oder Informationen auf vollen Seiten schwer; verliert sich in Details.",
    "goal": "Die Schülerin/der Schüler findet in strukturiertem Material 4 von 5 gesuchten Informationen innerhalb der vereinbarten Zeit.",
    "measures": "visuelle Reize reduzieren\nSuchrichtung und Suchstrategie vormachen\nAusschnitte schrittweise vergrößern\nHilfen nach Erfolg abbauen",
    "materials": "Lesefenster\nAbdeckblatt\nSuchbilder mit ansteigender Dichte\nMarkierstreifen\nfarbige Orientierungspunkte",
    "measureOptions": [
      "visuelle Reize reduzieren",
      "Suchrichtung und Suchstrategie vormachen",
      "Ausschnitte schrittweise vergrößern",
      "Hilfen nach Erfolg abbauen"
    ],
    "materialOptions": [
      "Lesefenster",
      "Abdeckblatt",
      "Suchbilder mit ansteigender Dichte",
      "Markierstreifen",
      "farbige Orientierungspunkte"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 15,
    "sourceRow": 2
  },
  {
    "id": "folge",
    "area": "Wahrnehmung",
    "title": "Reihenfolgen wiedergeben",
    "observation": "Reihenfolgen von Buchstaben, Zahlen, Bildern oder Handlungsschritten werden vertauscht.",
    "goal": "Die Schülerin/der Schüler reproduziert Folgen aus 4–5 Elementen in 4 von 5 Durchgängen in korrekter Reihenfolge.",
    "measures": "kurze Folgen legen, sprechen und nachbauen\nRichtung konsequent markieren\nFolgenlänge langsam steigern\nauf schulische Aufgaben übertragen",
    "materials": "Bild-/Symbolfolgen\nSteckwürfel\nPerlenfolgen\nSatzstreifen\nRichtungspfeil",
    "measureOptions": [
      "kurze Folgen legen, sprechen und nachbauen",
      "Richtung konsequent markieren",
      "Folgenlänge langsam steigern",
      "auf schulische Aufgaben übertragen"
    ],
    "materialOptions": [
      "Bild-/Symbolfolgen",
      "Steckwürfel",
      "Perlenfolgen",
      "Satzstreifen",
      "Richtungspfeil"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 15,
    "sourceRow": 3
  },
  {
    "id": "lage",
    "area": "Wahrnehmung",
    "title": "Lagebegriffe umsetzen",
    "observation": "Lagebegriffe, Richtungen oder Positionen auf Blatt und im Raum werden verwechselt.",
    "goal": "Die Schülerin/der Schüler setzt die vereinbarten Lagebegriffe in 4 von 5 Handlungs- und Blattsituationen korrekt um.",
    "measures": "zuerst im eigenen Körperraum handeln\nHandlung stets sprachlich begleiten\nvom dreidimensionalen Raum zum Blatt\nBezugspunkt ausdrücklich nennen",
    "materials": "Raumparcours\nSpielfiguren\nLagekarten\nPfeile\nRaster / Koordinatenfeld",
    "measureOptions": [
      "zuerst im eigenen Körperraum handeln",
      "Handlung stets sprachlich begleiten",
      "vom dreidimensionalen Raum zum Blatt",
      "Bezugspunkt ausdrücklich nennen"
    ],
    "materialOptions": [
      "Raumparcours",
      "Spielfiguren",
      "Lagekarten",
      "Pfeile",
      "Raster / Koordinatenfeld"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 15,
    "sourceRow": 4
  },
  {
    "id": "merken",
    "area": "Wahrnehmung",
    "title": "Visuelle Informationen merken",
    "observation": "Visuelle Informationen werden nach kurzer Darbietung nicht erinnert.",
    "goal": "Die Schülerin/der Schüler merkt und reproduziert 4 visuelle Elemente nach kurzer Darbietung in 4 von 5 Durchgängen.",
    "measures": "Merkschritte vermitteln (anschauen – benennen – gruppieren)\nDarbietungszeit langsam verringern\nInhalt bedeutsam ordnen\nAbrufstrategie erfragen",
    "materials": "Memory mit reduzierter Kartenzahl\nBildfolgen\nMusterkarten\nAbdeckkarten\nMerkrahmen",
    "measureOptions": [
      "Merkschritte vermitteln (anschauen – benennen – gruppieren)",
      "Darbietungszeit langsam verringern",
      "Inhalt bedeutsam ordnen",
      "Abrufstrategie erfragen"
    ],
    "materialOptions": [
      "Memory mit reduzierter Kartenzahl",
      "Bildfolgen",
      "Musterkarten",
      "Abdeckkarten",
      "Merkrahmen"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 16,
    "sourceRow": 1
  },
  {
    "id": "hoeren",
    "area": "Wahrnehmung",
    "title": "Ähnliche Laute unterscheiden",
    "observation": "Ähnlich klingende Laute oder Wörter werden verwechselt; mündliche Informationen werden missverstanden.",
    "goal": "Die Schülerin/der Schüler unterscheidet 9 von 10 vereinbarten auditiven Kontrastpaaren und ordnet sie dem passenden Bild oder Zeichen zu.",
    "measures": "Hörbedingungen verbessern\nMundbild sichtbar machen\nKontrastpaare in bedeutungsvollen Wörtern üben\nzusätzliche visuelle Stütze anschließend reduzieren",
    "materials": "Minimalpaar-Bildkarten\nSpiegel\nHörmemory\nLautgebärden\nAudioaufnahmen",
    "measureOptions": [
      "Hörbedingungen verbessern",
      "Mundbild sichtbar machen",
      "Kontrastpaare in bedeutungsvollen Wörtern üben",
      "zusätzliche visuelle Stütze anschließend reduzieren"
    ],
    "materialOptions": [
      "Minimalpaar-Bildkarten",
      "Spiegel",
      "Hörmemory",
      "Lautgebärden",
      "Audioaufnahmen"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 16,
    "sourceRow": 2
  },
  {
    "id": "auftragsfolge",
    "area": "Wahrnehmung",
    "title": "Mehrteilige Aufträge erinnern",
    "observation": "Mehrteilige mündliche Informationen werden unvollständig erinnert.",
    "goal": "Die Schülerin/der Schüler führt einen zwei- bis dreischrittigen mündlichen Auftrag in 4 von 5 Situationen vollständig und in richtiger Reihenfolge aus.",
    "measures": "Informationsmenge dem Ausgangswert anpassen\nAuftrag nachsprechen lassen\nSchlüsselwörter sichern\nvisuelle Hilfe schrittweise reduzieren",
    "materials": "Auftragskarten\nMerkfinger-Strategie\nSymbolleiste\nHandlungsmaterial\nKontrollkarte",
    "measureOptions": [
      "Informationsmenge dem Ausgangswert anpassen",
      "Auftrag nachsprechen lassen",
      "Schlüsselwörter sichern",
      "visuelle Hilfe schrittweise reduzieren"
    ],
    "materialOptions": [
      "Auftragskarten",
      "Merkfinger-Strategie",
      "Symbolleiste",
      "Handlungsmaterial",
      "Kontrollkarte"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 16,
    "sourceRow": 3
  },
  {
    "id": "rhythmus",
    "area": "Wahrnehmung",
    "title": "Rhythmen und Lautfolgen wiedergeben",
    "observation": "Rhythmen, Silben- oder Lautfolgen werden vertauscht oder ausgelassen.",
    "goal": "Die Schülerin/der Schüler gibt Folgen aus 4 auditiven Elementen in 4 von 5 Durchgängen vollständig und in korrekter Reihenfolge wieder.",
    "measures": "kurze Klatsch- und Sprechfolgen imitieren\nTempo reduzieren\nakustische Folge mit Bewegung verbinden\nLänge erst nach sicherer Reproduktion steigern",
    "materials": "Rhythmusinstrumente\nKlatschkarten\nSilbenfolgen\nKlangdosen\nAufnahmefunktion",
    "measureOptions": [
      "kurze Klatsch- und Sprechfolgen imitieren",
      "Tempo reduzieren",
      "akustische Folge mit Bewegung verbinden",
      "Länge erst nach sicherer Reproduktion steigern"
    ],
    "materialOptions": [
      "Rhythmusinstrumente",
      "Klatschkarten",
      "Silbenfolgen",
      "Klangdosen",
      "Aufnahmefunktion"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 16,
    "sourceRow": 4
  },
  {
    "id": "koerper",
    "area": "Wahrnehmung",
    "title": "Am eigenen Körper orientieren",
    "observation": "Körperteile, Körperseiten oder Bewegungsrichtungen werden unsicher wahrgenommen.",
    "goal": "Die Schülerin/der Schüler benennt vereinbarte Körperteile und führt 4 von 5 Bewegungsaufträgen bezogen auf den eigenen Körper korrekt aus.",
    "measures": "am eigenen Körper beginnen\nBewegung sehen, nachahmen und benennen\nSeitenmarkierung zeitweise nutzen\nÜbungen in Alltagshandlungen integrieren",
    "materials": "Körperschema-Puzzle\nSpiegel\nBewegungslieder\nfarbiges Armband\nKörperumriss",
    "measureOptions": [
      "am eigenen Körper beginnen",
      "Bewegung sehen, nachahmen und benennen",
      "Seitenmarkierung zeitweise nutzen",
      "Übungen in Alltagshandlungen integrieren"
    ],
    "materialOptions": [
      "Körperschema-Puzzle",
      "Spiegel",
      "Bewegungslieder",
      "farbiges Armband",
      "Körperumriss"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 17,
    "sourceRow": 1
  },
  {
    "id": "rechtslinks",
    "area": "Wahrnehmung",
    "title": "Rechts und links unterscheiden",
    "observation": "Rechts und links werden am eigenen Körper, bei anderen oder auf dem Blatt verwechselt.",
    "goal": "Die Schülerin/der Schüler orientiert sich mit einer vereinbarten Strategie in 4 von 5 Situationen sicher rechts/links; der Bezugspunkt wird benannt.",
    "measures": "dominante Seite klären, nicht erzwingen\nfeste Merkhilfe verwenden\nEigenkörper vor Gegenüber und Blatt\nPerspektivwechsel separat aufbauen",
    "materials": "Rechts-links-Merkband\nHandabdruck\nRichtungspfeile\nBodenmarkierungen\nLagepläne",
    "measureOptions": [
      "dominante Seite klären, nicht erzwingen",
      "feste Merkhilfe verwenden",
      "Eigenkörper vor Gegenüber und Blatt",
      "Perspektivwechsel separat aufbauen"
    ],
    "materialOptions": [
      "Rechts-links-Merkband",
      "Handabdruck",
      "Richtungspfeile",
      "Bodenmarkierungen",
      "Lagepläne"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 17,
    "sourceRow": 2
  },
  {
    "id": "motorik",
    "area": "Wahrnehmung",
    "title": "Kraft und Bewegung dosieren",
    "observation": "Kraftdosierung und Bewegungskontrolle sind unsicher; Stift, Schere oder Material werden zu fest/zu locker geführt.",
    "goal": "Die Schülerin/der Schüler dosiert Kraft bei einer ausgewählten schulischen Tätigkeit so, dass 4 von 5 Ergebnisse funktional gelingen.",
    "measures": "Widerstand und Druck bewusst vergleichen\nkurze sensomotorische Vorbereitung\ngeeignetes Werkzeug erproben\nFunktion vor Schönschrift bewerten",
    "materials": "Knete / Therapieknete\nDruckspuren mit Buntstift\nPinzetten-/Klammerübungen\nangepasste Stifte / Griffhilfe nach Erprobung",
    "measureOptions": [
      "Widerstand und Druck bewusst vergleichen",
      "kurze sensomotorische Vorbereitung",
      "geeignetes Werkzeug erproben",
      "Funktion vor Schönschrift bewerten"
    ],
    "materialOptions": [
      "Knete / Therapieknete",
      "Druckspuren mit Buntstift",
      "Pinzetten-/Klammerübungen",
      "angepasste Stifte / Griffhilfe nach Erprobung"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 17,
    "sourceRow": 3
  },
  {
    "id": "reiz",
    "area": "Wahrnehmung",
    "title": "Belastende Reize regulieren",
    "observation": "Komplexe Sinnesreize führen zu Überforderung; Lärm, Berührung oder visuelle Unruhe beeinträchtigen die Mitarbeit.",
    "goal": "Die Schülerin/der Schüler erkennt einen belastenden Reiz, nutzt die vereinbarte Schutz- oder Regulationsmaßnahme und kehrt in 4 von 5 Fällen zur Aufgabe zurück.",
    "measures": "Auslöser systematisch beobachten\nReize möglichst vorhersehbar gestalten\nSchutzmaßnahme und Rückkehr verbindlich regeln\nkeine pauschale Reizvermeidung ohne Überprüfung",
    "materials": "Reiz-/Belastungsskala\nruhiger Arbeitsplatz\nSichtschutz\nGehörschutz nur gezielt und zeitlich begrenzt\nRückkehrkarte",
    "measureOptions": [
      "Auslöser systematisch beobachten",
      "Reize möglichst vorhersehbar gestalten",
      "Schutzmaßnahme und Rückkehr verbindlich regeln",
      "keine pauschale Reizvermeidung ohne Überprüfung"
    ],
    "materialOptions": [
      "Reiz-/Belastungsskala",
      "ruhiger Arbeitsplatz",
      "Sichtschutz",
      "Gehörschutz nur gezielt und zeitlich begrenzt",
      "Rückkehrkarte"
    ],
    "source": "praxis",
    "research": "",
    "material": "start",
    "catalogPage": 17,
    "sourceRow": 4
  }
];
const MATERIALS={start:{title:'Meine Schrittekarte',text:'MEIN NÄCHSTER SCHRITT\n\nMeine Aufgabe: __________________________\n\n□ Ich schaue auf die Aufgabe.\n□ Ich sage oder zeige den ersten Schritt.\n□ Ich lege das Material bereit.\n□ Ich beginne.\n\nWenn ich Hilfe brauche: __________________\n\nHeute gelang mir: ________________________'},rueckmeldung:{title:'Kurze Rückmeldung',text:'DAS HABE ICH HEUTE GEÜBT\n\nMein Ziel: ______________________________\nDatum / Situation: ______________________\n\nMeine Einschätzung:\n□ gelingt allein   □ mit Hilfe   □ noch nicht\n\nDas habe ich konkret getan:\n_______________________________________\n\nRückmeldung der Lehrkraft:\n_______________________________________\n\nMein nächster Schritt:\n_______________________________________'},silben:{title:'Silben verbinden',text:'ICH VERBINDE DIE LAUTE\n\nNur verwenden, wenn m, l, s, a, i, o sicher bekannt sind.\nLaute ohne zusätzlichen Schwa-Laut sprechen.\n\nma     mi     mo\nla     li     lo\nsa     si     so\n\nErst gemeinsam verbinden, dann selbst lesen.\n\nGeübt: __________   Selbstständig: __________\nNeue Kombination: ________________________'},lesen:{title:'Meine Lesekarte',text:'LESEN UND VERSTEHEN\n\nText / Abschnitt: ________________________\n\n□ Ich höre ein Lesemodell.\n□ Wir lesen gemeinsam.\n□ Ich lese denselben Abschnitt noch einmal.\n\nEine wichtige Information:\n_______________________________________\n\nHier steht sie im Text:\n_______________________________________\n\nLehrkraft: Text, Fehler und benötigte Hilfe dokumentieren.'},zahlen:{title:'Eine Zahl – mehrere Darstellungen',text:'ICH ENTDECKE ZAHLBEZIEHUNGEN\n\nMeine Zahl: __________\n\nIch lege die Zahl mit Material.\n\nIch zeichne eine passende Darstellung:\n\n\n\n\nIch zerlege: ______ + ______ = ______\n\nIch zerlege anders: ______ + ______ = ______\n\nIch erkläre meinen Weg:\n_______________________________________'},schreiben:{title:'Mein Schreibplan',text:'ICH PLANE – SCHREIBE – PRÜFE\n\nWorüber schreibe ich? ____________________\n\nAnfang: _________________________________\n\nDann: __________________________________\n\nZum Schluss: ____________________________\n\nMeine zwei Prüffragen:\n□ Sind meine Gedanken in einer passenden Reihenfolge?\n□ _____________________________________\n\nDas möchte ich verbessern: ________________'}};
