import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of, take } from 'rxjs';

export interface LoanPaymentFormModel {
  loanAccountNumber?: string | null;
  accountType?: string | null;
  routingNumber?: string | null;
  bankAccountNumber?: string | null;
  confirmBankAccountNumber?: string | null;
  cvv?: string | null;
  cardNumber?: string | null;
  nameOnCard?: string | null;
  expirationDate?: string | null;
}

export interface ApiState {
  waiting: boolean;
  success: boolean;
  error: boolean;
}

const initialState: ApiState = {
  waiting: false,
  success: false,
  error: false,
};

@Injectable({ providedIn: 'root' })
export class LoanPaymentService {
  /** Mock API request */
  private devMode = true;
  /** Source API state, do not provide publically */
  private _apiState$ = new BehaviorSubject(initialState);
  /** API state for the loan payment request */
  public apiState$ = this._apiState$.pipe();

  constructor(private http: HttpClient) {}

  /**
   * Submit the loan payment form
   */
  public submitLoanPaymentForm(model: LoanPaymentFormModel) {
    // Show loading state, reset success state
    this.stateChange({ waiting: true, success: false, error: false });
    of(null).pipe(take(1));
    const apiRequest = this.devMode ? of({}).pipe(take(1), delay(1000)) : this.http.post('http://www.apierver/loan-application', model);

    apiRequest.subscribe(
      () => {
        // On success end loading show success
        this.stateChange({ waiting: false, success: true });
      },
      () => {
        // On error end loading show error message
        this.stateChange({ waiting: false, error: true });
      },
    );
  }

  /**
   * Make API state changes. Accepts a partial of the state entity so that only the deltas will be updated.
   * Will perform a shallow merge of the new state object onto the old state object.
   * @param stateNew
   */
  private stateChange(stateNew: Partial<ApiState>) {
    this._apiState$.pipe(take(1)).subscribe(stateOld => this._apiState$.next({ ...stateOld, ...stateNew }));
  }
}
