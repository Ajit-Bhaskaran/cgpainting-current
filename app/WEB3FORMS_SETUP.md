# Web3Forms Setup Guide

## Step 1: Get Your Access Key

1. Go to https://web3forms.com/
2. Click "Get Access Key"
3. Enter your email: cgpainting@live.com.au
4. Check your email for the access key
5. Copy the access key (it looks like: 12345678-1234-1234-1234-123456789abc)

## Step 2: Update the API Route

Once you have your access key, replace `YOUR_WEB3FORMS_ACCESS_KEY` in the file:
`app/app/api/quote/route.ts`

Change this line:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

To your actual access key:
```typescript
access_key: 'your-actual-access-key-here',
```

## Step 3: Deploy and Test

1. Commit and push your changes
2. Amplify will automatically deploy the updates
3. Test the quote form on your live site

## How It Works

- When someone submits the quote form, it sends the data to your API route
- Your API route forwards the data to Web3Forms
- Web3Forms sends an email to cgpainting@live.com.au with all the form details
- The user sees a success message

## Features

- ✅ Free forever (1000 submissions/month)
- ✅ Spam protection included
- ✅ Professional email formatting
- ✅ No registration required
- ✅ Works with any email provider

## Troubleshooting

If emails aren't received:
1. Check your spam folder
2. Verify the access key is correct
3. Check the browser console for errors
4. Ensure the form is being submitted to the correct endpoint 