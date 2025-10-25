import * as CML from "@anastasia-labs/cardano-multiplatform-lib-nodejs";
import { Effect } from "effect";

import { TxBuilderError } from "../../Errors.js";
import { TxConfig } from "./Service.js";
import { addressFromHexOrBech32 } from "@mavis-sdk/utils";

export const proposalError = (cause: unknown) =>
  new TxBuilderError({ cause: `{ Proposal: ${cause} }` });

export const addProposal = (
  deposit: bigint,
  rewardAddress: string,
  govAction: CML.GovAction,
  anchor: CML.Anchor,
) =>
  Effect.gen(function* () {
    const { config } = yield* TxConfig;
    let proposalBuilder = CML.ProposalBuilder.new();
    config.txBuilder.add_proposal(
      proposalBuilder
        .with_proposal(
          CML.ProposalProcedure.new(
            deposit,
            CML.RewardAddress.from_address(
              addressFromHexOrBech32(rewardAddress),
            )!,
            govAction,
            anchor,
          ),
        )
        .build(),
    );
  });
