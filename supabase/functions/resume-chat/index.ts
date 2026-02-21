import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RESUME_CONTEXT = `You are an AI assistant for Riya Raj's portfolio website. Answer questions about her resume accurately and concisely. Here is her complete resume:

**Riya Raj**
Contact: +91-9473449815 | riyarajdk@gmail.com | LinkedIn | GitHub | LeetCode

**Education:**
- B.Tech in Computer Science, Lloyd Institute of Engineering and Technology (2023-27)
- 12th (2022-23) and 10th (2020-21), Jean Paul's Senior Secondary School (CBSE Board)

**Career Objective:**
An optimistic and passionate individual with excellent communication skills seeking an entry-level position in Full Stack Development using HTML, CSS, JavaScript, React and the MERN stack.

**Technical Skills:**
- Programming Languages: C, C++
- Web Technologies: HTML5, CSS3, JavaScript, Tailwind CSS, TypeScript, React
- Frameworks: ASP.NET MVC (Basics)
- Database: SQL Server, MySQL, MongoDB
- Tools: Git, GitHub, Visual Studio 2022, VS Code

**Projects:**
1. Sakhi: Digital Companion - AI chatbot offering comfort, companionship, and emotional support. Built with HTML, CSS, JavaScript, TypeScript, and React.
2. AppStory Scratch Card - Scratch Card web app using HTML, CSS, JavaScript, and React. Used Canvas API and React state to reveal rewards dynamically.
3. Pocket Ledger - Full-stack expense management app using React (TypeScript). Integrated REST APIs for CRUD operations, JWT authentication, and responsive UI.

**Experience:**
1. IBM Virtual Internship - Generative AI (Sep 2025 – Nov 2025): 6-week internship covering LLMs, prompt engineering, NLP, model integration, and building scalable AI solutions.
2. Web Development Internship at CodSoft (May 2025 – Jun 2025): Hands-on experience in HTML, CSS, JavaScript, building responsive web applications.

**Certifications & Achievements:**
- Oracle Certified in Generative AI
- Cleared Flipkart Online Assessment Round (2025)
- Google Gemini Certified Hackathon Participant
- Finalist in 5+ Hackathons
- Proficient in ChatGPT and AI tools

Be friendly, professional, and helpful. If asked something not in the resume, say you only have information from the resume. Keep answers concise but informative.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: RESUME_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("resume-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
