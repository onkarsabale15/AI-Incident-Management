# 🧠 AI-Powered SRE Microservice

> An intelligent Node.js microservice that autonomously detects, analyzes, and reports backend issues using Agentic AI, OpenTelemetry, and DevOps observability tooling.

---

## 🚀 Overview

This production-grade microservice simulates an expert Site Reliability Engineer (SRE) through structured agentic reasoning:

**START → PLAN → ACTION → OBSERVATION → OUTPUT**

It continuously monitors backend systems, identifies HTTP 500 errors, traces their origins, and creates deduplicated, actionable ClickUp tickets. This dramatically reduces Mean Time to Detection (MTTD) and Resolution (MTTR).

---

## 🛠️ Key Features

- **⏱️ Hourly Cron Execution**: Runs every hour to scan for backend issues.
- **📈 Trace Analysis**: Uses [OpenTelemetry](https://opentelemetry.io/) and [Grafana Tempo](https://grafana.com/oss/tempo/) to detect distributed traces with HTTP 500 errors.
- **📄 Log Correlation**: Fetches related logs from [Grafana Loki](https://grafana.com/oss/loki/) to understand error context.
- **📦 Source Code Tracing**: Pulls relevant code lines from GitHub using the GitHub API.
- **🤖 AI Root Cause Engine**: Analyzes traces + logs + code to determine root cause using an LLM-powered agent framework.
- **📋 Smart Ticketing**: Creates deduplicated, summarized ClickUp tickets via the ClickUp API.
- **🔁 Self-Healing Architecture**: Reduces manual debugging, enhances system reliability.

---

## 📚 Tech Stack

| Category        | Technology                             |
|----------------|----------------------------------------|
| Language        | Node.js                                |
| Observability   | OpenTelemetry, Tempo, Loki              |
| AI/LLM          | Agentic Reasoning (LLM Agent Framework) |
| Integrations    | GitHub API, ClickUp API                |
| Scheduling      | Cron                                   |
| Infrastructure  | Docker, Cloud-native ready             |

---

## 📂 Project Structure

