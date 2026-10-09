import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import SEO from '../components/seo/SEO'
import { DISPLAY_PHONE, PUBLIC_EMAIL, WHATSAPP_URL } from '../data/contact'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your enquiry. Please try again.')
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Vision X | Start a Digital Growth Project"
        description="Contact Vision X for website development, SEO, AEO, GEO, digital marketing, branding, performance marketing and creative technology projects."
        canonical="https://www.myvisionx.in/contact"
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-36 text-white md:px-8 md:pt-44">

        <div className="mx-auto max-w-7xl">

          {/* HERO */}

          <section className="relative overflow-hidden pb-24 md:pb-32">

            <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full border border-white/[0.04] bg-white/[0.015]" />

            <div className="pointer-events-none absolute right-[15%] top-[20%] h-40 w-40 rounded-full bg-white/[0.04] blur-[100px]" />

            <div className="relative max-w-5xl">

              <div className="mb-8 flex items-center gap-3">

                <span className="h-px w-10 bg-white/35" />

                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Start a conversation
                </p>

              </div>

              <h1 className="text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">

                Let&apos;s build

                <br />

                <span className="text-white">
                  something
                </span>{' '}

                <span className="text-white/25">
                  meaningful.
                </span>

              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                Tell us what you are building, what you want to improve,
                or where your business needs to grow. We&apos;ll turn the
                conversation into a practical digital direction.
              </p>

            </div>

          </section>

          {/* CONTACT GRID */}

          <section className="grid gap-8 border-t border-white/10 pt-16 lg:grid-cols-[0.72fr_1.28fr]">

            {/* LEFT CONTACT INFO */}

            <div className="space-y-5">

              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-8">

                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Contact Vision X
                </p>

                <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
                  Let&apos;s talk about your next project.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Reach us directly or send your project requirements
                  through the enquiry form.
                </p>

              </div>

              {/* EMAIL */}

              <a
                href={`mailto:${PUBLIC_EMAIL}`}
                className="group block rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                      <Mail size={17} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-white/75">
                        {PUBLIC_EMAIL}
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </a>

              {/* WHATSAPP */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                      <MessageCircle size={17} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm text-white/75">
                        {DISPLAY_PHONE}
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </a>

              {/* PHONE */}

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`}
                className="group block rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-white/75">
                        {DISPLAY_PHONE}
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </a>

              {/* LOCATION */}

              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      Delhi, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-6 md:p-9">

              <div className="mb-9">

                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Project enquiry
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  Tell us about your project.
                </h2>

              </div>

              {submitted && (
                <div role="status" className="mb-7 flex items-start gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">

                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-sm font-medium">
                      Enquiry sent successfully.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Thanks for reaching out. The Vision X team will be in touch.
                    </p>
                  </div>

                </div>
              )}

              {submitError && (
                <p role="alert" className="mb-7 rounded-2xl border border-red-300/20 bg-red-300/[0.06] p-4 text-sm text-red-100/90">
                  {submitError}
                </p>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/30"
                    />
                  </div>

                </div>

                {/* PHONE + COMPANY */}

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company / Brand"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/30"
                    />
                  </div>

                </div>

                {/* SERVICE */}

                <div>

                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                  >
                    What do you need? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-white/30"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="E-commerce Development">
                      E-commerce Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="AEO">
                      AEO
                    </option>

                    <option value="GEO">
                      GEO
                    </option>

                    <option value="Local SEO">
                      Local SEO
                    </option>

                    <option value="Google Ads">
                      Google Ads
                    </option>

                    <option value="Meta Ads">
                      Meta Ads
                    </option>

                    <option value="Lead Generation">
                      Lead Generation
                    </option>

                    <option value="Branding">
                      Branding
                    </option>

                    <option value="Graphic Design">
                      Graphic Design
                    </option>

                    <option value="Social Media">
                      Social Media
                    </option>

                    <option value="3D Experiences">
                      3D Experiences
                    </option>

                    <option value="Interactive Websites">
                      Interactive Websites
                    </option>

                    <option value="Digital Growth Systems">
                      Digital Growth Systems
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/35"
                  >
                    Project details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business, goals, budget or project requirements..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/30"
                  />

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold !text-black transition-all duration-300 hover:scale-[1.01] hover:bg-white/90 disabled:cursor-wait disabled:opacity-60"
                >

                  <span className="!text-black">
                    {isSubmitting ? 'Sending Enquiry…' : 'Send Project Enquiry'}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="!text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </button>

                <p className="text-center text-xs leading-5 text-white/35">
                  Your details are sent securely to the Vision X team. Prefer WhatsApp? Use the contact link above.
                </p>

              </form>

            </div>

          </section>

        </div>

      </main>
    </>
  )
}

export default Contact
