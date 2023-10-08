Run npm install
<!-- Run This three commands after you get the keys from clerk, Mux, Stripe, Uploadthing, and Mongodb database -->
In terminal run npx prisma generate
In terminal run - node scripts/seed.ts
In terminal run npx prisma db push

Go to clerk.com and create project and take the keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:

# Environment variables declared in this file are automatically made available to Prisma.

# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.

# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# DATABASE_URL=

DATABASE_URL='add here mongodb database'

Go to UploadThing and create account, create project and take the secret and appId keys
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

Go to mux create account and create project
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_PUBLISHABLE_KEY=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_TEACHER_ID= go to clerkjs inside the project find the users and then copy userId
