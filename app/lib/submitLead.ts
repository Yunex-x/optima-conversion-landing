export type SubmitLeadPayload = {
  name: string;
  email: string;
  message?: string;
  source: string;
  page: string;
};

export type SubmitLeadResult =
  | { success: true }
  | { success: false; type: "network" | "server"; message: string };

export async function submitLead(
  payload: SubmitLeadPayload
): Promise<SubmitLeadResult> {
  try {
    await new Promise((res) => setTimeout(res, 1200));

    console.log("Lead payload:", payload);

    return { success: true };
  } catch {
    return {
      success: false,
      type: "network",
      message: "Connection issue. Please try again.",
    };
  }
}
