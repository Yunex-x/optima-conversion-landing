export function validateLead(data: {
  name: string;
  email: string;
  message?: string;
}): string | null {
  if (!data.name.trim() || data.name.trim().length < 2) {
    return "Please enter your name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    return "Please enter a valid email address.";
  }

  if (data.message && data.message.length > 500) {
    return "Message is too long.";
  }

  return null;
}
