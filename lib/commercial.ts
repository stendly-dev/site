export interface CommercialPage {
    slug: string;
    title: string;
    description: string;
    eyebrow: string;
    summary: string;
    sections: Array<{
        title: string;
        paragraphs?: string[];
        bullets?: string[];
    }>;
    sources?: Array<{label: string; href: string}>;
}

export const comparisonPages: Record<string, CommercialPage> = {
    'stendly-vs-coinbase-commerce': {
        slug: 'stendly-vs-coinbase-commerce',
        eyebrow: 'Comparison',
        title: 'Stendly vs Coinbase Commerce',
        description: 'Compare a focused USDC-on-Solana checkout with Coinbase Commerce for SaaS, bots, and digital goods.',
        summary: 'Stendly is a focused merchant API for direct USDC payments on Solana. Coinbase Commerce is a broader crypto-commerce product. The practical choice depends on asset coverage, custody and settlement preferences, and the integration surface your team needs.',
        sections: [
            {
                title: 'Choose Stendly when',
                bullets: [
                    'Your product is priced in dollars and USDC on Solana is sufficient.',
                    'You want payment intents, signed webhooks, and direct merchant settlement.',
                    'A small, predictable API surface matters more than broad asset coverage.',
                ],
            },
            {
                title: 'Evaluate Coinbase Commerce when',
                bullets: [
                    'Your buyers expect a wider Coinbase-linked crypto payment experience.',
                    'Broader asset or network coverage is a hard requirement.',
                    'You prefer its account, checkout, and operational model after reviewing the current product documentation.',
                ],
            },
        ],
        sources: [
            {label: 'Coinbase Commerce', href: 'https://www.coinbase.com/commerce'},
            {label: 'Stendly OpenAPI', href: 'https://api.stendly.com/openapi.json'},
        ],
    },
    'stendly-vs-nowpayments': {
        slug: 'stendly-vs-nowpayments',
        eyebrow: 'Comparison',
        title: 'Stendly vs NOWPayments',
        description: 'Compare direct USDC-on-Solana checkout with a multi-currency crypto payment provider.',
        summary: 'NOWPayments emphasizes broad cryptocurrency support. Stendly intentionally narrows the rail to USDC on Solana and focuses on payment-intent automation, direct settlement, and a simpler reconciliation model.',
        sections: [
            {
                title: 'Different optimization targets',
                bullets: [
                    'Stendly: one stablecoin rail, direct destination address, payment reference, and webhook-driven fulfillment.',
                    'NOWPayments: broader currency and network choice with provider-specific conversion and settlement options.',
                    'A focused rail reduces integration branches; a broad rail can improve buyer asset coverage.',
                ],
            },
            {
                title: 'Decision checklist',
                bullets: [
                    'Measure how many buyers already hold USDC on Solana.',
                    'Compare current fees, minimums, supported regions, and settlement rules from official sources.',
                    'Test webhook retries, idempotency, refunds, and reconciliation before production rollout.',
                ],
            },
        ],
        sources: [
            {label: 'NOWPayments', href: 'https://nowpayments.io/'},
            {label: 'Stendly OpenAPI', href: 'https://api.stendly.com/openapi.json'},
        ],
    },
    'stendly-vs-helio': {
        slug: 'stendly-vs-helio',
        eyebrow: 'Comparison',
        title: 'Stendly vs Helio',
        description: 'Compare two Solana-oriented payment approaches for SaaS and digital products.',
        summary: 'Both products can be relevant to Solana-native commerce, but teams should compare the current checkout, platform, asset, settlement, and developer-tooling models rather than assuming they are interchangeable.',
        sections: [
            {
                title: 'Stendly focus',
                bullets: [
                    'USDC payment intents tied to merchant order IDs.',
                    'Direct payment to the merchant destination address with a Solana reference.',
                    'Signed webhooks and SDKs for automated digital fulfillment.',
                ],
            },
            {
                title: 'What to validate against Helio',
                bullets: [
                    'Current supported chains, assets, checkout products, and platform integrations.',
                    'Fee schedule, payout behavior, account requirements, and regional availability.',
                    'API and webhook semantics for your exact subscription or digital-goods flow.',
                ],
            },
        ],
        sources: [
            {label: 'Helio', href: 'https://hel.io/'},
            {label: 'Stendly OpenAPI', href: 'https://api.stendly.com/openapi.json'},
        ],
    },
};

