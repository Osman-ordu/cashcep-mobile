export interface CurrencyResponse {
    conversion_rates: Record<string, number>;
    base_code: string;
    time_last_updated_unix: number;
    time_last_updated_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    time_eor: number;
    time_eor_utc: string;
    time_eor_unix: number;
  }