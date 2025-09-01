// Place your resume PDF in the public/ directory, e.g., public/resume.pdf
// This page will display the PDF in an iframe
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <Head>
        <title>Resume | F.H. Farha</title>
      </Head>
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-4">
          <a href="/" className="inline-flex items-center text-pink-400 hover:text-pink-600 font-semibold">
            <FaArrowLeft className="mr-2 text-xl" /> Back to Home
          </a>
        </div>
        <h1 className="text-3xl font-bold text-pink-400 mb-6 text-center">My Resume</h1>
        <div className="flex justify-center">
          <iframe
            src="/resume.pdf"
            width="850"
            height="1100"
            className="border-4 border-pink-400 rounded-xl shadow-lg bg-white"
            title="Resume PDF"
          />
        </div>
        <div className="flex justify-center mt-6">
          <a href="/resume.pdf" download className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600">Download PDF</a>
        </div>
      </div>
    </div>
  );
}