export const guidePages: Record<string, CommercialPage> = {
    'usdc-solana-vs-usdt-tron': {
        slug: 'usdc-solana-vs-usdt-tron',
        eyebrow: 'Stablecoin decision guide',
        title: 'USDC on Solana vs USDT on TRON for merchant checkout',
        description: 'Compare buyer availability, network choice, checkout automation, reconciliation, and settlement before selecting a stablecoin rail.',
        summary: 'Neither rail is universally better. Use the asset and network your customers can access, then verify that the checkout layer provides order IDs, expiry, payment status, reconciliation, and webhook-based fulfillment.',
        sections: [
            {
                title: 'Choose based on the buyer and product',
                bullets: [
                    'USDT on TRON may be familiar to audiences that already use that asset and network.',
                    'USDC on Solana fits products whose buyers can pay USDC and whose backend needs fast order-aware confirmation.',
                    'Do not force a network choice that creates wallet acquisition or bridge friction for the target customer.',
                ],
            },
            {
                title: 'The application layer matters more than a raw transfer',
                bullets: [
                    'Create the commercial order before requesting payment.',
                    'Bind the expected amount to an intent with an expiry and explicit status.',
                    'Use a reference or equivalent matching primitive instead of amount-only reconciliation.',
                    'Fulfill only after a verified, idempotently processed server event.',
                ],
            },
            {
                title: 'Where Stendly fits',
                bullets: [
                    'Stendly supports USDC on Solana rather than USDT on TRON.',
                    'It provides payment intents, reference and destination addresses, status, and signed webhooks.',
                    'Use another provider when customers specifically require a different asset or network.',
                ],
            },
        ],
        sources: [
            {label: 'Payment Intents API', href: 'https://stendly.com/en-us/docs/api-reference/intents/'},
            {label: 'Payment flow guide', href: 'https://stendly.com/en-us/docs/guides/payment-flow/'},
            {label: 'Stablecoin payments for SaaS', href: 'https://stendly.com/en-us/blog/stablecoin-payments-for-saas/'},
        ],
    },
    'payment-intents-crypto-checkout': {
        slug: 'payment-intents-crypto-checkout',
        eyebrow: 'Developer guide',
        title: 'Payment intents for crypto checkout',
        description: 'Use a server-created payment intent to bind a crypto transfer to an order and fulfill it safely.',
        summary: 'A payment intent gives the merchant a stable server-side object for the expected amount, order ID, destination address, payment reference, expiry, and final status.',
        sections: [
            {
                title: 'Recommended flow',
                bullets: [
                    'Create the order in your database before requesting payment.',
                    'Create the intent from your backend with an idempotency key.',
                    'Display the exact amount, destination address, and payment reference.',
                    'Treat the signed webhook as the fulfillment trigger and make the handler idempotent.',
                ],
            },
            {
                title: 'Reconciliation rules',
                bullets: [
                    'Store the intent ID, internal order ID, amount, status, and transaction signature together.',
                    'Do not fulfill from a client-side success screen alone.',
                    'Handle underpayment, expiry, duplicate delivery, and delayed confirmation explicitly.',
                ],
            },
        ],
        sources: [
            {label: 'Payment Intents API', href: 'https://stendly.com/en-us/docs/api-reference/intents/'},
            {label: 'OpenAPI JSON', href: 'https://api.stendly.com/openapi.json'},
        ],
    },
    'webhooks-stablecoin-payments': {
        slug: 'webhooks-stablecoin-payments',
        eyebrow: 'Developer guide',
        title: 'How webhooks work in stablecoin payments',
        description: 'Design signed, replay-resistant, idempotent webhook processing for stablecoin checkout.',
        summary: 'Webhooks close the gap between an on-chain transfer and merchant fulfillment. The receiver must verify the signature over the raw payload, reject stale requests, and process each event idempotently.',
        sections: [
            {
                title: 'Secure receiver checklist',
                bullets: [
                    'Use HTTPS and read the raw request body before JSON reserialization.',
                    'Verify the HMAC signature and timestamp tolerance.',
                    'Deduplicate with the delivery idempotency key or event identity.',
                    'Return 2xx only after durable processing or safe queueing.',
                ],
            },
            {
                title: 'Operational behavior',
                bullets: [
                    'Expect retries and out-of-order delivery.',
                    'Fetch the payment intent from the API when local state is ambiguous.',
                    'Log trace IDs and transaction signatures without logging API keys or webhook secrets.',
                ],
            },
        ],
        sources: [
            {label: 'Webhook security guide', href: 'https://stendly.com/en-us/docs/guides/webhook-security/'},
            {label: 'Webhooks API', href: 'https://stendly.com/en-us/docs/api-reference/webhooks/'},
        ],
    },
};
