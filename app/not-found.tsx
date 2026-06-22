import Link from 'next/link';

export const metadata = {
    title: '404 — Page Not Found | Stendly',
    description: 'The page you are looking for does not exist. Return to Stendly homepage.',
    robots: {index: false, follow: false},
};

export default function NotFound() {
    return (
        <html lang="en-US">
        <head>
            <title>404 — Page Not Found | Stendly</title>
            <meta name="robots" content="noindex, nofollow"/>
        </head>
        <body style={{margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#0A0A0F',
                color: '#ffffff',
            }}
        >
            <div style={{maxWidth: '600px', textAlign: 'center'}}>
                <h1
                    style={{
                        fontSize: '6rem',
                        fontWeight: 'bold',
                        margin: '0 0 1rem 0',
                        background: 'linear-gradient(135deg, #6C5CE7 0%, #a29bfe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    404
                </h1>
                <h2 style={{fontSize: '2rem', fontWeight: 600, margin: '0 0 1rem 0'}}>
                    Page Not Found
                </h2>
                <p style={{fontSize: '1.125rem', color: '#a0a0a0', margin: '0 0 2rem 0', lineHeight: 1.6}}>
                    The page you are looking for does not exist or has been moved.
                    Explore Stendly crypto payment solutions from the links below.
                </p>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <Link
                        href="/"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            backgroundColor: '#6C5CE7',
                            color: '#ffffff',
                            textDecoration: 'none',
                            borderRadius: '9999px',
                            fontWeight: 600,
                        }}
                    >
                        Personal Wallet
                    </Link>
                    <Link
                        href="/en-us/b2b/"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            backgroundColor: 'transparent',
                            color: '#ffffff',
                            textDecoration: 'none',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        Business Gateway
                    </Link>
                </div>
                <div
                    style={{
                        marginTop: '4rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem'}}>
                        Looking for something specific?
                    </h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem',
                            textAlign: 'left',
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                color: '#ffffff',
                            }}
                        >
                            <strong style={{display: 'block', marginBottom: '0.5rem'}}>Personal Wallet</strong>
                            <span style={{fontSize: '0.875rem', color: '#a0a0a0'}}>
                    Send and receive USDC crypto payments instantly
                  </span>
                        </Link>
                        <Link
                            href="/en-us/b2b/"
                            style={{
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                color: '#ffffff',
                            }}
                        >
                            <strong style={{display: 'block', marginBottom: '0.5rem'}}>Business Gateway</strong>
                            <span style={{fontSize: '0.875rem', color: '#a0a0a0'}}>
                    Accept USDC payments with 0% merchant fees
                  </span>
                        </Link>
                        <Link
                            href="/en-us/docs/"
                            style={{
                                padding: '1rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                color: '#ffffff',
                            }}
                        >
                            <strong style={{display: 'block', marginBottom: '0.5rem'}}>Documentation</strong>
                            <span style={{fontSize: '0.875rem', color: '#a0a0a0'}}>
                    API reference and integration guides for developers
                  </span>
                        </Link>
                    </div>
                </div>
                <div style={{marginTop: '3rem', fontSize: '0.875rem', color: '#666'}}>
                    <p>
                        Need help? Contact us at{' '}
                        <a href="mailto:support@stendly.com" style={{color: '#6C5CE7', textDecoration: 'none'}}>
                            support@stendly.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
