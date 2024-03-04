import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { numbersOnlyValidator } from '../../shared/utils/numbers-only.validator';
import { LoanPaymentFormModel, LoanPaymentService } from './loan-payment.service';

@Component({
  selector: 'app-loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrls: ['./loan-payment.component.scss'],
})
export class LoanPaymentComponent implements OnInit, OnDestroy {
  // Loan payment form
  public loanPaymentForm = this.formBuilder.group({
    loanAccountNumber: [null, [Validators.required, numbersOnlyValidator()]],
    accountType: ['Checking', Validators.required],
    // Checking props
    routingNumber: [null, [Validators.required, numbersOnlyValidator(), Validators.maxLength(9)]],
    bankAccountNumber: [null, [Validators.required, numbersOnlyValidator()]],
    confirmBankAccountNumber: [null, [Validators.required, numbersOnlyValidator()]],
    // Debit Props
    cardNumber: [null, [Validators.required, numbersOnlyValidator()]],
    nameOnCard: [null, [Validators.required]],
    expirationDate: [null, [Validators.required]],
    cvv: [null, [Validators.required, numbersOnlyValidator(), Validators.maxLength(3), Validators.minLength(3)]],
  });

  /** Which fields are required by checking */
  private checkingKeys = ['routingNumber', 'bankAccountNumber', 'confirmBankAccountNumber'];
  /** Which fields are required by debit */
  private debitKeys = ['cardNumber', 'nameOnCard', 'expirationDate', 'cvv'];

  // Is the account type CC or debit
  public isDebit$ = this.loanPaymentForm.get('accountType')?.valueChanges.pipe(map(val => val === 'DebitCard'));

  constructor(private formBuilder: FormBuilder, public svc: LoanPaymentService) {
    // Watch changes to the isDebit flag and enable/disable the appropriate controls
    // This prevents hidden controls from contributing to the form validity
    this.isDebit$?.pipe(takeUntilDestroyed()).subscribe(isDebit => {
      if (isDebit) {
        this.checkingKeys.forEach(key => this.loanPaymentForm.get(key)?.disable());
        this.debitKeys.forEach(key => this.loanPaymentForm.get(key)?.enable());
      } else {
        this.checkingKeys.forEach(key => this.loanPaymentForm.get(key)?.enable());
        this.debitKeys.forEach(key => this.loanPaymentForm.get(key)?.disable());
      }
    });
  }

  ngOnInit(): void {}

  /**
   * Handles the form submission.
   */
  onSubmit() {
    // Toggle validation states on all form fields
    this.loanPaymentForm.markAllAsTouched();
    this.loanPaymentForm.patchValue(this.loanPaymentForm.value);
    // Form is invalid
    if (!this.loanPaymentForm.valid) {
      window.scrollTo({ top: 0 }); // Scroll to top on failed validation
      return;
    }
    // Assign proper model
    const formModel: LoanPaymentFormModel = this.loanPaymentForm.value;
    // Submit form to backend
    this.svc.submitLoanPaymentForm(formModel);
  }

  ngOnDestroy(): void {}
}
