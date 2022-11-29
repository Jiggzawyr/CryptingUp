import { Quote } from "./quote";

export interface Market {
    exchange_id: string;
    symbol: string;
    base_asset: string;
    quote_asset: string;
    price_unconverted: number;
    price: number;
    change_24h: number;
    spread: number;
    volume_24h: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    quote: Quote;
}