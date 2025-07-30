import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Web3Forms endpoint - this is a free service that handles form submissions
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c102832c-bb16-485f-903b-95cbd6aaee05',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        propertyType: formData.propertyType,
        projectType: formData.projectType,
        rooms: formData.rooms,
        timeline: formData.timeline,
        budget: formData.budget,
        details: formData.details,
        subject: 'New Quote Request - CG Painting',
        message: `
New quote request received:

Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Address: ${formData.address}

Project Details:
- Property Type: ${formData.propertyType}
- Project Type: ${formData.projectType}
- Rooms/Areas: ${formData.rooms}
- Timeline: ${formData.timeline}
- Budget: ${formData.budget}

Additional Details:
${formData.details}

This quote request was submitted from the CG Painting website.
        `,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Quote request submitted successfully!' })
    } else {
      throw new Error('Failed to submit form')
    }
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote request. Please try again.' },
      { status: 500 }
    )
  }
} 