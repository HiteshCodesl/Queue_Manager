### Queue Manager ###

### Summary
A simple Queue Management web application built with Next.js (App Router), Prisma, PostgreSQL, and NextAuth (Credentials provider).
Managers can create named queues, add tokens (people), reorder tokens, assign the next token for service, cancel/serve tokens, and view analytics (average wait time, last-7-day trends, current queue length).

### Features

✅ Manager register & login (NextAuth Credentials)

✅ Create, list and delete named queues

✅ Add tokens (tickets) to a selected queue — auto-positioned at the end

✅ View tokens ordered by position with status: waiting, assigned, served, cancelled

✅ Move tokens up / down (transactional swap)

✅ Assign top waiting token for service (single click)

✅ Cancel token (mark cancelled and reindex waiting tokens)

✅ Serve token (mark served and reindex)

✅ Analytics endpoint: average wait time (seconds),cancelled token , current waiting count, recent served tokens

✅ Minimal, unstyled frontend (React + NextAuth) — ready for your styling

### Login
![Landing page](/public/LandingPage.png)

### Queues list
![DashBoard list](/public/DashBoard.png)

### Queue detail
![Login detail](/public/Login.png)

### Analytics
![Signup](/public/signup.png)

### Tech stack

Next.js (App Router + TypeScript)

Prisma ORM

PostgreSQL (production) / SQLite (optional for quick demos)

NextAuth (Credentials provider) for authentication

bcryptjs for password hashing

Fetch/axios on client for API calls


### Environment variables

Create a .env in project root with:

DATABASE_URL="postgresql://USER:PASS@HOST:PORT/DBNAME"
NEXTAUTH_SECRET="a_long_random_secret"
# optional: for local SQLite quick demo
# DATABASE_URL="file:./dev.db"