"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import type { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";

import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/dictionaries";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

const fieldClass =
  "w-full rounded-none border border-steel/20 bg-white px-4 py-3.5 font-body text-sm text-ink placeholder:text-steel/60 transition-colors duration-500 focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:py-4";

type ContactFormProps = {
  lang: Lang;
  labels: Dictionary["form"];
};

function createContactSchema(labels: Dictionary["form"]) {
  return zod.object({
    fullName: zod.string().min(2, labels.requiredName),
    email: zod.string().email(labels.invalidEmail),
    phone: zod.string().optional(),
    company: zod.string().optional(),
    projectType: zod.string().min(1, labels.requiredProjectType),
    budget: zod.string().min(1, labels.requiredBudget),
    description: zod.string().min(50, labels.shortDescription),
    referral: zod.string().min(1, labels.requiredReferral),
    consent: zod.boolean().refine((value) => value, labels.requiredConsent)
  });
}

export function ContactForm({ lang, labels }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const contactSchema = createContactSchema(labels);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      description: "",
      referral: "",
      consent: false
    }
  });

  const onSubmit = async (_values: ContactFormValues) => {
    setStatus("submitting");
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-success/30 bg-success/10 p-8" role="status" aria-live="polite">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-6 font-display text-4xl font-semibold text-ink">
          {labels.successTitle}
        </h3>
        <p className="mt-4 max-w-xl font-body text-base leading-8 text-steel">
          {labels.successBody}
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-6 lg:grid-cols-2">
        <Field label={labels.fullName} error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            type="text"
            className={cn(fieldClass, errors.fullName && "border-error")}
            aria-invalid={Boolean(errors.fullName)}
          />
        </Field>
        <Field label={labels.email} error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={cn(fieldClass, errors.email && "border-error")}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label={labels.phone} error={errors.phone?.message}>
          <input {...register("phone")} type="tel" className={fieldClass} />
        </Field>
        <Field label={labels.company} error={errors.company?.message}>
          <input {...register("company")} type="text" className={fieldClass} />
        </Field>
        <Field label={labels.projectType} error={errors.projectType?.message}>
          <select
            {...register("projectType")}
            className={cn(fieldClass, errors.projectType && "border-error")}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">{lang === "tr" ? "Seçiniz" : "Select"}</option>
            <option value="Residential">{lang === "tr" ? "Konut" : "Residential"}</option>
            <option value="Commercial">{lang === "tr" ? "Ticari" : "Commercial"}</option>
            <option value="Infrastructure">{lang === "tr" ? "Altyapı" : "Infrastructure"}</option>
            <option value="Other">{lang === "tr" ? "Diğer" : "Other"}</option>
          </select>
        </Field>
        <Field label={labels.budget} error={errors.budget?.message}>
          <select
            {...register("budget")}
            className={cn(fieldClass, errors.budget && "border-error")}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">{lang === "tr" ? "Seçiniz" : "Select"}</option>
            <option value="€500k-€2M">€500k-€2M</option>
            <option value="€2M-€10M">€2M-€10M</option>
            <option value="€10M-€50M">€10M-€50M</option>
            <option value="€50M+">€50M+</option>
          </select>
        </Field>
      </div>

      <Field label={labels.description} error={errors.description?.message}>
        <textarea
          {...register("description")}
          rows={6}
          className={cn(fieldClass, "resize-none", errors.description && "border-error")}
          aria-invalid={Boolean(errors.description)}
        />
      </Field>

      <Field label={labels.referral} error={errors.referral?.message}>
        <select
          {...register("referral")}
          className={cn(fieldClass, errors.referral && "border-error")}
          aria-invalid={Boolean(errors.referral)}
        >
          <option value="">{lang === "tr" ? "Seçiniz" : "Select"}</option>
          <option value="Referral">{lang === "tr" ? "Referans" : "Referral"}</option>
          <option value="Search">{lang === "tr" ? "Arama" : "Search"}</option>
          <option value="Social Media">{lang === "tr" ? "Sosyal Medya" : "Social Media"}</option>
          <option value="Industry Event">{lang === "tr" ? "Sektör Etkinliği" : "Industry Event"}</option>
        </select>
      </Field>

      <label className="flex items-start gap-4 rounded-lg border border-steel/15 bg-stone/35 p-4 sm:p-5">
        <input
          {...register("consent")}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded-none border border-steel/30 bg-white text-copper-dark focus:ring-ink"
        />
        <span className="font-body text-sm leading-7 text-steel">
          {labels.consent}
          {errors.consent ? (
            <span className="mt-2 block text-error">{errors.consent.message}</span>
          ) : null}
        </span>
      </label>

      <Button
        type="submit"
        className="w-full justify-center"
        disabled={status === "submitting"}
        icon={<ArrowRight className="h-4 w-4" />}
      >
        {status === "submitting" ? labels.submitting : labels.submit}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-3 block font-heading text-xs uppercase tracking-[0.24em] text-steel">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block font-body text-sm text-error">{error}</span>
      ) : null}
    </label>
  );
}
