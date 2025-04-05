import React from 'react'

export default function AboutUs() {
  return (
    <div className='container'>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About Us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is a free, user-friendly tool designed to simplify text transformations. Whether you need uppercase, lowercase, or clean formatting, our tool helps you edit text effortlessly. Built with React, it’s fast, lightweight, and perfect for writers, developers, and students.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is completely free—no subscriptions, no ads! Convert text to uppercase/lowercase, trim extra spaces, or analyze content without restrictions. Just paste your text, click a button, and get instant results. Enjoy hassle-free text editing anytime!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Why Choose TextUtils?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Save time with one-click conversions for emails, code, or essays. Unlike bulky word processors, TextUtils focuses on simplicity: uppercase, lowercase, and space removal in seconds. Perfect for polishing content quickly—try it now!
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
