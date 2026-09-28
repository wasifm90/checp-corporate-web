import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';
import { CompanyService } from '../../core/services/company.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Contact' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            COMMERCIAL INQUIRIES &amp; RFP
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Start a Conversation with CHECP
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          Whether you are evaluating preconstruction feasibility for a new institutional masterplan, preparing a competitive tender package, or seeking an experienced general contractor, our executive directorate is ready to assist.
        </p>
      </section>

      <!-- Main Contact Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Form -->
        <div class="lg:col-span-7 bg-surface-container-low p-8 lg:p-10 border border-outline-variant">
          <div class="flex flex-col gap-2 pb-6 border-b border-outline-variant mb-6">
            <h2 class="font-headline text-[22px] font-semibold text-primary">Project Inquiry Form</h2>
            <p class="font-body text-[14px] text-on-surface-variant">Please provide project parameters. All communications are governed by strict institutional confidentiality.</p>
          </div>

          @if (submissionResult(); as res) {
            <div 
              class="p-6 border mb-6 flex flex-col gap-2"
              [class.bg-emerald-50]="res.success"
              [class.border-emerald-300]="res.success"
              [class.text-emerald-950]="res.success"
              [class.bg-red-50]="!res.success"
              [class.border-red-300]="!res.success"
              [class.text-red-950]="!res.success"
            >
              <div class="flex items-center gap-2 font-headline font-bold text-sm">
                <span class="material-symbols-outlined text-lg">{{ res.success ? 'check_circle' : 'error' }}</span>
                <span>{{ res.success ? 'Inquiry Submitted Successfully' : 'Submission Alert' }}</span>
              </div>
              <p class="font-body text-sm leading-relaxed">{{ res.message }}</p>
              @if (res.success) {
                <button 
                  type="button" 
                  (click)="resetForm()" 
                  class="mt-3 text-xs font-headline font-bold uppercase tracking-wider text-secondary underline self-start"
                >
                  Submit Another Inquiry
                </button>
              }
            </div>
          }

          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
            <!-- Full Name & Company -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="fullName" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Full Name <span class="text-secondary">*</span>
                </label>
                <input 
                  id="fullName"
                  type="text" 
                  formControlName="fullName"
                  placeholder="e.g. Eng. Khalid Al-Mansoor"
                  class="w-full h-11 px-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                  [class.border-red-500]="isFieldInvalid('fullName')"
                />
                @if (isFieldInvalid('fullName')) {
                  <span class="text-xs text-red-600 font-body">Full name is required.</span>
                }
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="company" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Company / Organization <span class="text-secondary">*</span>
                </label>
                <input 
                  id="company"
                  type="text" 
                  formControlName="company"
                  placeholder="e.g. Sovereign Investment Authority"
                  class="w-full h-11 px-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                  [class.border-red-500]="isFieldInvalid('company')"
                />
                @if (isFieldInvalid('company')) {
                  <span class="text-xs text-red-600 font-body">Company name is required.</span>
                }
              </div>
            </div>

            <!-- Email & Phone -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="email" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Email Address <span class="text-secondary">*</span>
                </label>
                <input 
                  id="email"
                  type="email" 
                  formControlName="email"
                  placeholder="director@organization.com"
                  class="w-full h-11 px-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                  [class.border-red-500]="isFieldInvalid('email')"
                />
                @if (isFieldInvalid('email')) {
                  <span class="text-xs text-red-600 font-body">Please enter a valid corporate email.</span>
                }
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="phone" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Phone / WhatsApp <span class="text-secondary">*</span>
                </label>
                <input 
                  id="phone"
                  type="tel" 
                  formControlName="phone"
                  placeholder="+966 5X XXX XXXX"
                  class="w-full h-11 px-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                  [class.border-red-500]="isFieldInvalid('phone')"
                />
                @if (isFieldInvalid('phone')) {
                  <span class="text-xs text-red-600 font-body">Contact telephone is required.</span>
                }
              </div>
            </div>

            <!-- Project Type & Location -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="projectType" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Project Type
                </label>
                <select 
                  id="projectType"
                  formControlName="projectType"
                  class="w-full h-11 px-3 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                >
                  <option value="Commercial / Office Tower">Commercial / Office Tower</option>
                  <option value="General Contracting">General Contracting</option>
                  <option value="Design & Build">Design & Build</option>
                  <option value="Interior Fit-Out">Interior Fit-Out</option>
                  <option value="Civil & Structural">Civil & Structural</option>
                  <option value="Specialized Infrastructure">Specialized Infrastructure</option>
                  <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                  <option value="Hospitality & Leisure">Hospitality & Leisure</option>
                  <option value="Other Institutional">Other Institutional</option>
                </select>
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="projectLocation" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                  Project Location
                </label>
                <input 
                  id="projectLocation"
                  type="text" 
                  formControlName="projectLocation"
                  placeholder="e.g. Riyadh, Jeddah, Eastern Province, Neom"
                  class="w-full h-11 px-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
              <label for="message" class="font-headline text-[12px] uppercase font-bold tracking-wider text-primary">
                Scope / Message <span class="text-secondary">*</span>
              </label>
              <textarea 
                id="message"
                rows="4" 
                formControlName="message"
                placeholder="Briefly outline your project requirements, anticipated timeline, and delivery model..."
                class="w-full p-3.5 bg-surface border border-outline font-body text-[14px] text-primary focus:border-secondary focus:outline-none"
                [class.border-red-500]="isFieldInvalid('message')"
              ></textarea>
              @if (isFieldInvalid('message')) {
                <span class="text-xs text-red-600 font-body">Please provide brief details on your project.</span>
              }
            </div>

            <!-- Submit Button & Mailto fallback -->
            <div class="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <button 
                type="submit"
                [disabled]="contactService.isSubmitting()"
                class="w-full sm:w-auto h-12 px-8 bg-primary text-white font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors disabled:opacity-50"
              >
                <span>{{ contactService.isSubmitting() ? 'PROCESSING INQUIRY...' : 'SUBMIT PROJECT INQUIRY' }}</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <button 
                type="button"
                (click)="openMailtoFallback()"
                class="text-[12px] font-headline text-on-surface-variant hover:text-secondary underline transition-colors"
              >
                Send via Email Client Instead
              </button>
            </div>
          </form>
        </div>

        <!-- Right: Regional Offices & Direct Channels -->
        <div class="lg:col-span-5 flex flex-col gap-8">
          <div class="bg-primary text-white p-8 border border-outline-variant flex flex-col gap-4">
            <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">EXECUTIVE DIRECTORY</span>
            <h3 class="font-headline text-[22px] font-medium text-white">Central Operations</h3>
            <p class="font-body text-[14px] text-white/80 leading-relaxed">
              For urgent tender notifications, RFP distributions, or executive inquiries:
            </p>
            <div class="pt-2 flex flex-col gap-2 font-headline text-[14px]">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary text-lg">call</span>
                <span class="text-white">+966 11 450 8900</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary text-lg">mail</span>
                <a href="mailto:inquiries@checp.com" class="text-secondary hover:underline">inquiries&#64;checp.com</a>
              </div>
            </div>
          </div>

          <!-- Regional Offices Stack -->
          <div class="flex flex-col divide-y divide-outline-variant border-y border-outline-variant">
            @for (office of company.locations(); track office.id) {
              <div class="py-5 flex flex-col gap-1.5">
                <div class="flex justify-between items-baseline">
                  <h4 class="font-headline text-[16px] font-semibold text-primary">{{ office.title }}</h4>
                  <span class="font-headline text-[10px] uppercase text-secondary font-bold tracking-widest">{{ office.region }}</span>
                </div>
                <p class="font-body text-[13px] text-on-surface-variant">{{ office.address }}</p>
                <span class="font-headline text-[12px] text-primary pt-1">{{ office.phone }} • {{ office.email }}</span>
              </div>
            }
          </div>
        </div>

      </section>

    </div>
  `
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  readonly contactService = inject(ContactService);
  readonly company = inject(CompanyService);
  private seo = inject(SeoService);

  readonly submissionResult = signal<{ success: boolean; message: string } | null>(null);

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    company: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    projectType: ['Commercial / Office Tower'],
    projectLocation: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Contact CHECP | Commercial Inquiries & RFP',
      description: 'Connect with CHECP preconstruction and commercial directorate for tenders, constructability consultations, and contracting partnerships in Riyadh, Jeddah, and Dammam.',
      path: '/contact'
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const res = await this.contactService.submitEnquiry(this.contactForm.value);
    this.submissionResult.set(res);
  }

  openMailtoFallback(): void {
    const url = this.contactService.generateMailtoUrl(this.contactForm.value);
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  resetForm(): void {
    this.contactForm.reset({ projectType: 'Commercial / Office Tower' });
    this.submissionResult.set(null);
  }
}
