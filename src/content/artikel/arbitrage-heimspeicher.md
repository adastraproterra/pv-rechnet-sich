---
title: "Wie viel Arbitrage-Gewinn ist mit einem Heimspeicher und dynamischem Tarif realistisch?"
description: "Brutto ein paar Hundert Euro, netto oft nahe null - warum der Verschleiss den Arbitrage-Ertrag aufzehrt."
datePublished: "2026-08-10"
dateModified: "2026-08-10"
about: ["Batteriespeicher-Wirtschaftlichkeit", "Strommarkt-Arbitrage"]
---

**Kurz gesagt: Meist bleiben netto nur etwa 0–100 € pro Jahr übrig. Brutto sind es
ein paar Hundert Euro, aber der Batterieverschleiß frisst den Großteil wieder auf –
und unterhalb eines gewissen Preisunterschieds kostet die Arbitrage sogar Geld.**

> **Das Wichtigste vorab**
> - **Brutto-Arbitrage:** grob 150–300 €/Jahr bei einem 10-kWh-Speicher, ~220 Zyklen und 8–16 ct/kWh nutzbarem Spread.
> - **Verschleiß dagegen:** bei ~650 €/kWh Speicherpreis und ~6.000 Zyklen Lebensdauer entstehen ~11 ct/kWh Durchsatzkosten – die den Arbitrage-Ertrag fast vollständig aufzehren.
> - **Netto bleibt oft nahe null.** Der tragende Hebel eines Heimspeichers ist der PV-Eigenverbrauch, nicht die Arbitrage.

## So wird gerechnet

Der Bruttoertrag der Arbitrage ist einfach: die pro Jahr durch den Speicher
geschleuste Energie mal der nutzbare Preisunterschied (Spread) zwischen günstigen
und teuren Stunden.

- **Durchgesetzte Energie** = Ladezyklen/Jahr × nutzbare Speicherkapazität × Round-Trip-Wirkungsgrad
- **Bruttoertrag** = durchgesetzte Energie × nutzbarer Spread

Der Fehler in fast allen Überschlägen im Netz: Der Verschleiß fehlt. Jede
geladene und wieder entladene Kilowattstunde kostet anteilig Batterielebensdauer.
Diese Durchsatzkosten lassen sich beziffern:

- **Durchsatzkosten (ct/kWh)** = Speicher-Anschaffungspreis ÷ (Zyklenlebensdauer × Kapazität)
- **Verschleißkosten/Jahr** = durchgesetzte Energie × Durchsatzkosten

Erst **Bruttoertrag minus Verschleißkosten** ist der ehrliche Netto-Vorteil der
Arbitrage. Den Spread sollte man dabei nicht raten, sondern aus echten
SMARD-Spotpreisen ableiten – realistisch mit einem Zyklus pro Tag, begrenzt auf das
tatsächliche Entladefenster des Speichers und mit einem Ausschöpfungsfaktor unter
100 %, weil perfekte Voraussicht in der Praxis nicht existiert.

## Rechenbeispiel: 10-kWh-Heimspeicher

Annahmen: 10 kWh nutzbar, 220 Vollzyklen/Jahr, 92 % Round-Trip, 650 €/kWh
Speicherpreis, 6.000 Zyklen Lebensdauer. Durchgesetzte Energie also
220 × 10 × 0,92 ≈ 2.024 kWh/Jahr, Durchsatzkosten (650 × 10) ÷ (6.000 × 10) ≈
**10,8 ct/kWh**.

| nutzbarer Spread | Brutto-Arbitrage | Verschleiß | **Netto** |
|---|---|---|---|
| 8 ct/kWh | ~162 € | ~219 € | **−57 €** |
| 12 ct/kWh | ~243 € | ~219 € | **+24 €** |
| 16 ct/kWh | ~324 € | ~219 € | **+105 €** |

Die entscheidende Größe ist der Break-even-Spread: Solange der nutzbare Spread
unter den Durchsatzkosten (~11 ct/kWh) liegt, verliert die Arbitrage nach
Verschleiß Geld. Erst darüber bleibt etwas übrig – und selbst dann in einer
Größenordnung, die den Kauf eines Speichers allein nicht trägt.

## Was diese Rechnung ehrlich macht

- **Perfekte Voraussicht gibt es nicht.** Der aus Spotpreisen abgeleitete Spread ist bereits gegen die Perfect-Foresight-Illusion gedämpft; ungedämpfte Werte überschätzen den Ertrag deutlich.
- **Regulatorisches Risiko.** Die AgNes-Reform der Bundesnetzagentur könnte reine Arbitrage ab etwa 2030 über dynamische Netzentgelte belasten – der Hebel ist über die Speicherlaufzeit nicht garantiert.
- **Ein Speicher, zwei Aufgaben.** Wer denselben Speicher für PV-Eigenverbrauch *und* Arbitrage nutzt, kann beide Erträge nicht voll addieren – sie konkurrieren um dieselben Zyklen.
- Alle Zahlen sind Modellergebnisse bei den genannten Annahmen und verschieben sich mit Zellpreis, Zyklenlebensdauer und Spread.

## Häufige Fragen

**Ab welchem Spread lohnt sich Arbitrage überhaupt?**
Wenn der nutzbare Spread die Durchsatzkosten übersteigt – im Beispiel oben etwa
11 ct/kWh. Darunter kostet die Arbitrage nach Verschleiß netto Geld.

**Ist Arbitrage der Hauptgrund für einen Heimspeicher?**
Nein. In der Regel trägt der PV-Eigenverbrauch den Löwenanteil des Vorteils;
Arbitrage ist ein Zusatz, kein Fundament.

**Verdiene ich mit einem größeren Speicher mehr?**
Mehr Kapazität skaliert Bruttoertrag und Verschleiß gleichermaßen. Entscheidend
bleibt der Spread gegenüber den Durchsatzkosten, nicht die Größe allein.


