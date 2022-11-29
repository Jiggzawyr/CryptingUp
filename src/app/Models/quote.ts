import { Volume } from "./volume";

export interface Quote {
    USD: Volume;
    CAD: Volume;
    AUD: Volume;
    GBP: Volume;
    NZD: Volume;
    JPY: Volume;
    EUR: Volume;
}