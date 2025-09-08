# EmailJS Setup Guide

To make the contact forms functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates
1. Go to "Email Templates"
2. Create a new template for contact form:
   - **Template ID**: `contact_template` (or any name you prefer)
   - **Subject**: `New Contact Form Submission - TechVersa`
   - **Content**:
   ```
   You have a new contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   
   Message:
   {{message}}
   ```

3. Create a second template for quote requests:
   - **Template ID**: `quote_template` (or any name you prefer)
   - **Subject**: `New Quote Request - TechVersa`
   - **Content**:
   ```
   You have a new quote request:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Project Type: {{project_type}}
   Budget Range: {{budget_range}}
   Timeline: {{timeline}}
   
   Message:
   {{message}}
   ```

## 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update the Code
Replace the following placeholders in `app/contact/page.js`:

```javascript
// Line 45: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 91: Replace YOUR_SERVICE_ID
"YOUR_ACTUAL_SERVICE_ID"

// Line 92: Replace YOUR_TEMPLATE_ID
"YOUR_ACTUAL_TEMPLATE_ID"

// Line 125: Replace YOUR_SERVICE_ID (same as above)
"YOUR_ACTUAL_SERVICE_ID"

// Line 126: Replace YOUR_QUOTE_TEMPLATE_ID
"YOUR_ACTUAL_QUOTE_TEMPLATE_ID"
```

## 6. Test the Forms
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit both forms
4. Check your email for the submissions

## Example Configuration
```javascript
// Example with actual values:
emailjs.init("user_abc123def456");

await emailjs.send(
  "service_xyz789",
  "contact_template",
  templateParams
);
```

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variables match exactly
- Verify your public key is correct
- Check browser console for any error messages

## Security Note
- Never commit your actual EmailJS keys to version control
- Consider using environment variables for production
- The public key is safe to use in client-side code
