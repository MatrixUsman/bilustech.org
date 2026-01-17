import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  products: string[];
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.company || !data.subject || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
NEW QUOTE REQUEST FROM WEBSITE
================================

CUSTOMER INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}

INQUIRY DETAILS:
Subject: ${data.subject}

Products Interested In:
${data.products.length > 0 ? data.products.map((p) => `- ${p}`).join('\n') : '- Not specified'}

Message:
${data.message}

================================
This message was submitted via the BilusTech LLC website contact form.
Reply to: ${data.email}
Phone: ${data.phone}
`;

    // For development/testing, you can log or implement a real email service
    // Using a simple console log for demonstration
    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      data,
    });

    // Option 1: If you have Resend configured (production)
    // Uncomment and configure after adding RESEND_API_KEY to .env.local
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@bilustech.com',
      to: 'ceo@bilustech.com',
      replyTo: data.email,
      subject: `New Quote Request: ${data.subject}`,
      text: emailContent,
      html: `<pre>${emailContent}</pre>`,
    });
    */

    // Option 2: If you want to use another email service like SendGrid, Mailgun, etc.
    // Add your email service integration here

    // For now, return success (implement actual email sending in production)
    return NextResponse.json(
      {
        message: 'Quote request submitted successfully. We will contact you soon.',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
