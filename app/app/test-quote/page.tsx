'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function TestQuotePage() {
  const [isTesting, setIsTesting] = useState(false)

  const testQuoteSubmission = async () => {
    setIsTesting(true)
    
    try {
      const testData = {
        name: 'Test User',
        phone: '0412 345 678',
        email: 'test@example.com',
        address: '123 Test Street, Sydney NSW 2000',
        propertyType: 'house',
        projectType: 'interior',
        rooms: 'Living room, 2 bedrooms',
        timeline: '1-2weeks',
        budget: '3000-5000',
        details: 'This is a test submission to verify the quote form is working correctly.'
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Test quote submitted successfully! Check your email.')
      } else {
        toast.error('Test failed: ' + result.message)
      }
    } catch (error) {
      console.error('Test error:', error)
      toast.error('Test failed. Check console for details.')
    } finally {
      setIsTesting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Quote Form Test
        </h1>
        
        <p className="text-gray-600 mb-6 text-center">
          Click the button below to test the quote submission functionality.
          This will send a test email to ajit.kanoli@gmail.com.
        </p>

        <Button 
          onClick={testQuoteSubmission}
          disabled={isTesting}
          className="w-full"
        >
          {isTesting ? 'Testing...' : 'Send Test Quote'}
        </Button>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">What this test does:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Sends a test quote request</li>
            <li>• Emails ajit.kanoli@gmail.com</li>
            <li>• Shows success/error message</li>
            <li>• Logs details to browser console</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 