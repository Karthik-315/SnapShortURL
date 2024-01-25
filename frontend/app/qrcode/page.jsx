import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10 ">
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-purple">Create your QR Code</h1>
          <p className="mb-8">
            Generate your own QR Code in just a few steps. Customize it to your liking and share it anywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Create QR Code</Button>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Create a QR Code</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input placeholder="Enter your link here" />
              <Button>Generate QR Code</Button>
            </div>
            <p className="text-center mt-4">
              Your QR Code will be generated instantly. You can customize it further in the next step.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why use QR Codes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Easy Access</CardTitle>
                <CardDescription>
                  QR Codes provide a quick and easy way to access websites or information.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Customizable</CardTitle>
                <CardDescription>
                  Customize your QR Code with colors, logos, and more to match your brand.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Trackable</CardTitle>
                <CardDescription>Track the usage of your QR Code and gain valuable insights.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">500K</h2>
              <p>global paying customers</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">256M</h2>
              <p>links & QR Codes created monthly</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">10B</h2>
              <p>connections (clicks & scans) monthly</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">800+</h2>
              <p>app integrations</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Bitly customers are saying</h2>
          <div className="flex justify-center items-center space-x-4 mb-16">
            <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
            <div className="max-w-2xl">
              <div className="overflow-x-auto scrollbar-hidden whitespace-nowrap">
                <blockquote className="italic text-lg mb-4 inline-block mx-4">
                  "Our goal was to implement a system that would not interrupt the gameplay experience when a new update
                  was announced, and we found QR Codes to be the perfect answer."
                </blockquote>
                <blockquote className="italic text-lg mb-4 inline-block mx-4">
                  "Another quote for the carousel."
                </blockquote>
                <blockquote className="italic text-lg mb-4 inline-block mx-4">
                  "Yet another quote for the carousel."
                </blockquote>
              </div>
              <p className="text-sm">Juan Zacarias – Game Product Manager, Motive Studios EA</p>
              <div className="flex justify-center mt-4">
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
              </div>
            </div>
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            <details>
              <summary className="font-bold cursor-pointer">What is a QR Code?</summary>
              <p>
                A QR Code is a two-dimensional barcode that can be scanned using a smartphone camera to quickly access a
                webpage or app.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">How to create a QR Code?</summary>
              <p>
                You can create a QR Code by entering your link in the provided field and clicking on "Generate QR Code".
                You can then customize it further in the next step.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">Can I track my QR Code?</summary>
              <p>Yes, with Bitly you can track the usage of your QR Code and gain valuable insights.</p>
            </details>
          </div>
        </section>
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">More than a free link shortener</h2>
            <Button variant="secondary">Get Started</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}