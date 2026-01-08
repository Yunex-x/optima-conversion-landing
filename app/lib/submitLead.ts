
export type SubmitLeadPayload = {
  name: string;
  email: string;
  message?: string;
  source: string;
  page: string;
};

export type SubmitLeadResult =
  | { success: true }
  | { success: false; error: string };

export async function submitLead(
  payload: SubmitLeadPayload
): Promise<SubmitLeadResult> {
  try {
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1200));

    console.log("Lead submitted:", payload);

    // Simulate success
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Submission failed",
    };
  }
}
