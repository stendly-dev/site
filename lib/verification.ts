const placeholderPattern = /replace|example|change[_-]?me|placeholder/i;

export function optionalVerificationToken(value: string | undefined): string | undefined {
    const token = value?.trim();
    return token && !placeholderPattern.test(token) ? token : undefined;
}

