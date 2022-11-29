import { Quote } from "./quote";

export interface Asset {
    asset_id: string;
    name: string;
    description: string;
    website: string;
    ethereum_contract_address: string;
    pegged: string;
    price: number;
    volume_24h: number;
    change_1h: number;
    change_24h: number;
    change_7d: number;
    total_supply: number;
    circulating_supply: number;
    max_supply: number;
    market_cap: number;
    fully_diluted_market_cap: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    quote: Quote;
}