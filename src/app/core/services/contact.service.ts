import { Injectable, signal } from '@angular/core';
import { ContactEnquiry } from '../models';

export interface IContactService {
  submitEnquiry(enquiry: ContactEnquiry): Promise<{ success: boolean; message: string }>;
  generateMailtoUrl(enquiry: ContactEnquiry): string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService implements IContactService {
  readonly isSubmitting = signal<boolean>(false);
  readonly lastSubmissionStatus = signal<{ success: boolean; message: string } | null>(null);

  async submitEnquiry(enquiry: ContactEnquiry): Promise<{ success: boolean; message: string }> {
    this.isSubmitting.set(true);

    try {
      // Simulate network response for Phase 1 static deployment
      await new Promise((resolve) => setTimeout(resolve, 800));

      const result = {
        success: true,
        message: 'Thank you. Your project inquiry has been received by the CHECP preconstruction and commercial directorate. An executive will contact you shortly.'
      };

      this.lastSubmissionStatus.set(result);
      return result;
    } catch (error) {
      const errResult = {
        success: false,
        message: 'Unable to submit inquiry at this time. Please reach out directly to inquiries@checp.com or call +966 11 450 8900.'
      };
      this.lastSubmissionStatus.set(errResult);
      return errResult;
    } finally {
      this.isSubmitting.set(false);
    }
  }

  generateMailtoUrl(enquiry: ContactEnquiry): string {
    const subject = encodeURIComponent(`Project Inquiry: ${enquiry.projectType || 'General'} - ${enquiry.company || enquiry.fullName}`);
    const body = encodeURIComponent(
      `Name: ${enquiry.fullName}\n` +
      `Company: ${enquiry.company}\n` +
      `Email: ${enquiry.email}\n` +
      `Phone: ${enquiry.phone}\n` +
      `Project Type: ${enquiry.projectType}\n` +
      `Location: ${enquiry.projectLocation}\n\n` +
      `Project Brief / Scope:\n${enquiry.message}`
    );
    return `mailto:inquiries@checp.com?subject=${subject}&body=${body}`;
  }
}
