# Bausteine zur Förderplanung

Anwendung zur Förderplanung im Förderschwerpunkt Lernen.

Bereitgestellt von Josefine Beer (Fachberaterin Förderschwerpunkt Lernen – Landesamt für Schule und Bildung Chemnitz).

## Funktionen

- 74 Förderbausteine mit beobachtbaren Schwierigkeiten, Förderzielen, Maßnahmen und Materialien
- Zu allen 74 Zielen kindgerechte Ich-Sätze und lokal eingebundene Piktogramme
- Anpassbare Schülerfassung mit eigener Vorschau und PDF im A4-Hochformat
- Bei veränderten oder eigenen Zielen Prüfung der Ich-Formulierung vor dem Schüler-PDF
- Schrittweise Planung und PDF-Export
- Schulischer und familiärer Kontext sowie außerschulische Förderung
- Verlaufsdokumentation, Datensicherung und Löschen einzelner oder mehrerer Pläne

## Speicherung

Förderpläne werden ausschließlich im lokalen Speicher des verwendeten Browsers abgelegt. Sie werden nicht in dieses Repository übertragen. Für einen Geräte- oder Webseitenwechsel die JSON-Sicherung unter „Weitere Funktionen → Daten & Sicherung“ exportieren und am neuen Ort importieren. Regelmäßige Sicherungen sind erforderlich.

## Betrieb

Statische HTML-/JavaScript-Anwendung ohne Build-Schritt. GitHub Pages veröffentlicht den Branch `main` aus dem Stammverzeichnis. Alle benötigten Schriften und Bibliotheken sind enthalten; Lizenzhinweise liegen unter `vendor/`.

Stand: 26. November 2026.


## Schülerfassung

Im Schritt „Förderziele“ stehen unter „Für die Schülerfassung“ der Zielsatz, das auswählbare Piktogramm und eine optionale Hilfe. Die Vorschau zeigt ausschließlich die ausgewählten Ziele. Im Schritt „PDF“ lässt sich „Meine Lernziele“ separat herunterladen. Beobachtungen, familiärer Kontext und Verlaufsnotizen werden nicht in die Schülerfassung übernommen. Die fachlichen Förderziele bleiben unverändert. Die Kinderformulierungen beschreiben die Lernabsicht; konkrete Zielquoten und Bedingungen können individuell ergänzt werden.

Bestehende Pläne erhalten die Katalogvorschläge beim Anzeigen, ohne vorhandene Inhalte zu überschreiben. Individuelle Formulierungen, Hilfen und Bildauswahl werden mit der JSON-Sicherung gespeichert. Wenn sich der Wortlaut des fachlichen Förderziels ändert, ist die Passung vor dem Schülerexport erneut zu bestätigen.

Die Vektorpiktogramme sind Bestandteil des Quellcodes, benötigen keine externen Dienste und haben beschreibende Alternativtexte. Sie sollten gemeinsam mit dem Kind eingeführt werden.
