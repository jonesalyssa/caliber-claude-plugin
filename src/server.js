import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

import { buildMailerRequest } from "./tools/caliber-build-mailer-request.js";
import { buildContrastFrames } from "./tools/caliber-contrast-frames.js";
import { buildCopyCompression } from "./tools/caliber-copy-compression.js";
import { buildCreativeDirection } from "./tools/caliber-creative-direction.js";
import { buildFactCheck } from "./tools/caliber-factcheck.js";
import { buildHeadlinePunch } from "./tools/caliber-headline-punch.js";
import { buildQA } from "./tools/caliber-qa.js";
import { buildVersioning } from "./tools/caliber-versioning.js";
import { buildClientComms } from "./tools/caliber-client-comms.js";
import express from "express";

const app = express();
app.use(express.json());

const server = new McpServer({
  name: "caliber-claude-plugin",
  version: "1.0.0",
});

server.registerTool(
  "caliber_build_mailer_request",
  {
    title: "Caliber Build Mailer Request",
    description:
      "Returns Caliber's mailer request intake framework for political mail, contrast pieces, creative direction, and campaign strategy.",
  },
  async () => ({
    content: [{ type: "text", text: buildMailerRequest() }],
  }),
);

server.registerTool(
  "caliber_contrast_frames",
  {
    title: "Caliber Contrast Frames",
    description:
      "Returns Caliber contrast frameworks for political mail, digital ads, and campaign creative.",
  },
  async () => ({
    content: [{ type: "text", text: buildContrastFrames() }],
  }),
);

server.registerTool(
  "caliber_copy_compression",
  {
    title: "Caliber Copy Compression",
    description:
      "Returns Caliber copy compression rules for political mail, fundraising, digital ads, websites, and campaign communications.",
  },
  async () => ({
    content: [{ type: "text", text: buildCopyCompression() }],
  }),
);

server.registerTool(
  "caliber_creative_direction",
  {
    title: "Caliber Creative Direction",
    description:
      "Returns Caliber creative direction rules for political mail, direct mail concepts, digital advertising, and campaign creative.",
  },
  async () => ({
    content: [{ type: "text", text: buildCreativeDirection() }],
  }),
);

server.registerTool(
  "caliber_factcheck",
  {
    title: "Caliber Fact Check",
    description:
      "Returns Caliber fact-checking, sourcing, verification, legal review, and claim validation rules for political communications.",
  },
  async () => ({
    content: [{ type: "text", text: buildFactCheck() }],
  }),
);

server.registerTool(
  "caliber_headline_punch",
  {
    title: "Caliber Headline Punch",
    description:
      "Returns Caliber headline writing, testing, scoring, and punch-up rules for political mail, ads, fundraising, websites, and campaign communications.",
  },
  async () => ({
    content: [{ type: "text", text: buildHeadlinePunch() }],
  }),
);

server.registerTool(
  "caliber_qa",
  {
    title: "Caliber QA",
    description:
      "Returns Caliber QA standards for strategy, readability, design review, production review, fact-checking, and campaign creative.",
  },
  async () => ({
    content: [{ type: "text", text: buildQA() }],
  }),
);

server.registerTool(
  "caliber_versioning",
  {
    title: "Caliber Versioning",
    description:
      "Returns Caliber versioning, revision control, creative tracking, approval workflow, and production file management standards.",
  },
  async () => ({
    content: [{ type: "text", text: buildVersioning() }],
  }),
);

server.registerTool(
  "caliber_client_comms",
  {
    title: "Caliber Client Comms",
    description:
      "Returns Caliber's client communication style guide for interpreting creative direction, anticipating revision patterns, and aligning design output with client expectations.",
  },
  async () => ({
    content: [{ type: "text", text: buildClientComms() }],
  }),
);

app.post("/mcp", async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Caliber MCP server running on port ${PORT}`);
});
