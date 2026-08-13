---
title: "Building an Offline-First Restaurant SaaS"
description: "How I designed a restaurant management system that keeps taking orders when the internet drops, then syncs without losing or duplicating data."
publishedAt: "2026-08-05"
tags: ["Case Study", "Architecture", "Offline First"]
coverImage: "/images/articles/offline-first-restaurant-saas.png"
---

![Offline-First Architecture](/images/articles/offline-first-restaurant-saas.png)

Restaurants do not pause when the Wi-Fi does. Orders still come in, printers still have to fire, and the kitchen still needs a ticket. That constraint shaped how I built [Sofre](https://sofre.app): the source of truth on the floor is local, and the cloud is a replica that catches up.

## Local first, then the network

Each POS talks to a local database. Reads and writes never wait on the internet. A sync queue sits beside that database and records every mutation as an event: create order, update item, mark paid.

When the connection is back, the queue drains to the cloud API. When it is not, the floor keeps working. The diagram above is the whole architecture — three boxes, one direction of travel for events, and a second pass for pulling remote changes down.

## Events, not row overwrites

Syncing by overwriting documents is how you lose an order. Two devices edit the same check; the last write wins; a modifier disappears.

I treat every change as an append-only event with:

- a client-generated id
- a device id
- a monotonic sequence on that device
- the entity it belongs to

The server applies events in order. If it has already seen an id, it acknowledges and skips. That makes retries cheap and duplicates rare.

```ts title="sync-event.ts"
type SyncEvent = {
  id: string;
  deviceId: string;
  sequence: number;
  entity: "order" | "payment" | "menu";
  type: string;
  payload: Record<string, unknown>;
  createdAt: string;
};
```

## Conflict rules that a waiter can live with

Not every conflict needs a CRDT. Most restaurant data has a business rule that is more honest than “merge the JSON”:

| Entity       | Rule                                             |
| ------------ | ------------------------------------------------ |
| Order items  | Union — never drop a line someone added          |
| Payments     | Append-only — two payments can both be true      |
| Table status | Last write with a visible audit                  |
| Menu price   | Server wins — the floor should not invent prices |

The important part is that the rule is explicit. Silent last-write-wins is what makes offline systems feel haunted.

## What I would not skip again

1. Generate ids on the client. Waiting for the server to mint an order number means you cannot print a ticket offline.
2. Make sync a queue you can inspect. If a restaurant calls and says “yesterday is missing,” you need to see the stuck events.
3. Keep the happy path boring. Online should feel like offline with a shorter queue, not a different code path.

The cloud is still required — reports, multi-location, backups. It is just not on the critical path for taking a lunch order.
