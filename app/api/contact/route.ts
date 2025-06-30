import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Add this to prevent static generation
export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const createEmailTemplate = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <div style="width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; color: white;">💌</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.025em;">New Message Received</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 16px; font-weight: 400;">Someone reached out through your portfolio</p>
        </div>

        <!-- Contact Details -->
        <div style="padding: 30px;">
            <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0;">
                <h3 style="color: #1e293b; margin: 0 0 20px; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="width: 4px; height: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 2px; margin-right: 12px;"></span>
                    Contact Details
                </h3>
                
                <div style="display: grid; gap: 16px;">
                    <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                            <span style="color: white; font-size: 14px; font-weight: 600;">👤</span>
                        </div>
                        <div>
                            <div style="font-size: 12px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Name</div>
                            <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${data.name}</div>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                            <span style="color: white; font-size: 14px; font-weight: 600;">📧</span>
                        </div>
                        <div>
                            <div style="font-size: 12px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Email</div>
                            <a href="mailto:${data.email}" style="font-size: 16px; color: #667eea; font-weight: 500; text-decoration: none;">${data.email}</a>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; padding: 12px; background-color: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                            <span style="color: white; font-size: 14px; font-weight: 600;">📝</span>
                        </div>
                        <div>
                            <div style="font-size: 12px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Subject</div>
                            <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${data.subject}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Message Content -->
            <div style="margin-top: 25px; background-color: #f8fafc; border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0;">
                <h3 style="color: #1e293b; margin: 0 0 15px; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="width: 4px; height: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 2px; margin-right: 12px;"></span>
                    Message
                </h3>
                <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.7; color: #374151;">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e5e7eb;">
            <div style="margin-bottom: 15px;">
                <span style="font-size: 24px;">✨</span>
            </div>
            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.5;">
                This message was sent from your portfolio contact form<br>
                <span style="color: #9ca3af;">${new Date().toLocaleString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true 
                })}</span>
            </p>
        </div>
    </div>
</body>
</html>
`;

const createThankYouEmailTemplate = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Reaching Out</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 32px; color: white;">🙏</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 600; letter-spacing: -0.025em;">Thank You!</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 18px; font-weight: 400;">Your message has been received</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #1e293b; margin: 0 0 20px; font-size: 24px; font-weight: 600;">Hi ${data.name}! 👋</h2>
                <p style="color: #374151; margin: 0; font-size: 18px; line-height: 1.7;">
                    Thank you so much for reaching out to me! I'm truly excited to hear from you and I've received your message about <strong>"${data.subject}"</strong>.
                </p>
            </div>

            <!-- What's Next Section -->
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; padding: 30px; margin: 30px 0; border: 1px solid #bae6fd;">
                <h3 style="color: #1e40af; margin: 0 0 20px; font-size: 20px; font-weight: 600; text-align: center;">What's Next? 🚀</h3>
                <div style="display: grid; gap: 16px;">
                    <div style="display: flex; align-items: center; padding: 16px; background-color: white; border-radius: 12px; border: 1px solid #e2e8f0;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-size: 18px;">📧</span>
                        </div>
                        <div>
                            <div style="font-size: 16px; color: #1e293b; font-weight: 600;">I'll Review Your Message</div>
                            <div style="font-size: 14px; color: #64748b; margin-top: 4px;">I'm carefully reading through your message to understand your needs</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; padding: 16px; background-color: white; border-radius: 12px; border: 1px solid #e2e8f0;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-size: 18px;">💬</span>
                        </div>
                        <div>
                            <div style="font-size: 16px; color: #1e293b; font-weight: 600;">Personal Response</div>
                            <div style="font-size: 14px; color: #64748b; margin-top: 4px;">I'll get back to you within 24 hours with a detailed response</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; padding: 16px; background-color: white; border-radius: 12px; border: 1px solid #e2e8f0;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-size: 18px;">🤝</span>
                        </div>
                        <div>
                            <div style="font-size: 16px; color: #1e293b; font-weight: 600;">Let's Collaborate</div>
                            <div style="font-size: 14px; color: #64748b; margin-top: 4px;">I'm looking forward to working together on your project</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Personal Message -->
            <div style="background-color: #f8fafc; border-radius: 16px; padding: 30px; border: 1px solid #e2e8f0; text-align: center;">
                <div style="margin-bottom: 20px;">
                    <span style="font-size: 32px;">✨</span>
                </div>
                <h3 style="color: #1e293b; margin: 0 0 15px; font-size: 20px; font-weight: 600;">A Personal Note</h3>
                <p style="color: #374151; margin: 0; font-size: 16px; line-height: 1.7;">
                    I genuinely appreciate you taking the time to reach out. Every message I receive is important to me, 
                    and I'm committed to providing you with the best possible service and support.
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
                <span style="font-size: 24px;">🌟</span>
            </div>
            <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1e293b;">Vishal Thakur</strong><br>
                <span style="color: #9ca3af;">Full Stack Developer</span>
            </p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                    This is an automated confirmation email. Please don't reply to this message.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { 
          message: 'Email service is not configured. Please contact me directly at vthakur2290@gmail.com',
          success: false 
        },
        { status: 500 }
      );
    }

    // Send email to you (the portfolio owner)
    const { data: ownerEmailData, error: ownerEmailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: ['vthakur2290@gmail.com'],
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: createEmailTemplate(validatedData),
      replyTo: validatedData.email,
    });

    if (ownerEmailError) {
      console.error('Resend error (owner email):', ownerEmailError);
      return NextResponse.json(
        { 
          message: 'Failed to send email. Please try again or contact me directly at vthakur2290@gmail.com',
          success: false 
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', ownerEmailData);
    
    return NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Failed to send message. Please try again or contact me directly at vthakur2290@gmail.com',
        success: false 
      },
      { status: 500 }
    );
  }
}