"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, UserPlus } from "lucide-react";

import Container from "../../components/layout/container";
import { submitRegistration } from "../../lib/api";

const ageGroups = [
  "Anchor / Younger Member",
  "Junior Section",
  "Company Section",
  "Senior / NCO",
  "Officer or Adult Volunteer",
];

const initialForm = {
  childName: "",
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  ageGroup: "",
  message: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const updateField = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await submitRegistration({
        childName: form.childName,
        parentName: form.parentName,
        parentEmail: form.parentEmail,
        parentPhone: form.parentPhone,
        ageGroup: form.ageGroup,
        message: form.message || undefined,
      });

      setSuccess(true);
      setForm(initialForm);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Registration could not be submitted. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              <UserPlus size={15} />
              Brigade Registration
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Register your interest in the Brigade
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Send your details to the company leadership team. We will review
              your request and follow up with the next steps for membership,
              meetings or volunteering.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-heading">
                  Child / Member Name
                  <input
                    name="childName"
                    value={form.childName}
                    onChange={updateField}
                    required
                    className="min-h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-secondary"
                    placeholder="Full name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-heading">
                  Parent / Guardian Name
                  <input
                    name="parentName"
                    value={form.parentName}
                    onChange={updateField}
                    required
                    className="min-h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-secondary"
                    placeholder="Parent or guardian"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-heading">
                  Email Address
                  <input
                    name="parentEmail"
                    type="email"
                    value={form.parentEmail}
                    onChange={updateField}
                    required
                    className="min-h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-secondary"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-heading">
                  Phone Number
                  <input
                    name="parentPhone"
                    value={form.parentPhone}
                    onChange={updateField}
                    required
                    className="min-h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-secondary"
                    placeholder="+234..."
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-heading md:col-span-2">
                  Age Group / Section
                  <select
                    name="ageGroup"
                    value={form.ageGroup}
                    onChange={updateField}
                    required
                    className="min-h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-secondary"
                  >
                    <option value="">Select a section</option>
                    {ageGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-bold text-heading md:col-span-2">
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    rows={5}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-secondary"
                    placeholder="Tell us anything helpful about the member, interest or preferred contact time."
                  />
                </label>
              </div>

              {error ? (
                <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p className="mt-5 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  <CheckCircle2 size={18} />
                  Registration submitted successfully.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b98c22] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <aside className="rounded-2xl border border-border bg-primary p-6 text-white shadow-sm sm:p-8">
              <h2 className="text-2xl font-black">What happens next?</h2>
              <div className="mt-6 space-y-5 text-sm leading-6 text-white/80">
                <p>
                  Your request is saved securely and reviewed by the company
                  leadership team.
                </p>
                <p>
                  A leader will contact you about meeting times, uniform
                  expectations, age section and next enrolment steps.
                </p>
                <p>
                  For urgent questions, reach us through the contact page.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-primary"
              >
                Contact Us
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
