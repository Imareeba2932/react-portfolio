import React from 'react'
import { useFormik } from 'formik';

function Contact() {

  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      contactno: '',
    },

    onSubmit: (values) => {
      // console.log(values);
      // storeDataToSession(values);
      // convert to JSON from javascript
      // localStorage.setItem('productData', JSON.stringify(values));
      alert(values)

    }
  })

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <form onSubmit={contactForm.handleSubmit}>
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block form-bg" >

                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        CONTACT ME
                      </h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1m">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              onChange={contactForm.handleChange}
                              value={contactForm.values.name}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1n">
                              E-mail
                            </label>
                            <input
                              type="text"
                              id="material"
                              onChange={contactForm.handleChange}
                              value={contactForm.values.email}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1m1">
                              Mobile No.
                            </label>
                            <input
                              type="text"
                              id="category"
                              onChange={contactForm.handleChange}
                              value={contactForm.values.contactno}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>

                        <button type="submit" className="btn btn-warning btn-lg ms-2">
                          Click
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact