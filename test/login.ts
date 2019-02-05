import { Agent } from "https"
import { ADTClient, createSSLConfig } from "../src"
import { AdtHTTP } from "../src/AdtHTTP"

export function create() {
  return new ADTClient(
    process.env.ADT_URL!,
    process.env.ADT_USER!,
    process.env.ADT_PASS!,
    "",
    "",
    createSSLConfig(!process.env.ADT_URL!.match(/^http:/i))
  )
}
export function createHttp(language: string = "") {
  return new AdtHTTP(
    process.env.ADT_URL!,
    process.env.ADT_USER!,
    process.env.ADT_PASS!,
    "",
    language,
    createSSLConfig(!process.env.ADT_URL!.match(/^http:/i))
  )
}
