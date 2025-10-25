import { Datum, DatumHash } from "@mavis-sdk/core-types";
import { CML } from "./core.js";

export function datumToHash(datum: Datum): DatumHash {
  return CML.hash_plutus_data(CML.PlutusData.from_cbor_hex(datum)).to_hex();
}
