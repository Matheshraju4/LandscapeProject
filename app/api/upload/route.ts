import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const type = formData.get("type") as string;

  if (type === "Flowers" || type === "Models" || type === "Plants_and_trees") {
    const formDataEntryValues = Array.from(formData.values());
    for (const formDataEntryValue of formDataEntryValues) {
      if (
        typeof formDataEntryValue === "object" &&
        "arrayBuffer" in formDataEntryValue
      ) {
        const fil = formDataEntryValue as unknown as Blob;

        const buffer = Buffer.from(await fil.arrayBuffer());
        fs.writeFileSync(`public/${type}/${fil.name}`, buffer);
      }
    }
  }
  return NextResponse.json({ success: true });
}
