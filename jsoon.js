import OpenAI from "openai";

import { openai } from "./openai.js";

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "user",
        content: `
        Convert the following text into JSON format:
        ### Training Module 1: Setting Up Your PlayStation 5 Console

        To start using your PlayStation 5 console, the first step is to attach the base. Whether placing the console vertically or horizontally, always attach the base to ensure stability, rotating the top and bottom parts until you hear a click. Then, connect the HDMI cable and the AC power cord, ensuring all connections are made before plugging in the power cord. For a wired internet connection, connect the LAN cable; otherwise, proceed with the Wi-Fi setup. Turning on the console involves pressing the power button, which initially blinks blue and then turns white when powered up. Connecting the wireless controller is done by plugging it into the USB port and pressing the PS button. Finally, follow the on-screen instructions to complete the setup, including selecting language, configuring internet settings, and setting up accounts.
        
        **Example:** Setting up a new electronic device can be compared to assembling a puzzle. Each step, like attaching the base, connecting cables, and setting up accounts, is a piece of the puzzle that, when completed in order, forms the full picture of a functional PlayStation 5 console.
        
        ### Training Module 2: Parental Controls and Data Transfer
        
        For PlayStation 5 users with children, parental controls are essential for managing and restricting access to certain content and features. Each family member should have their own account, and parental controls can be set up for children linked to the main account. To transfer data from a PS4 console to the PS5, both consoles must be connected to the same network to move game saves, user information, and downloaded content. Existing accounts from a PS4 can be used on the PS5 without creating a new one, ensuring seamless transition of game history, trophies, and profiles. Additionally, setting up a child account with parental controls is straightforward, allowing parents to monitor and adjust restrictions as needed. Regularly reviewing and updating these controls is recommended to ensure a safe and appropriate gaming environment for children.
        
        **Example:** Parental controls on gaming consoles act as virtual "guardians" for children, similar to how parents supervise and control their children's activities in the physical world. Just as parents set rules and boundaries at home, parental controls on the PS5 console help to establish limits and ensure a safe gaming experience for young users.`,
      },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
}

main();
