"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, ChevronDown, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadSchema, type LeadInput } from "@/lib/validators";
import { serviceOptions, budgetOptions } from "@/lib/data";
import { cn } from "@/lib/cn";

const inputBase =
  "focus-ring w-full rounded-xl border bg-canvas/60 px-4 py-3 text-sm text-fg placeholder:text-dim transition-colors";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-400">
      {msg}
    </p>
  );
}

export function LeadForm({
  initialService = "",
  initialBudget = "",
}: {
  initialService?: string;
  initialBudget?: string;
}) {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: initialService,
      budget: initialBudget,
      message: "",
    },
  });

  async function onSubmit(data: LeadInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      reset();
      setDone(true);
    } catch {
      setStatus("error");
    }
  }

  if (done) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-line bg-surface/60 p-10 text-center">
        <div className="grid size-14 place-items-center rounded-full bg-mint/15 text-mint">
          <Check className="size-7" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-fg">Message received 🎉</h3>
        <p className="max-w-sm text-pretty text-muted">
          Thanks for reaching out. A senior engineer will reply within one business
          day to set up your free call and outline next steps — keep an eye on your inbox.
        </p>
        <button
          onClick={() => setDone(false)}
          className="focus-ring mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-bright hover:underline"
        >
          <RotateCcw className="size-4" />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputBase, errors.name ? "border-red-500/60" : "border-line")}
            {...register("name")}
          />
          <FieldError id="name-error" msg={errors.name?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputBase, errors.email ? "border-red-500/60" : "border-line")}
            {...register("email")}
          />
          <FieldError id="email-error" msg={errors.email?.message} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-fg">
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={cn(inputBase, errors.company ? "border-red-500/60" : "border-line")}
            {...register("company")}
          />
          <FieldError id="company-error" msg={errors.company?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-fg">
            What do you need?
          </label>
          <div className="relative">
            <select
              id="service"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-error" : undefined}
              className={cn(
                inputBase,
                "appearance-none pr-10",
                errors.service ? "border-red-500/60" : "border-line"
              )}
              {...register("service")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="bg-surface">
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-dim" />
          </div>
          <FieldError id="service-error" msg={errors.service?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-fg">
            Budget <span className="font-normal text-dim">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="budget"
              className={cn(inputBase, "appearance-none pr-10 border-line")}
              {...register("budget")}
            >
              <option value="">No preference</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b} className="bg-surface">
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-dim" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
            Project details
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us what you're building, your timeline, and what success looks like."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputBase, "resize-none", errors.message ? "border-red-500/60" : "border-line")}
            {...register("message")}
          />
          <FieldError id="message-error" msg={errors.message?.message} />
        </div>
      </div>

      {/* Honeypot: hidden from humans, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Get my free proposal
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
        <p className="text-xs text-dim">
          No spam. We reply within 1 business day.{" "}
          <Link href="/privacy" className="underline hover:text-muted">
            Privacy
          </Link>
          .
        </p>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          Something went wrong sending your message. Please email us directly at{" "}
          <a href="mailto:hello@aether.studio" className="underline">
            hello@aether.studio
          </a>
          .
        </p>
      )}
    </form>
  );
}
