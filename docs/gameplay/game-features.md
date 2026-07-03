---
sidebar_position: 1
title: Game Features
---

# Game Features

This page summarizes gameplay and support systems observed in the current source tree. Player-facing details still need runtime verification before exact rules, schedules, rewards, and UI steps are published.

## Character and Progression

- Quest systems are present through quest logic, quest UI, and `EditorQuest`.
- Skill systems are present through skill logic, skill UI, and `EditorSkill`.
- Reborn-related data is present through `Reborn.ini` and skill requirement fields.
- Combat record support is present through character data, database procedures, and GM tooling.
- PK combo support is present through character data, UI, and database procedures.

## Items and Equipment

- Item editing and item mix tooling are present through `EditorItem` and `EditorItemMix`.
- Set option tooling is present through `EditorSetOption`, `EditorSetOptionData`, and `EditorSetOptionGen`.
- Random option tooling and rebuild UI are present through `EditorRandomOption` and modern random-option inventory windows.
- Chaos Machine support is present through `GLChaosMachine` logic and modern Chaos Machine UI.
- Game item shop and purchase logging are present through `GameItemShop.sql`, GIS procedures, and purchase log tables.

## Collection and Account Systems

- Battle Pass support is present through `GLBattlePass`, `EditorBattlePass`, Battle Pass UI, and Battle Pass network messages.
- Codex support is present through `GLCodex`, `EditorCodex`, character Codex data, and GM tool Codex pages.
- Activity systems are present through `GLActivity`, activity UI, and `EditorActivity`.
- Daily login support is present through `GLContrlDailyLoginMsg` and daily-login database logic.
- Personal lock support is present through personal-lock database procedures and personal-lock UI pages.

## Pets, Vehicles, and Travel

- Pet support is present through pet logic, pet UI, GM pet pages, pet skills, pet skins, and pet rebirth UI.
- Vehicle support is present through `GLVEHICLE`, vehicle UI, GM vehicle pages, vehicle boosters, and vehicle database logic.
- Taxi and map travel tooling is present through `EditorTaxi`, `TaxiWindow`, and map-list tooling.
- Map activity flags for pets and vehicles are present in `EditorMapsList`.

## Social and Party Play

- Party finder support is present through `PartyFinder.ini` and Party Finder UI files.
- Guild and club systems are present through club logic, club database logic, guild battle data, and club-war ranking UI.
- NPC dialogue systems are present through NPC talk logic and `EditorNpcAction`.

## PvP and Events

- School Wars support is present through PvP School Wars messages, pages, rankings, score, reward, and rebirth UI.
- Capture the Flag support is present through capture-the-flag messages, battle pages, rankings, score, reward, and top-ranking UI.
- Club Death Match support is present through PVP Club Death Match logic, pages, rankings, score, reward, and top-ranking UI.
- Party Battle Grounds support is present through PVP Party Battle Grounds logic, pages, rankings, and score UI.
- Tyranny support is present through Tyranny messages, battle pages, rankings, capture notices, tower progress, rewards, and database tables.
- WOE-style pages and rankings are present through `PVPWoe` UI files.

## Tooling Observed

- World and map tooling: `WorldTool`, `EditorLevel`, `EditorMapsList`, and map edit logic.
- Content editors: item, skill, quest, NPC, mob, activity, battle pass, Codex, set option, random option, taxi, material, shader, and skin editors.
- Administrative tooling: `GMTool`, `ServerManager`, `ServerSetting`, `PatchBuilder`, `FileCrypt`, and `HWDetect`.
