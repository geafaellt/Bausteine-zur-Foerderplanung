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
    "observation": "Beginnt nach einem mündlichen Arbeitsauftrag mit einem anderen als dem genannten Arbeitsschritt.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "phonologie",
    "area": "Deutsch",
    "title": "Reime, Silben und Anlaute erkennen",
    "observation": "Lässt beim Gliedern vertrauter Wörter in Silben einzelne Silben aus oder fügt weitere hinzu.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "grapheme",
    "area": "Deutsch",
    "title": "Laute und Buchstaben zuordnen",
    "observation": "Benennt zu einem gezeigten, bereits eingeführten Buchstaben wiederholt einen anderen Laut.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "synthese",
    "area": "Deutsch",
    "title": "Laute zu Silben verbinden",
    "observation": "Benennt die einzelnen Laute eines geschriebenen Wortes, verbindet sie beim Lesen aber nicht zum Wort.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "sichtwort",
    "area": "Deutsch",
    "title": "Häufige Wörter erkennen",
    "observation": "Liest wiederholt geübte häufige Wörter weiterhin Buchstabe für Buchstabe.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "fluss",
    "area": "Deutsch",
    "title": "Leseflüssigkeit entwickeln",
    "observation": "Unterbricht beim Lesen eines geübten Textes den Satz wiederholt durch längere Pausen innerhalb von Wörtern.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "verstehen",
    "area": "Deutsch",
    "title": "Informationen im Text finden",
    "observation": "Nennt auf eine Frage zum kurzen Text eine andere als die dort ausdrücklich genannte Information.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "zusammenhang",
    "area": "Deutsch",
    "title": "Textzusammenhänge erschließen",
    "observation": "Ordnet Ereignisse beim Wiedergeben eines gelesenen Textes in einer anderen als der beschriebenen Reihenfolge.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "rechtschreiben",
    "area": "Deutsch",
    "title": "Lautgetreu schreiben",
    "observation": "Lässt beim Schreiben lautgetreuer Wörter einzelne hörbare Laute in der Buchstabenfolge aus.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "strategie",
    "area": "Deutsch",
    "title": "Rechtschreibstrategien anwenden",
    "observation": "Schreibt Wörter mit einem geübten Rechtschreibmuster erneut fehlerhaft, ohne die vereinbarte Prüfhilfe zu nutzen.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "satzbau",
    "area": "Deutsch",
    "title": "Vollständige Sätze bilden",
    "observation": "Lässt beim Beschreiben einer Bildhandlung im Satz die handelnde Person oder die Tätigkeit aus.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "schreibplan",
    "area": "Deutsch",
    "title": "Texte geordnet verfassen",
    "observation": "Wechselt beim Schreiben zwischen Ereignissen, ohne ihre zeitliche Reihenfolge im Text erkennbar zu machen.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "wortschatz",
    "area": "Deutsch",
    "title": "Wortschatz erweitern",
    "observation": "Verwendet beim Beschreiben von Gegenständen wiederholt „Ding“ oder „das da“ statt eingeführter Bezeichnungen.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "abschreiben",
    "area": "Deutsch",
    "title": "Abschreiben",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Lässt beim Abschreiben Wörter aus der Vorlage aus.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "textueberarbeitung",
    "area": "Deutsch",
    "title": "Textüberarbeitung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Gibt einen Text ab, ohne den vereinbarten Prüfschritt mit der Kontrollkarte durchzuführen.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "zaehlen",
    "area": "Mathematik",
    "title": "Sicher vorwärts und rückwärts zählen",
    "observation": "Überspringt beim Weiterzählen von einer vorgegebenen Zahl einzelne Zahlen.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "zahlmenge",
    "area": "Mathematik",
    "title": "Zahl und Menge verknüpfen",
    "observation": "Ordnet einer gelegten Menge ein Zahlzeichen zu, das nicht zur Anzahl passt.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "stellenwert",
    "area": "Mathematik",
    "title": "Stellenwerte verstehen",
    "observation": "Vertauscht beim Schreiben oder Legen einer Zahl die Stellenwerte.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "zerlegen",
    "area": "Mathematik",
    "title": "Zahlbeziehungen nutzen",
    "observation": "Findet zu einer gelegten Zahl auch nach einer Aufforderung keine weitere Aufteilung in zwei Teilmengen.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "zahlenstrahl",
    "area": "Mathematik",
    "title": "Zahlen am Zahlenstrahl einordnen",
    "observation": "Setzt eine vorgegebene Zahl an eine Stelle des Zahlenstrahls, die nicht zur Beschriftung und Einteilung passt.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "gleichheitsverstaendnis",
    "area": "Mathematik",
    "title": "Gleichheitsverständnis",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Schreibt bei einer Gleichung mit einer Lücke vor dem Gleichheitszeichen das Rechenergebnis in die Lücke, obwohl beide Seiten dann unterschiedliche Werte haben.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "rechnen",
    "area": "Mathematik",
    "title": "Rechenstrategien nutzen",
    "observation": "Zählt bei Additions- oder Subtraktionsaufgaben jeden einzelnen Schritt ab, auch wenn eine geübte Rechenhilfe bereitliegt.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "grundaufgaben",
    "area": "Mathematik",
    "title": "Grundaufgaben automatisieren",
    "observation": "Zählt die Ergebnisse wiederholt geübter Grundaufgaben erneut einzeln aus.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "multiplikation",
    "area": "Mathematik",
    "title": "Multiplikation verstehen",
    "observation": "Kann zu einer genannten Malaufgabe keine passenden gleich großen Gruppen mit Material legen.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "division",
    "area": "Mathematik",
    "title": "Aufteilen und Verteilen",
    "observation": "Bildet beim Verteilen einer Menge ungleich große Gruppen, obwohl gleichmäßiges Verteilen vereinbart wurde.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "schriftlich",
    "area": "Mathematik",
    "title": "Schriftliche Rechenverfahren",
    "observation": "Schreibt beim schriftlichen Rechnen Ziffern unterschiedlicher Stellenwerte in dieselbe Spalte.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "bruch",
    "area": "Mathematik",
    "title": "Brüche und Dezimalzahlen verstehen",
    "observation": "Ordnet einem dargestellten Anteil einen Bruch zu, dessen Zähler oder Nenner nicht zur Darstellung passt.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "groessen",
    "area": "Mathematik",
    "title": "Größen und Einheiten verwenden",
    "observation": "Notiert nach dem Messen eine andere als die am Messgerät verwendete Einheit.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "sach",
    "area": "Mathematik",
    "title": "Sachaufgaben erschließen",
    "observation": "Verknüpft Zahlen aus einer Sachaufgabe durch eine Rechnung, die nicht zur beschriebenen Handlung passt.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "geometrie",
    "area": "Mathematik",
    "title": "Formen und Lagebeziehungen erkennen",
    "observation": "Ordnet eine Form beim Sortieren einer Gruppe zu, deren vereinbartes Merkmal sie nicht besitzt.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "kontrolle",
    "area": "Mathematik",
    "title": "Rechenergebnisse kontrollieren",
    "observation": "Übernimmt ein Rechenergebnis, ohne den vereinbarten Kontrollschritt durchzuführen.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "daten_entnehmen",
    "area": "Mathematik",
    "title": "Daten entnehmen",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Nennt beim Ablesen einer Tabelle oder eines Diagramms einen Wert aus einer anderen als der gesuchten Kategorie.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "start",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbstständig beginnen",
    "observation": "Beginnt mit dem ersten Arbeitsschritt erst nach wiederholter persönlicher Aufforderung.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "ausdauer",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bei der Aufgabe bleiben",
    "observation": "Unterbricht die Bearbeitung, beschäftigt sich mit anderen Gegenständen und setzt die Aufgabe erst nach einem Hinweis fort.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "impuls",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Ein Signal abwarten",
    "observation": "Beginnt mit der Aufgabe, bevor das vereinbarte Startsignal gegeben wurde.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "bewegung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bewegung passend nutzen",
    "observation": "Verlässt während der vereinbarten Arbeitsphase wiederholt den Arbeitsplatz, ohne die abgesprochene Bewegungsmöglichkeit zu nutzen.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "frust",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Bei Schwierigkeiten weiterarbeiten",
    "observation": "Legt nach einem Fehler die Arbeit weg und nimmt sie auch nach einem angebotenen Hilfeschritt zunächst nicht wieder auf.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "organisation",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Arbeitsplatz und Material organisieren",
    "observation": "Beginnt die Arbeit, ohne das dafür vereinbarte Material bereitzulegen.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "uebergang",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Übergänge bewältigen",
    "observation": "Setzt nach dem angekündigten Wechselzeichen die bisherige Tätigkeit fort, statt zur nächsten zu wechseln.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "regeln",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Vereinbarte Regeln einhalten",
    "observation": "Führt eine zuvor besprochene Handlung erst nach erneuter Erinnerung an die zugehörige Regel aus.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "hilfe",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Gezielt Hilfe holen",
    "observation": "Fragt nach Hilfe, bevor die bereitliegende und bereits eingeführte Hilfekarte genutzt wurde.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "anforderung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Anforderungen bewältigen",
    "observation": "Beginnt nach dem Arbeitsauftrag Gespräche über andere Themen oder beschäftigt sich mit anderen Materialien.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "regulation",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Nach Aufregung zur Ruhe finden",
    "observation": "Spricht nach einer aufregenden Situation weiterhin laut und beginnt trotz angebotener Beruhigungshilfe zunächst nicht mit dem vereinbarten nächsten Schritt.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "handlungsplanung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Handlungsplanung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Lässt bei einer vertrauten praktischen Tätigkeit einen auf der Bildanleitung dargestellten Arbeitsschritt aus.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "transfer",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Transfer",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Führt eine bekannte Vorgehensweise bei verändertem Material erst aus, nachdem die Schritte erneut vorgemacht wurden.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "abruf",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Abruf von Gelerntem",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Gibt einen geübten Inhalt unmittelbar wieder, nennt ihn am Folgetag aber erst nach erneuter Erklärung.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "selbsteinschaetzung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbsteinschätzung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Bezeichnet eine Aufgabe vor der Bearbeitung als „ganz leicht“, fordert danach für jeden Arbeitsschritt Hilfe an und benennt diesen Unterschied im Rückblick nicht.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "selbstwirksamkeit",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Selbstwirksamkeit",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Sagt nach einem gelungenen Arbeitsschritt „Ich kann das nicht“ und benennt auch nach einer Nachfrage keinen gelungenen Teil.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "verstaendnissicherung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Verständnissicherung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Bestätigt, einen Auftrag verstanden zu haben, zeigt auf Nachfrage aber keinen dazu passenden ersten Schritt.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "gespraech",
    "area": "Sozialverhalten",
    "title": "Gesprächsbeiträge abwarten",
    "observation": "Beginnt einen eigenen Gesprächsbeitrag, während eine andere Person noch spricht.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "grenzen",
    "area": "Sozialverhalten",
    "title": "Grenzen anderer beachten",
    "observation": "Nimmt Gegenstände anderer Personen, ohne vorher zu fragen.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "konflikt",
    "area": "Sozialverhalten",
    "title": "Konflikte angemessen klären",
    "observation": "Verwendet in einer Auseinandersetzung beleidigende Ausdrücke gegenüber der anderen Person.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "perspektive",
    "area": "Sozialverhalten",
    "title": "Andere Sichtweisen verstehen",
    "observation": "Sagt in einer besprochenen sozialen Situation, eine andere Person wolle absichtlich schaden, ohne deren Aussage oder eine weitere mögliche Erklärung einzubeziehen.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "kooperation",
    "area": "Sozialverhalten",
    "title": "Eine Gruppenrolle übernehmen",
    "observation": "Übernimmt bei einer Gruppenaufgabe den vereinbarten Teilauftrag erst nach wiederholter persönlicher Aufforderung.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "rueckmeldung",
    "area": "Sozialverhalten",
    "title": "Rückmeldungen annehmen",
    "observation": "Schiebt nach einem Korrekturhinweis das Arbeitsblatt weg und unterbricht die Bearbeitung.",
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
    "sourceRow": 6,
    "gradeBands": []
  },
  {
    "id": "verantwortung",
    "area": "Sozialverhalten",
    "title": "Verantwortung übernehmen",
    "observation": "Nennt bei der gemeinsamen Besprechung eines Vorfalls nur Handlungen anderer und beschreibt die eigene zuvor beobachtete Handlung auch auf Nachfrage nicht.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "kontakt",
    "area": "Sozialverhalten",
    "title": "Kontakt aufnehmen",
    "observation": "Beantwortet eine direkte Einladung zu einer gemeinsamen Aktivität nicht durch eine erkennbare Zu- oder Absage.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "aufmerksamkeit",
    "area": "Sozialverhalten",
    "title": "Aufmerksamkeit angemessen erhalten",
    "observation": "Unterbricht andere wiederholt durch Zurufe, statt das vereinbarte Zeichen für einen Kontaktwunsch zu nutzen.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "gefuehle",
    "area": "Sozialverhalten",
    "title": "Gefühle und Bedürfnisse benennen",
    "observation": "Zeigt oder benennt nach einer erlebten Situation auch mit angebotenen Bildkarten kein dazu passendes eigenes Gefühl.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "soziale-hilfe",
    "area": "Sozialverhalten",
    "title": "Hilfe anbieten und erbitten",
    "observation": "Setzt eine gemeinsame Aufgabe trotz eines benannten Hilfebedarfs nicht fort und fragt keine erreichbare Unterstützungsperson.",
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
    "sourceRow": 5,
    "gradeBands": []
  },
  {
    "id": "eigene_grenzen",
    "area": "Sozialverhalten",
    "title": "Eigene Grenzen vertreten",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Sagt zunächst „Das möchte ich nicht“, stimmt nach erneutem Drängen aber zu, ohne die vereinbarte Unterstützung anzufordern.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "mitbestimmung",
    "area": "Sozialverhalten",
    "title": "Mitbestimmung",
    "source": "praxis",
    "research": "",
    "material": "",
    "observation": "Überlässt bei einer ausdrücklich angebotenen Wahl zwischen zwei verständlich dargestellten Möglichkeiten die Entscheidung einer anderen Person.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "kontraste",
    "area": "Wahrnehmung",
    "title": "Visuelle Merkmale unterscheiden",
    "observation": "Ordnet beim Vergleichen ähnlich aussehende Buchstaben, Ziffern oder Formen einander zu, obwohl sich das vereinbarte Merkmal unterscheidet.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "visuell",
    "area": "Wahrnehmung",
    "title": "Auf dem Blatt orientieren",
    "observation": "Springt beim Suchen auf einem Arbeitsblatt wiederholt zwischen Stellen, ohne die gesuchte Zeile oder das gesuchte Zeichen zu finden.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "folge",
    "area": "Wahrnehmung",
    "title": "Reihenfolgen wiedergeben",
    "observation": "Vertauscht beim Nachlegen einer vorgegebenen Bilderfolge die Reihenfolge einzelner Bilder.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "lage",
    "area": "Wahrnehmung",
    "title": "Lagebegriffe umsetzen",
    "observation": "Legt einen Gegenstand an eine andere als die mit dem vereinbarten Lagewort bezeichnete Position.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "merken",
    "area": "Wahrnehmung",
    "title": "Visuelle Informationen merken",
    "observation": "Lässt beim Nachlegen einer zuvor gezeigten und dann abgedeckten Bildauswahl einzelne Bilder aus.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "hoeren",
    "area": "Wahrnehmung",
    "title": "Ähnliche Laute unterscheiden",
    "observation": "Wählt bei ähnlich klingenden, vertrauten Wörtern wiederholt das Bild zum jeweils anderen Wort.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "auftragsfolge",
    "area": "Wahrnehmung",
    "title": "Mehrteilige Aufträge erinnern",
    "observation": "Führt nach einem mehrteiligen mündlichen Auftrag nur einen der genannten Schritte aus.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "rhythmus",
    "area": "Wahrnehmung",
    "title": "Rhythmen und Lautfolgen wiedergeben",
    "observation": "Lässt beim Wiedergeben einer vorgespielten Klangfolge einzelne Klänge aus.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "koerper",
    "area": "Wahrnehmung",
    "title": "Am eigenen Körper orientieren",
    "observation": "Zeigt auf Aufforderung wiederholt auf einen anderen als den benannten Körperteil.",
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
    "sourceRow": 1,
    "gradeBands": []
  },
  {
    "id": "rechtslinks",
    "area": "Wahrnehmung",
    "title": "Rechts und links unterscheiden",
    "observation": "Zeigt bei einer Aufforderung mit „rechts“ oder „links“ auf die jeweils andere Seite des vereinbarten Bezugspunkts.",
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
    "sourceRow": 2,
    "gradeBands": []
  },
  {
    "id": "motorik",
    "area": "Wahrnehmung",
    "title": "Kraft und Bewegung dosieren",
    "observation": "Drückt beim Schreiben so stark auf, dass das Papier einreißt oder die Stiftspitze wiederholt abbricht.",
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
    "sourceRow": 3,
    "gradeBands": []
  },
  {
    "id": "reiz",
    "area": "Wahrnehmung",
    "title": "Belastende Reize regulieren",
    "observation": "Hält sich bei gleichzeitig auftretenden Geräuschen die Ohren zu und unterbricht die Bearbeitung der Aufgabe.",
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
    "sourceRow": 4,
    "gradeBands": []
  },
  {
    "id": "12_bilderzaehlen",
    "area": "Deutsch",
    "title": "Zu einer Bilderfolge erzählen",
    "observation": "Benennt beim Erzählen zu zwei aufeinanderfolgenden Bildern einzelne Dinge, ohne zu sagen, was geschieht.",
    "goal": "Die Schülerin/der Schüler beschreibt mit Satzanfängen zu zwei Bildern jeweils eine Handlung in passender Reihenfolge.",
    "studentText": "Ich erzähle zu den Bildern: Was passiert zuerst? Was passiert danach?",
    "studentIcon": "talk",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Zwei vertraute Bildhandlungen gemeinsam besprechen",
      "Eine Handlung vormachen und einen passenden Satz modellieren",
      "Satzanfänge anbieten und nach Bedarf abbauen"
    ],
    "materialOptions": [
      "Zwei Bildkarten",
      "Satzanfänge „Zuerst … Danach …“"
    ],
    "measures": "Zwei vertraute Bildhandlungen gemeinsam besprechen\nEine Handlung vormachen und einen passenden Satz modellieren\nSatzanfänge anbieten und nach Bedarf abbauen",
    "materials": "Zwei Bildkarten\nSatzanfänge „Zuerst … Danach …“",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_namenskarte",
    "area": "Deutsch",
    "title": "Den eigenen Namen wiederfinden",
    "observation": "Wählt beim Zuordnen der eigenen Materialien eine andere als die eigene Namenskarte aus.",
    "goal": "Die Schülerin/der Schüler findet die eigene Namenskarte zwischen drei vertrauten Namen und ordnet sie dem eigenen Material zu; ein markierter Anfangsbuchstabe darf genutzt werden.",
    "studentText": "Ich finde meinen Namen. Ich lege die Namenskarte zu meinen Sachen.",
    "studentIcon": "word",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Eigenen Namen gemeinsam mit einer Vergleichskarte betrachten",
      "Zunächst zwei, später drei deutlich unterscheidbare Namenskarten anbieten",
      "Buchstabenmerkmale statt Kartenposition vergleichen lassen"
    ],
    "materialOptions": [
      "Eigene Namenskarte",
      "Vergleichskarten",
      "Materialkiste"
    ],
    "measures": "Eigenen Namen gemeinsam mit einer Vergleichskarte betrachten\nZunächst zwei, später drei deutlich unterscheidbare Namenskarten anbieten\nBuchstabenmerkmale statt Kartenposition vergleichen lassen",
    "materials": "Eigene Namenskarte\nVergleichskarten\nMaterialkiste",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_einszueins",
    "area": "Mathematik",
    "title": "Gegenstände einzeln zählen",
    "observation": "Berührt beim Abzählen einer kleinen Gegenstandsmenge einzelne Gegenstände mehrmals.",
    "goal": "Die Schülerin/der Schüler zählt eine vereinbarte kleine Menge, indem jedem Gegenstand genau ein Zahlwort zugeordnet wird; Verschieben der Gegenstände darf helfen.",
    "studentText": "Ich zähle jedes Teil genau einmal.",
    "studentIcon": "quantity",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Abgezählte Gegenstände in ein zweites Feld schieben lassen",
      "Zählhandlung langsam vormachen",
      "Menge am sicheren Zahlenraum ausrichten"
    ],
    "materialOptions": [
      "Zählgegenstände",
      "Zwei Ablagefelder"
    ],
    "measures": "Abgezählte Gegenstände in ein zweites Feld schieben lassen\nZählhandlung langsam vormachen\nMenge am sicheren Zahlenraum ausrichten",
    "materials": "Zählgegenstände\nZwei Ablagefelder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_mengenvergleich",
    "area": "Mathematik",
    "title": "Mengen vergleichen",
    "observation": "Bezeichnet eine weiter auseinanderliegende Menge als größer, obwohl sie weniger Gegenstände enthält.",
    "goal": "Die Schülerin/der Schüler vergleicht zwei kleine Mengen durch paarweises Zuordnen und zeigt, wo mehr, weniger oder gleich viele Gegenstände liegen.",
    "studentText": "Ich lege die Dinge paarweise zusammen. So finde ich heraus, wo mehr ist.",
    "studentIcon": "equal",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Jedem Gegenstand einen Partner zuordnen lassen",
      "Anordnung verändern und Vergleich erneut durchführen",
      "Begriffe mehr, weniger und gleich viele mit der Handlung verbinden"
    ],
    "materialOptions": [
      "Zwei Arten von Zählgegenständen",
      "Paarfelder"
    ],
    "measures": "Jedem Gegenstand einen Partner zuordnen lassen\nAnordnung verändern und Vergleich erneut durchführen\nBegriffe mehr, weniger und gleich viele mit der Handlung verbinden",
    "materials": "Zwei Arten von Zählgegenständen\nPaarfelder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_materialbild",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Material nach einem Bild bereitlegen",
    "observation": "Legt bei der Vorbereitung einer Aufgabe nur einen Teil des auf dem Arbeitsplatzbild gezeigten Materials bereit.",
    "goal": "Die Schülerin/der Schüler legt mithilfe eines Fotos die zwei bis drei vereinbarten Arbeitsmittel bereit und gleicht den Arbeitsplatz mit dem Foto ab.",
    "studentText": "Ich schaue auf mein Arbeitsplatzbild. Ich lege meine Sachen bereit.",
    "studentIcon": "desk",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Arbeitsplatz mit wenigen Gegenständen fotografieren",
      "Material einzeln mit dem Foto vergleichen lassen",
      "Persönliche Hinweise schrittweise verringern"
    ],
    "materialOptions": [
      "Arbeitsplatzfoto",
      "Materialschale"
    ],
    "measures": "Arbeitsplatz mit wenigen Gegenständen fotografieren\nMaterial einzeln mit dem Foto vergleichen lassen\nPersönliche Hinweise schrittweise verringern",
    "materials": "Arbeitsplatzfoto\nMaterialschale",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_aufraeumen",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Eine Tätigkeit abschließen",
    "observation": "Lässt nach dem vereinbarten Aufräumsignal die benutzten Materialien am Arbeitsplatz liegen.",
    "goal": "Die Schülerin/der Schüler beendet nach dem Aufräumsignal die Tätigkeit und legt die benutzten Materialien mithilfe von Bildmarkierungen an ihre Plätze.",
    "studentText": "Nach dem Aufräumzeichen lege ich meine Sachen an ihren Platz.",
    "studentIcon": "desk",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Aufräumsignal gemeinsam üben",
      "Ablageplätze mit Fotos kennzeichnen",
      "Zunächst einen überschaubaren Materialumfang aufräumen lassen"
    ],
    "materialOptions": [
      "Bildmarkierungen",
      "Beschriftete Materialkisten"
    ],
    "measures": "Aufräumsignal gemeinsam üben\nAblageplätze mit Fotos kennzeichnen\nZunächst einen überschaubaren Materialumfang aufräumen lassen",
    "materials": "Bildmarkierungen\nBeschriftete Materialkisten",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_mitspielen",
    "area": "Sozialverhalten",
    "title": "An einer gemeinsamen Aktivität teilnehmen",
    "observation": "Nimmt beim Hinzukommen zu einem Spiel Material aus der laufenden Spielhandlung, ohne die Mitspielenden anzusprechen.",
    "goal": "Die Schülerin/der Schüler fragt beim Hinzukommen mit einem vereinbarten Satz oder Zeichen nach dem Mitspielen und wartet die Antwort ab.",
    "studentText": "Ich frage: Darf ich mitspielen? Ich warte auf die Antwort.",
    "studentIcon": "conversation",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Kontaktaufnahme in kurzen Spielsituationen vormachen",
      "Satz oder Zeichen mit dem Kind vereinbaren",
      "Einladende Spielsituationen mit erreichbarer Unterstützung gestalten"
    ],
    "materialOptions": [
      "Satzkarte „Darf ich mitspielen?“",
      "Vertrautes Spiel"
    ],
    "measures": "Kontaktaufnahme in kurzen Spielsituationen vormachen\nSatz oder Zeichen mit dem Kind vereinbaren\nEinladende Spielsituationen mit erreichbarer Unterstützung gestalten",
    "materials": "Satzkarte „Darf ich mitspielen?“\nVertrautes Spiel",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_abwechseln",
    "area": "Sozialverhalten",
    "title": "Sich beim Spielen abwechseln",
    "observation": "Führt beim Partnerspiel einen weiteren Spielzug aus, obwohl die andere Person an der Reihe ist.",
    "goal": "Die Schülerin/der Schüler führt einen Spielzug aus und gibt das vereinbarte Zeichen für den nächsten Zug an die Partnerperson weiter.",
    "studentText": "Ich bin dran. Dann bist du dran.",
    "studentIcon": "team",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Abwechseln mit kurzen Spielzügen üben",
      "Sichtbaren Gegenstand für „dran sein“ verwenden",
      "Erfolgreichen Wechsel konkret rückmelden"
    ],
    "materialOptions": [
      "Spielstein für den Wechsel",
      "Einfaches Partnerspiel"
    ],
    "measures": "Abwechseln mit kurzen Spielzügen üben\nSichtbaren Gegenstand für „dran sein“ verwenden\nErfolgreichen Wechsel konkret rückmelden",
    "materials": "Spielstein für den Wechsel\nEinfaches Partnerspiel",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_zeilenanfang",
    "area": "Wahrnehmung",
    "title": "Den Arbeitsbeginn auf dem Blatt finden",
    "observation": "Beginnt auf einem gegliederten Arbeitsblatt an einer anderen als der markierten Startstelle.",
    "goal": "Die Schülerin/der Schüler zeigt die markierte Startstelle und bearbeitet von dort die erste Aufgabe; eine Abdeckung darf genutzt werden.",
    "studentText": "Ich suche mein Startzeichen auf dem Blatt. Dort beginne ich.",
    "studentIcon": "search",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Startstelle gemeinsam zeigen",
      "Nur den benötigten Ausschnitt sichtbar lassen",
      "Markierung bei zunehmender Orientierung reduzieren"
    ],
    "materialOptions": [
      "Startpunkt",
      "Abdeckblatt"
    ],
    "measures": "Startstelle gemeinsam zeigen\nNur den benötigten Ausschnitt sichtbar lassen\nMarkierung bei zunehmender Orientierung reduzieren",
    "materials": "Startpunkt\nAbdeckblatt",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "12_schneidelinie",
    "area": "Wahrnehmung",
    "title": "Eine Schnittlinie verfolgen",
    "observation": "Schneidet bei einer breiten geraden Schnittspur wiederholt seitlich über deren Begrenzung hinaus.",
    "goal": "Die Schülerin/der Schüler schneidet eine kurze breite Schnittspur innerhalb der vereinbarten Begrenzung; eine geeignete Schere und Haltehilfe dürfen genutzt werden.",
    "studentText": "Ich schneide entlang meiner Linie.",
    "studentIcon": "hand",
    "gradeBands": [
      "1-2"
    ],
    "measureOptions": [
      "Handhabung mit geeigneter Schere begleiten",
      "Kurze breite Spuren anbieten",
      "Papierhaltung vormachen und bei Bedarf unterstützen"
    ],
    "materialOptions": [
      "Geeignete Kinderschere",
      "Kurze breite Schnittspuren"
    ],
    "measures": "Handhabung mit geeigneter Schere begleiten\nKurze breite Spuren anbieten\nPapierhaltung vormachen und bei Bedarf unterstützen",
    "materials": "Geeignete Kinderschere\nKurze breite Schnittspuren",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_leseanleitung",
    "area": "Deutsch",
    "title": "Eine kurze Anleitung nutzen",
    "observation": "Lässt beim Ausführen einer kurzen schriftlichen Anleitung einen bereits gelesenen Schritt aus.",
    "goal": "Die Schülerin/der Schüler führt eine sprachlich angepasste Anleitung mit zwei bis drei Schritten in Reihenfolge aus und markiert jeden erledigten Schritt.",
    "studentText": "Ich lese einen Schritt und führe ihn aus. Dann hake ich ihn ab.",
    "studentIcon": "sequence",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Anleitung in einzelne kurze Sätze gliedern",
      "Lesen und Handeln abwechseln lassen",
      "Erledigte Schritte sichtbar markieren"
    ],
    "materialOptions": [
      "Kurze Anleitung",
      "Abhakfelder"
    ],
    "measures": "Anleitung in einzelne kurze Sätze gliedern\nLesen und Handeln abwechseln lassen\nErledigte Schritte sichtbar markieren",
    "materials": "Kurze Anleitung\nAbhakfelder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_nachricht",
    "area": "Deutsch",
    "title": "Eine verständliche Nachricht schreiben",
    "observation": "Schreibt eine Nachricht zu einer Verabredung, ohne die vereinbarte Uhrzeit anzugeben.",
    "goal": "Die Schülerin/der Schüler ergänzt in einer kurzen Nachricht die vereinbarte Uhrzeit und prüft die Angabe mit einer Fragenkarte.",
    "studentText": "Ich schreibe auf, wann wir uns treffen.",
    "studentIcon": "pencil",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Beispielnachrichten auf fehlende Zeitangaben prüfen",
      "Nachricht mit einem verständlichen Schreibanlass verfassen lassen",
      "Eine gezielte Prüffrage einsetzen"
    ],
    "materialOptions": [
      "Fragenkarte „Wann?“",
      "Nachrichtenvorlage"
    ],
    "measures": "Beispielnachrichten auf fehlende Zeitangaben prüfen\nNachricht mit einem verständlichen Schreibanlass verfassen lassen\nEine gezielte Prüffrage einsetzen",
    "materials": "Fragenkarte „Wann?“\nNachrichtenvorlage",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_geld",
    "area": "Mathematik",
    "title": "Einen Betrag passend legen",
    "observation": "Legt beim Einkaufsspiel einen Geldbetrag, der nicht zum angegebenen Preis passt.",
    "goal": "Die Schülerin/der Schüler legt einen Preis im vereinbarten Zahlenraum mit Spielgeld passend und kontrolliert durch Zusammenzählen.",
    "studentText": "Ich lege passend viel Geld zum Preis. Ich zähle nach.",
    "studentIcon": "quantity",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Wenige Münzwerte verwenden und gemeinsam vergleichen",
      "Preise im gesicherten Zahlenraum wählen",
      "Betrag legen, sprechen und kontrollieren lassen"
    ],
    "materialOptions": [
      "Spielgeld",
      "Preisschilder"
    ],
    "measures": "Wenige Münzwerte verwenden und gemeinsam vergleichen\nPreise im gesicherten Zahlenraum wählen\nBetrag legen, sprechen und kontrollieren lassen",
    "materials": "Spielgeld\nPreisschilder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_uhr",
    "area": "Mathematik",
    "title": "Uhrzeiten am Tagesablauf ablesen",
    "observation": "Liest am vereinbarten Uhrmodell die Position des Minutenzeigers als Stunde ab.",
    "goal": "Die Schülerin/der Schüler liest die vereinbarten Uhrzeiten am Uhrmodell ab und ordnet sie passenden Ereignissen des Tagesablaufs zu.",
    "studentText": "Ich lese die Uhrzeit. Ich finde, was dann stattfindet.",
    "studentIcon": "timer",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Stunden- und Minutenzeiger an konkreten Beispielen unterscheiden",
      "Nur bereits eingeführte Uhrzeiten üben",
      "Zeiten mit wiederkehrenden Alltagssituationen verbinden"
    ],
    "materialOptions": [
      "Uhrmodell",
      "Bildkarten zum Tagesablauf"
    ],
    "measures": "Stunden- und Minutenzeiger an konkreten Beispielen unterscheiden\nNur bereits eingeführte Uhrzeiten üben\nZeiten mit wiederkehrenden Alltagssituationen verbinden",
    "materials": "Uhrmodell\nBildkarten zum Tagesablauf",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_arbeitsplan",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Mit einem kurzen Arbeitsplan arbeiten",
    "observation": "Wechselt zwischen Aufgaben eines kurzen Arbeitsplans, ohne eine davon abzuschließen oder den Wechsel abzusprechen.",
    "goal": "Die Schülerin/der Schüler wählt mit einem kurzen Arbeitsplan eine Aufgabe, bearbeitet den vereinbarten Umfang und markiert den Abschluss vor dem Wechsel.",
    "studentText": "Ich wähle eine Aufgabe. Ich mache sie fertig und hake sie ab.",
    "studentIcon": "checklist",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Plan auf wenige überschaubare Aufgaben begrenzen",
      "Abschlusskriterium vorab gemeinsam klären",
      "Arbeitswechsel durch Abhaken begleiten"
    ],
    "materialOptions": [
      "Kurzer Arbeitsplan",
      "Abhakfelder"
    ],
    "measures": "Plan auf wenige überschaubare Aufgaben begrenzen\nAbschlusskriterium vorab gemeinsam klären\nArbeitswechsel durch Abhaken begleiten",
    "materials": "Kurzer Arbeitsplan\nAbhakfelder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_kontrollkarte",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Einen Kontrollschritt durchführen",
    "observation": "Gibt die Aufgabe ab, ohne den auf der Kontrollkarte vereinbarten Vergleich durchzuführen.",
    "goal": "Die Schülerin/der Schüler vergleicht vor der Abgabe ein vereinbartes Merkmal der eigenen Arbeit mit der Vorlage und verbessert eine gefundene Abweichung.",
    "studentText": "Ich prüfe meine Arbeit mit der Karte. Ich verbessere, was noch fehlt.",
    "studentIcon": "checktext",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Nur ein Prüfmerkmal vereinbaren",
      "Kontrollhandlung laut denkend vormachen",
      "Selbstständige Prüfung vor der Abgabe ermöglichen"
    ],
    "materialOptions": [
      "Kontrollkarte",
      "Vergleichsvorlage"
    ],
    "measures": "Nur ein Prüfmerkmal vereinbaren\nKontrollhandlung laut denkend vormachen\nSelbstständige Prüfung vor der Abgabe ermöglichen",
    "materials": "Kontrollkarte\nVergleichsvorlage",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_partnerabsprache",
    "area": "Sozialverhalten",
    "title": "Eine Partnerabsprache einhalten",
    "observation": "Verändert eine gemeinsam begonnene Arbeit, ohne die zuvor vereinbarte Partneraufgabe zu beachten.",
    "goal": "Die Schülerin/der Schüler vereinbart vor einer Partnerarbeit einen eigenen Teil und fragt vor einer Veränderung am Teil der Partnerperson nach.",
    "studentText": "Ich halte unsere Absprache ein. Bei einer Änderung frage ich nach.",
    "studentIcon": "team",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Teilaufgaben sichtbar zuordnen",
      "Kurze Rückfrage vormachen und üben",
      "Nach der Arbeit eine konkrete Absprache gemeinsam prüfen"
    ],
    "materialOptions": [
      "Rollenkarten",
      "Geteilte Arbeitsfläche"
    ],
    "measures": "Teilaufgaben sichtbar zuordnen\nKurze Rückfrage vormachen und üben\nNach der Arbeit eine konkrete Absprache gemeinsam prüfen",
    "materials": "Rollenkarten\nGeteilte Arbeitsfläche",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_stoppsignal",
    "area": "Sozialverhalten",
    "title": "Ein Stoppsignal beachten",
    "observation": "Setzt eine gemeinsame Handlung fort, obwohl die andere Person das vereinbarte Stoppsignal gibt.",
    "goal": "Die Schülerin/der Schüler unterbricht bei einem vereinbarten Stoppsignal die Handlung und wartet auf die Klärung, wie es weitergeht.",
    "studentText": "Wenn jemand Stopp sagt oder zeigt, höre ich auf.",
    "studentIcon": "stop",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Stoppsignal in ruhigen Übungssituationen vereinbaren",
      "Abbruch und anschließende Klärung vormachen",
      "Grenzen der Beteiligten unmittelbar unterstützen"
    ],
    "materialOptions": [
      "Stoppkarte",
      "Kurze Rollenspielsituation"
    ],
    "measures": "Stoppsignal in ruhigen Übungssituationen vereinbaren\nAbbruch und anschließende Klärung vormachen\nGrenzen der Beteiligten unmittelbar unterstützen",
    "materials": "Stoppkarte\nKurze Rollenspielsituation",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_vorlagenwechsel",
    "area": "Wahrnehmung",
    "title": "Die Stelle in einer Vorlage wiederfinden",
    "observation": "Setzt nach dem Blickwechsel zwischen Tafel und Heft das Abschreiben in einer anderen Zeile fort.",
    "goal": "Die Schülerin/der Schüler findet nach einem Blickwechsel die zuvor markierte Stelle der Vorlage wieder und überträgt den nächsten vereinbarten Abschnitt.",
    "studentText": "Ich merke mir meine Stelle. Dort lese ich weiter.",
    "studentIcon": "copy",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Kurze Übertragungsabschnitte vereinbaren",
      "Zeile mit Marker oder Lesefenster kennzeichnen",
      "Abstand und Lesbarkeit der Vorlage anpassen"
    ],
    "materialOptions": [
      "Zeilenmarker",
      "Gut lesbare Vorlage"
    ],
    "measures": "Kurze Übertragungsabschnitte vereinbaren\nZeile mit Marker oder Lesefenster kennzeichnen\nAbstand und Lesbarkeit der Vorlage anpassen",
    "materials": "Zeilenmarker\nGut lesbare Vorlage",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "34_hoersignal",
    "area": "Wahrnehmung",
    "title": "Ein vereinbartes Hörsignal unterscheiden",
    "observation": "Führt beim Üben mehrerer bekannter Hörsignale die Handlung zu einem anderen als dem gegebenen Signal aus.",
    "goal": "Die Schülerin/der Schüler ordnet zwei vereinbarten, gut unterscheidbaren Hörsignalen die passende Handlung zu.",
    "studentText": "Ich höre auf unser Signal. Ich mache, was dazu gehört.",
    "studentIcon": "listen",
    "gradeBands": [
      "3-4"
    ],
    "measureOptions": [
      "Signale einzeln mit ihren Handlungen einführen",
      "Unterscheidbarkeit und Hörbedingungen prüfen",
      "Erst nach sicherer Zuordnung zwischen Signalen wechseln"
    ],
    "materialOptions": [
      "Zwei unterscheidbare Signale",
      "Bildkarten zu den Handlungen"
    ],
    "measures": "Signale einzeln mit ihren Handlungen einführen\nUnterscheidbarkeit und Hörbedingungen prüfen\nErst nach sicherer Zuordnung zwischen Signalen wechseln",
    "materials": "Zwei unterscheidbare Signale\nBildkarten zu den Handlungen",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_sachtext",
    "area": "Deutsch",
    "title": "Eine Antwort im Sachtext belegen",
    "observation": "Beantwortet eine Frage zum Sachtext, zeigt auf Nachfrage aber eine Textstelle ohne die gesuchte Information.",
    "goal": "Die Schülerin/der Schüler findet in einem sprachlich angepassten Sachtext die ausdrücklich genannte Antwort und zeigt die passende Belegstelle.",
    "studentText": "Ich finde die Antwort im Sachtext. Ich zeige die passende Stelle.",
    "studentIcon": "search",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Frage und Suchwort gemeinsam klären",
      "Text in kurze Abschnitte gliedern",
      "Antwort mit der markierten Stelle vergleichen lassen"
    ],
    "materialOptions": [
      "Kurzer Sachtext",
      "Markierhilfe"
    ],
    "measures": "Frage und Suchwort gemeinsam klären\nText in kurze Abschnitte gliedern\nAntwort mit der markierten Stelle vergleichen lassen",
    "materials": "Kurzer Sachtext\nMarkierhilfe",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_notiz",
    "area": "Deutsch",
    "title": "Einen Arbeitsauftrag notieren",
    "observation": "Notiert bei einem schriftlich vorgegebenen Arbeitsauftrag die Aufgabe ohne die benötigte Seiten- oder Materialangabe.",
    "goal": "Die Schülerin/der Schüler überträgt die für einen Auftrag benötigte Seiten- oder Materialangabe vollständig in die eigene Notiz und vergleicht mit der Vorlage.",
    "studentText": "Ich schreibe auf, was ich für meine Aufgabe brauche.",
    "studentIcon": "pencil",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Wichtige Angaben in einem Beispiel markieren",
      "Notiz mit wenigen festen Feldern anbieten",
      "Vollständigkeit durch Rückvergleich prüfen"
    ],
    "materialOptions": [
      "Notizvorlage",
      "Auftragskarte"
    ],
    "measures": "Wichtige Angaben in einem Beispiel markieren\nNotiz mit wenigen festen Feldern anbieten\nVollständigkeit durch Rückvergleich prüfen",
    "materials": "Notizvorlage\nAuftragskarte",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_rezept",
    "area": "Mathematik",
    "title": "Mengen in einem Rezept anpassen",
    "observation": "Übernimmt beim Verdoppeln einer einfachen Rezeptmenge einzelne Mengen unverändert.",
    "goal": "Die Schülerin/der Schüler verdoppelt die vereinbarten Mengen eines einfachen Rezepts mit Material oder einer Tabelle und prüft jede Zutat.",
    "studentText": "Ich brauche die doppelte Menge. Ich passe jede Zutat an.",
    "studentIcon": "multiply",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Mit einer kleinen Zahl vertrauter Zutaten arbeiten",
      "Ausgangsmenge zweimal handelnd darstellen",
      "Jede Menge einzeln in einer Tabelle zuordnen"
    ],
    "materialOptions": [
      "Einfaches Rezept",
      "Mengentabelle",
      "Messgefäße"
    ],
    "measures": "Mit einer kleinen Zahl vertrauter Zutaten arbeiten\nAusgangsmenge zweimal handelnd darstellen\nJede Menge einzeln in einer Tabelle zuordnen",
    "materials": "Einfaches Rezept\nMengentabelle\nMessgefäße",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_stundenplan",
    "area": "Mathematik",
    "title": "Angaben aus einem Stundenplan entnehmen",
    "observation": "Liest im Stundenplan das Fach aus einer anderen als der gefragten Tages- und Stundenzeile ab.",
    "goal": "Die Schülerin/der Schüler findet zu einem vorgegebenen Wochentag und einer Unterrichtsstunde das passende Fach im eigenen Stundenplan.",
    "studentText": "Ich suche Tag und Stunde. Dort finde ich mein Fach.",
    "studentIcon": "chart",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Tag und Stunde zunächst getrennt markieren",
      "Suchweg über Zeile und Spalte vormachen",
      "Mit dem vertrauten eigenen Plan üben"
    ],
    "materialOptions": [
      "Eigener Stundenplan",
      "Zeilen- und Spaltenmarkierung"
    ],
    "measures": "Tag und Stunde zunächst getrennt markieren\nSuchweg über Zeile und Spalte vormachen\nMit dem vertrauten eigenen Plan üben",
    "materials": "Eigener Stundenplan\nZeilen- und Spaltenmarkierung",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_fachmaterial",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Material für den nächsten Schultag planen",
    "observation": "Packt für den nächsten Schultag Materialien eines anderen als des im Stundenplan genannten Fachs ein.",
    "goal": "Die Schülerin/der Schüler stellt mithilfe des Stundenplans und einer Materialübersicht die vereinbarten Materialien für den nächsten Schultag zusammen.",
    "studentText": "Ich schaue in meinen Stundenplan. Ich packe die passenden Sachen ein.",
    "studentIcon": "desk",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Stundenplan und Materialliste verknüpfen",
      "Packvorgang zunächst gemeinsam durchführen",
      "Selbstständigen Rückvergleich am Ende einplanen"
    ],
    "materialOptions": [
      "Stundenplan",
      "Materialübersicht",
      "Schultasche"
    ],
    "measures": "Stundenplan und Materialliste verknüpfen\nPackvorgang zunächst gemeinsam durchführen\nSelbstständigen Rückvergleich am Ende einplanen",
    "materials": "Stundenplan\nMaterialübersicht\nSchultasche",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_auftragfortsetzen",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Nach einer Unterbrechung weiterarbeiten",
    "observation": "Beginnt nach einer Unterbrechung einen bereits erledigten Arbeitsschritt erneut, statt den nächsten zu bearbeiten.",
    "goal": "Die Schülerin/der Schüler kennzeichnet vor einer Unterbrechung den Arbeitsstand und setzt danach beim nächsten offenen Schritt fort.",
    "studentText": "Ich markiere, wo ich bin. Danach arbeite ich dort weiter.",
    "studentIcon": "sequence",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Arbeitsstand mit einem einfachen Zeichen festhalten",
      "Kurze geplante Unterbrechungen zum Üben nutzen",
      "Nächsten offenen Schritt vor dem Fortsetzen zeigen lassen"
    ],
    "materialOptions": [
      "Schrittplan",
      "Lesezeichen oder Marker"
    ],
    "measures": "Arbeitsstand mit einem einfachen Zeichen festhalten\nKurze geplante Unterbrechungen zum Üben nutzen\nNächsten offenen Schritt vor dem Fortsetzen zeigen lassen",
    "materials": "Schrittplan\nLesezeichen oder Marker",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_gruppenbeitrag",
    "area": "Sozialverhalten",
    "title": "Vorschläge anderer aufgreifen",
    "observation": "Unterbricht Vorschläge anderer Gruppenmitglieder und beginnt mit dem eigenen Vorschlag, bevor eine gemeinsame Entscheidung getroffen wurde.",
    "goal": "Die Schülerin/der Schüler lässt einen Vorschlag ausreden, gibt ihn kurz wieder und beteiligt sich anschließend an der vereinbarten Gruppenentscheidung.",
    "studentText": "Ich höre den Vorschlag an. Dann entscheiden wir gemeinsam.",
    "studentIcon": "team",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Klare Gesprächsreihenfolge vereinbaren",
      "Wiedergeben eines fremden Vorschlags modellieren",
      "Entscheidungsverfahren vor Beginn sichtbar machen"
    ],
    "materialOptions": [
      "Gesprächskarte",
      "Abstimmungskarten"
    ],
    "measures": "Klare Gesprächsreihenfolge vereinbaren\nWiedergeben eines fremden Vorschlags modellieren\nEntscheidungsverfahren vor Beginn sichtbar machen",
    "materials": "Gesprächskarte\nAbstimmungskarten",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_rueckfragetipp",
    "area": "Sozialverhalten",
    "title": "Einen Hinweis klären",
    "observation": "Verändert nach einem allgemeinen Korrekturhinweis mehrere unbetroffene Stellen, ohne nach dem gemeinten Arbeitsschritt zu fragen.",
    "goal": "Die Schülerin/der Schüler fragt bei einem unklaren Hinweis nach der gemeinten Stelle und bearbeitet anschließend den geklärten nächsten Schritt.",
    "studentText": "Wenn ein Tipp unklar ist, frage ich nach. Dann ändere ich die passende Stelle.",
    "studentIcon": "conversation",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Rückfragesatz anbieten",
      "Hinweise auf jeweils einen Schritt begrenzen",
      "Klärung und Umsetzung gemeinsam rückblickend vergleichen"
    ],
    "materialOptions": [
      "Satzkarte „Welche Stelle meinst du?“",
      "Eigene Arbeit"
    ],
    "measures": "Rückfragesatz anbieten\nHinweise auf jeweils einen Schritt begrenzen\nKlärung und Umsetzung gemeinsam rückblickend vergleichen",
    "materials": "Satzkarte „Welche Stelle meinst du?“\nEigene Arbeit",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_werkzeugspur",
    "area": "Wahrnehmung",
    "title": "Eine Markierung beim praktischen Arbeiten verfolgen",
    "observation": "Setzt ein Werkzeug beim geführten Üben neben der vereinbarten Markierung an.",
    "goal": "Die Schülerin/der Schüler zeigt vor dem Arbeitsschritt die Ansatzstelle und setzt das geeignete Werkzeug unter der vereinbarten Begleitung an dieser Stelle an.",
    "studentText": "Ich zeige zuerst die Stelle. Dort setze ich mein Werkzeug an.",
    "studentIcon": "hand",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Mit ungefährlichem Übungsmaterial und geeignetem Werkzeug arbeiten",
      "Ansatzstelle deutlich markieren",
      "Zeigen vor dem Ansetzen als festen Schritt einüben"
    ],
    "materialOptions": [
      "Markiertes Übungsmaterial",
      "Geeignetes Werkzeug"
    ],
    "measures": "Mit ungefährlichem Übungsmaterial und geeignetem Werkzeug arbeiten\nAnsatzstelle deutlich markieren\nZeigen vor dem Ansetzen als festen Schritt einüben",
    "materials": "Markiertes Übungsmaterial\nGeeignetes Werkzeug",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "56_hoerauftrag",
    "area": "Wahrnehmung",
    "title": "Einen mündlichen Auftrag im Fachunterricht wiedergeben",
    "observation": "Gibt nach einer kurzen mündlichen Erklärung einen anderen als den genannten ersten Arbeitsschritt wieder.",
    "goal": "Die Schülerin/der Schüler hört einen kurzen Auftrag unter passenden Hörbedingungen und gibt den ersten Arbeitsschritt in eigenen Worten oder durch Zeigen wieder.",
    "studentText": "Ich höre den Auftrag. Ich sage oder zeige den ersten Schritt.",
    "studentIcon": "listen",
    "gradeBands": [
      "5-6"
    ],
    "measureOptions": [
      "Aufmerksamkeit vor dem Auftrag herstellen",
      "Auftrag kurz und mit sichtbarem Bezug geben",
      "Ersten Schritt vor Arbeitsbeginn rückmelden lassen"
    ],
    "materialOptions": [
      "Auftragsbild",
      "Ruhiger Hörplatz"
    ],
    "measures": "Aufmerksamkeit vor dem Auftrag herstellen\nAuftrag kurz und mit sichtbarem Bezug geben\nErsten Schritt vor Arbeitsbeginn rückmelden lassen",
    "materials": "Auftragsbild\nRuhiger Hörplatz",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_formular",
    "area": "Deutsch",
    "title": "Ein Formular passend ausfüllen",
    "observation": "Trägt beim Üben mit einem einfachen Formular Angaben in ein anderes als das passend beschriftete Feld ein.",
    "goal": "Die Schülerin/der Schüler ordnet vereinbarte fiktive Angaben den passenden Feldern eines einfachen Formulars zu und prüft mit einer Vorlage.",
    "studentText": "Ich lese, was im Feld gefragt ist. Ich trage die passende Angabe ein.",
    "studentIcon": "pencil",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Mit fiktiven Daten und wenigen Formularfeldern üben",
      "Feldbezeichnungen gemeinsam klären",
      "Jede Angabe mit der zugehörigen Frage vergleichen"
    ],
    "materialOptions": [
      "Übungsformular",
      "Fiktive Datenkarte"
    ],
    "measures": "Mit fiktiven Daten und wenigen Formularfeldern üben\nFeldbezeichnungen gemeinsam klären\nJede Angabe mit der zugehörigen Frage vergleichen",
    "materials": "Übungsformular\nFiktive Datenkarte",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_praktikumsanleitung",
    "area": "Deutsch",
    "title": "Eine praktische Arbeitsanleitung nutzen",
    "observation": "Beginnt bei einer kurzen bebilderten Arbeitsanleitung für eine Praktikumsaufgabe mit einem späteren statt mit dem gekennzeichneten ersten Schritt.",
    "goal": "Die Schülerin/der Schüler zeigt in einer angepassten Arbeitsanleitung den ersten Schritt, führt ihn unter vereinbarter Begleitung aus und markiert ihn als erledigt.",
    "studentText": "Ich nutze meine Arbeitsanleitung. Ich beginne mit dem ersten Schritt.",
    "studentIcon": "sequence",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Anleitung auf den konkreten Arbeitsplatz abstimmen",
      "Ersten Schritt zeigen und erklären lassen",
      "Erledigte Schritte einzeln markieren lassen"
    ],
    "materialOptions": [
      "Bebilderte Arbeitsanleitung",
      "Abhakfelder"
    ],
    "measures": "Anleitung auf den konkreten Arbeitsplatz abstimmen\nErsten Schritt zeigen und erklären lassen\nErledigte Schritte einzeln markieren lassen",
    "materials": "Bebilderte Arbeitsanleitung\nAbhakfelder",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_fahrplan",
    "area": "Mathematik",
    "title": "Eine Verbindung mit Umstieg planen",
    "observation": "Entnimmt einem Fahrplan die Abfahrtszeit, berücksichtigt beim Planen aber die Umsteigezeit nicht.",
    "goal": "Die Schülerin/der Schüler prüft bei einer vorbereiteten Verbindung Ankunft, nächste Abfahrt und die vereinbarte benötigte Umsteigezeit und wählt einen erreichbaren Anschluss.",
    "studentText": "Ich prüfe beim Umsteigen: Habe ich genug Zeit für den Anschluss?",
    "studentIcon": "timer",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Mit zwei übersichtlichen Verbindungsmöglichkeiten üben",
      "Umsteigezeit auf einer Zeitleiste darstellen",
      "Wegzeit am konkreten Übungsbeispiel vorgeben"
    ],
    "materialOptions": [
      "Vereinfachter Fahrplan",
      "Zeitleiste"
    ],
    "measures": "Mit zwei übersichtlichen Verbindungsmöglichkeiten üben\nUmsteigezeit auf einer Zeitleiste darstellen\nWegzeit am konkreten Übungsbeispiel vorgeben",
    "materials": "Vereinfachter Fahrplan\nZeitleiste",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_budget",
    "area": "Mathematik",
    "title": "Mit einem Einkaufsbudget planen",
    "observation": "Wählt in einer Einkaufssituation Waren aus, deren Gesamtkosten den vorgegebenen Geldbetrag überschreiten, ohne die Auswahl anzupassen.",
    "goal": "Die Schülerin/der Schüler ermittelt die Gesamtkosten einer kleinen Einkaufsliste mit einer passenden Rechenhilfe, vergleicht sie mit dem Budget und passt die Auswahl bei Überschreitung an.",
    "studentText": "Ich rechne zusammen, was mein Einkauf kostet. Ich bleibe bei meinem Geldbetrag.",
    "studentIcon": "calculate",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Budget und wenige reale Preise bereitstellen",
      "Rechenhilfe entsprechend dem Lernstand zulassen",
      "Eine mögliche Änderung der Auswahl gemeinsam erproben"
    ],
    "materialOptions": [
      "Einkaufsliste",
      "Preiskarten",
      "Taschenrechner"
    ],
    "measures": "Budget und wenige reale Preise bereitstellen\nRechenhilfe entsprechend dem Lernstand zulassen\nEine mögliche Änderung der Auswahl gemeinsam erproben",
    "materials": "Einkaufsliste\nPreiskarten\nTaschenrechner",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_terminplanung",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Eine Aufgabe bis zum Termin planen",
    "observation": "Beginnt einen mehrtägigen Arbeitsauftrag erst am Abgabetag, obwohl Zwischenschritte vereinbart wurden.",
    "goal": "Die Schülerin/der Schüler verteilt einen überschaubaren Arbeitsauftrag mit Unterstützung auf zwei bis drei Termine und kennzeichnet die erledigten Teilschritte im Plan.",
    "studentText": "Ich teile meine Aufgabe auf. Ich arbeite an den vereinbarten Tagen daran.",
    "studentIcon": "checklist",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Auftrag gemeinsam in überschaubare Teile gliedern",
      "Realistische Termine mit dem Jugendlichen festlegen",
      "Kurze verlässliche Rückmeldetermine anbieten"
    ],
    "materialOptions": [
      "Wochenübersicht",
      "Teilauftragskarten"
    ],
    "measures": "Auftrag gemeinsam in überschaubare Teile gliedern\nRealistische Termine mit dem Jugendlichen festlegen\nKurze verlässliche Rückmeldetermine anbieten",
    "materials": "Wochenübersicht\nTeilauftragskarten",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_arbeitskontrolle",
    "area": "Lern- und Arbeitsverhalten",
    "title": "Ein praktisches Arbeitsergebnis prüfen",
    "observation": "Gibt ein praktisches Arbeitsergebnis weiter, ohne es mit dem vereinbarten Muster zu vergleichen.",
    "goal": "Die Schülerin/der Schüler vergleicht ein eigenes praktisches Arbeitsergebnis anhand eines vereinbarten Merkmals mit dem Muster und bessert eine erkennbare Abweichung unter passender Begleitung nach.",
    "studentText": "Ich vergleiche mein Ergebnis mit dem Muster. Ich bessere nach, wenn etwas noch nicht passt.",
    "studentIcon": "checktext",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Ein sichtbares Qualitätsmerkmal auswählen",
      "Vergleich am Muster vormachen",
      "Zeit und Unterstützung für Nachbesserung einplanen"
    ],
    "materialOptions": [
      "Musterstück",
      "Kurze Prüfkarte"
    ],
    "measures": "Ein sichtbares Qualitätsmerkmal auswählen\nVergleich am Muster vormachen\nZeit und Unterstützung für Nachbesserung einplanen",
    "materials": "Musterstück\nKurze Prüfkarte",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_digitalegrenze",
    "area": "Sozialverhalten",
    "title": "Vor dem Weitergeben eines Bildes fragen",
    "observation": "Leitet in einer begleiteten Übung ein Bild einer anderen Person weiter, ohne deren Zustimmung zu erfragen.",
    "goal": "Die Schülerin/der Schüler fragt in einer begleiteten Übung vor dem Weitergeben eines Bildes nach Zustimmung und unterlässt die Weitergabe bei fehlender Zustimmung.",
    "studentText": "Ich frage, bevor ich ein Bild von jemandem weitergebe. Ohne Ja gebe ich es nicht weiter.",
    "studentIcon": "stop",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Mit fiktiven Bildkarten statt persönlichen Aufnahmen üben",
      "Fragen, Antwort abwarten und Entscheidung umsetzen vormachen",
      "Unklare Antworten gemeinsam besprechen"
    ],
    "materialOptions": [
      "Fiktive Bildkarten",
      "Zustimmungskarten"
    ],
    "measures": "Mit fiktiven Bildkarten statt persönlichen Aufnahmen üben\nFragen, Antwort abwarten und Entscheidung umsetzen vormachen\nUnklare Antworten gemeinsam besprechen",
    "materials": "Fiktive Bildkarten\nZustimmungskarten",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_praktikumshilfe",
    "area": "Sozialverhalten",
    "title": "Bei einer unbekannten Aufgabe nachfragen",
    "observation": "Beginnt bei einer unbekannten Praktikumsaufgabe einen nicht abgesprochenen Arbeitsschritt, statt die benannte Ansprechperson zu fragen.",
    "goal": "Die Schülerin/der Schüler benennt bei einem unbekannten Auftrag den unklaren Schritt, fragt die vereinbarte Ansprechperson und beginnt nach der Klärung.",
    "studentText": "Wenn ich eine Aufgabe noch nicht kenne, frage ich zuerst meine Ansprechperson.",
    "studentIcon": "help",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Erreichbare Ansprechperson verbindlich festlegen",
      "Konkrete Rückfrage in Rollenspielen üben",
      "Nachfragen ausdrücklich ermöglichen und zeitnah beantworten"
    ],
    "materialOptions": [
      "Kontaktkarte",
      "Satzanfang für Rückfragen"
    ],
    "measures": "Erreichbare Ansprechperson verbindlich festlegen\nKonkrete Rückfrage in Rollenspielen üben\nNachfragen ausdrücklich ermöglichen und zeitnah beantworten",
    "materials": "Kontaktkarte\nSatzanfang für Rückfragen",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_messskala",
    "area": "Wahrnehmung",
    "title": "Eine Messskala ablesen",
    "observation": "Liest beim praktischen Messen an einer anderen Skala als der für die Aufgabe vereinbarten ab.",
    "goal": "Die Schülerin/der Schüler zeigt vor dem Ablesen die passende Skala und Einheit und liest den vereinbarten Messwert mit einer Markierhilfe ab.",
    "studentText": "Ich suche die passende Skala. Dort lese ich meinen Messwert ab.",
    "studentIcon": "ruler",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Messgerät gemeinsam auf Skalen und Einheiten untersuchen",
      "Unbenötigte Skala zunächst abdecken",
      "Zeigen, Ablesen und Notieren in dieser Reihenfolge üben"
    ],
    "materialOptions": [
      "Messgerät mit gut lesbarer Skala",
      "Abdeck- oder Markierhilfe"
    ],
    "measures": "Messgerät gemeinsam auf Skalen und Einheiten untersuchen\nUnbenötigte Skala zunächst abdecken\nZeigen, Ablesen und Notieren in dieser Reihenfolge üben",
    "materials": "Messgerät mit gut lesbarer Skala\nAbdeck- oder Markierhilfe",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  },
  {
    "id": "79_laermhilfe",
    "area": "Wahrnehmung",
    "title": "Eine vereinbarte Hilfe bei Lärm nutzen",
    "observation": "Unterbricht bei hohem Geräuschpegel die praktische Arbeit und nutzt die zuvor vereinbarte, erreichbare Schutz- oder Pausenmöglichkeit erst nach persönlichem Hinweis.",
    "goal": "Die Schülerin/der Schüler zeigt bei belastendem Lärm mit dem vereinbarten Signal Unterstützungsbedarf an und nutzt die abgesprochene Schutz- oder Pausenmöglichkeit.",
    "studentText": "Wenn es mir zu laut wird, gebe ich mein Zeichen. Ich nutze meine vereinbarte Hilfe.",
    "studentIcon": "headphones",
    "gradeBands": [
      "7-9"
    ],
    "measureOptions": [
      "Belastende Situationen mit dem Jugendlichen besprechen",
      "Geeignete Hilfe und erreichbares Signal verbindlich vereinbaren",
      "Arbeitsbedingungen anpassen und Rückkehr gemeinsam abstimmen"
    ],
    "materialOptions": [
      "Signalkarte",
      "Vereinbarte Schutz- oder Pausenmöglichkeit"
    ],
    "measures": "Belastende Situationen mit dem Jugendlichen besprechen\nGeeignete Hilfe und erreichbares Signal verbindlich vereinbaren\nArbeitsbedingungen anpassen und Rückkehr gemeinsam abstimmen",
    "materials": "Signalkarte\nVereinbarte Schutz- oder Pausenmöglichkeit",
    "source": "praxis",
    "research": "",
    "material": "",
    "catalogPage": null,
    "sourceRow": null
  }
];
const MATERIALS={start:{title:'Meine Schrittekarte',text:'MEIN NÄCHSTER SCHRITT\n\nMeine Aufgabe: __________________________\n\n□ Ich schaue auf die Aufgabe.\n□ Ich sage oder zeige den ersten Schritt.\n□ Ich lege das Material bereit.\n□ Ich beginne.\n\nWenn ich Hilfe brauche: __________________\n\nHeute gelang mir: ________________________'},rueckmeldung:{title:'Kurze Rückmeldung',text:'DAS HABE ICH HEUTE GEÜBT\n\nMein Ziel: ______________________________\nDatum / Situation: ______________________\n\nMeine Einschätzung:\n□ gelingt allein   □ mit Hilfe   □ noch nicht\n\nDas habe ich konkret getan:\n_______________________________________\n\nRückmeldung der Lehrkraft:\n_______________________________________\n\nMein nächster Schritt:\n_______________________________________'},silben:{title:'Silben verbinden',text:'ICH VERBINDE DIE LAUTE\n\nNur verwenden, wenn m, l, s, a, i, o sicher bekannt sind.\nLaute ohne zusätzlichen Schwa-Laut sprechen.\n\nma     mi     mo\nla     li     lo\nsa     si     so\n\nErst gemeinsam verbinden, dann selbst lesen.\n\nGeübt: __________   Selbstständig: __________\nNeue Kombination: ________________________'},lesen:{title:'Meine Lesekarte',text:'LESEN UND VERSTEHEN\n\nText / Abschnitt: ________________________\n\n□ Ich höre ein Lesemodell.\n□ Wir lesen gemeinsam.\n□ Ich lese denselben Abschnitt noch einmal.\n\nEine wichtige Information:\n_______________________________________\n\nHier steht sie im Text:\n_______________________________________\n\nLehrkraft: Text, Fehler und benötigte Hilfe dokumentieren.'},zahlen:{title:'Eine Zahl – mehrere Darstellungen',text:'ICH ENTDECKE ZAHLBEZIEHUNGEN\n\nMeine Zahl: __________\n\nIch lege die Zahl mit Material.\n\nIch zeichne eine passende Darstellung:\n\n\n\n\nIch zerlege: ______ + ______ = ______\n\nIch zerlege anders: ______ + ______ = ______\n\nIch erkläre meinen Weg:\n_______________________________________'},schreiben:{title:'Mein Schreibplan',text:'ICH PLANE – SCHREIBE – PRÜFE\n\nWorüber schreibe ich? ____________________\n\nAnfang: _________________________________\n\nDann: __________________________________\n\nZum Schluss: ____________________________\n\nMeine zwei Prüffragen:\n□ Sind meine Gedanken in einer passenden Reihenfolge?\n□ _____________________________________\n\nDas möchte ich verbessern: ________________'}};

