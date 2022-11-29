import { Quote } from "./quote";

export interface Exchange {
    exchange_id: string;
    name: string;
    website: string;
    volume_24h: number;
    quote: Quote;
}