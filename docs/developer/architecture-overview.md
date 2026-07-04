---
sidebar_position: 1
title: Architecture Overview
---

# Kathana 3 Dev Kit Architecture

The Kathana 3 Development Kit relies on a highly modular architecture. Rather than a single monolithic repository, the backend and frontend systems are split into specialized Git submodules to improve maintainability and deployment.

## Repository Structure

The `Kathana3_Dev_Kit` acts as the root umbrella project. Inside the `src/` directory, you will find the following core modules:

### 1. Game Server Components (C++)

*   **`K3_DBSRV` (Database Server):** Handles all game-related database queries and transactions (e.g., character saves, inventory updates, and economy transactions).
*   **`K3_TMSRV` (Zone/Map Server):** The core game engine server handling player movement, combat calculations, mob AI, and physical map instances.
*   **`K3_SQLDaemon`:** A specialized daemon optimizing complex, high-load SQL queries in the background.

### 2. Infrastructure & Assets

*   **`K3_HTLauncher`:** The client-side launcher application that patches game files and starts the 3D client.
*   **`K3_GameData`:** Contains all XML, JSON, INI, and Excel (`.xlsx`) configuration files used by both the client and the `TMSRV`. This dictates drop rates, item stats, map layouts, and NPC behavior.

### 3. Web & Documentation

*   **`K3_WebApp`:** Contains the **Genesis M** Web Application (see the next page for details).
*   **`K3_Docs`:** This very documentation site, built on Docusaurus to provide easy reading for players and developers alike.

## Working with Submodules

Because the architecture uses Git submodules, pulling the root repository does not automatically pull the source code for the modules. 

When cloning for the first time, use:
```bash
git clone --recurse-submodules https://github.com/Kathana-Revamp/Kathana3_Dev_Kit.git
```

If you already cloned it without submodules, run:
```bash
git submodule sync --recursive
git submodule update --init --recursive
```

:::info C++ Builds
To compile the server components, you must open their respective `.sln` (Visual Studio Solution) files located in their module folders. Make sure you target `Win32 Debug` or `Release` according to your needs.
:::
