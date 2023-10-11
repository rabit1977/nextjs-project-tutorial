Run npm install,

<!-- Run This three commands after you get the keys from clerk, Mux, Stripe, Uploadthing, and Mongodb database -->

In terminal run npx prisma generate,
In terminal run - node scripts/seed.ts,
In terminal run npx prisma db push,

Go to clerk.com and create project and take the keys,

# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# CLERK_SECRET_KEY=

# NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

# NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

# NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# DATABASE_URL='add here mongodb database'

Go to UploadThing and create account, create project and take the secret and appId keys,

# UPLOADTHING_SECRET=

# UPLOADTHING_APP_ID=

Go to Mux create account and create project,

# MUX_TOKEN_ID=

# MUX_TOKEN_SECRET=

# STRIPE_API_PUBLISHABLE_KEY=

# STRIPE_API_KEY=

# STRIPE_WEBHOOK_SECRET= when you purchase the course you have to run in the second terminal this code "stripe listen --forward-to localhost:3000/api/webhook" - don't forget it because is not going to work. this is the url "https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local" or watch the video https://www.youtube.com/watch?v=zgtYJ-BvNpE

# NEXT_PUBLIC_APP_URL=http://localhost:3000

# NEXT_PUBLIC_TEACHER_ID= go to clerkjs inside the project find the users and then copy userId
