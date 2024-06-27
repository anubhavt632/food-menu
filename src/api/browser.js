import { setupServer } from "msw";
import { routes } from "./routes";

export const worker = setupServer(...routes);
