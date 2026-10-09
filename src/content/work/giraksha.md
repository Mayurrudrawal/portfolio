---
title: "GIRAKSHA: Mine Safety Monitoring System"
summary: "IoT-enabled real-time hazardous condition monitoring and worker safety alert platform for underground mines."
role: "Lead Architect & Developer"
date: 2025-11-15
tags:
  - "Python"
  - "IoT"
  - "FastAPI"
  - "React"
  - "Edge Computing"
highlight: "Smart India Hackathon 2025 National Finalist"
featured: true
repo: "https://github.com/Mayurrudrawal/giraksha"
---

## Problem
Underground mining operations face extreme environmental hazards, including toxic gas leaks, structural cave-ins, and temperature spikes. Traditional safety systems suffer from high detection latency, erratic subterranean connectivity, and lack of real-time worker tracking, leaving response teams with insufficient data during emergency events.

## Architecture
GIRAKSHA integrates edge sensor nodes with a distributed telemetry pipeline. Edge microcontrollers ingest environmental telemetry (methane, CO levels, temperature, and seismic vibration), performing localized threshold evaluation before relaying compressed payloads via low-power mesh networks. The central dashboard aggregates telemetry streams using FastAPI and WebSockets, rendering live spatial hazard maps and triggering automated audio-visual alarms across subterranean zones.

## Outcome
- Selected as a **Smart India Hackathon 2025 National Finalist**.
- Latency and telemetry processing benchmarks: TODO.
- Battery longevity and node deployment metrics: TODO.
